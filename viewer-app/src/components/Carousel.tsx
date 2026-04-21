"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Activity, Zap, Shield, Microscope } from "lucide-react";
import type { SavedRunSummary } from "@/lib/types";

interface CarouselProps {
  items: SavedRunSummary[];
}

export function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (isHovered || items.length <= 1) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isHovered, items.length, nextSlide]);

  if (items.length === 0) return null;

  const currentItem = items[currentIndex];

  // Helper for random icons to make it look premium
  const getIcon = (index: number) => {
    const icons = [<Activity key="a" />, <Zap key="z" />, <Shield key="s" />, <Microscope key="m" />];
    return icons[index % icons.length];
  };

  return (
    <div 
      className="relative w-full h-[320px] mb-12 rounded-3xl overflow-hidden group border border-white/10 shadow-2xl bg-neutral-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background with Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-neutral-900 to-teal-950 opacity-100" />
      
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[80%] bg-teal-500/10 blur-[120px] rounded-full animate-pulse" />

      {/* Content Transition Wrapper */}
      <div className="relative w-full h-full flex items-center px-12 md:px-24">
        <div key={currentItem.id} className="flex flex-col space-y-4 max-w-2xl animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sky-400 border border-white/10 shadow-inner">
              {getIcon(currentIndex)}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">Latest Research Analysis</span>
              <span className="text-xs text-neutral-400">{new Date(currentItem.created_at).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            {currentItem.title}
          </h2>

          <div className="flex items-center gap-4 mt-2">
            <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs font-medium text-neutral-300">
              Target: <span className="text-sky-300 ml-1">{currentItem.gene_symbol}</span>
            </div>
            <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs font-medium text-neutral-300">
              Status: <span className="text-emerald-400 ml-1">Verified</span>
            </div>
          </div>

          <div className="pt-6">
            <Link 
              href={`/report/${currentItem.id}`}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-neutral-950 rounded-2xl font-bold text-sm hover:bg-neutral-200 transition-all active:scale-95 shadow-lg shadow-white/10"
            >
              Analyze Findings
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      {items.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center rounded-full bg-black/20 border border-white/5 text-white/50 hover:text-white hover:bg-black/40 transition opacity-0 group-hover:opacity-100 backdrop-blur-md"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center rounded-full bg-black/20 border border-white/5 text-white/50 hover:text-white hover:bg-black/40 transition opacity-0 group-hover:opacity-100 backdrop-blur-md"
          >
            <ChevronRight />
          </button>

          {/* Dots */}
          <div className="absolute bottom-8 left-12 md:left-24 flex gap-2">
            {items.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? "w-8 bg-sky-400" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Visual Accent */}
      <div className="absolute top-0 right-0 w-[40%] h-full pointer-events-none opacity-20">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#38bdf8_0%,transparent_70%)]" />
      </div>
    </div>
  );
}
