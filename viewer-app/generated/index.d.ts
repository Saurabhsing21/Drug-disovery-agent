
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model saved_runs
 * 
 */
export type saved_runs = $Result.DefaultSelection<Prisma.$saved_runsPayload>
/**
 * Model saved_comparisons
 * 
 */
export type saved_comparisons = $Result.DefaultSelection<Prisma.$saved_comparisonsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Saved_runs
 * const saved_runs = await prisma.saved_runs.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Saved_runs
   * const saved_runs = await prisma.saved_runs.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.saved_runs`: Exposes CRUD operations for the **saved_runs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saved_runs
    * const saved_runs = await prisma.saved_runs.findMany()
    * ```
    */
  get saved_runs(): Prisma.saved_runsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saved_comparisons`: Exposes CRUD operations for the **saved_comparisons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saved_comparisons
    * const saved_comparisons = await prisma.saved_comparisons.findMany()
    * ```
    */
  get saved_comparisons(): Prisma.saved_comparisonsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    saved_runs: 'saved_runs',
    saved_comparisons: 'saved_comparisons'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "saved_runs" | "saved_comparisons"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      saved_runs: {
        payload: Prisma.$saved_runsPayload<ExtArgs>
        fields: Prisma.saved_runsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.saved_runsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_runsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.saved_runsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_runsPayload>
          }
          findFirst: {
            args: Prisma.saved_runsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_runsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.saved_runsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_runsPayload>
          }
          findMany: {
            args: Prisma.saved_runsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_runsPayload>[]
          }
          create: {
            args: Prisma.saved_runsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_runsPayload>
          }
          createMany: {
            args: Prisma.saved_runsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.saved_runsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_runsPayload>[]
          }
          delete: {
            args: Prisma.saved_runsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_runsPayload>
          }
          update: {
            args: Prisma.saved_runsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_runsPayload>
          }
          deleteMany: {
            args: Prisma.saved_runsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.saved_runsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.saved_runsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_runsPayload>[]
          }
          upsert: {
            args: Prisma.saved_runsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_runsPayload>
          }
          aggregate: {
            args: Prisma.Saved_runsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaved_runs>
          }
          groupBy: {
            args: Prisma.saved_runsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Saved_runsGroupByOutputType>[]
          }
          count: {
            args: Prisma.saved_runsCountArgs<ExtArgs>
            result: $Utils.Optional<Saved_runsCountAggregateOutputType> | number
          }
        }
      }
      saved_comparisons: {
        payload: Prisma.$saved_comparisonsPayload<ExtArgs>
        fields: Prisma.saved_comparisonsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.saved_comparisonsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_comparisonsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.saved_comparisonsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_comparisonsPayload>
          }
          findFirst: {
            args: Prisma.saved_comparisonsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_comparisonsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.saved_comparisonsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_comparisonsPayload>
          }
          findMany: {
            args: Prisma.saved_comparisonsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_comparisonsPayload>[]
          }
          create: {
            args: Prisma.saved_comparisonsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_comparisonsPayload>
          }
          createMany: {
            args: Prisma.saved_comparisonsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.saved_comparisonsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_comparisonsPayload>[]
          }
          delete: {
            args: Prisma.saved_comparisonsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_comparisonsPayload>
          }
          update: {
            args: Prisma.saved_comparisonsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_comparisonsPayload>
          }
          deleteMany: {
            args: Prisma.saved_comparisonsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.saved_comparisonsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.saved_comparisonsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_comparisonsPayload>[]
          }
          upsert: {
            args: Prisma.saved_comparisonsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_comparisonsPayload>
          }
          aggregate: {
            args: Prisma.Saved_comparisonsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaved_comparisons>
          }
          groupBy: {
            args: Prisma.saved_comparisonsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Saved_comparisonsGroupByOutputType>[]
          }
          count: {
            args: Prisma.saved_comparisonsCountArgs<ExtArgs>
            result: $Utils.Optional<Saved_comparisonsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    saved_runs?: saved_runsOmit
    saved_comparisons?: saved_comparisonsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model saved_runs
   */

  export type AggregateSaved_runs = {
    _count: Saved_runsCountAggregateOutputType | null
    _min: Saved_runsMinAggregateOutputType | null
    _max: Saved_runsMaxAggregateOutputType | null
  }

  export type Saved_runsMinAggregateOutputType = {
    id: string | null
    run_id: string | null
    title: string | null
    gene_symbol: string | null
    disease_id: string | null
    objective: string | null
    summary_markdown: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Saved_runsMaxAggregateOutputType = {
    id: string | null
    run_id: string | null
    title: string | null
    gene_symbol: string | null
    disease_id: string | null
    objective: string | null
    summary_markdown: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Saved_runsCountAggregateOutputType = {
    id: number
    run_id: number
    title: number
    gene_symbol: number
    disease_id: number
    objective: number
    summary_markdown: number
    scored_target: number
    final_dossier: number
    evidence_graph: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Saved_runsMinAggregateInputType = {
    id?: true
    run_id?: true
    title?: true
    gene_symbol?: true
    disease_id?: true
    objective?: true
    summary_markdown?: true
    created_at?: true
    updated_at?: true
  }

  export type Saved_runsMaxAggregateInputType = {
    id?: true
    run_id?: true
    title?: true
    gene_symbol?: true
    disease_id?: true
    objective?: true
    summary_markdown?: true
    created_at?: true
    updated_at?: true
  }

  export type Saved_runsCountAggregateInputType = {
    id?: true
    run_id?: true
    title?: true
    gene_symbol?: true
    disease_id?: true
    objective?: true
    summary_markdown?: true
    scored_target?: true
    final_dossier?: true
    evidence_graph?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Saved_runsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saved_runs to aggregate.
     */
    where?: saved_runsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_runs to fetch.
     */
    orderBy?: saved_runsOrderByWithRelationInput | saved_runsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: saved_runsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned saved_runs
    **/
    _count?: true | Saved_runsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Saved_runsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Saved_runsMaxAggregateInputType
  }

  export type GetSaved_runsAggregateType<T extends Saved_runsAggregateArgs> = {
        [P in keyof T & keyof AggregateSaved_runs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaved_runs[P]>
      : GetScalarType<T[P], AggregateSaved_runs[P]>
  }




  export type saved_runsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_runsWhereInput
    orderBy?: saved_runsOrderByWithAggregationInput | saved_runsOrderByWithAggregationInput[]
    by: Saved_runsScalarFieldEnum[] | Saved_runsScalarFieldEnum
    having?: saved_runsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Saved_runsCountAggregateInputType | true
    _min?: Saved_runsMinAggregateInputType
    _max?: Saved_runsMaxAggregateInputType
  }

  export type Saved_runsGroupByOutputType = {
    id: string
    run_id: string
    title: string
    gene_symbol: string | null
    disease_id: string | null
    objective: string | null
    summary_markdown: string | null
    scored_target: JsonValue | null
    final_dossier: JsonValue | null
    evidence_graph: JsonValue | null
    created_at: Date
    updated_at: Date
    _count: Saved_runsCountAggregateOutputType | null
    _min: Saved_runsMinAggregateOutputType | null
    _max: Saved_runsMaxAggregateOutputType | null
  }

  type GetSaved_runsGroupByPayload<T extends saved_runsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Saved_runsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Saved_runsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Saved_runsGroupByOutputType[P]>
            : GetScalarType<T[P], Saved_runsGroupByOutputType[P]>
        }
      >
    >


  export type saved_runsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    run_id?: boolean
    title?: boolean
    gene_symbol?: boolean
    disease_id?: boolean
    objective?: boolean
    summary_markdown?: boolean
    scored_target?: boolean
    final_dossier?: boolean
    evidence_graph?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["saved_runs"]>

  export type saved_runsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    run_id?: boolean
    title?: boolean
    gene_symbol?: boolean
    disease_id?: boolean
    objective?: boolean
    summary_markdown?: boolean
    scored_target?: boolean
    final_dossier?: boolean
    evidence_graph?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["saved_runs"]>

  export type saved_runsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    run_id?: boolean
    title?: boolean
    gene_symbol?: boolean
    disease_id?: boolean
    objective?: boolean
    summary_markdown?: boolean
    scored_target?: boolean
    final_dossier?: boolean
    evidence_graph?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["saved_runs"]>

  export type saved_runsSelectScalar = {
    id?: boolean
    run_id?: boolean
    title?: boolean
    gene_symbol?: boolean
    disease_id?: boolean
    objective?: boolean
    summary_markdown?: boolean
    scored_target?: boolean
    final_dossier?: boolean
    evidence_graph?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type saved_runsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "run_id" | "title" | "gene_symbol" | "disease_id" | "objective" | "summary_markdown" | "scored_target" | "final_dossier" | "evidence_graph" | "created_at" | "updated_at", ExtArgs["result"]["saved_runs"]>

  export type $saved_runsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "saved_runs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      run_id: string
      title: string
      gene_symbol: string | null
      disease_id: string | null
      objective: string | null
      summary_markdown: string | null
      scored_target: Prisma.JsonValue | null
      final_dossier: Prisma.JsonValue | null
      evidence_graph: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["saved_runs"]>
    composites: {}
  }

  type saved_runsGetPayload<S extends boolean | null | undefined | saved_runsDefaultArgs> = $Result.GetResult<Prisma.$saved_runsPayload, S>

  type saved_runsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<saved_runsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Saved_runsCountAggregateInputType | true
    }

  export interface saved_runsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['saved_runs'], meta: { name: 'saved_runs' } }
    /**
     * Find zero or one Saved_runs that matches the filter.
     * @param {saved_runsFindUniqueArgs} args - Arguments to find a Saved_runs
     * @example
     * // Get one Saved_runs
     * const saved_runs = await prisma.saved_runs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends saved_runsFindUniqueArgs>(args: SelectSubset<T, saved_runsFindUniqueArgs<ExtArgs>>): Prisma__saved_runsClient<$Result.GetResult<Prisma.$saved_runsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Saved_runs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {saved_runsFindUniqueOrThrowArgs} args - Arguments to find a Saved_runs
     * @example
     * // Get one Saved_runs
     * const saved_runs = await prisma.saved_runs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends saved_runsFindUniqueOrThrowArgs>(args: SelectSubset<T, saved_runsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__saved_runsClient<$Result.GetResult<Prisma.$saved_runsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saved_runs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_runsFindFirstArgs} args - Arguments to find a Saved_runs
     * @example
     * // Get one Saved_runs
     * const saved_runs = await prisma.saved_runs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends saved_runsFindFirstArgs>(args?: SelectSubset<T, saved_runsFindFirstArgs<ExtArgs>>): Prisma__saved_runsClient<$Result.GetResult<Prisma.$saved_runsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saved_runs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_runsFindFirstOrThrowArgs} args - Arguments to find a Saved_runs
     * @example
     * // Get one Saved_runs
     * const saved_runs = await prisma.saved_runs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends saved_runsFindFirstOrThrowArgs>(args?: SelectSubset<T, saved_runsFindFirstOrThrowArgs<ExtArgs>>): Prisma__saved_runsClient<$Result.GetResult<Prisma.$saved_runsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saved_runs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_runsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saved_runs
     * const saved_runs = await prisma.saved_runs.findMany()
     * 
     * // Get first 10 Saved_runs
     * const saved_runs = await prisma.saved_runs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saved_runsWithIdOnly = await prisma.saved_runs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends saved_runsFindManyArgs>(args?: SelectSubset<T, saved_runsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_runsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Saved_runs.
     * @param {saved_runsCreateArgs} args - Arguments to create a Saved_runs.
     * @example
     * // Create one Saved_runs
     * const Saved_runs = await prisma.saved_runs.create({
     *   data: {
     *     // ... data to create a Saved_runs
     *   }
     * })
     * 
     */
    create<T extends saved_runsCreateArgs>(args: SelectSubset<T, saved_runsCreateArgs<ExtArgs>>): Prisma__saved_runsClient<$Result.GetResult<Prisma.$saved_runsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saved_runs.
     * @param {saved_runsCreateManyArgs} args - Arguments to create many Saved_runs.
     * @example
     * // Create many Saved_runs
     * const saved_runs = await prisma.saved_runs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends saved_runsCreateManyArgs>(args?: SelectSubset<T, saved_runsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Saved_runs and returns the data saved in the database.
     * @param {saved_runsCreateManyAndReturnArgs} args - Arguments to create many Saved_runs.
     * @example
     * // Create many Saved_runs
     * const saved_runs = await prisma.saved_runs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Saved_runs and only return the `id`
     * const saved_runsWithIdOnly = await prisma.saved_runs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends saved_runsCreateManyAndReturnArgs>(args?: SelectSubset<T, saved_runsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_runsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Saved_runs.
     * @param {saved_runsDeleteArgs} args - Arguments to delete one Saved_runs.
     * @example
     * // Delete one Saved_runs
     * const Saved_runs = await prisma.saved_runs.delete({
     *   where: {
     *     // ... filter to delete one Saved_runs
     *   }
     * })
     * 
     */
    delete<T extends saved_runsDeleteArgs>(args: SelectSubset<T, saved_runsDeleteArgs<ExtArgs>>): Prisma__saved_runsClient<$Result.GetResult<Prisma.$saved_runsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Saved_runs.
     * @param {saved_runsUpdateArgs} args - Arguments to update one Saved_runs.
     * @example
     * // Update one Saved_runs
     * const saved_runs = await prisma.saved_runs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends saved_runsUpdateArgs>(args: SelectSubset<T, saved_runsUpdateArgs<ExtArgs>>): Prisma__saved_runsClient<$Result.GetResult<Prisma.$saved_runsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saved_runs.
     * @param {saved_runsDeleteManyArgs} args - Arguments to filter Saved_runs to delete.
     * @example
     * // Delete a few Saved_runs
     * const { count } = await prisma.saved_runs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends saved_runsDeleteManyArgs>(args?: SelectSubset<T, saved_runsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saved_runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_runsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saved_runs
     * const saved_runs = await prisma.saved_runs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends saved_runsUpdateManyArgs>(args: SelectSubset<T, saved_runsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saved_runs and returns the data updated in the database.
     * @param {saved_runsUpdateManyAndReturnArgs} args - Arguments to update many Saved_runs.
     * @example
     * // Update many Saved_runs
     * const saved_runs = await prisma.saved_runs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Saved_runs and only return the `id`
     * const saved_runsWithIdOnly = await prisma.saved_runs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends saved_runsUpdateManyAndReturnArgs>(args: SelectSubset<T, saved_runsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_runsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Saved_runs.
     * @param {saved_runsUpsertArgs} args - Arguments to update or create a Saved_runs.
     * @example
     * // Update or create a Saved_runs
     * const saved_runs = await prisma.saved_runs.upsert({
     *   create: {
     *     // ... data to create a Saved_runs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saved_runs we want to update
     *   }
     * })
     */
    upsert<T extends saved_runsUpsertArgs>(args: SelectSubset<T, saved_runsUpsertArgs<ExtArgs>>): Prisma__saved_runsClient<$Result.GetResult<Prisma.$saved_runsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saved_runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_runsCountArgs} args - Arguments to filter Saved_runs to count.
     * @example
     * // Count the number of Saved_runs
     * const count = await prisma.saved_runs.count({
     *   where: {
     *     // ... the filter for the Saved_runs we want to count
     *   }
     * })
    **/
    count<T extends saved_runsCountArgs>(
      args?: Subset<T, saved_runsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Saved_runsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Saved_runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_runsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Saved_runsAggregateArgs>(args: Subset<T, Saved_runsAggregateArgs>): Prisma.PrismaPromise<GetSaved_runsAggregateType<T>>

    /**
     * Group by Saved_runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_runsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends saved_runsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: saved_runsGroupByArgs['orderBy'] }
        : { orderBy?: saved_runsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, saved_runsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaved_runsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the saved_runs model
   */
  readonly fields: saved_runsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for saved_runs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__saved_runsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the saved_runs model
   */
  interface saved_runsFieldRefs {
    readonly id: FieldRef<"saved_runs", 'String'>
    readonly run_id: FieldRef<"saved_runs", 'String'>
    readonly title: FieldRef<"saved_runs", 'String'>
    readonly gene_symbol: FieldRef<"saved_runs", 'String'>
    readonly disease_id: FieldRef<"saved_runs", 'String'>
    readonly objective: FieldRef<"saved_runs", 'String'>
    readonly summary_markdown: FieldRef<"saved_runs", 'String'>
    readonly scored_target: FieldRef<"saved_runs", 'Json'>
    readonly final_dossier: FieldRef<"saved_runs", 'Json'>
    readonly evidence_graph: FieldRef<"saved_runs", 'Json'>
    readonly created_at: FieldRef<"saved_runs", 'DateTime'>
    readonly updated_at: FieldRef<"saved_runs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * saved_runs findUnique
   */
  export type saved_runsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_runs
     */
    select?: saved_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_runs
     */
    omit?: saved_runsOmit<ExtArgs> | null
    /**
     * Filter, which saved_runs to fetch.
     */
    where: saved_runsWhereUniqueInput
  }

  /**
   * saved_runs findUniqueOrThrow
   */
  export type saved_runsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_runs
     */
    select?: saved_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_runs
     */
    omit?: saved_runsOmit<ExtArgs> | null
    /**
     * Filter, which saved_runs to fetch.
     */
    where: saved_runsWhereUniqueInput
  }

  /**
   * saved_runs findFirst
   */
  export type saved_runsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_runs
     */
    select?: saved_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_runs
     */
    omit?: saved_runsOmit<ExtArgs> | null
    /**
     * Filter, which saved_runs to fetch.
     */
    where?: saved_runsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_runs to fetch.
     */
    orderBy?: saved_runsOrderByWithRelationInput | saved_runsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saved_runs.
     */
    cursor?: saved_runsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_runs.
     */
    distinct?: Saved_runsScalarFieldEnum | Saved_runsScalarFieldEnum[]
  }

  /**
   * saved_runs findFirstOrThrow
   */
  export type saved_runsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_runs
     */
    select?: saved_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_runs
     */
    omit?: saved_runsOmit<ExtArgs> | null
    /**
     * Filter, which saved_runs to fetch.
     */
    where?: saved_runsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_runs to fetch.
     */
    orderBy?: saved_runsOrderByWithRelationInput | saved_runsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saved_runs.
     */
    cursor?: saved_runsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_runs.
     */
    distinct?: Saved_runsScalarFieldEnum | Saved_runsScalarFieldEnum[]
  }

  /**
   * saved_runs findMany
   */
  export type saved_runsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_runs
     */
    select?: saved_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_runs
     */
    omit?: saved_runsOmit<ExtArgs> | null
    /**
     * Filter, which saved_runs to fetch.
     */
    where?: saved_runsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_runs to fetch.
     */
    orderBy?: saved_runsOrderByWithRelationInput | saved_runsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing saved_runs.
     */
    cursor?: saved_runsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_runs.
     */
    distinct?: Saved_runsScalarFieldEnum | Saved_runsScalarFieldEnum[]
  }

  /**
   * saved_runs create
   */
  export type saved_runsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_runs
     */
    select?: saved_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_runs
     */
    omit?: saved_runsOmit<ExtArgs> | null
    /**
     * The data needed to create a saved_runs.
     */
    data: XOR<saved_runsCreateInput, saved_runsUncheckedCreateInput>
  }

  /**
   * saved_runs createMany
   */
  export type saved_runsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many saved_runs.
     */
    data: saved_runsCreateManyInput | saved_runsCreateManyInput[]
  }

  /**
   * saved_runs createManyAndReturn
   */
  export type saved_runsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_runs
     */
    select?: saved_runsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the saved_runs
     */
    omit?: saved_runsOmit<ExtArgs> | null
    /**
     * The data used to create many saved_runs.
     */
    data: saved_runsCreateManyInput | saved_runsCreateManyInput[]
  }

  /**
   * saved_runs update
   */
  export type saved_runsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_runs
     */
    select?: saved_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_runs
     */
    omit?: saved_runsOmit<ExtArgs> | null
    /**
     * The data needed to update a saved_runs.
     */
    data: XOR<saved_runsUpdateInput, saved_runsUncheckedUpdateInput>
    /**
     * Choose, which saved_runs to update.
     */
    where: saved_runsWhereUniqueInput
  }

  /**
   * saved_runs updateMany
   */
  export type saved_runsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update saved_runs.
     */
    data: XOR<saved_runsUpdateManyMutationInput, saved_runsUncheckedUpdateManyInput>
    /**
     * Filter which saved_runs to update
     */
    where?: saved_runsWhereInput
    /**
     * Limit how many saved_runs to update.
     */
    limit?: number
  }

  /**
   * saved_runs updateManyAndReturn
   */
  export type saved_runsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_runs
     */
    select?: saved_runsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the saved_runs
     */
    omit?: saved_runsOmit<ExtArgs> | null
    /**
     * The data used to update saved_runs.
     */
    data: XOR<saved_runsUpdateManyMutationInput, saved_runsUncheckedUpdateManyInput>
    /**
     * Filter which saved_runs to update
     */
    where?: saved_runsWhereInput
    /**
     * Limit how many saved_runs to update.
     */
    limit?: number
  }

  /**
   * saved_runs upsert
   */
  export type saved_runsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_runs
     */
    select?: saved_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_runs
     */
    omit?: saved_runsOmit<ExtArgs> | null
    /**
     * The filter to search for the saved_runs to update in case it exists.
     */
    where: saved_runsWhereUniqueInput
    /**
     * In case the saved_runs found by the `where` argument doesn't exist, create a new saved_runs with this data.
     */
    create: XOR<saved_runsCreateInput, saved_runsUncheckedCreateInput>
    /**
     * In case the saved_runs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<saved_runsUpdateInput, saved_runsUncheckedUpdateInput>
  }

  /**
   * saved_runs delete
   */
  export type saved_runsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_runs
     */
    select?: saved_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_runs
     */
    omit?: saved_runsOmit<ExtArgs> | null
    /**
     * Filter which saved_runs to delete.
     */
    where: saved_runsWhereUniqueInput
  }

  /**
   * saved_runs deleteMany
   */
  export type saved_runsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saved_runs to delete
     */
    where?: saved_runsWhereInput
    /**
     * Limit how many saved_runs to delete.
     */
    limit?: number
  }

  /**
   * saved_runs without action
   */
  export type saved_runsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_runs
     */
    select?: saved_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_runs
     */
    omit?: saved_runsOmit<ExtArgs> | null
  }


  /**
   * Model saved_comparisons
   */

  export type AggregateSaved_comparisons = {
    _count: Saved_comparisonsCountAggregateOutputType | null
    _min: Saved_comparisonsMinAggregateOutputType | null
    _max: Saved_comparisonsMaxAggregateOutputType | null
  }

  export type Saved_comparisonsMinAggregateOutputType = {
    id: string | null
    run_a_id: string | null
    run_b_id: string | null
    title: string | null
    compare_markdown: string | null
    created_at: Date | null
  }

  export type Saved_comparisonsMaxAggregateOutputType = {
    id: string | null
    run_a_id: string | null
    run_b_id: string | null
    title: string | null
    compare_markdown: string | null
    created_at: Date | null
  }

  export type Saved_comparisonsCountAggregateOutputType = {
    id: number
    run_a_id: number
    run_b_id: number
    title: number
    compare_markdown: number
    data_snapshot: number
    created_at: number
    _all: number
  }


  export type Saved_comparisonsMinAggregateInputType = {
    id?: true
    run_a_id?: true
    run_b_id?: true
    title?: true
    compare_markdown?: true
    created_at?: true
  }

  export type Saved_comparisonsMaxAggregateInputType = {
    id?: true
    run_a_id?: true
    run_b_id?: true
    title?: true
    compare_markdown?: true
    created_at?: true
  }

  export type Saved_comparisonsCountAggregateInputType = {
    id?: true
    run_a_id?: true
    run_b_id?: true
    title?: true
    compare_markdown?: true
    data_snapshot?: true
    created_at?: true
    _all?: true
  }

  export type Saved_comparisonsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saved_comparisons to aggregate.
     */
    where?: saved_comparisonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_comparisons to fetch.
     */
    orderBy?: saved_comparisonsOrderByWithRelationInput | saved_comparisonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: saved_comparisonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_comparisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_comparisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned saved_comparisons
    **/
    _count?: true | Saved_comparisonsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Saved_comparisonsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Saved_comparisonsMaxAggregateInputType
  }

  export type GetSaved_comparisonsAggregateType<T extends Saved_comparisonsAggregateArgs> = {
        [P in keyof T & keyof AggregateSaved_comparisons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaved_comparisons[P]>
      : GetScalarType<T[P], AggregateSaved_comparisons[P]>
  }




  export type saved_comparisonsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_comparisonsWhereInput
    orderBy?: saved_comparisonsOrderByWithAggregationInput | saved_comparisonsOrderByWithAggregationInput[]
    by: Saved_comparisonsScalarFieldEnum[] | Saved_comparisonsScalarFieldEnum
    having?: saved_comparisonsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Saved_comparisonsCountAggregateInputType | true
    _min?: Saved_comparisonsMinAggregateInputType
    _max?: Saved_comparisonsMaxAggregateInputType
  }

  export type Saved_comparisonsGroupByOutputType = {
    id: string
    run_a_id: string
    run_b_id: string
    title: string
    compare_markdown: string | null
    data_snapshot: JsonValue | null
    created_at: Date
    _count: Saved_comparisonsCountAggregateOutputType | null
    _min: Saved_comparisonsMinAggregateOutputType | null
    _max: Saved_comparisonsMaxAggregateOutputType | null
  }

  type GetSaved_comparisonsGroupByPayload<T extends saved_comparisonsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Saved_comparisonsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Saved_comparisonsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Saved_comparisonsGroupByOutputType[P]>
            : GetScalarType<T[P], Saved_comparisonsGroupByOutputType[P]>
        }
      >
    >


  export type saved_comparisonsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    run_a_id?: boolean
    run_b_id?: boolean
    title?: boolean
    compare_markdown?: boolean
    data_snapshot?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["saved_comparisons"]>

  export type saved_comparisonsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    run_a_id?: boolean
    run_b_id?: boolean
    title?: boolean
    compare_markdown?: boolean
    data_snapshot?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["saved_comparisons"]>

  export type saved_comparisonsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    run_a_id?: boolean
    run_b_id?: boolean
    title?: boolean
    compare_markdown?: boolean
    data_snapshot?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["saved_comparisons"]>

  export type saved_comparisonsSelectScalar = {
    id?: boolean
    run_a_id?: boolean
    run_b_id?: boolean
    title?: boolean
    compare_markdown?: boolean
    data_snapshot?: boolean
    created_at?: boolean
  }

  export type saved_comparisonsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "run_a_id" | "run_b_id" | "title" | "compare_markdown" | "data_snapshot" | "created_at", ExtArgs["result"]["saved_comparisons"]>

  export type $saved_comparisonsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "saved_comparisons"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      run_a_id: string
      run_b_id: string
      title: string
      compare_markdown: string | null
      data_snapshot: Prisma.JsonValue | null
      created_at: Date
    }, ExtArgs["result"]["saved_comparisons"]>
    composites: {}
  }

  type saved_comparisonsGetPayload<S extends boolean | null | undefined | saved_comparisonsDefaultArgs> = $Result.GetResult<Prisma.$saved_comparisonsPayload, S>

  type saved_comparisonsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<saved_comparisonsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Saved_comparisonsCountAggregateInputType | true
    }

  export interface saved_comparisonsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['saved_comparisons'], meta: { name: 'saved_comparisons' } }
    /**
     * Find zero or one Saved_comparisons that matches the filter.
     * @param {saved_comparisonsFindUniqueArgs} args - Arguments to find a Saved_comparisons
     * @example
     * // Get one Saved_comparisons
     * const saved_comparisons = await prisma.saved_comparisons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends saved_comparisonsFindUniqueArgs>(args: SelectSubset<T, saved_comparisonsFindUniqueArgs<ExtArgs>>): Prisma__saved_comparisonsClient<$Result.GetResult<Prisma.$saved_comparisonsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Saved_comparisons that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {saved_comparisonsFindUniqueOrThrowArgs} args - Arguments to find a Saved_comparisons
     * @example
     * // Get one Saved_comparisons
     * const saved_comparisons = await prisma.saved_comparisons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends saved_comparisonsFindUniqueOrThrowArgs>(args: SelectSubset<T, saved_comparisonsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__saved_comparisonsClient<$Result.GetResult<Prisma.$saved_comparisonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saved_comparisons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_comparisonsFindFirstArgs} args - Arguments to find a Saved_comparisons
     * @example
     * // Get one Saved_comparisons
     * const saved_comparisons = await prisma.saved_comparisons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends saved_comparisonsFindFirstArgs>(args?: SelectSubset<T, saved_comparisonsFindFirstArgs<ExtArgs>>): Prisma__saved_comparisonsClient<$Result.GetResult<Prisma.$saved_comparisonsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saved_comparisons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_comparisonsFindFirstOrThrowArgs} args - Arguments to find a Saved_comparisons
     * @example
     * // Get one Saved_comparisons
     * const saved_comparisons = await prisma.saved_comparisons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends saved_comparisonsFindFirstOrThrowArgs>(args?: SelectSubset<T, saved_comparisonsFindFirstOrThrowArgs<ExtArgs>>): Prisma__saved_comparisonsClient<$Result.GetResult<Prisma.$saved_comparisonsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saved_comparisons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_comparisonsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saved_comparisons
     * const saved_comparisons = await prisma.saved_comparisons.findMany()
     * 
     * // Get first 10 Saved_comparisons
     * const saved_comparisons = await prisma.saved_comparisons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saved_comparisonsWithIdOnly = await prisma.saved_comparisons.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends saved_comparisonsFindManyArgs>(args?: SelectSubset<T, saved_comparisonsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_comparisonsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Saved_comparisons.
     * @param {saved_comparisonsCreateArgs} args - Arguments to create a Saved_comparisons.
     * @example
     * // Create one Saved_comparisons
     * const Saved_comparisons = await prisma.saved_comparisons.create({
     *   data: {
     *     // ... data to create a Saved_comparisons
     *   }
     * })
     * 
     */
    create<T extends saved_comparisonsCreateArgs>(args: SelectSubset<T, saved_comparisonsCreateArgs<ExtArgs>>): Prisma__saved_comparisonsClient<$Result.GetResult<Prisma.$saved_comparisonsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saved_comparisons.
     * @param {saved_comparisonsCreateManyArgs} args - Arguments to create many Saved_comparisons.
     * @example
     * // Create many Saved_comparisons
     * const saved_comparisons = await prisma.saved_comparisons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends saved_comparisonsCreateManyArgs>(args?: SelectSubset<T, saved_comparisonsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Saved_comparisons and returns the data saved in the database.
     * @param {saved_comparisonsCreateManyAndReturnArgs} args - Arguments to create many Saved_comparisons.
     * @example
     * // Create many Saved_comparisons
     * const saved_comparisons = await prisma.saved_comparisons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Saved_comparisons and only return the `id`
     * const saved_comparisonsWithIdOnly = await prisma.saved_comparisons.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends saved_comparisonsCreateManyAndReturnArgs>(args?: SelectSubset<T, saved_comparisonsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_comparisonsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Saved_comparisons.
     * @param {saved_comparisonsDeleteArgs} args - Arguments to delete one Saved_comparisons.
     * @example
     * // Delete one Saved_comparisons
     * const Saved_comparisons = await prisma.saved_comparisons.delete({
     *   where: {
     *     // ... filter to delete one Saved_comparisons
     *   }
     * })
     * 
     */
    delete<T extends saved_comparisonsDeleteArgs>(args: SelectSubset<T, saved_comparisonsDeleteArgs<ExtArgs>>): Prisma__saved_comparisonsClient<$Result.GetResult<Prisma.$saved_comparisonsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Saved_comparisons.
     * @param {saved_comparisonsUpdateArgs} args - Arguments to update one Saved_comparisons.
     * @example
     * // Update one Saved_comparisons
     * const saved_comparisons = await prisma.saved_comparisons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends saved_comparisonsUpdateArgs>(args: SelectSubset<T, saved_comparisonsUpdateArgs<ExtArgs>>): Prisma__saved_comparisonsClient<$Result.GetResult<Prisma.$saved_comparisonsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saved_comparisons.
     * @param {saved_comparisonsDeleteManyArgs} args - Arguments to filter Saved_comparisons to delete.
     * @example
     * // Delete a few Saved_comparisons
     * const { count } = await prisma.saved_comparisons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends saved_comparisonsDeleteManyArgs>(args?: SelectSubset<T, saved_comparisonsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saved_comparisons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_comparisonsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saved_comparisons
     * const saved_comparisons = await prisma.saved_comparisons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends saved_comparisonsUpdateManyArgs>(args: SelectSubset<T, saved_comparisonsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saved_comparisons and returns the data updated in the database.
     * @param {saved_comparisonsUpdateManyAndReturnArgs} args - Arguments to update many Saved_comparisons.
     * @example
     * // Update many Saved_comparisons
     * const saved_comparisons = await prisma.saved_comparisons.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Saved_comparisons and only return the `id`
     * const saved_comparisonsWithIdOnly = await prisma.saved_comparisons.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends saved_comparisonsUpdateManyAndReturnArgs>(args: SelectSubset<T, saved_comparisonsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_comparisonsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Saved_comparisons.
     * @param {saved_comparisonsUpsertArgs} args - Arguments to update or create a Saved_comparisons.
     * @example
     * // Update or create a Saved_comparisons
     * const saved_comparisons = await prisma.saved_comparisons.upsert({
     *   create: {
     *     // ... data to create a Saved_comparisons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saved_comparisons we want to update
     *   }
     * })
     */
    upsert<T extends saved_comparisonsUpsertArgs>(args: SelectSubset<T, saved_comparisonsUpsertArgs<ExtArgs>>): Prisma__saved_comparisonsClient<$Result.GetResult<Prisma.$saved_comparisonsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saved_comparisons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_comparisonsCountArgs} args - Arguments to filter Saved_comparisons to count.
     * @example
     * // Count the number of Saved_comparisons
     * const count = await prisma.saved_comparisons.count({
     *   where: {
     *     // ... the filter for the Saved_comparisons we want to count
     *   }
     * })
    **/
    count<T extends saved_comparisonsCountArgs>(
      args?: Subset<T, saved_comparisonsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Saved_comparisonsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Saved_comparisons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_comparisonsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Saved_comparisonsAggregateArgs>(args: Subset<T, Saved_comparisonsAggregateArgs>): Prisma.PrismaPromise<GetSaved_comparisonsAggregateType<T>>

    /**
     * Group by Saved_comparisons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_comparisonsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends saved_comparisonsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: saved_comparisonsGroupByArgs['orderBy'] }
        : { orderBy?: saved_comparisonsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, saved_comparisonsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaved_comparisonsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the saved_comparisons model
   */
  readonly fields: saved_comparisonsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for saved_comparisons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__saved_comparisonsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the saved_comparisons model
   */
  interface saved_comparisonsFieldRefs {
    readonly id: FieldRef<"saved_comparisons", 'String'>
    readonly run_a_id: FieldRef<"saved_comparisons", 'String'>
    readonly run_b_id: FieldRef<"saved_comparisons", 'String'>
    readonly title: FieldRef<"saved_comparisons", 'String'>
    readonly compare_markdown: FieldRef<"saved_comparisons", 'String'>
    readonly data_snapshot: FieldRef<"saved_comparisons", 'Json'>
    readonly created_at: FieldRef<"saved_comparisons", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * saved_comparisons findUnique
   */
  export type saved_comparisonsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_comparisons
     */
    select?: saved_comparisonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_comparisons
     */
    omit?: saved_comparisonsOmit<ExtArgs> | null
    /**
     * Filter, which saved_comparisons to fetch.
     */
    where: saved_comparisonsWhereUniqueInput
  }

  /**
   * saved_comparisons findUniqueOrThrow
   */
  export type saved_comparisonsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_comparisons
     */
    select?: saved_comparisonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_comparisons
     */
    omit?: saved_comparisonsOmit<ExtArgs> | null
    /**
     * Filter, which saved_comparisons to fetch.
     */
    where: saved_comparisonsWhereUniqueInput
  }

  /**
   * saved_comparisons findFirst
   */
  export type saved_comparisonsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_comparisons
     */
    select?: saved_comparisonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_comparisons
     */
    omit?: saved_comparisonsOmit<ExtArgs> | null
    /**
     * Filter, which saved_comparisons to fetch.
     */
    where?: saved_comparisonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_comparisons to fetch.
     */
    orderBy?: saved_comparisonsOrderByWithRelationInput | saved_comparisonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saved_comparisons.
     */
    cursor?: saved_comparisonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_comparisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_comparisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_comparisons.
     */
    distinct?: Saved_comparisonsScalarFieldEnum | Saved_comparisonsScalarFieldEnum[]
  }

  /**
   * saved_comparisons findFirstOrThrow
   */
  export type saved_comparisonsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_comparisons
     */
    select?: saved_comparisonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_comparisons
     */
    omit?: saved_comparisonsOmit<ExtArgs> | null
    /**
     * Filter, which saved_comparisons to fetch.
     */
    where?: saved_comparisonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_comparisons to fetch.
     */
    orderBy?: saved_comparisonsOrderByWithRelationInput | saved_comparisonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saved_comparisons.
     */
    cursor?: saved_comparisonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_comparisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_comparisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_comparisons.
     */
    distinct?: Saved_comparisonsScalarFieldEnum | Saved_comparisonsScalarFieldEnum[]
  }

  /**
   * saved_comparisons findMany
   */
  export type saved_comparisonsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_comparisons
     */
    select?: saved_comparisonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_comparisons
     */
    omit?: saved_comparisonsOmit<ExtArgs> | null
    /**
     * Filter, which saved_comparisons to fetch.
     */
    where?: saved_comparisonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_comparisons to fetch.
     */
    orderBy?: saved_comparisonsOrderByWithRelationInput | saved_comparisonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing saved_comparisons.
     */
    cursor?: saved_comparisonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_comparisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_comparisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_comparisons.
     */
    distinct?: Saved_comparisonsScalarFieldEnum | Saved_comparisonsScalarFieldEnum[]
  }

  /**
   * saved_comparisons create
   */
  export type saved_comparisonsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_comparisons
     */
    select?: saved_comparisonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_comparisons
     */
    omit?: saved_comparisonsOmit<ExtArgs> | null
    /**
     * The data needed to create a saved_comparisons.
     */
    data: XOR<saved_comparisonsCreateInput, saved_comparisonsUncheckedCreateInput>
  }

  /**
   * saved_comparisons createMany
   */
  export type saved_comparisonsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many saved_comparisons.
     */
    data: saved_comparisonsCreateManyInput | saved_comparisonsCreateManyInput[]
  }

  /**
   * saved_comparisons createManyAndReturn
   */
  export type saved_comparisonsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_comparisons
     */
    select?: saved_comparisonsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the saved_comparisons
     */
    omit?: saved_comparisonsOmit<ExtArgs> | null
    /**
     * The data used to create many saved_comparisons.
     */
    data: saved_comparisonsCreateManyInput | saved_comparisonsCreateManyInput[]
  }

  /**
   * saved_comparisons update
   */
  export type saved_comparisonsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_comparisons
     */
    select?: saved_comparisonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_comparisons
     */
    omit?: saved_comparisonsOmit<ExtArgs> | null
    /**
     * The data needed to update a saved_comparisons.
     */
    data: XOR<saved_comparisonsUpdateInput, saved_comparisonsUncheckedUpdateInput>
    /**
     * Choose, which saved_comparisons to update.
     */
    where: saved_comparisonsWhereUniqueInput
  }

  /**
   * saved_comparisons updateMany
   */
  export type saved_comparisonsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update saved_comparisons.
     */
    data: XOR<saved_comparisonsUpdateManyMutationInput, saved_comparisonsUncheckedUpdateManyInput>
    /**
     * Filter which saved_comparisons to update
     */
    where?: saved_comparisonsWhereInput
    /**
     * Limit how many saved_comparisons to update.
     */
    limit?: number
  }

  /**
   * saved_comparisons updateManyAndReturn
   */
  export type saved_comparisonsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_comparisons
     */
    select?: saved_comparisonsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the saved_comparisons
     */
    omit?: saved_comparisonsOmit<ExtArgs> | null
    /**
     * The data used to update saved_comparisons.
     */
    data: XOR<saved_comparisonsUpdateManyMutationInput, saved_comparisonsUncheckedUpdateManyInput>
    /**
     * Filter which saved_comparisons to update
     */
    where?: saved_comparisonsWhereInput
    /**
     * Limit how many saved_comparisons to update.
     */
    limit?: number
  }

  /**
   * saved_comparisons upsert
   */
  export type saved_comparisonsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_comparisons
     */
    select?: saved_comparisonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_comparisons
     */
    omit?: saved_comparisonsOmit<ExtArgs> | null
    /**
     * The filter to search for the saved_comparisons to update in case it exists.
     */
    where: saved_comparisonsWhereUniqueInput
    /**
     * In case the saved_comparisons found by the `where` argument doesn't exist, create a new saved_comparisons with this data.
     */
    create: XOR<saved_comparisonsCreateInput, saved_comparisonsUncheckedCreateInput>
    /**
     * In case the saved_comparisons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<saved_comparisonsUpdateInput, saved_comparisonsUncheckedUpdateInput>
  }

  /**
   * saved_comparisons delete
   */
  export type saved_comparisonsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_comparisons
     */
    select?: saved_comparisonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_comparisons
     */
    omit?: saved_comparisonsOmit<ExtArgs> | null
    /**
     * Filter which saved_comparisons to delete.
     */
    where: saved_comparisonsWhereUniqueInput
  }

  /**
   * saved_comparisons deleteMany
   */
  export type saved_comparisonsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saved_comparisons to delete
     */
    where?: saved_comparisonsWhereInput
    /**
     * Limit how many saved_comparisons to delete.
     */
    limit?: number
  }

  /**
   * saved_comparisons without action
   */
  export type saved_comparisonsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_comparisons
     */
    select?: saved_comparisonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_comparisons
     */
    omit?: saved_comparisonsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Saved_runsScalarFieldEnum: {
    id: 'id',
    run_id: 'run_id',
    title: 'title',
    gene_symbol: 'gene_symbol',
    disease_id: 'disease_id',
    objective: 'objective',
    summary_markdown: 'summary_markdown',
    scored_target: 'scored_target',
    final_dossier: 'final_dossier',
    evidence_graph: 'evidence_graph',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Saved_runsScalarFieldEnum = (typeof Saved_runsScalarFieldEnum)[keyof typeof Saved_runsScalarFieldEnum]


  export const Saved_comparisonsScalarFieldEnum: {
    id: 'id',
    run_a_id: 'run_a_id',
    run_b_id: 'run_b_id',
    title: 'title',
    compare_markdown: 'compare_markdown',
    data_snapshot: 'data_snapshot',
    created_at: 'created_at'
  };

  export type Saved_comparisonsScalarFieldEnum = (typeof Saved_comparisonsScalarFieldEnum)[keyof typeof Saved_comparisonsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type saved_runsWhereInput = {
    AND?: saved_runsWhereInput | saved_runsWhereInput[]
    OR?: saved_runsWhereInput[]
    NOT?: saved_runsWhereInput | saved_runsWhereInput[]
    id?: StringFilter<"saved_runs"> | string
    run_id?: StringFilter<"saved_runs"> | string
    title?: StringFilter<"saved_runs"> | string
    gene_symbol?: StringNullableFilter<"saved_runs"> | string | null
    disease_id?: StringNullableFilter<"saved_runs"> | string | null
    objective?: StringNullableFilter<"saved_runs"> | string | null
    summary_markdown?: StringNullableFilter<"saved_runs"> | string | null
    scored_target?: JsonNullableFilter<"saved_runs">
    final_dossier?: JsonNullableFilter<"saved_runs">
    evidence_graph?: JsonNullableFilter<"saved_runs">
    created_at?: DateTimeFilter<"saved_runs"> | Date | string
    updated_at?: DateTimeFilter<"saved_runs"> | Date | string
  }

  export type saved_runsOrderByWithRelationInput = {
    id?: SortOrder
    run_id?: SortOrder
    title?: SortOrder
    gene_symbol?: SortOrderInput | SortOrder
    disease_id?: SortOrderInput | SortOrder
    objective?: SortOrderInput | SortOrder
    summary_markdown?: SortOrderInput | SortOrder
    scored_target?: SortOrderInput | SortOrder
    final_dossier?: SortOrderInput | SortOrder
    evidence_graph?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type saved_runsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    run_id?: string
    AND?: saved_runsWhereInput | saved_runsWhereInput[]
    OR?: saved_runsWhereInput[]
    NOT?: saved_runsWhereInput | saved_runsWhereInput[]
    title?: StringFilter<"saved_runs"> | string
    gene_symbol?: StringNullableFilter<"saved_runs"> | string | null
    disease_id?: StringNullableFilter<"saved_runs"> | string | null
    objective?: StringNullableFilter<"saved_runs"> | string | null
    summary_markdown?: StringNullableFilter<"saved_runs"> | string | null
    scored_target?: JsonNullableFilter<"saved_runs">
    final_dossier?: JsonNullableFilter<"saved_runs">
    evidence_graph?: JsonNullableFilter<"saved_runs">
    created_at?: DateTimeFilter<"saved_runs"> | Date | string
    updated_at?: DateTimeFilter<"saved_runs"> | Date | string
  }, "id" | "run_id">

  export type saved_runsOrderByWithAggregationInput = {
    id?: SortOrder
    run_id?: SortOrder
    title?: SortOrder
    gene_symbol?: SortOrderInput | SortOrder
    disease_id?: SortOrderInput | SortOrder
    objective?: SortOrderInput | SortOrder
    summary_markdown?: SortOrderInput | SortOrder
    scored_target?: SortOrderInput | SortOrder
    final_dossier?: SortOrderInput | SortOrder
    evidence_graph?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: saved_runsCountOrderByAggregateInput
    _max?: saved_runsMaxOrderByAggregateInput
    _min?: saved_runsMinOrderByAggregateInput
  }

  export type saved_runsScalarWhereWithAggregatesInput = {
    AND?: saved_runsScalarWhereWithAggregatesInput | saved_runsScalarWhereWithAggregatesInput[]
    OR?: saved_runsScalarWhereWithAggregatesInput[]
    NOT?: saved_runsScalarWhereWithAggregatesInput | saved_runsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"saved_runs"> | string
    run_id?: StringWithAggregatesFilter<"saved_runs"> | string
    title?: StringWithAggregatesFilter<"saved_runs"> | string
    gene_symbol?: StringNullableWithAggregatesFilter<"saved_runs"> | string | null
    disease_id?: StringNullableWithAggregatesFilter<"saved_runs"> | string | null
    objective?: StringNullableWithAggregatesFilter<"saved_runs"> | string | null
    summary_markdown?: StringNullableWithAggregatesFilter<"saved_runs"> | string | null
    scored_target?: JsonNullableWithAggregatesFilter<"saved_runs">
    final_dossier?: JsonNullableWithAggregatesFilter<"saved_runs">
    evidence_graph?: JsonNullableWithAggregatesFilter<"saved_runs">
    created_at?: DateTimeWithAggregatesFilter<"saved_runs"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"saved_runs"> | Date | string
  }

  export type saved_comparisonsWhereInput = {
    AND?: saved_comparisonsWhereInput | saved_comparisonsWhereInput[]
    OR?: saved_comparisonsWhereInput[]
    NOT?: saved_comparisonsWhereInput | saved_comparisonsWhereInput[]
    id?: StringFilter<"saved_comparisons"> | string
    run_a_id?: StringFilter<"saved_comparisons"> | string
    run_b_id?: StringFilter<"saved_comparisons"> | string
    title?: StringFilter<"saved_comparisons"> | string
    compare_markdown?: StringNullableFilter<"saved_comparisons"> | string | null
    data_snapshot?: JsonNullableFilter<"saved_comparisons">
    created_at?: DateTimeFilter<"saved_comparisons"> | Date | string
  }

  export type saved_comparisonsOrderByWithRelationInput = {
    id?: SortOrder
    run_a_id?: SortOrder
    run_b_id?: SortOrder
    title?: SortOrder
    compare_markdown?: SortOrderInput | SortOrder
    data_snapshot?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type saved_comparisonsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: saved_comparisonsWhereInput | saved_comparisonsWhereInput[]
    OR?: saved_comparisonsWhereInput[]
    NOT?: saved_comparisonsWhereInput | saved_comparisonsWhereInput[]
    run_a_id?: StringFilter<"saved_comparisons"> | string
    run_b_id?: StringFilter<"saved_comparisons"> | string
    title?: StringFilter<"saved_comparisons"> | string
    compare_markdown?: StringNullableFilter<"saved_comparisons"> | string | null
    data_snapshot?: JsonNullableFilter<"saved_comparisons">
    created_at?: DateTimeFilter<"saved_comparisons"> | Date | string
  }, "id">

  export type saved_comparisonsOrderByWithAggregationInput = {
    id?: SortOrder
    run_a_id?: SortOrder
    run_b_id?: SortOrder
    title?: SortOrder
    compare_markdown?: SortOrderInput | SortOrder
    data_snapshot?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: saved_comparisonsCountOrderByAggregateInput
    _max?: saved_comparisonsMaxOrderByAggregateInput
    _min?: saved_comparisonsMinOrderByAggregateInput
  }

  export type saved_comparisonsScalarWhereWithAggregatesInput = {
    AND?: saved_comparisonsScalarWhereWithAggregatesInput | saved_comparisonsScalarWhereWithAggregatesInput[]
    OR?: saved_comparisonsScalarWhereWithAggregatesInput[]
    NOT?: saved_comparisonsScalarWhereWithAggregatesInput | saved_comparisonsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"saved_comparisons"> | string
    run_a_id?: StringWithAggregatesFilter<"saved_comparisons"> | string
    run_b_id?: StringWithAggregatesFilter<"saved_comparisons"> | string
    title?: StringWithAggregatesFilter<"saved_comparisons"> | string
    compare_markdown?: StringNullableWithAggregatesFilter<"saved_comparisons"> | string | null
    data_snapshot?: JsonNullableWithAggregatesFilter<"saved_comparisons">
    created_at?: DateTimeWithAggregatesFilter<"saved_comparisons"> | Date | string
  }

  export type saved_runsCreateInput = {
    id: string
    run_id: string
    title: string
    gene_symbol?: string | null
    disease_id?: string | null
    objective?: string | null
    summary_markdown?: string | null
    scored_target?: NullableJsonNullValueInput | InputJsonValue
    final_dossier?: NullableJsonNullValueInput | InputJsonValue
    evidence_graph?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type saved_runsUncheckedCreateInput = {
    id: string
    run_id: string
    title: string
    gene_symbol?: string | null
    disease_id?: string | null
    objective?: string | null
    summary_markdown?: string | null
    scored_target?: NullableJsonNullValueInput | InputJsonValue
    final_dossier?: NullableJsonNullValueInput | InputJsonValue
    evidence_graph?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type saved_runsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    run_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    gene_symbol?: NullableStringFieldUpdateOperationsInput | string | null
    disease_id?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    summary_markdown?: NullableStringFieldUpdateOperationsInput | string | null
    scored_target?: NullableJsonNullValueInput | InputJsonValue
    final_dossier?: NullableJsonNullValueInput | InputJsonValue
    evidence_graph?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_runsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    run_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    gene_symbol?: NullableStringFieldUpdateOperationsInput | string | null
    disease_id?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    summary_markdown?: NullableStringFieldUpdateOperationsInput | string | null
    scored_target?: NullableJsonNullValueInput | InputJsonValue
    final_dossier?: NullableJsonNullValueInput | InputJsonValue
    evidence_graph?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_runsCreateManyInput = {
    id: string
    run_id: string
    title: string
    gene_symbol?: string | null
    disease_id?: string | null
    objective?: string | null
    summary_markdown?: string | null
    scored_target?: NullableJsonNullValueInput | InputJsonValue
    final_dossier?: NullableJsonNullValueInput | InputJsonValue
    evidence_graph?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type saved_runsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    run_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    gene_symbol?: NullableStringFieldUpdateOperationsInput | string | null
    disease_id?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    summary_markdown?: NullableStringFieldUpdateOperationsInput | string | null
    scored_target?: NullableJsonNullValueInput | InputJsonValue
    final_dossier?: NullableJsonNullValueInput | InputJsonValue
    evidence_graph?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_runsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    run_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    gene_symbol?: NullableStringFieldUpdateOperationsInput | string | null
    disease_id?: NullableStringFieldUpdateOperationsInput | string | null
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    summary_markdown?: NullableStringFieldUpdateOperationsInput | string | null
    scored_target?: NullableJsonNullValueInput | InputJsonValue
    final_dossier?: NullableJsonNullValueInput | InputJsonValue
    evidence_graph?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_comparisonsCreateInput = {
    id: string
    run_a_id: string
    run_b_id: string
    title: string
    compare_markdown?: string | null
    data_snapshot?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type saved_comparisonsUncheckedCreateInput = {
    id: string
    run_a_id: string
    run_b_id: string
    title: string
    compare_markdown?: string | null
    data_snapshot?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type saved_comparisonsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    run_a_id?: StringFieldUpdateOperationsInput | string
    run_b_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    compare_markdown?: NullableStringFieldUpdateOperationsInput | string | null
    data_snapshot?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_comparisonsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    run_a_id?: StringFieldUpdateOperationsInput | string
    run_b_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    compare_markdown?: NullableStringFieldUpdateOperationsInput | string | null
    data_snapshot?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_comparisonsCreateManyInput = {
    id: string
    run_a_id: string
    run_b_id: string
    title: string
    compare_markdown?: string | null
    data_snapshot?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type saved_comparisonsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    run_a_id?: StringFieldUpdateOperationsInput | string
    run_b_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    compare_markdown?: NullableStringFieldUpdateOperationsInput | string | null
    data_snapshot?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type saved_comparisonsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    run_a_id?: StringFieldUpdateOperationsInput | string
    run_b_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    compare_markdown?: NullableStringFieldUpdateOperationsInput | string | null
    data_snapshot?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type saved_runsCountOrderByAggregateInput = {
    id?: SortOrder
    run_id?: SortOrder
    title?: SortOrder
    gene_symbol?: SortOrder
    disease_id?: SortOrder
    objective?: SortOrder
    summary_markdown?: SortOrder
    scored_target?: SortOrder
    final_dossier?: SortOrder
    evidence_graph?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type saved_runsMaxOrderByAggregateInput = {
    id?: SortOrder
    run_id?: SortOrder
    title?: SortOrder
    gene_symbol?: SortOrder
    disease_id?: SortOrder
    objective?: SortOrder
    summary_markdown?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type saved_runsMinOrderByAggregateInput = {
    id?: SortOrder
    run_id?: SortOrder
    title?: SortOrder
    gene_symbol?: SortOrder
    disease_id?: SortOrder
    objective?: SortOrder
    summary_markdown?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type saved_comparisonsCountOrderByAggregateInput = {
    id?: SortOrder
    run_a_id?: SortOrder
    run_b_id?: SortOrder
    title?: SortOrder
    compare_markdown?: SortOrder
    data_snapshot?: SortOrder
    created_at?: SortOrder
  }

  export type saved_comparisonsMaxOrderByAggregateInput = {
    id?: SortOrder
    run_a_id?: SortOrder
    run_b_id?: SortOrder
    title?: SortOrder
    compare_markdown?: SortOrder
    created_at?: SortOrder
  }

  export type saved_comparisonsMinOrderByAggregateInput = {
    id?: SortOrder
    run_a_id?: SortOrder
    run_b_id?: SortOrder
    title?: SortOrder
    compare_markdown?: SortOrder
    created_at?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}