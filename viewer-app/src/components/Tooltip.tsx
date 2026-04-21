"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { HelpCircle } from "lucide-react";

interface TooltipProps {
  content: string;
  children?: React.ReactNode;
  title?: string;
}

export function Tooltip({ content, children, title }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateCoords = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        // Position above the icon, centred horizontally
        top: rect.top + window.scrollY - 8,
        left: rect.left + window.scrollX + rect.width / 2,
      });
    }
  }, []);

  const show = useCallback(() => {
    updateCoords();
    setIsVisible(true);
  }, [updateCoords]);

  const hide = useCallback(() => setIsVisible(false), []);

  const popup = isVisible && mounted ? (
    createPortal(
      <div
        style={{
          position: "absolute",
          top: coords.top,
          left: coords.left,
          transform: "translate(-50%, -100%)",
          zIndex: 99999,
          pointerEvents: "none",
        }}
        className="w-64"
      >
        <div className="bg-neutral-900 border border-white/20 rounded-xl p-3 shadow-2xl ring-1 ring-black/30 backdrop-blur-md">
          {title && (
            <div className="text-[10px] uppercase tracking-wider font-bold text-sky-400 mb-1 border-b border-white/10 pb-1">
              {title}
            </div>
          )}
          <div className="text-xs leading-relaxed text-neutral-100 font-normal">
            {content}
          </div>
          {/* Arrow pointing down */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full border-8 border-transparent border-t-neutral-900" />
        </div>
      </div>,
      document.body
    )
  ) : null;

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={show}
        onMouseLeave={hide}
        className="inline-flex items-center cursor-help"
      >
        {children ? (
          children
        ) : (
          <HelpCircle className="h-4 w-4 ml-1.5 text-sky-400/80 hover:text-sky-300 transition-colors" />
        )}
      </span>
      {popup}
    </>
  );
}
