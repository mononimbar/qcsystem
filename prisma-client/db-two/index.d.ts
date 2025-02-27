
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model QrySLWC
 * 
 */
export type QrySLWC = $Result.DefaultSelection<Prisma.$QrySLWCPayload>
/**
 * Model TblModel
 * 
 */
export type TblModel = $Result.DefaultSelection<Prisma.$TblModelPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more QrySLWCS
 * const qrySLWCS = await prisma.qrySLWC.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more QrySLWCS
   * const qrySLWCS = await prisma.qrySLWC.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.qrySLWC`: Exposes CRUD operations for the **QrySLWC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QrySLWCS
    * const qrySLWCS = await prisma.qrySLWC.findMany()
    * ```
    */
  get qrySLWC(): Prisma.QrySLWCDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tblModel`: Exposes CRUD operations for the **TblModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TblModels
    * const tblModels = await prisma.tblModel.findMany()
    * ```
    */
  get tblModel(): Prisma.TblModelDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    QrySLWC: 'QrySLWC',
    TblModel: 'TblModel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "qrySLWC" | "tblModel"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      QrySLWC: {
        payload: Prisma.$QrySLWCPayload<ExtArgs>
        fields: Prisma.QrySLWCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QrySLWCFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrySLWCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QrySLWCFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrySLWCPayload>
          }
          findFirst: {
            args: Prisma.QrySLWCFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrySLWCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QrySLWCFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrySLWCPayload>
          }
          findMany: {
            args: Prisma.QrySLWCFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrySLWCPayload>[]
          }
          create: {
            args: Prisma.QrySLWCCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrySLWCPayload>
          }
          createMany: {
            args: Prisma.QrySLWCCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QrySLWCDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrySLWCPayload>
          }
          update: {
            args: Prisma.QrySLWCUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrySLWCPayload>
          }
          deleteMany: {
            args: Prisma.QrySLWCDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QrySLWCUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QrySLWCUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrySLWCPayload>
          }
          aggregate: {
            args: Prisma.QrySLWCAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQrySLWC>
          }
          groupBy: {
            args: Prisma.QrySLWCGroupByArgs<ExtArgs>
            result: $Utils.Optional<QrySLWCGroupByOutputType>[]
          }
          count: {
            args: Prisma.QrySLWCCountArgs<ExtArgs>
            result: $Utils.Optional<QrySLWCCountAggregateOutputType> | number
          }
        }
      }
      TblModel: {
        payload: Prisma.$TblModelPayload<ExtArgs>
        fields: Prisma.TblModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TblModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TblModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TblModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TblModelPayload>
          }
          findFirst: {
            args: Prisma.TblModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TblModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TblModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TblModelPayload>
          }
          findMany: {
            args: Prisma.TblModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TblModelPayload>[]
          }
          create: {
            args: Prisma.TblModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TblModelPayload>
          }
          createMany: {
            args: Prisma.TblModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TblModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TblModelPayload>
          }
          update: {
            args: Prisma.TblModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TblModelPayload>
          }
          deleteMany: {
            args: Prisma.TblModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TblModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TblModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TblModelPayload>
          }
          aggregate: {
            args: Prisma.TblModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTblModel>
          }
          groupBy: {
            args: Prisma.TblModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<TblModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TblModelCountArgs<ExtArgs>
            result: $Utils.Optional<TblModelCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    qrySLWC?: QrySLWCOmit
    tblModel?: TblModelOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Model QrySLWC
   */

  export type AggregateQrySLWC = {
    _count: QrySLWCCountAggregateOutputType | null
    _min: QrySLWCMinAggregateOutputType | null
    _max: QrySLWCMaxAggregateOutputType | null
  }

  export type QrySLWCMinAggregateOutputType = {
    wc: string | null
    description: string | null
  }

  export type QrySLWCMaxAggregateOutputType = {
    wc: string | null
    description: string | null
  }

  export type QrySLWCCountAggregateOutputType = {
    wc: number
    description: number
    _all: number
  }


  export type QrySLWCMinAggregateInputType = {
    wc?: true
    description?: true
  }

  export type QrySLWCMaxAggregateInputType = {
    wc?: true
    description?: true
  }

  export type QrySLWCCountAggregateInputType = {
    wc?: true
    description?: true
    _all?: true
  }

  export type QrySLWCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QrySLWC to aggregate.
     */
    where?: QrySLWCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QrySLWCS to fetch.
     */
    orderBy?: QrySLWCOrderByWithRelationInput | QrySLWCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QrySLWCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QrySLWCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QrySLWCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QrySLWCS
    **/
    _count?: true | QrySLWCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QrySLWCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QrySLWCMaxAggregateInputType
  }

  export type GetQrySLWCAggregateType<T extends QrySLWCAggregateArgs> = {
        [P in keyof T & keyof AggregateQrySLWC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQrySLWC[P]>
      : GetScalarType<T[P], AggregateQrySLWC[P]>
  }




  export type QrySLWCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QrySLWCWhereInput
    orderBy?: QrySLWCOrderByWithAggregationInput | QrySLWCOrderByWithAggregationInput[]
    by: QrySLWCScalarFieldEnum[] | QrySLWCScalarFieldEnum
    having?: QrySLWCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QrySLWCCountAggregateInputType | true
    _min?: QrySLWCMinAggregateInputType
    _max?: QrySLWCMaxAggregateInputType
  }

  export type QrySLWCGroupByOutputType = {
    wc: string
    description: string | null
    _count: QrySLWCCountAggregateOutputType | null
    _min: QrySLWCMinAggregateOutputType | null
    _max: QrySLWCMaxAggregateOutputType | null
  }

  type GetQrySLWCGroupByPayload<T extends QrySLWCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QrySLWCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QrySLWCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QrySLWCGroupByOutputType[P]>
            : GetScalarType<T[P], QrySLWCGroupByOutputType[P]>
        }
      >
    >


  export type QrySLWCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wc?: boolean
    description?: boolean
  }, ExtArgs["result"]["qrySLWC"]>



  export type QrySLWCSelectScalar = {
    wc?: boolean
    description?: boolean
  }

  export type QrySLWCOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"wc" | "description", ExtArgs["result"]["qrySLWC"]>

  export type $QrySLWCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QrySLWC"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      wc: string
      description: string | null
    }, ExtArgs["result"]["qrySLWC"]>
    composites: {}
  }

  type QrySLWCGetPayload<S extends boolean | null | undefined | QrySLWCDefaultArgs> = $Result.GetResult<Prisma.$QrySLWCPayload, S>

  type QrySLWCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QrySLWCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QrySLWCCountAggregateInputType | true
    }

  export interface QrySLWCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QrySLWC'], meta: { name: 'QrySLWC' } }
    /**
     * Find zero or one QrySLWC that matches the filter.
     * @param {QrySLWCFindUniqueArgs} args - Arguments to find a QrySLWC
     * @example
     * // Get one QrySLWC
     * const qrySLWC = await prisma.qrySLWC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QrySLWCFindUniqueArgs>(args: SelectSubset<T, QrySLWCFindUniqueArgs<ExtArgs>>): Prisma__QrySLWCClient<$Result.GetResult<Prisma.$QrySLWCPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one QrySLWC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QrySLWCFindUniqueOrThrowArgs} args - Arguments to find a QrySLWC
     * @example
     * // Get one QrySLWC
     * const qrySLWC = await prisma.qrySLWC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QrySLWCFindUniqueOrThrowArgs>(args: SelectSubset<T, QrySLWCFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QrySLWCClient<$Result.GetResult<Prisma.$QrySLWCPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first QrySLWC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrySLWCFindFirstArgs} args - Arguments to find a QrySLWC
     * @example
     * // Get one QrySLWC
     * const qrySLWC = await prisma.qrySLWC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QrySLWCFindFirstArgs>(args?: SelectSubset<T, QrySLWCFindFirstArgs<ExtArgs>>): Prisma__QrySLWCClient<$Result.GetResult<Prisma.$QrySLWCPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first QrySLWC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrySLWCFindFirstOrThrowArgs} args - Arguments to find a QrySLWC
     * @example
     * // Get one QrySLWC
     * const qrySLWC = await prisma.qrySLWC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QrySLWCFindFirstOrThrowArgs>(args?: SelectSubset<T, QrySLWCFindFirstOrThrowArgs<ExtArgs>>): Prisma__QrySLWCClient<$Result.GetResult<Prisma.$QrySLWCPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more QrySLWCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrySLWCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QrySLWCS
     * const qrySLWCS = await prisma.qrySLWC.findMany()
     * 
     * // Get first 10 QrySLWCS
     * const qrySLWCS = await prisma.qrySLWC.findMany({ take: 10 })
     * 
     * // Only select the `wc`
     * const qrySLWCWithWcOnly = await prisma.qrySLWC.findMany({ select: { wc: true } })
     * 
     */
    findMany<T extends QrySLWCFindManyArgs>(args?: SelectSubset<T, QrySLWCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QrySLWCPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a QrySLWC.
     * @param {QrySLWCCreateArgs} args - Arguments to create a QrySLWC.
     * @example
     * // Create one QrySLWC
     * const QrySLWC = await prisma.qrySLWC.create({
     *   data: {
     *     // ... data to create a QrySLWC
     *   }
     * })
     * 
     */
    create<T extends QrySLWCCreateArgs>(args: SelectSubset<T, QrySLWCCreateArgs<ExtArgs>>): Prisma__QrySLWCClient<$Result.GetResult<Prisma.$QrySLWCPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many QrySLWCS.
     * @param {QrySLWCCreateManyArgs} args - Arguments to create many QrySLWCS.
     * @example
     * // Create many QrySLWCS
     * const qrySLWC = await prisma.qrySLWC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QrySLWCCreateManyArgs>(args?: SelectSubset<T, QrySLWCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QrySLWC.
     * @param {QrySLWCDeleteArgs} args - Arguments to delete one QrySLWC.
     * @example
     * // Delete one QrySLWC
     * const QrySLWC = await prisma.qrySLWC.delete({
     *   where: {
     *     // ... filter to delete one QrySLWC
     *   }
     * })
     * 
     */
    delete<T extends QrySLWCDeleteArgs>(args: SelectSubset<T, QrySLWCDeleteArgs<ExtArgs>>): Prisma__QrySLWCClient<$Result.GetResult<Prisma.$QrySLWCPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one QrySLWC.
     * @param {QrySLWCUpdateArgs} args - Arguments to update one QrySLWC.
     * @example
     * // Update one QrySLWC
     * const qrySLWC = await prisma.qrySLWC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QrySLWCUpdateArgs>(args: SelectSubset<T, QrySLWCUpdateArgs<ExtArgs>>): Prisma__QrySLWCClient<$Result.GetResult<Prisma.$QrySLWCPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more QrySLWCS.
     * @param {QrySLWCDeleteManyArgs} args - Arguments to filter QrySLWCS to delete.
     * @example
     * // Delete a few QrySLWCS
     * const { count } = await prisma.qrySLWC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QrySLWCDeleteManyArgs>(args?: SelectSubset<T, QrySLWCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QrySLWCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrySLWCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QrySLWCS
     * const qrySLWC = await prisma.qrySLWC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QrySLWCUpdateManyArgs>(args: SelectSubset<T, QrySLWCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QrySLWC.
     * @param {QrySLWCUpsertArgs} args - Arguments to update or create a QrySLWC.
     * @example
     * // Update or create a QrySLWC
     * const qrySLWC = await prisma.qrySLWC.upsert({
     *   create: {
     *     // ... data to create a QrySLWC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QrySLWC we want to update
     *   }
     * })
     */
    upsert<T extends QrySLWCUpsertArgs>(args: SelectSubset<T, QrySLWCUpsertArgs<ExtArgs>>): Prisma__QrySLWCClient<$Result.GetResult<Prisma.$QrySLWCPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of QrySLWCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrySLWCCountArgs} args - Arguments to filter QrySLWCS to count.
     * @example
     * // Count the number of QrySLWCS
     * const count = await prisma.qrySLWC.count({
     *   where: {
     *     // ... the filter for the QrySLWCS we want to count
     *   }
     * })
    **/
    count<T extends QrySLWCCountArgs>(
      args?: Subset<T, QrySLWCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QrySLWCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QrySLWC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrySLWCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QrySLWCAggregateArgs>(args: Subset<T, QrySLWCAggregateArgs>): Prisma.PrismaPromise<GetQrySLWCAggregateType<T>>

    /**
     * Group by QrySLWC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrySLWCGroupByArgs} args - Group by arguments.
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
      T extends QrySLWCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QrySLWCGroupByArgs['orderBy'] }
        : { orderBy?: QrySLWCGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QrySLWCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQrySLWCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QrySLWC model
   */
  readonly fields: QrySLWCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QrySLWC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QrySLWCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the QrySLWC model
   */ 
  interface QrySLWCFieldRefs {
    readonly wc: FieldRef<"QrySLWC", 'String'>
    readonly description: FieldRef<"QrySLWC", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QrySLWC findUnique
   */
  export type QrySLWCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrySLWC
     */
    select?: QrySLWCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrySLWC
     */
    omit?: QrySLWCOmit<ExtArgs> | null
    /**
     * Filter, which QrySLWC to fetch.
     */
    where: QrySLWCWhereUniqueInput
  }

  /**
   * QrySLWC findUniqueOrThrow
   */
  export type QrySLWCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrySLWC
     */
    select?: QrySLWCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrySLWC
     */
    omit?: QrySLWCOmit<ExtArgs> | null
    /**
     * Filter, which QrySLWC to fetch.
     */
    where: QrySLWCWhereUniqueInput
  }

  /**
   * QrySLWC findFirst
   */
  export type QrySLWCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrySLWC
     */
    select?: QrySLWCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrySLWC
     */
    omit?: QrySLWCOmit<ExtArgs> | null
    /**
     * Filter, which QrySLWC to fetch.
     */
    where?: QrySLWCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QrySLWCS to fetch.
     */
    orderBy?: QrySLWCOrderByWithRelationInput | QrySLWCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QrySLWCS.
     */
    cursor?: QrySLWCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QrySLWCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QrySLWCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QrySLWCS.
     */
    distinct?: QrySLWCScalarFieldEnum | QrySLWCScalarFieldEnum[]
  }

  /**
   * QrySLWC findFirstOrThrow
   */
  export type QrySLWCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrySLWC
     */
    select?: QrySLWCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrySLWC
     */
    omit?: QrySLWCOmit<ExtArgs> | null
    /**
     * Filter, which QrySLWC to fetch.
     */
    where?: QrySLWCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QrySLWCS to fetch.
     */
    orderBy?: QrySLWCOrderByWithRelationInput | QrySLWCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QrySLWCS.
     */
    cursor?: QrySLWCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QrySLWCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QrySLWCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QrySLWCS.
     */
    distinct?: QrySLWCScalarFieldEnum | QrySLWCScalarFieldEnum[]
  }

  /**
   * QrySLWC findMany
   */
  export type QrySLWCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrySLWC
     */
    select?: QrySLWCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrySLWC
     */
    omit?: QrySLWCOmit<ExtArgs> | null
    /**
     * Filter, which QrySLWCS to fetch.
     */
    where?: QrySLWCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QrySLWCS to fetch.
     */
    orderBy?: QrySLWCOrderByWithRelationInput | QrySLWCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QrySLWCS.
     */
    cursor?: QrySLWCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QrySLWCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QrySLWCS.
     */
    skip?: number
    distinct?: QrySLWCScalarFieldEnum | QrySLWCScalarFieldEnum[]
  }

  /**
   * QrySLWC create
   */
  export type QrySLWCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrySLWC
     */
    select?: QrySLWCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrySLWC
     */
    omit?: QrySLWCOmit<ExtArgs> | null
    /**
     * The data needed to create a QrySLWC.
     */
    data: XOR<QrySLWCCreateInput, QrySLWCUncheckedCreateInput>
  }

  /**
   * QrySLWC createMany
   */
  export type QrySLWCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QrySLWCS.
     */
    data: QrySLWCCreateManyInput | QrySLWCCreateManyInput[]
  }

  /**
   * QrySLWC update
   */
  export type QrySLWCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrySLWC
     */
    select?: QrySLWCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrySLWC
     */
    omit?: QrySLWCOmit<ExtArgs> | null
    /**
     * The data needed to update a QrySLWC.
     */
    data: XOR<QrySLWCUpdateInput, QrySLWCUncheckedUpdateInput>
    /**
     * Choose, which QrySLWC to update.
     */
    where: QrySLWCWhereUniqueInput
  }

  /**
   * QrySLWC updateMany
   */
  export type QrySLWCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QrySLWCS.
     */
    data: XOR<QrySLWCUpdateManyMutationInput, QrySLWCUncheckedUpdateManyInput>
    /**
     * Filter which QrySLWCS to update
     */
    where?: QrySLWCWhereInput
    /**
     * Limit how many QrySLWCS to update.
     */
    limit?: number
  }

  /**
   * QrySLWC upsert
   */
  export type QrySLWCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrySLWC
     */
    select?: QrySLWCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrySLWC
     */
    omit?: QrySLWCOmit<ExtArgs> | null
    /**
     * The filter to search for the QrySLWC to update in case it exists.
     */
    where: QrySLWCWhereUniqueInput
    /**
     * In case the QrySLWC found by the `where` argument doesn't exist, create a new QrySLWC with this data.
     */
    create: XOR<QrySLWCCreateInput, QrySLWCUncheckedCreateInput>
    /**
     * In case the QrySLWC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QrySLWCUpdateInput, QrySLWCUncheckedUpdateInput>
  }

  /**
   * QrySLWC delete
   */
  export type QrySLWCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrySLWC
     */
    select?: QrySLWCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrySLWC
     */
    omit?: QrySLWCOmit<ExtArgs> | null
    /**
     * Filter which QrySLWC to delete.
     */
    where: QrySLWCWhereUniqueInput
  }

  /**
   * QrySLWC deleteMany
   */
  export type QrySLWCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QrySLWCS to delete
     */
    where?: QrySLWCWhereInput
    /**
     * Limit how many QrySLWCS to delete.
     */
    limit?: number
  }

  /**
   * QrySLWC without action
   */
  export type QrySLWCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrySLWC
     */
    select?: QrySLWCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrySLWC
     */
    omit?: QrySLWCOmit<ExtArgs> | null
  }


  /**
   * Model TblModel
   */

  export type AggregateTblModel = {
    _count: TblModelCountAggregateOutputType | null
    _avg: TblModelAvgAggregateOutputType | null
    _sum: TblModelSumAggregateOutputType | null
    _min: TblModelMinAggregateOutputType | null
    _max: TblModelMaxAggregateOutputType | null
  }

  export type TblModelAvgAggregateOutputType = {
    EkivalenUnit: number | null
  }

  export type TblModelSumAggregateOutputType = {
    EkivalenUnit: number | null
  }

  export type TblModelMinAggregateOutputType = {
    ModelID: string | null
    NamaModel: string | null
    Aktif: boolean | null
    ProductCode: string | null
    Kategori: string | null
    InisialModel: string | null
    Type: string | null
    Family: string | null
    EkivalenUnit: number | null
  }

  export type TblModelMaxAggregateOutputType = {
    ModelID: string | null
    NamaModel: string | null
    Aktif: boolean | null
    ProductCode: string | null
    Kategori: string | null
    InisialModel: string | null
    Type: string | null
    Family: string | null
    EkivalenUnit: number | null
  }

  export type TblModelCountAggregateOutputType = {
    ModelID: number
    NamaModel: number
    Aktif: number
    ProductCode: number
    Kategori: number
    InisialModel: number
    Type: number
    Family: number
    EkivalenUnit: number
    _all: number
  }


  export type TblModelAvgAggregateInputType = {
    EkivalenUnit?: true
  }

  export type TblModelSumAggregateInputType = {
    EkivalenUnit?: true
  }

  export type TblModelMinAggregateInputType = {
    ModelID?: true
    NamaModel?: true
    Aktif?: true
    ProductCode?: true
    Kategori?: true
    InisialModel?: true
    Type?: true
    Family?: true
    EkivalenUnit?: true
  }

  export type TblModelMaxAggregateInputType = {
    ModelID?: true
    NamaModel?: true
    Aktif?: true
    ProductCode?: true
    Kategori?: true
    InisialModel?: true
    Type?: true
    Family?: true
    EkivalenUnit?: true
  }

  export type TblModelCountAggregateInputType = {
    ModelID?: true
    NamaModel?: true
    Aktif?: true
    ProductCode?: true
    Kategori?: true
    InisialModel?: true
    Type?: true
    Family?: true
    EkivalenUnit?: true
    _all?: true
  }

  export type TblModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TblModel to aggregate.
     */
    where?: TblModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TblModels to fetch.
     */
    orderBy?: TblModelOrderByWithRelationInput | TblModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TblModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TblModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TblModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TblModels
    **/
    _count?: true | TblModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TblModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TblModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblModelMaxAggregateInputType
  }

  export type GetTblModelAggregateType<T extends TblModelAggregateArgs> = {
        [P in keyof T & keyof AggregateTblModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblModel[P]>
      : GetScalarType<T[P], AggregateTblModel[P]>
  }




  export type TblModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TblModelWhereInput
    orderBy?: TblModelOrderByWithAggregationInput | TblModelOrderByWithAggregationInput[]
    by: TblModelScalarFieldEnum[] | TblModelScalarFieldEnum
    having?: TblModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblModelCountAggregateInputType | true
    _avg?: TblModelAvgAggregateInputType
    _sum?: TblModelSumAggregateInputType
    _min?: TblModelMinAggregateInputType
    _max?: TblModelMaxAggregateInputType
  }

  export type TblModelGroupByOutputType = {
    ModelID: string
    NamaModel: string | null
    Aktif: boolean
    ProductCode: string | null
    Kategori: string | null
    InisialModel: string | null
    Type: string | null
    Family: string | null
    EkivalenUnit: number | null
    _count: TblModelCountAggregateOutputType | null
    _avg: TblModelAvgAggregateOutputType | null
    _sum: TblModelSumAggregateOutputType | null
    _min: TblModelMinAggregateOutputType | null
    _max: TblModelMaxAggregateOutputType | null
  }

  type GetTblModelGroupByPayload<T extends TblModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TblModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblModelGroupByOutputType[P]>
            : GetScalarType<T[P], TblModelGroupByOutputType[P]>
        }
      >
    >


  export type TblModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ModelID?: boolean
    NamaModel?: boolean
    Aktif?: boolean
    ProductCode?: boolean
    Kategori?: boolean
    InisialModel?: boolean
    Type?: boolean
    Family?: boolean
    EkivalenUnit?: boolean
  }, ExtArgs["result"]["tblModel"]>



  export type TblModelSelectScalar = {
    ModelID?: boolean
    NamaModel?: boolean
    Aktif?: boolean
    ProductCode?: boolean
    Kategori?: boolean
    InisialModel?: boolean
    Type?: boolean
    Family?: boolean
    EkivalenUnit?: boolean
  }

  export type TblModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ModelID" | "NamaModel" | "Aktif" | "ProductCode" | "Kategori" | "InisialModel" | "Type" | "Family" | "EkivalenUnit", ExtArgs["result"]["tblModel"]>

  export type $TblModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TblModel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ModelID: string
      NamaModel: string | null
      Aktif: boolean
      ProductCode: string | null
      Kategori: string | null
      InisialModel: string | null
      Type: string | null
      Family: string | null
      EkivalenUnit: number | null
    }, ExtArgs["result"]["tblModel"]>
    composites: {}
  }

  type TblModelGetPayload<S extends boolean | null | undefined | TblModelDefaultArgs> = $Result.GetResult<Prisma.$TblModelPayload, S>

  type TblModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TblModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TblModelCountAggregateInputType | true
    }

  export interface TblModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TblModel'], meta: { name: 'TblModel' } }
    /**
     * Find zero or one TblModel that matches the filter.
     * @param {TblModelFindUniqueArgs} args - Arguments to find a TblModel
     * @example
     * // Get one TblModel
     * const tblModel = await prisma.tblModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TblModelFindUniqueArgs>(args: SelectSubset<T, TblModelFindUniqueArgs<ExtArgs>>): Prisma__TblModelClient<$Result.GetResult<Prisma.$TblModelPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TblModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TblModelFindUniqueOrThrowArgs} args - Arguments to find a TblModel
     * @example
     * // Get one TblModel
     * const tblModel = await prisma.tblModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TblModelFindUniqueOrThrowArgs>(args: SelectSubset<T, TblModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TblModelClient<$Result.GetResult<Prisma.$TblModelPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TblModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblModelFindFirstArgs} args - Arguments to find a TblModel
     * @example
     * // Get one TblModel
     * const tblModel = await prisma.tblModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TblModelFindFirstArgs>(args?: SelectSubset<T, TblModelFindFirstArgs<ExtArgs>>): Prisma__TblModelClient<$Result.GetResult<Prisma.$TblModelPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TblModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblModelFindFirstOrThrowArgs} args - Arguments to find a TblModel
     * @example
     * // Get one TblModel
     * const tblModel = await prisma.tblModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TblModelFindFirstOrThrowArgs>(args?: SelectSubset<T, TblModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__TblModelClient<$Result.GetResult<Prisma.$TblModelPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TblModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TblModels
     * const tblModels = await prisma.tblModel.findMany()
     * 
     * // Get first 10 TblModels
     * const tblModels = await prisma.tblModel.findMany({ take: 10 })
     * 
     * // Only select the `ModelID`
     * const tblModelWithModelIDOnly = await prisma.tblModel.findMany({ select: { ModelID: true } })
     * 
     */
    findMany<T extends TblModelFindManyArgs>(args?: SelectSubset<T, TblModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TblModelPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TblModel.
     * @param {TblModelCreateArgs} args - Arguments to create a TblModel.
     * @example
     * // Create one TblModel
     * const TblModel = await prisma.tblModel.create({
     *   data: {
     *     // ... data to create a TblModel
     *   }
     * })
     * 
     */
    create<T extends TblModelCreateArgs>(args: SelectSubset<T, TblModelCreateArgs<ExtArgs>>): Prisma__TblModelClient<$Result.GetResult<Prisma.$TblModelPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TblModels.
     * @param {TblModelCreateManyArgs} args - Arguments to create many TblModels.
     * @example
     * // Create many TblModels
     * const tblModel = await prisma.tblModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TblModelCreateManyArgs>(args?: SelectSubset<T, TblModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TblModel.
     * @param {TblModelDeleteArgs} args - Arguments to delete one TblModel.
     * @example
     * // Delete one TblModel
     * const TblModel = await prisma.tblModel.delete({
     *   where: {
     *     // ... filter to delete one TblModel
     *   }
     * })
     * 
     */
    delete<T extends TblModelDeleteArgs>(args: SelectSubset<T, TblModelDeleteArgs<ExtArgs>>): Prisma__TblModelClient<$Result.GetResult<Prisma.$TblModelPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TblModel.
     * @param {TblModelUpdateArgs} args - Arguments to update one TblModel.
     * @example
     * // Update one TblModel
     * const tblModel = await prisma.tblModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TblModelUpdateArgs>(args: SelectSubset<T, TblModelUpdateArgs<ExtArgs>>): Prisma__TblModelClient<$Result.GetResult<Prisma.$TblModelPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TblModels.
     * @param {TblModelDeleteManyArgs} args - Arguments to filter TblModels to delete.
     * @example
     * // Delete a few TblModels
     * const { count } = await prisma.tblModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TblModelDeleteManyArgs>(args?: SelectSubset<T, TblModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TblModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TblModels
     * const tblModel = await prisma.tblModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TblModelUpdateManyArgs>(args: SelectSubset<T, TblModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TblModel.
     * @param {TblModelUpsertArgs} args - Arguments to update or create a TblModel.
     * @example
     * // Update or create a TblModel
     * const tblModel = await prisma.tblModel.upsert({
     *   create: {
     *     // ... data to create a TblModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TblModel we want to update
     *   }
     * })
     */
    upsert<T extends TblModelUpsertArgs>(args: SelectSubset<T, TblModelUpsertArgs<ExtArgs>>): Prisma__TblModelClient<$Result.GetResult<Prisma.$TblModelPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TblModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblModelCountArgs} args - Arguments to filter TblModels to count.
     * @example
     * // Count the number of TblModels
     * const count = await prisma.tblModel.count({
     *   where: {
     *     // ... the filter for the TblModels we want to count
     *   }
     * })
    **/
    count<T extends TblModelCountArgs>(
      args?: Subset<T, TblModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TblModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TblModelAggregateArgs>(args: Subset<T, TblModelAggregateArgs>): Prisma.PrismaPromise<GetTblModelAggregateType<T>>

    /**
     * Group by TblModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblModelGroupByArgs} args - Group by arguments.
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
      T extends TblModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TblModelGroupByArgs['orderBy'] }
        : { orderBy?: TblModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TblModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TblModel model
   */
  readonly fields: TblModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TblModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TblModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TblModel model
   */ 
  interface TblModelFieldRefs {
    readonly ModelID: FieldRef<"TblModel", 'String'>
    readonly NamaModel: FieldRef<"TblModel", 'String'>
    readonly Aktif: FieldRef<"TblModel", 'Boolean'>
    readonly ProductCode: FieldRef<"TblModel", 'String'>
    readonly Kategori: FieldRef<"TblModel", 'String'>
    readonly InisialModel: FieldRef<"TblModel", 'String'>
    readonly Type: FieldRef<"TblModel", 'String'>
    readonly Family: FieldRef<"TblModel", 'String'>
    readonly EkivalenUnit: FieldRef<"TblModel", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * TblModel findUnique
   */
  export type TblModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblModel
     */
    select?: TblModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TblModel
     */
    omit?: TblModelOmit<ExtArgs> | null
    /**
     * Filter, which TblModel to fetch.
     */
    where: TblModelWhereUniqueInput
  }

  /**
   * TblModel findUniqueOrThrow
   */
  export type TblModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblModel
     */
    select?: TblModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TblModel
     */
    omit?: TblModelOmit<ExtArgs> | null
    /**
     * Filter, which TblModel to fetch.
     */
    where: TblModelWhereUniqueInput
  }

  /**
   * TblModel findFirst
   */
  export type TblModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblModel
     */
    select?: TblModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TblModel
     */
    omit?: TblModelOmit<ExtArgs> | null
    /**
     * Filter, which TblModel to fetch.
     */
    where?: TblModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TblModels to fetch.
     */
    orderBy?: TblModelOrderByWithRelationInput | TblModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TblModels.
     */
    cursor?: TblModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TblModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TblModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TblModels.
     */
    distinct?: TblModelScalarFieldEnum | TblModelScalarFieldEnum[]
  }

  /**
   * TblModel findFirstOrThrow
   */
  export type TblModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblModel
     */
    select?: TblModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TblModel
     */
    omit?: TblModelOmit<ExtArgs> | null
    /**
     * Filter, which TblModel to fetch.
     */
    where?: TblModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TblModels to fetch.
     */
    orderBy?: TblModelOrderByWithRelationInput | TblModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TblModels.
     */
    cursor?: TblModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TblModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TblModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TblModels.
     */
    distinct?: TblModelScalarFieldEnum | TblModelScalarFieldEnum[]
  }

  /**
   * TblModel findMany
   */
  export type TblModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblModel
     */
    select?: TblModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TblModel
     */
    omit?: TblModelOmit<ExtArgs> | null
    /**
     * Filter, which TblModels to fetch.
     */
    where?: TblModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TblModels to fetch.
     */
    orderBy?: TblModelOrderByWithRelationInput | TblModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TblModels.
     */
    cursor?: TblModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TblModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TblModels.
     */
    skip?: number
    distinct?: TblModelScalarFieldEnum | TblModelScalarFieldEnum[]
  }

  /**
   * TblModel create
   */
  export type TblModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblModel
     */
    select?: TblModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TblModel
     */
    omit?: TblModelOmit<ExtArgs> | null
    /**
     * The data needed to create a TblModel.
     */
    data: XOR<TblModelCreateInput, TblModelUncheckedCreateInput>
  }

  /**
   * TblModel createMany
   */
  export type TblModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TblModels.
     */
    data: TblModelCreateManyInput | TblModelCreateManyInput[]
  }

  /**
   * TblModel update
   */
  export type TblModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblModel
     */
    select?: TblModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TblModel
     */
    omit?: TblModelOmit<ExtArgs> | null
    /**
     * The data needed to update a TblModel.
     */
    data: XOR<TblModelUpdateInput, TblModelUncheckedUpdateInput>
    /**
     * Choose, which TblModel to update.
     */
    where: TblModelWhereUniqueInput
  }

  /**
   * TblModel updateMany
   */
  export type TblModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TblModels.
     */
    data: XOR<TblModelUpdateManyMutationInput, TblModelUncheckedUpdateManyInput>
    /**
     * Filter which TblModels to update
     */
    where?: TblModelWhereInput
    /**
     * Limit how many TblModels to update.
     */
    limit?: number
  }

  /**
   * TblModel upsert
   */
  export type TblModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblModel
     */
    select?: TblModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TblModel
     */
    omit?: TblModelOmit<ExtArgs> | null
    /**
     * The filter to search for the TblModel to update in case it exists.
     */
    where: TblModelWhereUniqueInput
    /**
     * In case the TblModel found by the `where` argument doesn't exist, create a new TblModel with this data.
     */
    create: XOR<TblModelCreateInput, TblModelUncheckedCreateInput>
    /**
     * In case the TblModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TblModelUpdateInput, TblModelUncheckedUpdateInput>
  }

  /**
   * TblModel delete
   */
  export type TblModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblModel
     */
    select?: TblModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TblModel
     */
    omit?: TblModelOmit<ExtArgs> | null
    /**
     * Filter which TblModel to delete.
     */
    where: TblModelWhereUniqueInput
  }

  /**
   * TblModel deleteMany
   */
  export type TblModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TblModels to delete
     */
    where?: TblModelWhereInput
    /**
     * Limit how many TblModels to delete.
     */
    limit?: number
  }

  /**
   * TblModel without action
   */
  export type TblModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblModel
     */
    select?: TblModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TblModel
     */
    omit?: TblModelOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const QrySLWCScalarFieldEnum: {
    wc: 'wc',
    description: 'description'
  };

  export type QrySLWCScalarFieldEnum = (typeof QrySLWCScalarFieldEnum)[keyof typeof QrySLWCScalarFieldEnum]


  export const TblModelScalarFieldEnum: {
    ModelID: 'ModelID',
    NamaModel: 'NamaModel',
    Aktif: 'Aktif',
    ProductCode: 'ProductCode',
    Kategori: 'Kategori',
    InisialModel: 'InisialModel',
    Type: 'Type',
    Family: 'Family',
    EkivalenUnit: 'EkivalenUnit'
  };

  export type TblModelScalarFieldEnum = (typeof TblModelScalarFieldEnum)[keyof typeof TblModelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type QrySLWCWhereInput = {
    AND?: QrySLWCWhereInput | QrySLWCWhereInput[]
    OR?: QrySLWCWhereInput[]
    NOT?: QrySLWCWhereInput | QrySLWCWhereInput[]
    wc?: StringFilter<"QrySLWC"> | string
    description?: StringNullableFilter<"QrySLWC"> | string | null
  }

  export type QrySLWCOrderByWithRelationInput = {
    wc?: SortOrder
    description?: SortOrderInput | SortOrder
  }

  export type QrySLWCWhereUniqueInput = Prisma.AtLeast<{
    wc?: string
    AND?: QrySLWCWhereInput | QrySLWCWhereInput[]
    OR?: QrySLWCWhereInput[]
    NOT?: QrySLWCWhereInput | QrySLWCWhereInput[]
    description?: StringNullableFilter<"QrySLWC"> | string | null
  }, "wc">

  export type QrySLWCOrderByWithAggregationInput = {
    wc?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: QrySLWCCountOrderByAggregateInput
    _max?: QrySLWCMaxOrderByAggregateInput
    _min?: QrySLWCMinOrderByAggregateInput
  }

  export type QrySLWCScalarWhereWithAggregatesInput = {
    AND?: QrySLWCScalarWhereWithAggregatesInput | QrySLWCScalarWhereWithAggregatesInput[]
    OR?: QrySLWCScalarWhereWithAggregatesInput[]
    NOT?: QrySLWCScalarWhereWithAggregatesInput | QrySLWCScalarWhereWithAggregatesInput[]
    wc?: StringWithAggregatesFilter<"QrySLWC"> | string
    description?: StringNullableWithAggregatesFilter<"QrySLWC"> | string | null
  }

  export type TblModelWhereInput = {
    AND?: TblModelWhereInput | TblModelWhereInput[]
    OR?: TblModelWhereInput[]
    NOT?: TblModelWhereInput | TblModelWhereInput[]
    ModelID?: StringFilter<"TblModel"> | string
    NamaModel?: StringNullableFilter<"TblModel"> | string | null
    Aktif?: BoolFilter<"TblModel"> | boolean
    ProductCode?: StringNullableFilter<"TblModel"> | string | null
    Kategori?: StringNullableFilter<"TblModel"> | string | null
    InisialModel?: StringNullableFilter<"TblModel"> | string | null
    Type?: StringNullableFilter<"TblModel"> | string | null
    Family?: StringNullableFilter<"TblModel"> | string | null
    EkivalenUnit?: FloatNullableFilter<"TblModel"> | number | null
  }

  export type TblModelOrderByWithRelationInput = {
    ModelID?: SortOrder
    NamaModel?: SortOrderInput | SortOrder
    Aktif?: SortOrder
    ProductCode?: SortOrderInput | SortOrder
    Kategori?: SortOrderInput | SortOrder
    InisialModel?: SortOrderInput | SortOrder
    Type?: SortOrderInput | SortOrder
    Family?: SortOrderInput | SortOrder
    EkivalenUnit?: SortOrderInput | SortOrder
  }

  export type TblModelWhereUniqueInput = Prisma.AtLeast<{
    ModelID?: string
    AND?: TblModelWhereInput | TblModelWhereInput[]
    OR?: TblModelWhereInput[]
    NOT?: TblModelWhereInput | TblModelWhereInput[]
    NamaModel?: StringNullableFilter<"TblModel"> | string | null
    Aktif?: BoolFilter<"TblModel"> | boolean
    ProductCode?: StringNullableFilter<"TblModel"> | string | null
    Kategori?: StringNullableFilter<"TblModel"> | string | null
    InisialModel?: StringNullableFilter<"TblModel"> | string | null
    Type?: StringNullableFilter<"TblModel"> | string | null
    Family?: StringNullableFilter<"TblModel"> | string | null
    EkivalenUnit?: FloatNullableFilter<"TblModel"> | number | null
  }, "ModelID">

  export type TblModelOrderByWithAggregationInput = {
    ModelID?: SortOrder
    NamaModel?: SortOrderInput | SortOrder
    Aktif?: SortOrder
    ProductCode?: SortOrderInput | SortOrder
    Kategori?: SortOrderInput | SortOrder
    InisialModel?: SortOrderInput | SortOrder
    Type?: SortOrderInput | SortOrder
    Family?: SortOrderInput | SortOrder
    EkivalenUnit?: SortOrderInput | SortOrder
    _count?: TblModelCountOrderByAggregateInput
    _avg?: TblModelAvgOrderByAggregateInput
    _max?: TblModelMaxOrderByAggregateInput
    _min?: TblModelMinOrderByAggregateInput
    _sum?: TblModelSumOrderByAggregateInput
  }

  export type TblModelScalarWhereWithAggregatesInput = {
    AND?: TblModelScalarWhereWithAggregatesInput | TblModelScalarWhereWithAggregatesInput[]
    OR?: TblModelScalarWhereWithAggregatesInput[]
    NOT?: TblModelScalarWhereWithAggregatesInput | TblModelScalarWhereWithAggregatesInput[]
    ModelID?: StringWithAggregatesFilter<"TblModel"> | string
    NamaModel?: StringNullableWithAggregatesFilter<"TblModel"> | string | null
    Aktif?: BoolWithAggregatesFilter<"TblModel"> | boolean
    ProductCode?: StringNullableWithAggregatesFilter<"TblModel"> | string | null
    Kategori?: StringNullableWithAggregatesFilter<"TblModel"> | string | null
    InisialModel?: StringNullableWithAggregatesFilter<"TblModel"> | string | null
    Type?: StringNullableWithAggregatesFilter<"TblModel"> | string | null
    Family?: StringNullableWithAggregatesFilter<"TblModel"> | string | null
    EkivalenUnit?: FloatNullableWithAggregatesFilter<"TblModel"> | number | null
  }

  export type QrySLWCCreateInput = {
    wc: string
    description?: string | null
  }

  export type QrySLWCUncheckedCreateInput = {
    wc: string
    description?: string | null
  }

  export type QrySLWCUpdateInput = {
    wc?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QrySLWCUncheckedUpdateInput = {
    wc?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QrySLWCCreateManyInput = {
    wc: string
    description?: string | null
  }

  export type QrySLWCUpdateManyMutationInput = {
    wc?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QrySLWCUncheckedUpdateManyInput = {
    wc?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TblModelCreateInput = {
    ModelID: string
    NamaModel?: string | null
    Aktif: boolean
    ProductCode?: string | null
    Kategori?: string | null
    InisialModel?: string | null
    Type?: string | null
    Family?: string | null
    EkivalenUnit?: number | null
  }

  export type TblModelUncheckedCreateInput = {
    ModelID: string
    NamaModel?: string | null
    Aktif: boolean
    ProductCode?: string | null
    Kategori?: string | null
    InisialModel?: string | null
    Type?: string | null
    Family?: string | null
    EkivalenUnit?: number | null
  }

  export type TblModelUpdateInput = {
    ModelID?: StringFieldUpdateOperationsInput | string
    NamaModel?: NullableStringFieldUpdateOperationsInput | string | null
    Aktif?: BoolFieldUpdateOperationsInput | boolean
    ProductCode?: NullableStringFieldUpdateOperationsInput | string | null
    Kategori?: NullableStringFieldUpdateOperationsInput | string | null
    InisialModel?: NullableStringFieldUpdateOperationsInput | string | null
    Type?: NullableStringFieldUpdateOperationsInput | string | null
    Family?: NullableStringFieldUpdateOperationsInput | string | null
    EkivalenUnit?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TblModelUncheckedUpdateInput = {
    ModelID?: StringFieldUpdateOperationsInput | string
    NamaModel?: NullableStringFieldUpdateOperationsInput | string | null
    Aktif?: BoolFieldUpdateOperationsInput | boolean
    ProductCode?: NullableStringFieldUpdateOperationsInput | string | null
    Kategori?: NullableStringFieldUpdateOperationsInput | string | null
    InisialModel?: NullableStringFieldUpdateOperationsInput | string | null
    Type?: NullableStringFieldUpdateOperationsInput | string | null
    Family?: NullableStringFieldUpdateOperationsInput | string | null
    EkivalenUnit?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TblModelCreateManyInput = {
    ModelID: string
    NamaModel?: string | null
    Aktif: boolean
    ProductCode?: string | null
    Kategori?: string | null
    InisialModel?: string | null
    Type?: string | null
    Family?: string | null
    EkivalenUnit?: number | null
  }

  export type TblModelUpdateManyMutationInput = {
    ModelID?: StringFieldUpdateOperationsInput | string
    NamaModel?: NullableStringFieldUpdateOperationsInput | string | null
    Aktif?: BoolFieldUpdateOperationsInput | boolean
    ProductCode?: NullableStringFieldUpdateOperationsInput | string | null
    Kategori?: NullableStringFieldUpdateOperationsInput | string | null
    InisialModel?: NullableStringFieldUpdateOperationsInput | string | null
    Type?: NullableStringFieldUpdateOperationsInput | string | null
    Family?: NullableStringFieldUpdateOperationsInput | string | null
    EkivalenUnit?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TblModelUncheckedUpdateManyInput = {
    ModelID?: StringFieldUpdateOperationsInput | string
    NamaModel?: NullableStringFieldUpdateOperationsInput | string | null
    Aktif?: BoolFieldUpdateOperationsInput | boolean
    ProductCode?: NullableStringFieldUpdateOperationsInput | string | null
    Kategori?: NullableStringFieldUpdateOperationsInput | string | null
    InisialModel?: NullableStringFieldUpdateOperationsInput | string | null
    Type?: NullableStringFieldUpdateOperationsInput | string | null
    Family?: NullableStringFieldUpdateOperationsInput | string | null
    EkivalenUnit?: NullableFloatFieldUpdateOperationsInput | number | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QrySLWCCountOrderByAggregateInput = {
    wc?: SortOrder
    description?: SortOrder
  }

  export type QrySLWCMaxOrderByAggregateInput = {
    wc?: SortOrder
    description?: SortOrder
  }

  export type QrySLWCMinOrderByAggregateInput = {
    wc?: SortOrder
    description?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TblModelCountOrderByAggregateInput = {
    ModelID?: SortOrder
    NamaModel?: SortOrder
    Aktif?: SortOrder
    ProductCode?: SortOrder
    Kategori?: SortOrder
    InisialModel?: SortOrder
    Type?: SortOrder
    Family?: SortOrder
    EkivalenUnit?: SortOrder
  }

  export type TblModelAvgOrderByAggregateInput = {
    EkivalenUnit?: SortOrder
  }

  export type TblModelMaxOrderByAggregateInput = {
    ModelID?: SortOrder
    NamaModel?: SortOrder
    Aktif?: SortOrder
    ProductCode?: SortOrder
    Kategori?: SortOrder
    InisialModel?: SortOrder
    Type?: SortOrder
    Family?: SortOrder
    EkivalenUnit?: SortOrder
  }

  export type TblModelMinOrderByAggregateInput = {
    ModelID?: SortOrder
    NamaModel?: SortOrder
    Aktif?: SortOrder
    ProductCode?: SortOrder
    Kategori?: SortOrder
    InisialModel?: SortOrder
    Type?: SortOrder
    Family?: SortOrder
    EkivalenUnit?: SortOrder
  }

  export type TblModelSumOrderByAggregateInput = {
    EkivalenUnit?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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