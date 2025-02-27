
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
 * Model access_tokens
 * 
 */
export type access_tokens = $Result.DefaultSelection<Prisma.$access_tokensPayload>
/**
 * Model master_checklist_details
 * 
 */
export type master_checklist_details = $Result.DefaultSelection<Prisma.$master_checklist_detailsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model master_checklists
 * 
 */
export type master_checklists = $Result.DefaultSelection<Prisma.$master_checklistsPayload>
/**
 * Model master_image_checklists
 * 
 */
export type master_image_checklists = $Result.DefaultSelection<Prisma.$master_image_checklistsPayload>
/**
 * Model order_checklists
 * 
 */
export type order_checklists = $Result.DefaultSelection<Prisma.$order_checklistsPayload>
/**
 * Model order_checklist_details
 * 
 */
export type order_checklist_details = $Result.DefaultSelection<Prisma.$order_checklist_detailsPayload>
/**
 * Model order_checklist_notes
 * 
 */
export type order_checklist_notes = $Result.DefaultSelection<Prisma.$order_checklist_notesPayload>
/**
 * Model order_image_checklists
 * 
 */
export type order_image_checklists = $Result.DefaultSelection<Prisma.$order_image_checklistsPayload>
/**
 * Model order_image_notes
 * 
 */
export type order_image_notes = $Result.DefaultSelection<Prisma.$order_image_notesPayload>
/**
 * Model sysdiagrams
 * 
 */
export type sysdiagrams = $Result.DefaultSelection<Prisma.$sysdiagramsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Access_tokens
 * const access_tokens = await prisma.access_tokens.findMany()
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
   * // Fetch zero or more Access_tokens
   * const access_tokens = await prisma.access_tokens.findMany()
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
   * `prisma.access_tokens`: Exposes CRUD operations for the **access_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Access_tokens
    * const access_tokens = await prisma.access_tokens.findMany()
    * ```
    */
  get access_tokens(): Prisma.access_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.master_checklist_details`: Exposes CRUD operations for the **master_checklist_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Master_checklist_details
    * const master_checklist_details = await prisma.master_checklist_details.findMany()
    * ```
    */
  get master_checklist_details(): Prisma.master_checklist_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.master_checklists`: Exposes CRUD operations for the **master_checklists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Master_checklists
    * const master_checklists = await prisma.master_checklists.findMany()
    * ```
    */
  get master_checklists(): Prisma.master_checklistsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.master_image_checklists`: Exposes CRUD operations for the **master_image_checklists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Master_image_checklists
    * const master_image_checklists = await prisma.master_image_checklists.findMany()
    * ```
    */
  get master_image_checklists(): Prisma.master_image_checklistsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_checklists`: Exposes CRUD operations for the **order_checklists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_checklists
    * const order_checklists = await prisma.order_checklists.findMany()
    * ```
    */
  get order_checklists(): Prisma.order_checklistsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_checklist_details`: Exposes CRUD operations for the **order_checklist_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_checklist_details
    * const order_checklist_details = await prisma.order_checklist_details.findMany()
    * ```
    */
  get order_checklist_details(): Prisma.order_checklist_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_checklist_notes`: Exposes CRUD operations for the **order_checklist_notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_checklist_notes
    * const order_checklist_notes = await prisma.order_checklist_notes.findMany()
    * ```
    */
  get order_checklist_notes(): Prisma.order_checklist_notesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_image_checklists`: Exposes CRUD operations for the **order_image_checklists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_image_checklists
    * const order_image_checklists = await prisma.order_image_checklists.findMany()
    * ```
    */
  get order_image_checklists(): Prisma.order_image_checklistsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_image_notes`: Exposes CRUD operations for the **order_image_notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_image_notes
    * const order_image_notes = await prisma.order_image_notes.findMany()
    * ```
    */
  get order_image_notes(): Prisma.order_image_notesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sysdiagrams`: Exposes CRUD operations for the **sysdiagrams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sysdiagrams
    * const sysdiagrams = await prisma.sysdiagrams.findMany()
    * ```
    */
  get sysdiagrams(): Prisma.sysdiagramsDelegate<ExtArgs, ClientOptions>;
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
    access_tokens: 'access_tokens',
    master_checklist_details: 'master_checklist_details',
    users: 'users',
    master_checklists: 'master_checklists',
    master_image_checklists: 'master_image_checklists',
    order_checklists: 'order_checklists',
    order_checklist_details: 'order_checklist_details',
    order_checklist_notes: 'order_checklist_notes',
    order_image_checklists: 'order_image_checklists',
    order_image_notes: 'order_image_notes',
    sysdiagrams: 'sysdiagrams'
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
      modelProps: "access_tokens" | "master_checklist_details" | "users" | "master_checklists" | "master_image_checklists" | "order_checklists" | "order_checklist_details" | "order_checklist_notes" | "order_image_checklists" | "order_image_notes" | "sysdiagrams"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      access_tokens: {
        payload: Prisma.$access_tokensPayload<ExtArgs>
        fields: Prisma.access_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.access_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.access_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_tokensPayload>
          }
          findFirst: {
            args: Prisma.access_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.access_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_tokensPayload>
          }
          findMany: {
            args: Prisma.access_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_tokensPayload>[]
          }
          create: {
            args: Prisma.access_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_tokensPayload>
          }
          createMany: {
            args: Prisma.access_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.access_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_tokensPayload>
          }
          update: {
            args: Prisma.access_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_tokensPayload>
          }
          deleteMany: {
            args: Prisma.access_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.access_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.access_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_tokensPayload>
          }
          aggregate: {
            args: Prisma.Access_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccess_tokens>
          }
          groupBy: {
            args: Prisma.access_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Access_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.access_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Access_tokensCountAggregateOutputType> | number
          }
        }
      }
      master_checklist_details: {
        payload: Prisma.$master_checklist_detailsPayload<ExtArgs>
        fields: Prisma.master_checklist_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.master_checklist_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklist_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.master_checklist_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklist_detailsPayload>
          }
          findFirst: {
            args: Prisma.master_checklist_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklist_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.master_checklist_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklist_detailsPayload>
          }
          findMany: {
            args: Prisma.master_checklist_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklist_detailsPayload>[]
          }
          create: {
            args: Prisma.master_checklist_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklist_detailsPayload>
          }
          createMany: {
            args: Prisma.master_checklist_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.master_checklist_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklist_detailsPayload>
          }
          update: {
            args: Prisma.master_checklist_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklist_detailsPayload>
          }
          deleteMany: {
            args: Prisma.master_checklist_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.master_checklist_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.master_checklist_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklist_detailsPayload>
          }
          aggregate: {
            args: Prisma.Master_checklist_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaster_checklist_details>
          }
          groupBy: {
            args: Prisma.master_checklist_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Master_checklist_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.master_checklist_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Master_checklist_detailsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      master_checklists: {
        payload: Prisma.$master_checklistsPayload<ExtArgs>
        fields: Prisma.master_checklistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.master_checklistsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.master_checklistsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklistsPayload>
          }
          findFirst: {
            args: Prisma.master_checklistsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.master_checklistsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklistsPayload>
          }
          findMany: {
            args: Prisma.master_checklistsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklistsPayload>[]
          }
          create: {
            args: Prisma.master_checklistsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklistsPayload>
          }
          createMany: {
            args: Prisma.master_checklistsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.master_checklistsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklistsPayload>
          }
          update: {
            args: Prisma.master_checklistsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklistsPayload>
          }
          deleteMany: {
            args: Prisma.master_checklistsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.master_checklistsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.master_checklistsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_checklistsPayload>
          }
          aggregate: {
            args: Prisma.Master_checklistsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaster_checklists>
          }
          groupBy: {
            args: Prisma.master_checklistsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Master_checklistsGroupByOutputType>[]
          }
          count: {
            args: Prisma.master_checklistsCountArgs<ExtArgs>
            result: $Utils.Optional<Master_checklistsCountAggregateOutputType> | number
          }
        }
      }
      master_image_checklists: {
        payload: Prisma.$master_image_checklistsPayload<ExtArgs>
        fields: Prisma.master_image_checklistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.master_image_checklistsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_image_checklistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.master_image_checklistsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_image_checklistsPayload>
          }
          findFirst: {
            args: Prisma.master_image_checklistsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_image_checklistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.master_image_checklistsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_image_checklistsPayload>
          }
          findMany: {
            args: Prisma.master_image_checklistsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_image_checklistsPayload>[]
          }
          create: {
            args: Prisma.master_image_checklistsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_image_checklistsPayload>
          }
          createMany: {
            args: Prisma.master_image_checklistsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.master_image_checklistsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_image_checklistsPayload>
          }
          update: {
            args: Prisma.master_image_checklistsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_image_checklistsPayload>
          }
          deleteMany: {
            args: Prisma.master_image_checklistsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.master_image_checklistsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.master_image_checklistsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$master_image_checklistsPayload>
          }
          aggregate: {
            args: Prisma.Master_image_checklistsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaster_image_checklists>
          }
          groupBy: {
            args: Prisma.master_image_checklistsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Master_image_checklistsGroupByOutputType>[]
          }
          count: {
            args: Prisma.master_image_checklistsCountArgs<ExtArgs>
            result: $Utils.Optional<Master_image_checklistsCountAggregateOutputType> | number
          }
        }
      }
      order_checklists: {
        payload: Prisma.$order_checklistsPayload<ExtArgs>
        fields: Prisma.order_checklistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_checklistsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_checklistsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklistsPayload>
          }
          findFirst: {
            args: Prisma.order_checklistsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_checklistsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklistsPayload>
          }
          findMany: {
            args: Prisma.order_checklistsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklistsPayload>[]
          }
          create: {
            args: Prisma.order_checklistsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklistsPayload>
          }
          createMany: {
            args: Prisma.order_checklistsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.order_checklistsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklistsPayload>
          }
          update: {
            args: Prisma.order_checklistsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklistsPayload>
          }
          deleteMany: {
            args: Prisma.order_checklistsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_checklistsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.order_checklistsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklistsPayload>
          }
          aggregate: {
            args: Prisma.Order_checklistsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_checklists>
          }
          groupBy: {
            args: Prisma.order_checklistsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_checklistsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_checklistsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_checklistsCountAggregateOutputType> | number
          }
        }
      }
      order_checklist_details: {
        payload: Prisma.$order_checklist_detailsPayload<ExtArgs>
        fields: Prisma.order_checklist_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_checklist_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_checklist_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_detailsPayload>
          }
          findFirst: {
            args: Prisma.order_checklist_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_checklist_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_detailsPayload>
          }
          findMany: {
            args: Prisma.order_checklist_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_detailsPayload>[]
          }
          create: {
            args: Prisma.order_checklist_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_detailsPayload>
          }
          createMany: {
            args: Prisma.order_checklist_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.order_checklist_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_detailsPayload>
          }
          update: {
            args: Prisma.order_checklist_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_detailsPayload>
          }
          deleteMany: {
            args: Prisma.order_checklist_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_checklist_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.order_checklist_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_detailsPayload>
          }
          aggregate: {
            args: Prisma.Order_checklist_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_checklist_details>
          }
          groupBy: {
            args: Prisma.order_checklist_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_checklist_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_checklist_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_checklist_detailsCountAggregateOutputType> | number
          }
        }
      }
      order_checklist_notes: {
        payload: Prisma.$order_checklist_notesPayload<ExtArgs>
        fields: Prisma.order_checklist_notesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_checklist_notesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_notesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_checklist_notesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_notesPayload>
          }
          findFirst: {
            args: Prisma.order_checklist_notesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_notesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_checklist_notesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_notesPayload>
          }
          findMany: {
            args: Prisma.order_checklist_notesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_notesPayload>[]
          }
          create: {
            args: Prisma.order_checklist_notesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_notesPayload>
          }
          createMany: {
            args: Prisma.order_checklist_notesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.order_checklist_notesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_notesPayload>
          }
          update: {
            args: Prisma.order_checklist_notesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_notesPayload>
          }
          deleteMany: {
            args: Prisma.order_checklist_notesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_checklist_notesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.order_checklist_notesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_checklist_notesPayload>
          }
          aggregate: {
            args: Prisma.Order_checklist_notesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_checklist_notes>
          }
          groupBy: {
            args: Prisma.order_checklist_notesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_checklist_notesGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_checklist_notesCountArgs<ExtArgs>
            result: $Utils.Optional<Order_checklist_notesCountAggregateOutputType> | number
          }
        }
      }
      order_image_checklists: {
        payload: Prisma.$order_image_checklistsPayload<ExtArgs>
        fields: Prisma.order_image_checklistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_image_checklistsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_checklistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_image_checklistsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_checklistsPayload>
          }
          findFirst: {
            args: Prisma.order_image_checklistsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_checklistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_image_checklistsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_checklistsPayload>
          }
          findMany: {
            args: Prisma.order_image_checklistsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_checklistsPayload>[]
          }
          create: {
            args: Prisma.order_image_checklistsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_checklistsPayload>
          }
          createMany: {
            args: Prisma.order_image_checklistsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.order_image_checklistsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_checklistsPayload>
          }
          update: {
            args: Prisma.order_image_checklistsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_checklistsPayload>
          }
          deleteMany: {
            args: Prisma.order_image_checklistsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_image_checklistsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.order_image_checklistsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_checklistsPayload>
          }
          aggregate: {
            args: Prisma.Order_image_checklistsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_image_checklists>
          }
          groupBy: {
            args: Prisma.order_image_checklistsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_image_checklistsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_image_checklistsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_image_checklistsCountAggregateOutputType> | number
          }
        }
      }
      order_image_notes: {
        payload: Prisma.$order_image_notesPayload<ExtArgs>
        fields: Prisma.order_image_notesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_image_notesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_notesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_image_notesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_notesPayload>
          }
          findFirst: {
            args: Prisma.order_image_notesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_notesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_image_notesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_notesPayload>
          }
          findMany: {
            args: Prisma.order_image_notesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_notesPayload>[]
          }
          create: {
            args: Prisma.order_image_notesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_notesPayload>
          }
          createMany: {
            args: Prisma.order_image_notesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.order_image_notesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_notesPayload>
          }
          update: {
            args: Prisma.order_image_notesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_notesPayload>
          }
          deleteMany: {
            args: Prisma.order_image_notesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_image_notesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.order_image_notesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_image_notesPayload>
          }
          aggregate: {
            args: Prisma.Order_image_notesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_image_notes>
          }
          groupBy: {
            args: Prisma.order_image_notesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_image_notesGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_image_notesCountArgs<ExtArgs>
            result: $Utils.Optional<Order_image_notesCountAggregateOutputType> | number
          }
        }
      }
      sysdiagrams: {
        payload: Prisma.$sysdiagramsPayload<ExtArgs>
        fields: Prisma.sysdiagramsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sysdiagramsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sysdiagramsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          findFirst: {
            args: Prisma.sysdiagramsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sysdiagramsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          findMany: {
            args: Prisma.sysdiagramsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>[]
          }
          create: {
            args: Prisma.sysdiagramsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          createMany: {
            args: Prisma.sysdiagramsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sysdiagramsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          update: {
            args: Prisma.sysdiagramsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          deleteMany: {
            args: Prisma.sysdiagramsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sysdiagramsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sysdiagramsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          aggregate: {
            args: Prisma.SysdiagramsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSysdiagrams>
          }
          groupBy: {
            args: Prisma.sysdiagramsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SysdiagramsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sysdiagramsCountArgs<ExtArgs>
            result: $Utils.Optional<SysdiagramsCountAggregateOutputType> | number
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
    access_tokens?: access_tokensOmit
    master_checklist_details?: master_checklist_detailsOmit
    users?: usersOmit
    master_checklists?: master_checklistsOmit
    master_image_checklists?: master_image_checklistsOmit
    order_checklists?: order_checklistsOmit
    order_checklist_details?: order_checklist_detailsOmit
    order_checklist_notes?: order_checklist_notesOmit
    order_image_checklists?: order_image_checklistsOmit
    order_image_notes?: order_image_notesOmit
    sysdiagrams?: sysdiagramsOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    master_checklist_details_master_checklist_details_updated_byTousers: number
    master_checklist_details_master_checklist_details_created_byTousers: number
    master_checklists_master_checklists_updated_byTousers: number
    master_checklists_master_checklists_created_byTousers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    master_checklist_details_master_checklist_details_updated_byTousers?: boolean | UsersCountOutputTypeCountMaster_checklist_details_master_checklist_details_updated_byTousersArgs
    master_checklist_details_master_checklist_details_created_byTousers?: boolean | UsersCountOutputTypeCountMaster_checklist_details_master_checklist_details_created_byTousersArgs
    master_checklists_master_checklists_updated_byTousers?: boolean | UsersCountOutputTypeCountMaster_checklists_master_checklists_updated_byTousersArgs
    master_checklists_master_checklists_created_byTousers?: boolean | UsersCountOutputTypeCountMaster_checklists_master_checklists_created_byTousersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMaster_checklist_details_master_checklist_details_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: master_checklist_detailsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMaster_checklist_details_master_checklist_details_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: master_checklist_detailsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMaster_checklists_master_checklists_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: master_checklistsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMaster_checklists_master_checklists_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: master_checklistsWhereInput
  }


  /**
   * Count Type Master_checklistsCountOutputType
   */

  export type Master_checklistsCountOutputType = {
    master_checklist_details: number
  }

  export type Master_checklistsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    master_checklist_details?: boolean | Master_checklistsCountOutputTypeCountMaster_checklist_detailsArgs
  }

  // Custom InputTypes
  /**
   * Master_checklistsCountOutputType without action
   */
  export type Master_checklistsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_checklistsCountOutputType
     */
    select?: Master_checklistsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Master_checklistsCountOutputType without action
   */
  export type Master_checklistsCountOutputTypeCountMaster_checklist_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: master_checklist_detailsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model access_tokens
   */

  export type AggregateAccess_tokens = {
    _count: Access_tokensCountAggregateOutputType | null
    _min: Access_tokensMinAggregateOutputType | null
    _max: Access_tokensMaxAggregateOutputType | null
  }

  export type Access_tokensMinAggregateOutputType = {
    id: string | null
    tokenable_type: string | null
    tokenable_id: string | null
    name: string | null
    token: string | null
    abilities: string | null
    last_used_at: Date | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Access_tokensMaxAggregateOutputType = {
    id: string | null
    tokenable_type: string | null
    tokenable_id: string | null
    name: string | null
    token: string | null
    abilities: string | null
    last_used_at: Date | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Access_tokensCountAggregateOutputType = {
    id: number
    tokenable_type: number
    tokenable_id: number
    name: number
    token: number
    abilities: number
    last_used_at: number
    expires_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Access_tokensMinAggregateInputType = {
    id?: true
    tokenable_type?: true
    tokenable_id?: true
    name?: true
    token?: true
    abilities?: true
    last_used_at?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Access_tokensMaxAggregateInputType = {
    id?: true
    tokenable_type?: true
    tokenable_id?: true
    name?: true
    token?: true
    abilities?: true
    last_used_at?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Access_tokensCountAggregateInputType = {
    id?: true
    tokenable_type?: true
    tokenable_id?: true
    name?: true
    token?: true
    abilities?: true
    last_used_at?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Access_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which access_tokens to aggregate.
     */
    where?: access_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of access_tokens to fetch.
     */
    orderBy?: access_tokensOrderByWithRelationInput | access_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: access_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` access_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` access_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned access_tokens
    **/
    _count?: true | Access_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Access_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Access_tokensMaxAggregateInputType
  }

  export type GetAccess_tokensAggregateType<T extends Access_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregateAccess_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccess_tokens[P]>
      : GetScalarType<T[P], AggregateAccess_tokens[P]>
  }




  export type access_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: access_tokensWhereInput
    orderBy?: access_tokensOrderByWithAggregationInput | access_tokensOrderByWithAggregationInput[]
    by: Access_tokensScalarFieldEnum[] | Access_tokensScalarFieldEnum
    having?: access_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Access_tokensCountAggregateInputType | true
    _min?: Access_tokensMinAggregateInputType
    _max?: Access_tokensMaxAggregateInputType
  }

  export type Access_tokensGroupByOutputType = {
    id: string
    tokenable_type: string
    tokenable_id: string
    name: string
    token: string
    abilities: string | null
    last_used_at: Date | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: Access_tokensCountAggregateOutputType | null
    _min: Access_tokensMinAggregateOutputType | null
    _max: Access_tokensMaxAggregateOutputType | null
  }

  type GetAccess_tokensGroupByPayload<T extends access_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Access_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Access_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Access_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Access_tokensGroupByOutputType[P]>
        }
      >
    >


  export type access_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenable_type?: boolean
    tokenable_id?: boolean
    name?: boolean
    token?: boolean
    abilities?: boolean
    last_used_at?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["access_tokens"]>



  export type access_tokensSelectScalar = {
    id?: boolean
    tokenable_type?: boolean
    tokenable_id?: boolean
    name?: boolean
    token?: boolean
    abilities?: boolean
    last_used_at?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type access_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenable_type" | "tokenable_id" | "name" | "token" | "abilities" | "last_used_at" | "expires_at" | "created_at" | "updated_at", ExtArgs["result"]["access_tokens"]>

  export type $access_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "access_tokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenable_type: string
      tokenable_id: string
      name: string
      token: string
      abilities: string | null
      last_used_at: Date | null
      expires_at: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["access_tokens"]>
    composites: {}
  }

  type access_tokensGetPayload<S extends boolean | null | undefined | access_tokensDefaultArgs> = $Result.GetResult<Prisma.$access_tokensPayload, S>

  type access_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<access_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Access_tokensCountAggregateInputType | true
    }

  export interface access_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['access_tokens'], meta: { name: 'access_tokens' } }
    /**
     * Find zero or one Access_tokens that matches the filter.
     * @param {access_tokensFindUniqueArgs} args - Arguments to find a Access_tokens
     * @example
     * // Get one Access_tokens
     * const access_tokens = await prisma.access_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends access_tokensFindUniqueArgs>(args: SelectSubset<T, access_tokensFindUniqueArgs<ExtArgs>>): Prisma__access_tokensClient<$Result.GetResult<Prisma.$access_tokensPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Access_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {access_tokensFindUniqueOrThrowArgs} args - Arguments to find a Access_tokens
     * @example
     * // Get one Access_tokens
     * const access_tokens = await prisma.access_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends access_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, access_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__access_tokensClient<$Result.GetResult<Prisma.$access_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Access_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_tokensFindFirstArgs} args - Arguments to find a Access_tokens
     * @example
     * // Get one Access_tokens
     * const access_tokens = await prisma.access_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends access_tokensFindFirstArgs>(args?: SelectSubset<T, access_tokensFindFirstArgs<ExtArgs>>): Prisma__access_tokensClient<$Result.GetResult<Prisma.$access_tokensPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Access_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_tokensFindFirstOrThrowArgs} args - Arguments to find a Access_tokens
     * @example
     * // Get one Access_tokens
     * const access_tokens = await prisma.access_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends access_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, access_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__access_tokensClient<$Result.GetResult<Prisma.$access_tokensPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Access_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Access_tokens
     * const access_tokens = await prisma.access_tokens.findMany()
     * 
     * // Get first 10 Access_tokens
     * const access_tokens = await prisma.access_tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const access_tokensWithIdOnly = await prisma.access_tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends access_tokensFindManyArgs>(args?: SelectSubset<T, access_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$access_tokensPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Access_tokens.
     * @param {access_tokensCreateArgs} args - Arguments to create a Access_tokens.
     * @example
     * // Create one Access_tokens
     * const Access_tokens = await prisma.access_tokens.create({
     *   data: {
     *     // ... data to create a Access_tokens
     *   }
     * })
     * 
     */
    create<T extends access_tokensCreateArgs>(args: SelectSubset<T, access_tokensCreateArgs<ExtArgs>>): Prisma__access_tokensClient<$Result.GetResult<Prisma.$access_tokensPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Access_tokens.
     * @param {access_tokensCreateManyArgs} args - Arguments to create many Access_tokens.
     * @example
     * // Create many Access_tokens
     * const access_tokens = await prisma.access_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends access_tokensCreateManyArgs>(args?: SelectSubset<T, access_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Access_tokens.
     * @param {access_tokensDeleteArgs} args - Arguments to delete one Access_tokens.
     * @example
     * // Delete one Access_tokens
     * const Access_tokens = await prisma.access_tokens.delete({
     *   where: {
     *     // ... filter to delete one Access_tokens
     *   }
     * })
     * 
     */
    delete<T extends access_tokensDeleteArgs>(args: SelectSubset<T, access_tokensDeleteArgs<ExtArgs>>): Prisma__access_tokensClient<$Result.GetResult<Prisma.$access_tokensPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Access_tokens.
     * @param {access_tokensUpdateArgs} args - Arguments to update one Access_tokens.
     * @example
     * // Update one Access_tokens
     * const access_tokens = await prisma.access_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends access_tokensUpdateArgs>(args: SelectSubset<T, access_tokensUpdateArgs<ExtArgs>>): Prisma__access_tokensClient<$Result.GetResult<Prisma.$access_tokensPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Access_tokens.
     * @param {access_tokensDeleteManyArgs} args - Arguments to filter Access_tokens to delete.
     * @example
     * // Delete a few Access_tokens
     * const { count } = await prisma.access_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends access_tokensDeleteManyArgs>(args?: SelectSubset<T, access_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Access_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Access_tokens
     * const access_tokens = await prisma.access_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends access_tokensUpdateManyArgs>(args: SelectSubset<T, access_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Access_tokens.
     * @param {access_tokensUpsertArgs} args - Arguments to update or create a Access_tokens.
     * @example
     * // Update or create a Access_tokens
     * const access_tokens = await prisma.access_tokens.upsert({
     *   create: {
     *     // ... data to create a Access_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Access_tokens we want to update
     *   }
     * })
     */
    upsert<T extends access_tokensUpsertArgs>(args: SelectSubset<T, access_tokensUpsertArgs<ExtArgs>>): Prisma__access_tokensClient<$Result.GetResult<Prisma.$access_tokensPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Access_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_tokensCountArgs} args - Arguments to filter Access_tokens to count.
     * @example
     * // Count the number of Access_tokens
     * const count = await prisma.access_tokens.count({
     *   where: {
     *     // ... the filter for the Access_tokens we want to count
     *   }
     * })
    **/
    count<T extends access_tokensCountArgs>(
      args?: Subset<T, access_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Access_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Access_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Access_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Access_tokensAggregateArgs>(args: Subset<T, Access_tokensAggregateArgs>): Prisma.PrismaPromise<GetAccess_tokensAggregateType<T>>

    /**
     * Group by Access_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_tokensGroupByArgs} args - Group by arguments.
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
      T extends access_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: access_tokensGroupByArgs['orderBy'] }
        : { orderBy?: access_tokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, access_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccess_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the access_tokens model
   */
  readonly fields: access_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for access_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__access_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the access_tokens model
   */ 
  interface access_tokensFieldRefs {
    readonly id: FieldRef<"access_tokens", 'String'>
    readonly tokenable_type: FieldRef<"access_tokens", 'String'>
    readonly tokenable_id: FieldRef<"access_tokens", 'String'>
    readonly name: FieldRef<"access_tokens", 'String'>
    readonly token: FieldRef<"access_tokens", 'String'>
    readonly abilities: FieldRef<"access_tokens", 'String'>
    readonly last_used_at: FieldRef<"access_tokens", 'DateTime'>
    readonly expires_at: FieldRef<"access_tokens", 'DateTime'>
    readonly created_at: FieldRef<"access_tokens", 'DateTime'>
    readonly updated_at: FieldRef<"access_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * access_tokens findUnique
   */
  export type access_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_tokens
     */
    select?: access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_tokens
     */
    omit?: access_tokensOmit<ExtArgs> | null
    /**
     * Filter, which access_tokens to fetch.
     */
    where: access_tokensWhereUniqueInput
  }

  /**
   * access_tokens findUniqueOrThrow
   */
  export type access_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_tokens
     */
    select?: access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_tokens
     */
    omit?: access_tokensOmit<ExtArgs> | null
    /**
     * Filter, which access_tokens to fetch.
     */
    where: access_tokensWhereUniqueInput
  }

  /**
   * access_tokens findFirst
   */
  export type access_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_tokens
     */
    select?: access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_tokens
     */
    omit?: access_tokensOmit<ExtArgs> | null
    /**
     * Filter, which access_tokens to fetch.
     */
    where?: access_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of access_tokens to fetch.
     */
    orderBy?: access_tokensOrderByWithRelationInput | access_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for access_tokens.
     */
    cursor?: access_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` access_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` access_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of access_tokens.
     */
    distinct?: Access_tokensScalarFieldEnum | Access_tokensScalarFieldEnum[]
  }

  /**
   * access_tokens findFirstOrThrow
   */
  export type access_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_tokens
     */
    select?: access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_tokens
     */
    omit?: access_tokensOmit<ExtArgs> | null
    /**
     * Filter, which access_tokens to fetch.
     */
    where?: access_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of access_tokens to fetch.
     */
    orderBy?: access_tokensOrderByWithRelationInput | access_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for access_tokens.
     */
    cursor?: access_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` access_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` access_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of access_tokens.
     */
    distinct?: Access_tokensScalarFieldEnum | Access_tokensScalarFieldEnum[]
  }

  /**
   * access_tokens findMany
   */
  export type access_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_tokens
     */
    select?: access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_tokens
     */
    omit?: access_tokensOmit<ExtArgs> | null
    /**
     * Filter, which access_tokens to fetch.
     */
    where?: access_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of access_tokens to fetch.
     */
    orderBy?: access_tokensOrderByWithRelationInput | access_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing access_tokens.
     */
    cursor?: access_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` access_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` access_tokens.
     */
    skip?: number
    distinct?: Access_tokensScalarFieldEnum | Access_tokensScalarFieldEnum[]
  }

  /**
   * access_tokens create
   */
  export type access_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_tokens
     */
    select?: access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_tokens
     */
    omit?: access_tokensOmit<ExtArgs> | null
    /**
     * The data needed to create a access_tokens.
     */
    data: XOR<access_tokensCreateInput, access_tokensUncheckedCreateInput>
  }

  /**
   * access_tokens createMany
   */
  export type access_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many access_tokens.
     */
    data: access_tokensCreateManyInput | access_tokensCreateManyInput[]
  }

  /**
   * access_tokens update
   */
  export type access_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_tokens
     */
    select?: access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_tokens
     */
    omit?: access_tokensOmit<ExtArgs> | null
    /**
     * The data needed to update a access_tokens.
     */
    data: XOR<access_tokensUpdateInput, access_tokensUncheckedUpdateInput>
    /**
     * Choose, which access_tokens to update.
     */
    where: access_tokensWhereUniqueInput
  }

  /**
   * access_tokens updateMany
   */
  export type access_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update access_tokens.
     */
    data: XOR<access_tokensUpdateManyMutationInput, access_tokensUncheckedUpdateManyInput>
    /**
     * Filter which access_tokens to update
     */
    where?: access_tokensWhereInput
    /**
     * Limit how many access_tokens to update.
     */
    limit?: number
  }

  /**
   * access_tokens upsert
   */
  export type access_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_tokens
     */
    select?: access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_tokens
     */
    omit?: access_tokensOmit<ExtArgs> | null
    /**
     * The filter to search for the access_tokens to update in case it exists.
     */
    where: access_tokensWhereUniqueInput
    /**
     * In case the access_tokens found by the `where` argument doesn't exist, create a new access_tokens with this data.
     */
    create: XOR<access_tokensCreateInput, access_tokensUncheckedCreateInput>
    /**
     * In case the access_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<access_tokensUpdateInput, access_tokensUncheckedUpdateInput>
  }

  /**
   * access_tokens delete
   */
  export type access_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_tokens
     */
    select?: access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_tokens
     */
    omit?: access_tokensOmit<ExtArgs> | null
    /**
     * Filter which access_tokens to delete.
     */
    where: access_tokensWhereUniqueInput
  }

  /**
   * access_tokens deleteMany
   */
  export type access_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which access_tokens to delete
     */
    where?: access_tokensWhereInput
    /**
     * Limit how many access_tokens to delete.
     */
    limit?: number
  }

  /**
   * access_tokens without action
   */
  export type access_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_tokens
     */
    select?: access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_tokens
     */
    omit?: access_tokensOmit<ExtArgs> | null
  }


  /**
   * Model master_checklist_details
   */

  export type AggregateMaster_checklist_details = {
    _count: Master_checklist_detailsCountAggregateOutputType | null
    _min: Master_checklist_detailsMinAggregateOutputType | null
    _max: Master_checklist_detailsMaxAggregateOutputType | null
  }

  export type Master_checklist_detailsMinAggregateOutputType = {
    id: string | null
    checklist_header_id: string | null
    name: string | null
    short_desc: string | null
    required_image: string | null
    updated_by: string | null
    created_by: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type Master_checklist_detailsMaxAggregateOutputType = {
    id: string | null
    checklist_header_id: string | null
    name: string | null
    short_desc: string | null
    required_image: string | null
    updated_by: string | null
    created_by: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type Master_checklist_detailsCountAggregateOutputType = {
    id: number
    checklist_header_id: number
    name: number
    short_desc: number
    required_image: number
    updated_by: number
    created_by: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type Master_checklist_detailsMinAggregateInputType = {
    id?: true
    checklist_header_id?: true
    name?: true
    short_desc?: true
    required_image?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
  }

  export type Master_checklist_detailsMaxAggregateInputType = {
    id?: true
    checklist_header_id?: true
    name?: true
    short_desc?: true
    required_image?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
  }

  export type Master_checklist_detailsCountAggregateInputType = {
    id?: true
    checklist_header_id?: true
    name?: true
    short_desc?: true
    required_image?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type Master_checklist_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which master_checklist_details to aggregate.
     */
    where?: master_checklist_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_checklist_details to fetch.
     */
    orderBy?: master_checklist_detailsOrderByWithRelationInput | master_checklist_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: master_checklist_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_checklist_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_checklist_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned master_checklist_details
    **/
    _count?: true | Master_checklist_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Master_checklist_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Master_checklist_detailsMaxAggregateInputType
  }

  export type GetMaster_checklist_detailsAggregateType<T extends Master_checklist_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateMaster_checklist_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaster_checklist_details[P]>
      : GetScalarType<T[P], AggregateMaster_checklist_details[P]>
  }




  export type master_checklist_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: master_checklist_detailsWhereInput
    orderBy?: master_checklist_detailsOrderByWithAggregationInput | master_checklist_detailsOrderByWithAggregationInput[]
    by: Master_checklist_detailsScalarFieldEnum[] | Master_checklist_detailsScalarFieldEnum
    having?: master_checklist_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Master_checklist_detailsCountAggregateInputType | true
    _min?: Master_checklist_detailsMinAggregateInputType
    _max?: Master_checklist_detailsMaxAggregateInputType
  }

  export type Master_checklist_detailsGroupByOutputType = {
    id: string
    checklist_header_id: string
    name: string
    short_desc: string | null
    required_image: string | null
    updated_by: string
    created_by: string
    updated_at: Date | null
    created_at: Date | null
    _count: Master_checklist_detailsCountAggregateOutputType | null
    _min: Master_checklist_detailsMinAggregateOutputType | null
    _max: Master_checklist_detailsMaxAggregateOutputType | null
  }

  type GetMaster_checklist_detailsGroupByPayload<T extends master_checklist_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Master_checklist_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Master_checklist_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Master_checklist_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Master_checklist_detailsGroupByOutputType[P]>
        }
      >
    >


  export type master_checklist_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checklist_header_id?: boolean
    name?: boolean
    short_desc?: boolean
    required_image?: boolean
    updated_by?: boolean
    created_by?: boolean
    updated_at?: boolean
    created_at?: boolean
    master_checklists?: boolean | master_checklistsDefaultArgs<ExtArgs>
    users_master_checklist_details_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_master_checklist_details_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["master_checklist_details"]>



  export type master_checklist_detailsSelectScalar = {
    id?: boolean
    checklist_header_id?: boolean
    name?: boolean
    short_desc?: boolean
    required_image?: boolean
    updated_by?: boolean
    created_by?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type master_checklist_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checklist_header_id" | "name" | "short_desc" | "required_image" | "updated_by" | "created_by" | "updated_at" | "created_at", ExtArgs["result"]["master_checklist_details"]>
  export type master_checklist_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    master_checklists?: boolean | master_checklistsDefaultArgs<ExtArgs>
    users_master_checklist_details_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_master_checklist_details_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $master_checklist_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "master_checklist_details"
    objects: {
      master_checklists: Prisma.$master_checklistsPayload<ExtArgs>
      users_master_checklist_details_updated_byTousers: Prisma.$usersPayload<ExtArgs>
      users_master_checklist_details_created_byTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      checklist_header_id: string
      name: string
      short_desc: string | null
      required_image: string | null
      updated_by: string
      created_by: string
      updated_at: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["master_checklist_details"]>
    composites: {}
  }

  type master_checklist_detailsGetPayload<S extends boolean | null | undefined | master_checklist_detailsDefaultArgs> = $Result.GetResult<Prisma.$master_checklist_detailsPayload, S>

  type master_checklist_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<master_checklist_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Master_checklist_detailsCountAggregateInputType | true
    }

  export interface master_checklist_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['master_checklist_details'], meta: { name: 'master_checklist_details' } }
    /**
     * Find zero or one Master_checklist_details that matches the filter.
     * @param {master_checklist_detailsFindUniqueArgs} args - Arguments to find a Master_checklist_details
     * @example
     * // Get one Master_checklist_details
     * const master_checklist_details = await prisma.master_checklist_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends master_checklist_detailsFindUniqueArgs>(args: SelectSubset<T, master_checklist_detailsFindUniqueArgs<ExtArgs>>): Prisma__master_checklist_detailsClient<$Result.GetResult<Prisma.$master_checklist_detailsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Master_checklist_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {master_checklist_detailsFindUniqueOrThrowArgs} args - Arguments to find a Master_checklist_details
     * @example
     * // Get one Master_checklist_details
     * const master_checklist_details = await prisma.master_checklist_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends master_checklist_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, master_checklist_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__master_checklist_detailsClient<$Result.GetResult<Prisma.$master_checklist_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Master_checklist_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_checklist_detailsFindFirstArgs} args - Arguments to find a Master_checklist_details
     * @example
     * // Get one Master_checklist_details
     * const master_checklist_details = await prisma.master_checklist_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends master_checklist_detailsFindFirstArgs>(args?: SelectSubset<T, master_checklist_detailsFindFirstArgs<ExtArgs>>): Prisma__master_checklist_detailsClient<$Result.GetResult<Prisma.$master_checklist_detailsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Master_checklist_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_checklist_detailsFindFirstOrThrowArgs} args - Arguments to find a Master_checklist_details
     * @example
     * // Get one Master_checklist_details
     * const master_checklist_details = await prisma.master_checklist_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends master_checklist_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, master_checklist_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__master_checklist_detailsClient<$Result.GetResult<Prisma.$master_checklist_detailsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Master_checklist_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_checklist_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Master_checklist_details
     * const master_checklist_details = await prisma.master_checklist_details.findMany()
     * 
     * // Get first 10 Master_checklist_details
     * const master_checklist_details = await prisma.master_checklist_details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const master_checklist_detailsWithIdOnly = await prisma.master_checklist_details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends master_checklist_detailsFindManyArgs>(args?: SelectSubset<T, master_checklist_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$master_checklist_detailsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Master_checklist_details.
     * @param {master_checklist_detailsCreateArgs} args - Arguments to create a Master_checklist_details.
     * @example
     * // Create one Master_checklist_details
     * const Master_checklist_details = await prisma.master_checklist_details.create({
     *   data: {
     *     // ... data to create a Master_checklist_details
     *   }
     * })
     * 
     */
    create<T extends master_checklist_detailsCreateArgs>(args: SelectSubset<T, master_checklist_detailsCreateArgs<ExtArgs>>): Prisma__master_checklist_detailsClient<$Result.GetResult<Prisma.$master_checklist_detailsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Master_checklist_details.
     * @param {master_checklist_detailsCreateManyArgs} args - Arguments to create many Master_checklist_details.
     * @example
     * // Create many Master_checklist_details
     * const master_checklist_details = await prisma.master_checklist_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends master_checklist_detailsCreateManyArgs>(args?: SelectSubset<T, master_checklist_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Master_checklist_details.
     * @param {master_checklist_detailsDeleteArgs} args - Arguments to delete one Master_checklist_details.
     * @example
     * // Delete one Master_checklist_details
     * const Master_checklist_details = await prisma.master_checklist_details.delete({
     *   where: {
     *     // ... filter to delete one Master_checklist_details
     *   }
     * })
     * 
     */
    delete<T extends master_checklist_detailsDeleteArgs>(args: SelectSubset<T, master_checklist_detailsDeleteArgs<ExtArgs>>): Prisma__master_checklist_detailsClient<$Result.GetResult<Prisma.$master_checklist_detailsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Master_checklist_details.
     * @param {master_checklist_detailsUpdateArgs} args - Arguments to update one Master_checklist_details.
     * @example
     * // Update one Master_checklist_details
     * const master_checklist_details = await prisma.master_checklist_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends master_checklist_detailsUpdateArgs>(args: SelectSubset<T, master_checklist_detailsUpdateArgs<ExtArgs>>): Prisma__master_checklist_detailsClient<$Result.GetResult<Prisma.$master_checklist_detailsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Master_checklist_details.
     * @param {master_checklist_detailsDeleteManyArgs} args - Arguments to filter Master_checklist_details to delete.
     * @example
     * // Delete a few Master_checklist_details
     * const { count } = await prisma.master_checklist_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends master_checklist_detailsDeleteManyArgs>(args?: SelectSubset<T, master_checklist_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Master_checklist_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_checklist_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Master_checklist_details
     * const master_checklist_details = await prisma.master_checklist_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends master_checklist_detailsUpdateManyArgs>(args: SelectSubset<T, master_checklist_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Master_checklist_details.
     * @param {master_checklist_detailsUpsertArgs} args - Arguments to update or create a Master_checklist_details.
     * @example
     * // Update or create a Master_checklist_details
     * const master_checklist_details = await prisma.master_checklist_details.upsert({
     *   create: {
     *     // ... data to create a Master_checklist_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Master_checklist_details we want to update
     *   }
     * })
     */
    upsert<T extends master_checklist_detailsUpsertArgs>(args: SelectSubset<T, master_checklist_detailsUpsertArgs<ExtArgs>>): Prisma__master_checklist_detailsClient<$Result.GetResult<Prisma.$master_checklist_detailsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Master_checklist_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_checklist_detailsCountArgs} args - Arguments to filter Master_checklist_details to count.
     * @example
     * // Count the number of Master_checklist_details
     * const count = await prisma.master_checklist_details.count({
     *   where: {
     *     // ... the filter for the Master_checklist_details we want to count
     *   }
     * })
    **/
    count<T extends master_checklist_detailsCountArgs>(
      args?: Subset<T, master_checklist_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Master_checklist_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Master_checklist_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_checklist_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Master_checklist_detailsAggregateArgs>(args: Subset<T, Master_checklist_detailsAggregateArgs>): Prisma.PrismaPromise<GetMaster_checklist_detailsAggregateType<T>>

    /**
     * Group by Master_checklist_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_checklist_detailsGroupByArgs} args - Group by arguments.
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
      T extends master_checklist_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: master_checklist_detailsGroupByArgs['orderBy'] }
        : { orderBy?: master_checklist_detailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, master_checklist_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaster_checklist_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the master_checklist_details model
   */
  readonly fields: master_checklist_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for master_checklist_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__master_checklist_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    master_checklists<T extends master_checklistsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, master_checklistsDefaultArgs<ExtArgs>>): Prisma__master_checklistsClient<$Result.GetResult<Prisma.$master_checklistsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    users_master_checklist_details_updated_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    users_master_checklist_details_created_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the master_checklist_details model
   */ 
  interface master_checklist_detailsFieldRefs {
    readonly id: FieldRef<"master_checklist_details", 'String'>
    readonly checklist_header_id: FieldRef<"master_checklist_details", 'String'>
    readonly name: FieldRef<"master_checklist_details", 'String'>
    readonly short_desc: FieldRef<"master_checklist_details", 'String'>
    readonly required_image: FieldRef<"master_checklist_details", 'String'>
    readonly updated_by: FieldRef<"master_checklist_details", 'String'>
    readonly created_by: FieldRef<"master_checklist_details", 'String'>
    readonly updated_at: FieldRef<"master_checklist_details", 'DateTime'>
    readonly created_at: FieldRef<"master_checklist_details", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * master_checklist_details findUnique
   */
  export type master_checklist_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklist_details
     */
    select?: master_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklist_details
     */
    omit?: master_checklist_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklist_detailsInclude<ExtArgs> | null
    /**
     * Filter, which master_checklist_details to fetch.
     */
    where: master_checklist_detailsWhereUniqueInput
  }

  /**
   * master_checklist_details findUniqueOrThrow
   */
  export type master_checklist_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklist_details
     */
    select?: master_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklist_details
     */
    omit?: master_checklist_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklist_detailsInclude<ExtArgs> | null
    /**
     * Filter, which master_checklist_details to fetch.
     */
    where: master_checklist_detailsWhereUniqueInput
  }

  /**
   * master_checklist_details findFirst
   */
  export type master_checklist_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklist_details
     */
    select?: master_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklist_details
     */
    omit?: master_checklist_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklist_detailsInclude<ExtArgs> | null
    /**
     * Filter, which master_checklist_details to fetch.
     */
    where?: master_checklist_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_checklist_details to fetch.
     */
    orderBy?: master_checklist_detailsOrderByWithRelationInput | master_checklist_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for master_checklist_details.
     */
    cursor?: master_checklist_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_checklist_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_checklist_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of master_checklist_details.
     */
    distinct?: Master_checklist_detailsScalarFieldEnum | Master_checklist_detailsScalarFieldEnum[]
  }

  /**
   * master_checklist_details findFirstOrThrow
   */
  export type master_checklist_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklist_details
     */
    select?: master_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklist_details
     */
    omit?: master_checklist_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklist_detailsInclude<ExtArgs> | null
    /**
     * Filter, which master_checklist_details to fetch.
     */
    where?: master_checklist_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_checklist_details to fetch.
     */
    orderBy?: master_checklist_detailsOrderByWithRelationInput | master_checklist_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for master_checklist_details.
     */
    cursor?: master_checklist_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_checklist_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_checklist_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of master_checklist_details.
     */
    distinct?: Master_checklist_detailsScalarFieldEnum | Master_checklist_detailsScalarFieldEnum[]
  }

  /**
   * master_checklist_details findMany
   */
  export type master_checklist_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklist_details
     */
    select?: master_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklist_details
     */
    omit?: master_checklist_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklist_detailsInclude<ExtArgs> | null
    /**
     * Filter, which master_checklist_details to fetch.
     */
    where?: master_checklist_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_checklist_details to fetch.
     */
    orderBy?: master_checklist_detailsOrderByWithRelationInput | master_checklist_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing master_checklist_details.
     */
    cursor?: master_checklist_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_checklist_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_checklist_details.
     */
    skip?: number
    distinct?: Master_checklist_detailsScalarFieldEnum | Master_checklist_detailsScalarFieldEnum[]
  }

  /**
   * master_checklist_details create
   */
  export type master_checklist_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklist_details
     */
    select?: master_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklist_details
     */
    omit?: master_checklist_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklist_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a master_checklist_details.
     */
    data: XOR<master_checklist_detailsCreateInput, master_checklist_detailsUncheckedCreateInput>
  }

  /**
   * master_checklist_details createMany
   */
  export type master_checklist_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many master_checklist_details.
     */
    data: master_checklist_detailsCreateManyInput | master_checklist_detailsCreateManyInput[]
  }

  /**
   * master_checklist_details update
   */
  export type master_checklist_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklist_details
     */
    select?: master_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklist_details
     */
    omit?: master_checklist_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklist_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a master_checklist_details.
     */
    data: XOR<master_checklist_detailsUpdateInput, master_checklist_detailsUncheckedUpdateInput>
    /**
     * Choose, which master_checklist_details to update.
     */
    where: master_checklist_detailsWhereUniqueInput
  }

  /**
   * master_checklist_details updateMany
   */
  export type master_checklist_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update master_checklist_details.
     */
    data: XOR<master_checklist_detailsUpdateManyMutationInput, master_checklist_detailsUncheckedUpdateManyInput>
    /**
     * Filter which master_checklist_details to update
     */
    where?: master_checklist_detailsWhereInput
    /**
     * Limit how many master_checklist_details to update.
     */
    limit?: number
  }

  /**
   * master_checklist_details upsert
   */
  export type master_checklist_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklist_details
     */
    select?: master_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklist_details
     */
    omit?: master_checklist_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklist_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the master_checklist_details to update in case it exists.
     */
    where: master_checklist_detailsWhereUniqueInput
    /**
     * In case the master_checklist_details found by the `where` argument doesn't exist, create a new master_checklist_details with this data.
     */
    create: XOR<master_checklist_detailsCreateInput, master_checklist_detailsUncheckedCreateInput>
    /**
     * In case the master_checklist_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<master_checklist_detailsUpdateInput, master_checklist_detailsUncheckedUpdateInput>
  }

  /**
   * master_checklist_details delete
   */
  export type master_checklist_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklist_details
     */
    select?: master_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklist_details
     */
    omit?: master_checklist_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklist_detailsInclude<ExtArgs> | null
    /**
     * Filter which master_checklist_details to delete.
     */
    where: master_checklist_detailsWhereUniqueInput
  }

  /**
   * master_checklist_details deleteMany
   */
  export type master_checklist_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which master_checklist_details to delete
     */
    where?: master_checklist_detailsWhereInput
    /**
     * Limit how many master_checklist_details to delete.
     */
    limit?: number
  }

  /**
   * master_checklist_details without action
   */
  export type master_checklist_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklist_details
     */
    select?: master_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklist_details
     */
    omit?: master_checklist_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklist_detailsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    role: string | null
    password: string
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    master_checklist_details_master_checklist_details_updated_byTousers?: boolean | users$master_checklist_details_master_checklist_details_updated_byTousersArgs<ExtArgs>
    master_checklist_details_master_checklist_details_created_byTousers?: boolean | users$master_checklist_details_master_checklist_details_created_byTousersArgs<ExtArgs>
    master_checklists_master_checklists_updated_byTousers?: boolean | users$master_checklists_master_checklists_updated_byTousersArgs<ExtArgs>
    master_checklists_master_checklists_created_byTousers?: boolean | users$master_checklists_master_checklists_created_byTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "role" | "password" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    master_checklist_details_master_checklist_details_updated_byTousers?: boolean | users$master_checklist_details_master_checklist_details_updated_byTousersArgs<ExtArgs>
    master_checklist_details_master_checklist_details_created_byTousers?: boolean | users$master_checklist_details_master_checklist_details_created_byTousersArgs<ExtArgs>
    master_checklists_master_checklists_updated_byTousers?: boolean | users$master_checklists_master_checklists_updated_byTousersArgs<ExtArgs>
    master_checklists_master_checklists_created_byTousers?: boolean | users$master_checklists_master_checklists_created_byTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      master_checklist_details_master_checklist_details_updated_byTousers: Prisma.$master_checklist_detailsPayload<ExtArgs>[]
      master_checklist_details_master_checklist_details_created_byTousers: Prisma.$master_checklist_detailsPayload<ExtArgs>[]
      master_checklists_master_checklists_updated_byTousers: Prisma.$master_checklistsPayload<ExtArgs>[]
      master_checklists_master_checklists_created_byTousers: Prisma.$master_checklistsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      role: string | null
      password: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    master_checklist_details_master_checklist_details_updated_byTousers<T extends users$master_checklist_details_master_checklist_details_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$master_checklist_details_master_checklist_details_updated_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$master_checklist_detailsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    master_checklist_details_master_checklist_details_created_byTousers<T extends users$master_checklist_details_master_checklist_details_created_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$master_checklist_details_master_checklist_details_created_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$master_checklist_detailsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    master_checklists_master_checklists_updated_byTousers<T extends users$master_checklists_master_checklists_updated_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$master_checklists_master_checklists_updated_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$master_checklistsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    master_checklists_master_checklists_created_byTousers<T extends users$master_checklists_master_checklists_created_byTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$master_checklists_master_checklists_created_byTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$master_checklistsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.master_checklist_details_master_checklist_details_updated_byTousers
   */
  export type users$master_checklist_details_master_checklist_details_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklist_details
     */
    select?: master_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklist_details
     */
    omit?: master_checklist_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklist_detailsInclude<ExtArgs> | null
    where?: master_checklist_detailsWhereInput
    orderBy?: master_checklist_detailsOrderByWithRelationInput | master_checklist_detailsOrderByWithRelationInput[]
    cursor?: master_checklist_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Master_checklist_detailsScalarFieldEnum | Master_checklist_detailsScalarFieldEnum[]
  }

  /**
   * users.master_checklist_details_master_checklist_details_created_byTousers
   */
  export type users$master_checklist_details_master_checklist_details_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklist_details
     */
    select?: master_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklist_details
     */
    omit?: master_checklist_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklist_detailsInclude<ExtArgs> | null
    where?: master_checklist_detailsWhereInput
    orderBy?: master_checklist_detailsOrderByWithRelationInput | master_checklist_detailsOrderByWithRelationInput[]
    cursor?: master_checklist_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Master_checklist_detailsScalarFieldEnum | Master_checklist_detailsScalarFieldEnum[]
  }

  /**
   * users.master_checklists_master_checklists_updated_byTousers
   */
  export type users$master_checklists_master_checklists_updated_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklists
     */
    select?: master_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklists
     */
    omit?: master_checklistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklistsInclude<ExtArgs> | null
    where?: master_checklistsWhereInput
    orderBy?: master_checklistsOrderByWithRelationInput | master_checklistsOrderByWithRelationInput[]
    cursor?: master_checklistsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Master_checklistsScalarFieldEnum | Master_checklistsScalarFieldEnum[]
  }

  /**
   * users.master_checklists_master_checklists_created_byTousers
   */
  export type users$master_checklists_master_checklists_created_byTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklists
     */
    select?: master_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklists
     */
    omit?: master_checklistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklistsInclude<ExtArgs> | null
    where?: master_checklistsWhereInput
    orderBy?: master_checklistsOrderByWithRelationInput | master_checklistsOrderByWithRelationInput[]
    cursor?: master_checklistsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Master_checklistsScalarFieldEnum | Master_checklistsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model master_checklists
   */

  export type AggregateMaster_checklists = {
    _count: Master_checklistsCountAggregateOutputType | null
    _min: Master_checklistsMinAggregateOutputType | null
    _max: Master_checklistsMaxAggregateOutputType | null
  }

  export type Master_checklistsMinAggregateOutputType = {
    id: string | null
    name: string | null
    short_desc: string | null
    workcenter: string | null
    model: string | null
    status: boolean | null
    updated_by: string | null
    created_by: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type Master_checklistsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    short_desc: string | null
    workcenter: string | null
    model: string | null
    status: boolean | null
    updated_by: string | null
    created_by: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type Master_checklistsCountAggregateOutputType = {
    id: number
    name: number
    short_desc: number
    workcenter: number
    model: number
    status: number
    updated_by: number
    created_by: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type Master_checklistsMinAggregateInputType = {
    id?: true
    name?: true
    short_desc?: true
    workcenter?: true
    model?: true
    status?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
  }

  export type Master_checklistsMaxAggregateInputType = {
    id?: true
    name?: true
    short_desc?: true
    workcenter?: true
    model?: true
    status?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
  }

  export type Master_checklistsCountAggregateInputType = {
    id?: true
    name?: true
    short_desc?: true
    workcenter?: true
    model?: true
    status?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type Master_checklistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which master_checklists to aggregate.
     */
    where?: master_checklistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_checklists to fetch.
     */
    orderBy?: master_checklistsOrderByWithRelationInput | master_checklistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: master_checklistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned master_checklists
    **/
    _count?: true | Master_checklistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Master_checklistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Master_checklistsMaxAggregateInputType
  }

  export type GetMaster_checklistsAggregateType<T extends Master_checklistsAggregateArgs> = {
        [P in keyof T & keyof AggregateMaster_checklists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaster_checklists[P]>
      : GetScalarType<T[P], AggregateMaster_checklists[P]>
  }




  export type master_checklistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: master_checklistsWhereInput
    orderBy?: master_checklistsOrderByWithAggregationInput | master_checklistsOrderByWithAggregationInput[]
    by: Master_checklistsScalarFieldEnum[] | Master_checklistsScalarFieldEnum
    having?: master_checklistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Master_checklistsCountAggregateInputType | true
    _min?: Master_checklistsMinAggregateInputType
    _max?: Master_checklistsMaxAggregateInputType
  }

  export type Master_checklistsGroupByOutputType = {
    id: string
    name: string
    short_desc: string
    workcenter: string
    model: string
    status: boolean
    updated_by: string
    created_by: string
    updated_at: Date | null
    created_at: Date | null
    _count: Master_checklistsCountAggregateOutputType | null
    _min: Master_checklistsMinAggregateOutputType | null
    _max: Master_checklistsMaxAggregateOutputType | null
  }

  type GetMaster_checklistsGroupByPayload<T extends master_checklistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Master_checklistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Master_checklistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Master_checklistsGroupByOutputType[P]>
            : GetScalarType<T[P], Master_checklistsGroupByOutputType[P]>
        }
      >
    >


  export type master_checklistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    short_desc?: boolean
    workcenter?: boolean
    model?: boolean
    status?: boolean
    updated_by?: boolean
    created_by?: boolean
    updated_at?: boolean
    created_at?: boolean
    master_checklist_details?: boolean | master_checklists$master_checklist_detailsArgs<ExtArgs>
    users_master_checklists_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_master_checklists_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Master_checklistsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["master_checklists"]>



  export type master_checklistsSelectScalar = {
    id?: boolean
    name?: boolean
    short_desc?: boolean
    workcenter?: boolean
    model?: boolean
    status?: boolean
    updated_by?: boolean
    created_by?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type master_checklistsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "short_desc" | "workcenter" | "model" | "status" | "updated_by" | "created_by" | "updated_at" | "created_at", ExtArgs["result"]["master_checklists"]>
  export type master_checklistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    master_checklist_details?: boolean | master_checklists$master_checklist_detailsArgs<ExtArgs>
    users_master_checklists_updated_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    users_master_checklists_created_byTousers?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Master_checklistsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $master_checklistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "master_checklists"
    objects: {
      master_checklist_details: Prisma.$master_checklist_detailsPayload<ExtArgs>[]
      users_master_checklists_updated_byTousers: Prisma.$usersPayload<ExtArgs>
      users_master_checklists_created_byTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      short_desc: string
      workcenter: string
      model: string
      status: boolean
      updated_by: string
      created_by: string
      updated_at: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["master_checklists"]>
    composites: {}
  }

  type master_checklistsGetPayload<S extends boolean | null | undefined | master_checklistsDefaultArgs> = $Result.GetResult<Prisma.$master_checklistsPayload, S>

  type master_checklistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<master_checklistsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Master_checklistsCountAggregateInputType | true
    }

  export interface master_checklistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['master_checklists'], meta: { name: 'master_checklists' } }
    /**
     * Find zero or one Master_checklists that matches the filter.
     * @param {master_checklistsFindUniqueArgs} args - Arguments to find a Master_checklists
     * @example
     * // Get one Master_checklists
     * const master_checklists = await prisma.master_checklists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends master_checklistsFindUniqueArgs>(args: SelectSubset<T, master_checklistsFindUniqueArgs<ExtArgs>>): Prisma__master_checklistsClient<$Result.GetResult<Prisma.$master_checklistsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Master_checklists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {master_checklistsFindUniqueOrThrowArgs} args - Arguments to find a Master_checklists
     * @example
     * // Get one Master_checklists
     * const master_checklists = await prisma.master_checklists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends master_checklistsFindUniqueOrThrowArgs>(args: SelectSubset<T, master_checklistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__master_checklistsClient<$Result.GetResult<Prisma.$master_checklistsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Master_checklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_checklistsFindFirstArgs} args - Arguments to find a Master_checklists
     * @example
     * // Get one Master_checklists
     * const master_checklists = await prisma.master_checklists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends master_checklistsFindFirstArgs>(args?: SelectSubset<T, master_checklistsFindFirstArgs<ExtArgs>>): Prisma__master_checklistsClient<$Result.GetResult<Prisma.$master_checklistsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Master_checklists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_checklistsFindFirstOrThrowArgs} args - Arguments to find a Master_checklists
     * @example
     * // Get one Master_checklists
     * const master_checklists = await prisma.master_checklists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends master_checklistsFindFirstOrThrowArgs>(args?: SelectSubset<T, master_checklistsFindFirstOrThrowArgs<ExtArgs>>): Prisma__master_checklistsClient<$Result.GetResult<Prisma.$master_checklistsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Master_checklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_checklistsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Master_checklists
     * const master_checklists = await prisma.master_checklists.findMany()
     * 
     * // Get first 10 Master_checklists
     * const master_checklists = await prisma.master_checklists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const master_checklistsWithIdOnly = await prisma.master_checklists.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends master_checklistsFindManyArgs>(args?: SelectSubset<T, master_checklistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$master_checklistsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Master_checklists.
     * @param {master_checklistsCreateArgs} args - Arguments to create a Master_checklists.
     * @example
     * // Create one Master_checklists
     * const Master_checklists = await prisma.master_checklists.create({
     *   data: {
     *     // ... data to create a Master_checklists
     *   }
     * })
     * 
     */
    create<T extends master_checklistsCreateArgs>(args: SelectSubset<T, master_checklistsCreateArgs<ExtArgs>>): Prisma__master_checklistsClient<$Result.GetResult<Prisma.$master_checklistsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Master_checklists.
     * @param {master_checklistsCreateManyArgs} args - Arguments to create many Master_checklists.
     * @example
     * // Create many Master_checklists
     * const master_checklists = await prisma.master_checklists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends master_checklistsCreateManyArgs>(args?: SelectSubset<T, master_checklistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Master_checklists.
     * @param {master_checklistsDeleteArgs} args - Arguments to delete one Master_checklists.
     * @example
     * // Delete one Master_checklists
     * const Master_checklists = await prisma.master_checklists.delete({
     *   where: {
     *     // ... filter to delete one Master_checklists
     *   }
     * })
     * 
     */
    delete<T extends master_checklistsDeleteArgs>(args: SelectSubset<T, master_checklistsDeleteArgs<ExtArgs>>): Prisma__master_checklistsClient<$Result.GetResult<Prisma.$master_checklistsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Master_checklists.
     * @param {master_checklistsUpdateArgs} args - Arguments to update one Master_checklists.
     * @example
     * // Update one Master_checklists
     * const master_checklists = await prisma.master_checklists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends master_checklistsUpdateArgs>(args: SelectSubset<T, master_checklistsUpdateArgs<ExtArgs>>): Prisma__master_checklistsClient<$Result.GetResult<Prisma.$master_checklistsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Master_checklists.
     * @param {master_checklistsDeleteManyArgs} args - Arguments to filter Master_checklists to delete.
     * @example
     * // Delete a few Master_checklists
     * const { count } = await prisma.master_checklists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends master_checklistsDeleteManyArgs>(args?: SelectSubset<T, master_checklistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Master_checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_checklistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Master_checklists
     * const master_checklists = await prisma.master_checklists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends master_checklistsUpdateManyArgs>(args: SelectSubset<T, master_checklistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Master_checklists.
     * @param {master_checklistsUpsertArgs} args - Arguments to update or create a Master_checklists.
     * @example
     * // Update or create a Master_checklists
     * const master_checklists = await prisma.master_checklists.upsert({
     *   create: {
     *     // ... data to create a Master_checklists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Master_checklists we want to update
     *   }
     * })
     */
    upsert<T extends master_checklistsUpsertArgs>(args: SelectSubset<T, master_checklistsUpsertArgs<ExtArgs>>): Prisma__master_checklistsClient<$Result.GetResult<Prisma.$master_checklistsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Master_checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_checklistsCountArgs} args - Arguments to filter Master_checklists to count.
     * @example
     * // Count the number of Master_checklists
     * const count = await prisma.master_checklists.count({
     *   where: {
     *     // ... the filter for the Master_checklists we want to count
     *   }
     * })
    **/
    count<T extends master_checklistsCountArgs>(
      args?: Subset<T, master_checklistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Master_checklistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Master_checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_checklistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Master_checklistsAggregateArgs>(args: Subset<T, Master_checklistsAggregateArgs>): Prisma.PrismaPromise<GetMaster_checklistsAggregateType<T>>

    /**
     * Group by Master_checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_checklistsGroupByArgs} args - Group by arguments.
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
      T extends master_checklistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: master_checklistsGroupByArgs['orderBy'] }
        : { orderBy?: master_checklistsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, master_checklistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaster_checklistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the master_checklists model
   */
  readonly fields: master_checklistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for master_checklists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__master_checklistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    master_checklist_details<T extends master_checklists$master_checklist_detailsArgs<ExtArgs> = {}>(args?: Subset<T, master_checklists$master_checklist_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$master_checklist_detailsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    users_master_checklists_updated_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    users_master_checklists_created_byTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the master_checklists model
   */ 
  interface master_checklistsFieldRefs {
    readonly id: FieldRef<"master_checklists", 'String'>
    readonly name: FieldRef<"master_checklists", 'String'>
    readonly short_desc: FieldRef<"master_checklists", 'String'>
    readonly workcenter: FieldRef<"master_checklists", 'String'>
    readonly model: FieldRef<"master_checklists", 'String'>
    readonly status: FieldRef<"master_checklists", 'Boolean'>
    readonly updated_by: FieldRef<"master_checklists", 'String'>
    readonly created_by: FieldRef<"master_checklists", 'String'>
    readonly updated_at: FieldRef<"master_checklists", 'DateTime'>
    readonly created_at: FieldRef<"master_checklists", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * master_checklists findUnique
   */
  export type master_checklistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklists
     */
    select?: master_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklists
     */
    omit?: master_checklistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklistsInclude<ExtArgs> | null
    /**
     * Filter, which master_checklists to fetch.
     */
    where: master_checklistsWhereUniqueInput
  }

  /**
   * master_checklists findUniqueOrThrow
   */
  export type master_checklistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklists
     */
    select?: master_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklists
     */
    omit?: master_checklistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklistsInclude<ExtArgs> | null
    /**
     * Filter, which master_checklists to fetch.
     */
    where: master_checklistsWhereUniqueInput
  }

  /**
   * master_checklists findFirst
   */
  export type master_checklistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklists
     */
    select?: master_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklists
     */
    omit?: master_checklistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklistsInclude<ExtArgs> | null
    /**
     * Filter, which master_checklists to fetch.
     */
    where?: master_checklistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_checklists to fetch.
     */
    orderBy?: master_checklistsOrderByWithRelationInput | master_checklistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for master_checklists.
     */
    cursor?: master_checklistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of master_checklists.
     */
    distinct?: Master_checklistsScalarFieldEnum | Master_checklistsScalarFieldEnum[]
  }

  /**
   * master_checklists findFirstOrThrow
   */
  export type master_checklistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklists
     */
    select?: master_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklists
     */
    omit?: master_checklistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklistsInclude<ExtArgs> | null
    /**
     * Filter, which master_checklists to fetch.
     */
    where?: master_checklistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_checklists to fetch.
     */
    orderBy?: master_checklistsOrderByWithRelationInput | master_checklistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for master_checklists.
     */
    cursor?: master_checklistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of master_checklists.
     */
    distinct?: Master_checklistsScalarFieldEnum | Master_checklistsScalarFieldEnum[]
  }

  /**
   * master_checklists findMany
   */
  export type master_checklistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklists
     */
    select?: master_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklists
     */
    omit?: master_checklistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklistsInclude<ExtArgs> | null
    /**
     * Filter, which master_checklists to fetch.
     */
    where?: master_checklistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_checklists to fetch.
     */
    orderBy?: master_checklistsOrderByWithRelationInput | master_checklistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing master_checklists.
     */
    cursor?: master_checklistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_checklists.
     */
    skip?: number
    distinct?: Master_checklistsScalarFieldEnum | Master_checklistsScalarFieldEnum[]
  }

  /**
   * master_checklists create
   */
  export type master_checklistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklists
     */
    select?: master_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklists
     */
    omit?: master_checklistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklistsInclude<ExtArgs> | null
    /**
     * The data needed to create a master_checklists.
     */
    data: XOR<master_checklistsCreateInput, master_checklistsUncheckedCreateInput>
  }

  /**
   * master_checklists createMany
   */
  export type master_checklistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many master_checklists.
     */
    data: master_checklistsCreateManyInput | master_checklistsCreateManyInput[]
  }

  /**
   * master_checklists update
   */
  export type master_checklistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklists
     */
    select?: master_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklists
     */
    omit?: master_checklistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklistsInclude<ExtArgs> | null
    /**
     * The data needed to update a master_checklists.
     */
    data: XOR<master_checklistsUpdateInput, master_checklistsUncheckedUpdateInput>
    /**
     * Choose, which master_checklists to update.
     */
    where: master_checklistsWhereUniqueInput
  }

  /**
   * master_checklists updateMany
   */
  export type master_checklistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update master_checklists.
     */
    data: XOR<master_checklistsUpdateManyMutationInput, master_checklistsUncheckedUpdateManyInput>
    /**
     * Filter which master_checklists to update
     */
    where?: master_checklistsWhereInput
    /**
     * Limit how many master_checklists to update.
     */
    limit?: number
  }

  /**
   * master_checklists upsert
   */
  export type master_checklistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklists
     */
    select?: master_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklists
     */
    omit?: master_checklistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklistsInclude<ExtArgs> | null
    /**
     * The filter to search for the master_checklists to update in case it exists.
     */
    where: master_checklistsWhereUniqueInput
    /**
     * In case the master_checklists found by the `where` argument doesn't exist, create a new master_checklists with this data.
     */
    create: XOR<master_checklistsCreateInput, master_checklistsUncheckedCreateInput>
    /**
     * In case the master_checklists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<master_checklistsUpdateInput, master_checklistsUncheckedUpdateInput>
  }

  /**
   * master_checklists delete
   */
  export type master_checklistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklists
     */
    select?: master_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklists
     */
    omit?: master_checklistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklistsInclude<ExtArgs> | null
    /**
     * Filter which master_checklists to delete.
     */
    where: master_checklistsWhereUniqueInput
  }

  /**
   * master_checklists deleteMany
   */
  export type master_checklistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which master_checklists to delete
     */
    where?: master_checklistsWhereInput
    /**
     * Limit how many master_checklists to delete.
     */
    limit?: number
  }

  /**
   * master_checklists.master_checklist_details
   */
  export type master_checklists$master_checklist_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklist_details
     */
    select?: master_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklist_details
     */
    omit?: master_checklist_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklist_detailsInclude<ExtArgs> | null
    where?: master_checklist_detailsWhereInput
    orderBy?: master_checklist_detailsOrderByWithRelationInput | master_checklist_detailsOrderByWithRelationInput[]
    cursor?: master_checklist_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Master_checklist_detailsScalarFieldEnum | Master_checklist_detailsScalarFieldEnum[]
  }

  /**
   * master_checklists without action
   */
  export type master_checklistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_checklists
     */
    select?: master_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_checklists
     */
    omit?: master_checklistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: master_checklistsInclude<ExtArgs> | null
  }


  /**
   * Model master_image_checklists
   */

  export type AggregateMaster_image_checklists = {
    _count: Master_image_checklistsCountAggregateOutputType | null
    _min: Master_image_checklistsMinAggregateOutputType | null
    _max: Master_image_checklistsMaxAggregateOutputType | null
  }

  export type Master_image_checklistsMinAggregateOutputType = {
    id: string | null
    checklist_detail_id: string | null
    filename: string | null
    updated_by: string | null
    created_by: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type Master_image_checklistsMaxAggregateOutputType = {
    id: string | null
    checklist_detail_id: string | null
    filename: string | null
    updated_by: string | null
    created_by: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type Master_image_checklistsCountAggregateOutputType = {
    id: number
    checklist_detail_id: number
    filename: number
    updated_by: number
    created_by: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type Master_image_checklistsMinAggregateInputType = {
    id?: true
    checklist_detail_id?: true
    filename?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
  }

  export type Master_image_checklistsMaxAggregateInputType = {
    id?: true
    checklist_detail_id?: true
    filename?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
  }

  export type Master_image_checklistsCountAggregateInputType = {
    id?: true
    checklist_detail_id?: true
    filename?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type Master_image_checklistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which master_image_checklists to aggregate.
     */
    where?: master_image_checklistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_image_checklists to fetch.
     */
    orderBy?: master_image_checklistsOrderByWithRelationInput | master_image_checklistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: master_image_checklistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_image_checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_image_checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned master_image_checklists
    **/
    _count?: true | Master_image_checklistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Master_image_checklistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Master_image_checklistsMaxAggregateInputType
  }

  export type GetMaster_image_checklistsAggregateType<T extends Master_image_checklistsAggregateArgs> = {
        [P in keyof T & keyof AggregateMaster_image_checklists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaster_image_checklists[P]>
      : GetScalarType<T[P], AggregateMaster_image_checklists[P]>
  }




  export type master_image_checklistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: master_image_checklistsWhereInput
    orderBy?: master_image_checklistsOrderByWithAggregationInput | master_image_checklistsOrderByWithAggregationInput[]
    by: Master_image_checklistsScalarFieldEnum[] | Master_image_checklistsScalarFieldEnum
    having?: master_image_checklistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Master_image_checklistsCountAggregateInputType | true
    _min?: Master_image_checklistsMinAggregateInputType
    _max?: Master_image_checklistsMaxAggregateInputType
  }

  export type Master_image_checklistsGroupByOutputType = {
    id: string
    checklist_detail_id: string
    filename: string
    updated_by: string
    created_by: string
    updated_at: Date | null
    created_at: Date | null
    _count: Master_image_checklistsCountAggregateOutputType | null
    _min: Master_image_checklistsMinAggregateOutputType | null
    _max: Master_image_checklistsMaxAggregateOutputType | null
  }

  type GetMaster_image_checklistsGroupByPayload<T extends master_image_checklistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Master_image_checklistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Master_image_checklistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Master_image_checklistsGroupByOutputType[P]>
            : GetScalarType<T[P], Master_image_checklistsGroupByOutputType[P]>
        }
      >
    >


  export type master_image_checklistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checklist_detail_id?: boolean
    filename?: boolean
    updated_by?: boolean
    created_by?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["master_image_checklists"]>



  export type master_image_checklistsSelectScalar = {
    id?: boolean
    checklist_detail_id?: boolean
    filename?: boolean
    updated_by?: boolean
    created_by?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type master_image_checklistsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checklist_detail_id" | "filename" | "updated_by" | "created_by" | "updated_at" | "created_at", ExtArgs["result"]["master_image_checklists"]>

  export type $master_image_checklistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "master_image_checklists"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      checklist_detail_id: string
      filename: string
      updated_by: string
      created_by: string
      updated_at: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["master_image_checklists"]>
    composites: {}
  }

  type master_image_checklistsGetPayload<S extends boolean | null | undefined | master_image_checklistsDefaultArgs> = $Result.GetResult<Prisma.$master_image_checklistsPayload, S>

  type master_image_checklistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<master_image_checklistsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Master_image_checklistsCountAggregateInputType | true
    }

  export interface master_image_checklistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['master_image_checklists'], meta: { name: 'master_image_checklists' } }
    /**
     * Find zero or one Master_image_checklists that matches the filter.
     * @param {master_image_checklistsFindUniqueArgs} args - Arguments to find a Master_image_checklists
     * @example
     * // Get one Master_image_checklists
     * const master_image_checklists = await prisma.master_image_checklists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends master_image_checklistsFindUniqueArgs>(args: SelectSubset<T, master_image_checklistsFindUniqueArgs<ExtArgs>>): Prisma__master_image_checklistsClient<$Result.GetResult<Prisma.$master_image_checklistsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Master_image_checklists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {master_image_checklistsFindUniqueOrThrowArgs} args - Arguments to find a Master_image_checklists
     * @example
     * // Get one Master_image_checklists
     * const master_image_checklists = await prisma.master_image_checklists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends master_image_checklistsFindUniqueOrThrowArgs>(args: SelectSubset<T, master_image_checklistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__master_image_checklistsClient<$Result.GetResult<Prisma.$master_image_checklistsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Master_image_checklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_image_checklistsFindFirstArgs} args - Arguments to find a Master_image_checklists
     * @example
     * // Get one Master_image_checklists
     * const master_image_checklists = await prisma.master_image_checklists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends master_image_checklistsFindFirstArgs>(args?: SelectSubset<T, master_image_checklistsFindFirstArgs<ExtArgs>>): Prisma__master_image_checklistsClient<$Result.GetResult<Prisma.$master_image_checklistsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Master_image_checklists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_image_checklistsFindFirstOrThrowArgs} args - Arguments to find a Master_image_checklists
     * @example
     * // Get one Master_image_checklists
     * const master_image_checklists = await prisma.master_image_checklists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends master_image_checklistsFindFirstOrThrowArgs>(args?: SelectSubset<T, master_image_checklistsFindFirstOrThrowArgs<ExtArgs>>): Prisma__master_image_checklistsClient<$Result.GetResult<Prisma.$master_image_checklistsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Master_image_checklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_image_checklistsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Master_image_checklists
     * const master_image_checklists = await prisma.master_image_checklists.findMany()
     * 
     * // Get first 10 Master_image_checklists
     * const master_image_checklists = await prisma.master_image_checklists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const master_image_checklistsWithIdOnly = await prisma.master_image_checklists.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends master_image_checklistsFindManyArgs>(args?: SelectSubset<T, master_image_checklistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$master_image_checklistsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Master_image_checklists.
     * @param {master_image_checklistsCreateArgs} args - Arguments to create a Master_image_checklists.
     * @example
     * // Create one Master_image_checklists
     * const Master_image_checklists = await prisma.master_image_checklists.create({
     *   data: {
     *     // ... data to create a Master_image_checklists
     *   }
     * })
     * 
     */
    create<T extends master_image_checklistsCreateArgs>(args: SelectSubset<T, master_image_checklistsCreateArgs<ExtArgs>>): Prisma__master_image_checklistsClient<$Result.GetResult<Prisma.$master_image_checklistsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Master_image_checklists.
     * @param {master_image_checklistsCreateManyArgs} args - Arguments to create many Master_image_checklists.
     * @example
     * // Create many Master_image_checklists
     * const master_image_checklists = await prisma.master_image_checklists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends master_image_checklistsCreateManyArgs>(args?: SelectSubset<T, master_image_checklistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Master_image_checklists.
     * @param {master_image_checklistsDeleteArgs} args - Arguments to delete one Master_image_checklists.
     * @example
     * // Delete one Master_image_checklists
     * const Master_image_checklists = await prisma.master_image_checklists.delete({
     *   where: {
     *     // ... filter to delete one Master_image_checklists
     *   }
     * })
     * 
     */
    delete<T extends master_image_checklistsDeleteArgs>(args: SelectSubset<T, master_image_checklistsDeleteArgs<ExtArgs>>): Prisma__master_image_checklistsClient<$Result.GetResult<Prisma.$master_image_checklistsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Master_image_checklists.
     * @param {master_image_checklistsUpdateArgs} args - Arguments to update one Master_image_checklists.
     * @example
     * // Update one Master_image_checklists
     * const master_image_checklists = await prisma.master_image_checklists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends master_image_checklistsUpdateArgs>(args: SelectSubset<T, master_image_checklistsUpdateArgs<ExtArgs>>): Prisma__master_image_checklistsClient<$Result.GetResult<Prisma.$master_image_checklistsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Master_image_checklists.
     * @param {master_image_checklistsDeleteManyArgs} args - Arguments to filter Master_image_checklists to delete.
     * @example
     * // Delete a few Master_image_checklists
     * const { count } = await prisma.master_image_checklists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends master_image_checklistsDeleteManyArgs>(args?: SelectSubset<T, master_image_checklistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Master_image_checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_image_checklistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Master_image_checklists
     * const master_image_checklists = await prisma.master_image_checklists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends master_image_checklistsUpdateManyArgs>(args: SelectSubset<T, master_image_checklistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Master_image_checklists.
     * @param {master_image_checklistsUpsertArgs} args - Arguments to update or create a Master_image_checklists.
     * @example
     * // Update or create a Master_image_checklists
     * const master_image_checklists = await prisma.master_image_checklists.upsert({
     *   create: {
     *     // ... data to create a Master_image_checklists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Master_image_checklists we want to update
     *   }
     * })
     */
    upsert<T extends master_image_checklistsUpsertArgs>(args: SelectSubset<T, master_image_checklistsUpsertArgs<ExtArgs>>): Prisma__master_image_checklistsClient<$Result.GetResult<Prisma.$master_image_checklistsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Master_image_checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_image_checklistsCountArgs} args - Arguments to filter Master_image_checklists to count.
     * @example
     * // Count the number of Master_image_checklists
     * const count = await prisma.master_image_checklists.count({
     *   where: {
     *     // ... the filter for the Master_image_checklists we want to count
     *   }
     * })
    **/
    count<T extends master_image_checklistsCountArgs>(
      args?: Subset<T, master_image_checklistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Master_image_checklistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Master_image_checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_image_checklistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Master_image_checklistsAggregateArgs>(args: Subset<T, Master_image_checklistsAggregateArgs>): Prisma.PrismaPromise<GetMaster_image_checklistsAggregateType<T>>

    /**
     * Group by Master_image_checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {master_image_checklistsGroupByArgs} args - Group by arguments.
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
      T extends master_image_checklistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: master_image_checklistsGroupByArgs['orderBy'] }
        : { orderBy?: master_image_checklistsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, master_image_checklistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaster_image_checklistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the master_image_checklists model
   */
  readonly fields: master_image_checklistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for master_image_checklists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__master_image_checklistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the master_image_checklists model
   */ 
  interface master_image_checklistsFieldRefs {
    readonly id: FieldRef<"master_image_checklists", 'String'>
    readonly checklist_detail_id: FieldRef<"master_image_checklists", 'String'>
    readonly filename: FieldRef<"master_image_checklists", 'String'>
    readonly updated_by: FieldRef<"master_image_checklists", 'String'>
    readonly created_by: FieldRef<"master_image_checklists", 'String'>
    readonly updated_at: FieldRef<"master_image_checklists", 'DateTime'>
    readonly created_at: FieldRef<"master_image_checklists", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * master_image_checklists findUnique
   */
  export type master_image_checklistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_image_checklists
     */
    select?: master_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_image_checklists
     */
    omit?: master_image_checklistsOmit<ExtArgs> | null
    /**
     * Filter, which master_image_checklists to fetch.
     */
    where: master_image_checklistsWhereUniqueInput
  }

  /**
   * master_image_checklists findUniqueOrThrow
   */
  export type master_image_checklistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_image_checklists
     */
    select?: master_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_image_checklists
     */
    omit?: master_image_checklistsOmit<ExtArgs> | null
    /**
     * Filter, which master_image_checklists to fetch.
     */
    where: master_image_checklistsWhereUniqueInput
  }

  /**
   * master_image_checklists findFirst
   */
  export type master_image_checklistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_image_checklists
     */
    select?: master_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_image_checklists
     */
    omit?: master_image_checklistsOmit<ExtArgs> | null
    /**
     * Filter, which master_image_checklists to fetch.
     */
    where?: master_image_checklistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_image_checklists to fetch.
     */
    orderBy?: master_image_checklistsOrderByWithRelationInput | master_image_checklistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for master_image_checklists.
     */
    cursor?: master_image_checklistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_image_checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_image_checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of master_image_checklists.
     */
    distinct?: Master_image_checklistsScalarFieldEnum | Master_image_checklistsScalarFieldEnum[]
  }

  /**
   * master_image_checklists findFirstOrThrow
   */
  export type master_image_checklistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_image_checklists
     */
    select?: master_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_image_checklists
     */
    omit?: master_image_checklistsOmit<ExtArgs> | null
    /**
     * Filter, which master_image_checklists to fetch.
     */
    where?: master_image_checklistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_image_checklists to fetch.
     */
    orderBy?: master_image_checklistsOrderByWithRelationInput | master_image_checklistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for master_image_checklists.
     */
    cursor?: master_image_checklistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_image_checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_image_checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of master_image_checklists.
     */
    distinct?: Master_image_checklistsScalarFieldEnum | Master_image_checklistsScalarFieldEnum[]
  }

  /**
   * master_image_checklists findMany
   */
  export type master_image_checklistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_image_checklists
     */
    select?: master_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_image_checklists
     */
    omit?: master_image_checklistsOmit<ExtArgs> | null
    /**
     * Filter, which master_image_checklists to fetch.
     */
    where?: master_image_checklistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of master_image_checklists to fetch.
     */
    orderBy?: master_image_checklistsOrderByWithRelationInput | master_image_checklistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing master_image_checklists.
     */
    cursor?: master_image_checklistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` master_image_checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` master_image_checklists.
     */
    skip?: number
    distinct?: Master_image_checklistsScalarFieldEnum | Master_image_checklistsScalarFieldEnum[]
  }

  /**
   * master_image_checklists create
   */
  export type master_image_checklistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_image_checklists
     */
    select?: master_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_image_checklists
     */
    omit?: master_image_checklistsOmit<ExtArgs> | null
    /**
     * The data needed to create a master_image_checklists.
     */
    data: XOR<master_image_checklistsCreateInput, master_image_checklistsUncheckedCreateInput>
  }

  /**
   * master_image_checklists createMany
   */
  export type master_image_checklistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many master_image_checklists.
     */
    data: master_image_checklistsCreateManyInput | master_image_checklistsCreateManyInput[]
  }

  /**
   * master_image_checklists update
   */
  export type master_image_checklistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_image_checklists
     */
    select?: master_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_image_checklists
     */
    omit?: master_image_checklistsOmit<ExtArgs> | null
    /**
     * The data needed to update a master_image_checklists.
     */
    data: XOR<master_image_checklistsUpdateInput, master_image_checklistsUncheckedUpdateInput>
    /**
     * Choose, which master_image_checklists to update.
     */
    where: master_image_checklistsWhereUniqueInput
  }

  /**
   * master_image_checklists updateMany
   */
  export type master_image_checklistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update master_image_checklists.
     */
    data: XOR<master_image_checklistsUpdateManyMutationInput, master_image_checklistsUncheckedUpdateManyInput>
    /**
     * Filter which master_image_checklists to update
     */
    where?: master_image_checklistsWhereInput
    /**
     * Limit how many master_image_checklists to update.
     */
    limit?: number
  }

  /**
   * master_image_checklists upsert
   */
  export type master_image_checklistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_image_checklists
     */
    select?: master_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_image_checklists
     */
    omit?: master_image_checklistsOmit<ExtArgs> | null
    /**
     * The filter to search for the master_image_checklists to update in case it exists.
     */
    where: master_image_checklistsWhereUniqueInput
    /**
     * In case the master_image_checklists found by the `where` argument doesn't exist, create a new master_image_checklists with this data.
     */
    create: XOR<master_image_checklistsCreateInput, master_image_checklistsUncheckedCreateInput>
    /**
     * In case the master_image_checklists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<master_image_checklistsUpdateInput, master_image_checklistsUncheckedUpdateInput>
  }

  /**
   * master_image_checklists delete
   */
  export type master_image_checklistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_image_checklists
     */
    select?: master_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_image_checklists
     */
    omit?: master_image_checklistsOmit<ExtArgs> | null
    /**
     * Filter which master_image_checklists to delete.
     */
    where: master_image_checklistsWhereUniqueInput
  }

  /**
   * master_image_checklists deleteMany
   */
  export type master_image_checklistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which master_image_checklists to delete
     */
    where?: master_image_checklistsWhereInput
    /**
     * Limit how many master_image_checklists to delete.
     */
    limit?: number
  }

  /**
   * master_image_checklists without action
   */
  export type master_image_checklistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the master_image_checklists
     */
    select?: master_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the master_image_checklists
     */
    omit?: master_image_checklistsOmit<ExtArgs> | null
  }


  /**
   * Model order_checklists
   */

  export type AggregateOrder_checklists = {
    _count: Order_checklistsCountAggregateOutputType | null
    _min: Order_checklistsMinAggregateOutputType | null
    _max: Order_checklistsMaxAggregateOutputType | null
  }

  export type Order_checklistsMinAggregateOutputType = {
    id: string | null
    checklist_id: string | null
    order_id: string | null
    model: string | null
    workcenter: string | null
    status: boolean | null
    date_open: Date | null
    date_closed: Date | null
    updated_by: string | null
    created_by: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type Order_checklistsMaxAggregateOutputType = {
    id: string | null
    checklist_id: string | null
    order_id: string | null
    model: string | null
    workcenter: string | null
    status: boolean | null
    date_open: Date | null
    date_closed: Date | null
    updated_by: string | null
    created_by: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type Order_checklistsCountAggregateOutputType = {
    id: number
    checklist_id: number
    order_id: number
    model: number
    workcenter: number
    status: number
    date_open: number
    date_closed: number
    updated_by: number
    created_by: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type Order_checklistsMinAggregateInputType = {
    id?: true
    checklist_id?: true
    order_id?: true
    model?: true
    workcenter?: true
    status?: true
    date_open?: true
    date_closed?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
  }

  export type Order_checklistsMaxAggregateInputType = {
    id?: true
    checklist_id?: true
    order_id?: true
    model?: true
    workcenter?: true
    status?: true
    date_open?: true
    date_closed?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
  }

  export type Order_checklistsCountAggregateInputType = {
    id?: true
    checklist_id?: true
    order_id?: true
    model?: true
    workcenter?: true
    status?: true
    date_open?: true
    date_closed?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type Order_checklistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_checklists to aggregate.
     */
    where?: order_checklistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_checklists to fetch.
     */
    orderBy?: order_checklistsOrderByWithRelationInput | order_checklistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_checklistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_checklists
    **/
    _count?: true | Order_checklistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_checklistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_checklistsMaxAggregateInputType
  }

  export type GetOrder_checklistsAggregateType<T extends Order_checklistsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_checklists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_checklists[P]>
      : GetScalarType<T[P], AggregateOrder_checklists[P]>
  }




  export type order_checklistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_checklistsWhereInput
    orderBy?: order_checklistsOrderByWithAggregationInput | order_checklistsOrderByWithAggregationInput[]
    by: Order_checklistsScalarFieldEnum[] | Order_checklistsScalarFieldEnum
    having?: order_checklistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_checklistsCountAggregateInputType | true
    _min?: Order_checklistsMinAggregateInputType
    _max?: Order_checklistsMaxAggregateInputType
  }

  export type Order_checklistsGroupByOutputType = {
    id: string
    checklist_id: string
    order_id: string
    model: string
    workcenter: string
    status: boolean
    date_open: Date | null
    date_closed: Date | null
    updated_by: string
    created_by: string
    updated_at: Date | null
    created_at: Date | null
    _count: Order_checklistsCountAggregateOutputType | null
    _min: Order_checklistsMinAggregateOutputType | null
    _max: Order_checklistsMaxAggregateOutputType | null
  }

  type GetOrder_checklistsGroupByPayload<T extends order_checklistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_checklistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_checklistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_checklistsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_checklistsGroupByOutputType[P]>
        }
      >
    >


  export type order_checklistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checklist_id?: boolean
    order_id?: boolean
    model?: boolean
    workcenter?: boolean
    status?: boolean
    date_open?: boolean
    date_closed?: boolean
    updated_by?: boolean
    created_by?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["order_checklists"]>



  export type order_checklistsSelectScalar = {
    id?: boolean
    checklist_id?: boolean
    order_id?: boolean
    model?: boolean
    workcenter?: boolean
    status?: boolean
    date_open?: boolean
    date_closed?: boolean
    updated_by?: boolean
    created_by?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type order_checklistsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checklist_id" | "order_id" | "model" | "workcenter" | "status" | "date_open" | "date_closed" | "updated_by" | "created_by" | "updated_at" | "created_at", ExtArgs["result"]["order_checklists"]>

  export type $order_checklistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_checklists"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      checklist_id: string
      order_id: string
      model: string
      workcenter: string
      status: boolean
      date_open: Date | null
      date_closed: Date | null
      updated_by: string
      created_by: string
      updated_at: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["order_checklists"]>
    composites: {}
  }

  type order_checklistsGetPayload<S extends boolean | null | undefined | order_checklistsDefaultArgs> = $Result.GetResult<Prisma.$order_checklistsPayload, S>

  type order_checklistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_checklistsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_checklistsCountAggregateInputType | true
    }

  export interface order_checklistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_checklists'], meta: { name: 'order_checklists' } }
    /**
     * Find zero or one Order_checklists that matches the filter.
     * @param {order_checklistsFindUniqueArgs} args - Arguments to find a Order_checklists
     * @example
     * // Get one Order_checklists
     * const order_checklists = await prisma.order_checklists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_checklistsFindUniqueArgs>(args: SelectSubset<T, order_checklistsFindUniqueArgs<ExtArgs>>): Prisma__order_checklistsClient<$Result.GetResult<Prisma.$order_checklistsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Order_checklists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_checklistsFindUniqueOrThrowArgs} args - Arguments to find a Order_checklists
     * @example
     * // Get one Order_checklists
     * const order_checklists = await prisma.order_checklists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_checklistsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_checklistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_checklistsClient<$Result.GetResult<Prisma.$order_checklistsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Order_checklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklistsFindFirstArgs} args - Arguments to find a Order_checklists
     * @example
     * // Get one Order_checklists
     * const order_checklists = await prisma.order_checklists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_checklistsFindFirstArgs>(args?: SelectSubset<T, order_checklistsFindFirstArgs<ExtArgs>>): Prisma__order_checklistsClient<$Result.GetResult<Prisma.$order_checklistsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Order_checklists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklistsFindFirstOrThrowArgs} args - Arguments to find a Order_checklists
     * @example
     * // Get one Order_checklists
     * const order_checklists = await prisma.order_checklists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_checklistsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_checklistsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_checklistsClient<$Result.GetResult<Prisma.$order_checklistsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Order_checklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklistsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_checklists
     * const order_checklists = await prisma.order_checklists.findMany()
     * 
     * // Get first 10 Order_checklists
     * const order_checklists = await prisma.order_checklists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_checklistsWithIdOnly = await prisma.order_checklists.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_checklistsFindManyArgs>(args?: SelectSubset<T, order_checklistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_checklistsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Order_checklists.
     * @param {order_checklistsCreateArgs} args - Arguments to create a Order_checklists.
     * @example
     * // Create one Order_checklists
     * const Order_checklists = await prisma.order_checklists.create({
     *   data: {
     *     // ... data to create a Order_checklists
     *   }
     * })
     * 
     */
    create<T extends order_checklistsCreateArgs>(args: SelectSubset<T, order_checklistsCreateArgs<ExtArgs>>): Prisma__order_checklistsClient<$Result.GetResult<Prisma.$order_checklistsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Order_checklists.
     * @param {order_checklistsCreateManyArgs} args - Arguments to create many Order_checklists.
     * @example
     * // Create many Order_checklists
     * const order_checklists = await prisma.order_checklists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_checklistsCreateManyArgs>(args?: SelectSubset<T, order_checklistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_checklists.
     * @param {order_checklistsDeleteArgs} args - Arguments to delete one Order_checklists.
     * @example
     * // Delete one Order_checklists
     * const Order_checklists = await prisma.order_checklists.delete({
     *   where: {
     *     // ... filter to delete one Order_checklists
     *   }
     * })
     * 
     */
    delete<T extends order_checklistsDeleteArgs>(args: SelectSubset<T, order_checklistsDeleteArgs<ExtArgs>>): Prisma__order_checklistsClient<$Result.GetResult<Prisma.$order_checklistsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Order_checklists.
     * @param {order_checklistsUpdateArgs} args - Arguments to update one Order_checklists.
     * @example
     * // Update one Order_checklists
     * const order_checklists = await prisma.order_checklists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_checklistsUpdateArgs>(args: SelectSubset<T, order_checklistsUpdateArgs<ExtArgs>>): Prisma__order_checklistsClient<$Result.GetResult<Prisma.$order_checklistsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Order_checklists.
     * @param {order_checklistsDeleteManyArgs} args - Arguments to filter Order_checklists to delete.
     * @example
     * // Delete a few Order_checklists
     * const { count } = await prisma.order_checklists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_checklistsDeleteManyArgs>(args?: SelectSubset<T, order_checklistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_checklists
     * const order_checklists = await prisma.order_checklists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_checklistsUpdateManyArgs>(args: SelectSubset<T, order_checklistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_checklists.
     * @param {order_checklistsUpsertArgs} args - Arguments to update or create a Order_checklists.
     * @example
     * // Update or create a Order_checklists
     * const order_checklists = await prisma.order_checklists.upsert({
     *   create: {
     *     // ... data to create a Order_checklists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_checklists we want to update
     *   }
     * })
     */
    upsert<T extends order_checklistsUpsertArgs>(args: SelectSubset<T, order_checklistsUpsertArgs<ExtArgs>>): Prisma__order_checklistsClient<$Result.GetResult<Prisma.$order_checklistsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Order_checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklistsCountArgs} args - Arguments to filter Order_checklists to count.
     * @example
     * // Count the number of Order_checklists
     * const count = await prisma.order_checklists.count({
     *   where: {
     *     // ... the filter for the Order_checklists we want to count
     *   }
     * })
    **/
    count<T extends order_checklistsCountArgs>(
      args?: Subset<T, order_checklistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_checklistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_checklistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_checklistsAggregateArgs>(args: Subset<T, Order_checklistsAggregateArgs>): Prisma.PrismaPromise<GetOrder_checklistsAggregateType<T>>

    /**
     * Group by Order_checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklistsGroupByArgs} args - Group by arguments.
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
      T extends order_checklistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_checklistsGroupByArgs['orderBy'] }
        : { orderBy?: order_checklistsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_checklistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_checklistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_checklists model
   */
  readonly fields: order_checklistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_checklists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_checklistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the order_checklists model
   */ 
  interface order_checklistsFieldRefs {
    readonly id: FieldRef<"order_checklists", 'String'>
    readonly checklist_id: FieldRef<"order_checklists", 'String'>
    readonly order_id: FieldRef<"order_checklists", 'String'>
    readonly model: FieldRef<"order_checklists", 'String'>
    readonly workcenter: FieldRef<"order_checklists", 'String'>
    readonly status: FieldRef<"order_checklists", 'Boolean'>
    readonly date_open: FieldRef<"order_checklists", 'DateTime'>
    readonly date_closed: FieldRef<"order_checklists", 'DateTime'>
    readonly updated_by: FieldRef<"order_checklists", 'String'>
    readonly created_by: FieldRef<"order_checklists", 'String'>
    readonly updated_at: FieldRef<"order_checklists", 'DateTime'>
    readonly created_at: FieldRef<"order_checklists", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order_checklists findUnique
   */
  export type order_checklistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklists
     */
    select?: order_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklists
     */
    omit?: order_checklistsOmit<ExtArgs> | null
    /**
     * Filter, which order_checklists to fetch.
     */
    where: order_checklistsWhereUniqueInput
  }

  /**
   * order_checklists findUniqueOrThrow
   */
  export type order_checklistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklists
     */
    select?: order_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklists
     */
    omit?: order_checklistsOmit<ExtArgs> | null
    /**
     * Filter, which order_checklists to fetch.
     */
    where: order_checklistsWhereUniqueInput
  }

  /**
   * order_checklists findFirst
   */
  export type order_checklistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklists
     */
    select?: order_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklists
     */
    omit?: order_checklistsOmit<ExtArgs> | null
    /**
     * Filter, which order_checklists to fetch.
     */
    where?: order_checklistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_checklists to fetch.
     */
    orderBy?: order_checklistsOrderByWithRelationInput | order_checklistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_checklists.
     */
    cursor?: order_checklistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_checklists.
     */
    distinct?: Order_checklistsScalarFieldEnum | Order_checklistsScalarFieldEnum[]
  }

  /**
   * order_checklists findFirstOrThrow
   */
  export type order_checklistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklists
     */
    select?: order_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklists
     */
    omit?: order_checklistsOmit<ExtArgs> | null
    /**
     * Filter, which order_checklists to fetch.
     */
    where?: order_checklistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_checklists to fetch.
     */
    orderBy?: order_checklistsOrderByWithRelationInput | order_checklistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_checklists.
     */
    cursor?: order_checklistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_checklists.
     */
    distinct?: Order_checklistsScalarFieldEnum | Order_checklistsScalarFieldEnum[]
  }

  /**
   * order_checklists findMany
   */
  export type order_checklistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklists
     */
    select?: order_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklists
     */
    omit?: order_checklistsOmit<ExtArgs> | null
    /**
     * Filter, which order_checklists to fetch.
     */
    where?: order_checklistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_checklists to fetch.
     */
    orderBy?: order_checklistsOrderByWithRelationInput | order_checklistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_checklists.
     */
    cursor?: order_checklistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_checklists.
     */
    skip?: number
    distinct?: Order_checklistsScalarFieldEnum | Order_checklistsScalarFieldEnum[]
  }

  /**
   * order_checklists create
   */
  export type order_checklistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklists
     */
    select?: order_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklists
     */
    omit?: order_checklistsOmit<ExtArgs> | null
    /**
     * The data needed to create a order_checklists.
     */
    data: XOR<order_checklistsCreateInput, order_checklistsUncheckedCreateInput>
  }

  /**
   * order_checklists createMany
   */
  export type order_checklistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_checklists.
     */
    data: order_checklistsCreateManyInput | order_checklistsCreateManyInput[]
  }

  /**
   * order_checklists update
   */
  export type order_checklistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklists
     */
    select?: order_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklists
     */
    omit?: order_checklistsOmit<ExtArgs> | null
    /**
     * The data needed to update a order_checklists.
     */
    data: XOR<order_checklistsUpdateInput, order_checklistsUncheckedUpdateInput>
    /**
     * Choose, which order_checklists to update.
     */
    where: order_checklistsWhereUniqueInput
  }

  /**
   * order_checklists updateMany
   */
  export type order_checklistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_checklists.
     */
    data: XOR<order_checklistsUpdateManyMutationInput, order_checklistsUncheckedUpdateManyInput>
    /**
     * Filter which order_checklists to update
     */
    where?: order_checklistsWhereInput
    /**
     * Limit how many order_checklists to update.
     */
    limit?: number
  }

  /**
   * order_checklists upsert
   */
  export type order_checklistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklists
     */
    select?: order_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklists
     */
    omit?: order_checklistsOmit<ExtArgs> | null
    /**
     * The filter to search for the order_checklists to update in case it exists.
     */
    where: order_checklistsWhereUniqueInput
    /**
     * In case the order_checklists found by the `where` argument doesn't exist, create a new order_checklists with this data.
     */
    create: XOR<order_checklistsCreateInput, order_checklistsUncheckedCreateInput>
    /**
     * In case the order_checklists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_checklistsUpdateInput, order_checklistsUncheckedUpdateInput>
  }

  /**
   * order_checklists delete
   */
  export type order_checklistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklists
     */
    select?: order_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklists
     */
    omit?: order_checklistsOmit<ExtArgs> | null
    /**
     * Filter which order_checklists to delete.
     */
    where: order_checklistsWhereUniqueInput
  }

  /**
   * order_checklists deleteMany
   */
  export type order_checklistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_checklists to delete
     */
    where?: order_checklistsWhereInput
    /**
     * Limit how many order_checklists to delete.
     */
    limit?: number
  }

  /**
   * order_checklists without action
   */
  export type order_checklistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklists
     */
    select?: order_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklists
     */
    omit?: order_checklistsOmit<ExtArgs> | null
  }


  /**
   * Model order_checklist_details
   */

  export type AggregateOrder_checklist_details = {
    _count: Order_checklist_detailsCountAggregateOutputType | null
    _min: Order_checklist_detailsMinAggregateOutputType | null
    _max: Order_checklist_detailsMaxAggregateOutputType | null
  }

  export type Order_checklist_detailsMinAggregateOutputType = {
    id: string | null
    order_checklist_id: string | null
    checked: boolean | null
    notes_by_prod: string | null
    notes_by_qc: string | null
    updated_by: string | null
    created_by: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type Order_checklist_detailsMaxAggregateOutputType = {
    id: string | null
    order_checklist_id: string | null
    checked: boolean | null
    notes_by_prod: string | null
    notes_by_qc: string | null
    updated_by: string | null
    created_by: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type Order_checklist_detailsCountAggregateOutputType = {
    id: number
    order_checklist_id: number
    checked: number
    notes_by_prod: number
    notes_by_qc: number
    updated_by: number
    created_by: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type Order_checklist_detailsMinAggregateInputType = {
    id?: true
    order_checklist_id?: true
    checked?: true
    notes_by_prod?: true
    notes_by_qc?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
  }

  export type Order_checklist_detailsMaxAggregateInputType = {
    id?: true
    order_checklist_id?: true
    checked?: true
    notes_by_prod?: true
    notes_by_qc?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
  }

  export type Order_checklist_detailsCountAggregateInputType = {
    id?: true
    order_checklist_id?: true
    checked?: true
    notes_by_prod?: true
    notes_by_qc?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type Order_checklist_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_checklist_details to aggregate.
     */
    where?: order_checklist_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_checklist_details to fetch.
     */
    orderBy?: order_checklist_detailsOrderByWithRelationInput | order_checklist_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_checklist_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_checklist_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_checklist_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_checklist_details
    **/
    _count?: true | Order_checklist_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_checklist_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_checklist_detailsMaxAggregateInputType
  }

  export type GetOrder_checklist_detailsAggregateType<T extends Order_checklist_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_checklist_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_checklist_details[P]>
      : GetScalarType<T[P], AggregateOrder_checklist_details[P]>
  }




  export type order_checklist_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_checklist_detailsWhereInput
    orderBy?: order_checklist_detailsOrderByWithAggregationInput | order_checklist_detailsOrderByWithAggregationInput[]
    by: Order_checklist_detailsScalarFieldEnum[] | Order_checklist_detailsScalarFieldEnum
    having?: order_checklist_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_checklist_detailsCountAggregateInputType | true
    _min?: Order_checklist_detailsMinAggregateInputType
    _max?: Order_checklist_detailsMaxAggregateInputType
  }

  export type Order_checklist_detailsGroupByOutputType = {
    id: string
    order_checklist_id: string
    checked: boolean
    notes_by_prod: string
    notes_by_qc: string
    updated_by: string
    created_by: string
    updated_at: Date | null
    created_at: Date | null
    _count: Order_checklist_detailsCountAggregateOutputType | null
    _min: Order_checklist_detailsMinAggregateOutputType | null
    _max: Order_checklist_detailsMaxAggregateOutputType | null
  }

  type GetOrder_checklist_detailsGroupByPayload<T extends order_checklist_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_checklist_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_checklist_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_checklist_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_checklist_detailsGroupByOutputType[P]>
        }
      >
    >


  export type order_checklist_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_checklist_id?: boolean
    checked?: boolean
    notes_by_prod?: boolean
    notes_by_qc?: boolean
    updated_by?: boolean
    created_by?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["order_checklist_details"]>



  export type order_checklist_detailsSelectScalar = {
    id?: boolean
    order_checklist_id?: boolean
    checked?: boolean
    notes_by_prod?: boolean
    notes_by_qc?: boolean
    updated_by?: boolean
    created_by?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type order_checklist_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_checklist_id" | "checked" | "notes_by_prod" | "notes_by_qc" | "updated_by" | "created_by" | "updated_at" | "created_at", ExtArgs["result"]["order_checklist_details"]>

  export type $order_checklist_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_checklist_details"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_checklist_id: string
      checked: boolean
      notes_by_prod: string
      notes_by_qc: string
      updated_by: string
      created_by: string
      updated_at: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["order_checklist_details"]>
    composites: {}
  }

  type order_checklist_detailsGetPayload<S extends boolean | null | undefined | order_checklist_detailsDefaultArgs> = $Result.GetResult<Prisma.$order_checklist_detailsPayload, S>

  type order_checklist_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_checklist_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_checklist_detailsCountAggregateInputType | true
    }

  export interface order_checklist_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_checklist_details'], meta: { name: 'order_checklist_details' } }
    /**
     * Find zero or one Order_checklist_details that matches the filter.
     * @param {order_checklist_detailsFindUniqueArgs} args - Arguments to find a Order_checklist_details
     * @example
     * // Get one Order_checklist_details
     * const order_checklist_details = await prisma.order_checklist_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_checklist_detailsFindUniqueArgs>(args: SelectSubset<T, order_checklist_detailsFindUniqueArgs<ExtArgs>>): Prisma__order_checklist_detailsClient<$Result.GetResult<Prisma.$order_checklist_detailsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Order_checklist_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_checklist_detailsFindUniqueOrThrowArgs} args - Arguments to find a Order_checklist_details
     * @example
     * // Get one Order_checklist_details
     * const order_checklist_details = await prisma.order_checklist_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_checklist_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_checklist_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_checklist_detailsClient<$Result.GetResult<Prisma.$order_checklist_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Order_checklist_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklist_detailsFindFirstArgs} args - Arguments to find a Order_checklist_details
     * @example
     * // Get one Order_checklist_details
     * const order_checklist_details = await prisma.order_checklist_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_checklist_detailsFindFirstArgs>(args?: SelectSubset<T, order_checklist_detailsFindFirstArgs<ExtArgs>>): Prisma__order_checklist_detailsClient<$Result.GetResult<Prisma.$order_checklist_detailsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Order_checklist_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklist_detailsFindFirstOrThrowArgs} args - Arguments to find a Order_checklist_details
     * @example
     * // Get one Order_checklist_details
     * const order_checklist_details = await prisma.order_checklist_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_checklist_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_checklist_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_checklist_detailsClient<$Result.GetResult<Prisma.$order_checklist_detailsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Order_checklist_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklist_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_checklist_details
     * const order_checklist_details = await prisma.order_checklist_details.findMany()
     * 
     * // Get first 10 Order_checklist_details
     * const order_checklist_details = await prisma.order_checklist_details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_checklist_detailsWithIdOnly = await prisma.order_checklist_details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_checklist_detailsFindManyArgs>(args?: SelectSubset<T, order_checklist_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_checklist_detailsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Order_checklist_details.
     * @param {order_checklist_detailsCreateArgs} args - Arguments to create a Order_checklist_details.
     * @example
     * // Create one Order_checklist_details
     * const Order_checklist_details = await prisma.order_checklist_details.create({
     *   data: {
     *     // ... data to create a Order_checklist_details
     *   }
     * })
     * 
     */
    create<T extends order_checklist_detailsCreateArgs>(args: SelectSubset<T, order_checklist_detailsCreateArgs<ExtArgs>>): Prisma__order_checklist_detailsClient<$Result.GetResult<Prisma.$order_checklist_detailsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Order_checklist_details.
     * @param {order_checklist_detailsCreateManyArgs} args - Arguments to create many Order_checklist_details.
     * @example
     * // Create many Order_checklist_details
     * const order_checklist_details = await prisma.order_checklist_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_checklist_detailsCreateManyArgs>(args?: SelectSubset<T, order_checklist_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_checklist_details.
     * @param {order_checklist_detailsDeleteArgs} args - Arguments to delete one Order_checklist_details.
     * @example
     * // Delete one Order_checklist_details
     * const Order_checklist_details = await prisma.order_checklist_details.delete({
     *   where: {
     *     // ... filter to delete one Order_checklist_details
     *   }
     * })
     * 
     */
    delete<T extends order_checklist_detailsDeleteArgs>(args: SelectSubset<T, order_checklist_detailsDeleteArgs<ExtArgs>>): Prisma__order_checklist_detailsClient<$Result.GetResult<Prisma.$order_checklist_detailsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Order_checklist_details.
     * @param {order_checklist_detailsUpdateArgs} args - Arguments to update one Order_checklist_details.
     * @example
     * // Update one Order_checklist_details
     * const order_checklist_details = await prisma.order_checklist_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_checklist_detailsUpdateArgs>(args: SelectSubset<T, order_checklist_detailsUpdateArgs<ExtArgs>>): Prisma__order_checklist_detailsClient<$Result.GetResult<Prisma.$order_checklist_detailsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Order_checklist_details.
     * @param {order_checklist_detailsDeleteManyArgs} args - Arguments to filter Order_checklist_details to delete.
     * @example
     * // Delete a few Order_checklist_details
     * const { count } = await prisma.order_checklist_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_checklist_detailsDeleteManyArgs>(args?: SelectSubset<T, order_checklist_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_checklist_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklist_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_checklist_details
     * const order_checklist_details = await prisma.order_checklist_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_checklist_detailsUpdateManyArgs>(args: SelectSubset<T, order_checklist_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_checklist_details.
     * @param {order_checklist_detailsUpsertArgs} args - Arguments to update or create a Order_checklist_details.
     * @example
     * // Update or create a Order_checklist_details
     * const order_checklist_details = await prisma.order_checklist_details.upsert({
     *   create: {
     *     // ... data to create a Order_checklist_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_checklist_details we want to update
     *   }
     * })
     */
    upsert<T extends order_checklist_detailsUpsertArgs>(args: SelectSubset<T, order_checklist_detailsUpsertArgs<ExtArgs>>): Prisma__order_checklist_detailsClient<$Result.GetResult<Prisma.$order_checklist_detailsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Order_checklist_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklist_detailsCountArgs} args - Arguments to filter Order_checklist_details to count.
     * @example
     * // Count the number of Order_checklist_details
     * const count = await prisma.order_checklist_details.count({
     *   where: {
     *     // ... the filter for the Order_checklist_details we want to count
     *   }
     * })
    **/
    count<T extends order_checklist_detailsCountArgs>(
      args?: Subset<T, order_checklist_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_checklist_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_checklist_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_checklist_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_checklist_detailsAggregateArgs>(args: Subset<T, Order_checklist_detailsAggregateArgs>): Prisma.PrismaPromise<GetOrder_checklist_detailsAggregateType<T>>

    /**
     * Group by Order_checklist_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklist_detailsGroupByArgs} args - Group by arguments.
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
      T extends order_checklist_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_checklist_detailsGroupByArgs['orderBy'] }
        : { orderBy?: order_checklist_detailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_checklist_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_checklist_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_checklist_details model
   */
  readonly fields: order_checklist_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_checklist_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_checklist_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the order_checklist_details model
   */ 
  interface order_checklist_detailsFieldRefs {
    readonly id: FieldRef<"order_checklist_details", 'String'>
    readonly order_checklist_id: FieldRef<"order_checklist_details", 'String'>
    readonly checked: FieldRef<"order_checklist_details", 'Boolean'>
    readonly notes_by_prod: FieldRef<"order_checklist_details", 'String'>
    readonly notes_by_qc: FieldRef<"order_checklist_details", 'String'>
    readonly updated_by: FieldRef<"order_checklist_details", 'String'>
    readonly created_by: FieldRef<"order_checklist_details", 'String'>
    readonly updated_at: FieldRef<"order_checklist_details", 'DateTime'>
    readonly created_at: FieldRef<"order_checklist_details", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order_checklist_details findUnique
   */
  export type order_checklist_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_details
     */
    select?: order_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_details
     */
    omit?: order_checklist_detailsOmit<ExtArgs> | null
    /**
     * Filter, which order_checklist_details to fetch.
     */
    where: order_checklist_detailsWhereUniqueInput
  }

  /**
   * order_checklist_details findUniqueOrThrow
   */
  export type order_checklist_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_details
     */
    select?: order_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_details
     */
    omit?: order_checklist_detailsOmit<ExtArgs> | null
    /**
     * Filter, which order_checklist_details to fetch.
     */
    where: order_checklist_detailsWhereUniqueInput
  }

  /**
   * order_checklist_details findFirst
   */
  export type order_checklist_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_details
     */
    select?: order_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_details
     */
    omit?: order_checklist_detailsOmit<ExtArgs> | null
    /**
     * Filter, which order_checklist_details to fetch.
     */
    where?: order_checklist_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_checklist_details to fetch.
     */
    orderBy?: order_checklist_detailsOrderByWithRelationInput | order_checklist_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_checklist_details.
     */
    cursor?: order_checklist_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_checklist_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_checklist_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_checklist_details.
     */
    distinct?: Order_checklist_detailsScalarFieldEnum | Order_checklist_detailsScalarFieldEnum[]
  }

  /**
   * order_checklist_details findFirstOrThrow
   */
  export type order_checklist_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_details
     */
    select?: order_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_details
     */
    omit?: order_checklist_detailsOmit<ExtArgs> | null
    /**
     * Filter, which order_checklist_details to fetch.
     */
    where?: order_checklist_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_checklist_details to fetch.
     */
    orderBy?: order_checklist_detailsOrderByWithRelationInput | order_checklist_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_checklist_details.
     */
    cursor?: order_checklist_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_checklist_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_checklist_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_checklist_details.
     */
    distinct?: Order_checklist_detailsScalarFieldEnum | Order_checklist_detailsScalarFieldEnum[]
  }

  /**
   * order_checklist_details findMany
   */
  export type order_checklist_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_details
     */
    select?: order_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_details
     */
    omit?: order_checklist_detailsOmit<ExtArgs> | null
    /**
     * Filter, which order_checklist_details to fetch.
     */
    where?: order_checklist_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_checklist_details to fetch.
     */
    orderBy?: order_checklist_detailsOrderByWithRelationInput | order_checklist_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_checklist_details.
     */
    cursor?: order_checklist_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_checklist_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_checklist_details.
     */
    skip?: number
    distinct?: Order_checklist_detailsScalarFieldEnum | Order_checklist_detailsScalarFieldEnum[]
  }

  /**
   * order_checklist_details create
   */
  export type order_checklist_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_details
     */
    select?: order_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_details
     */
    omit?: order_checklist_detailsOmit<ExtArgs> | null
    /**
     * The data needed to create a order_checklist_details.
     */
    data: XOR<order_checklist_detailsCreateInput, order_checklist_detailsUncheckedCreateInput>
  }

  /**
   * order_checklist_details createMany
   */
  export type order_checklist_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_checklist_details.
     */
    data: order_checklist_detailsCreateManyInput | order_checklist_detailsCreateManyInput[]
  }

  /**
   * order_checklist_details update
   */
  export type order_checklist_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_details
     */
    select?: order_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_details
     */
    omit?: order_checklist_detailsOmit<ExtArgs> | null
    /**
     * The data needed to update a order_checklist_details.
     */
    data: XOR<order_checklist_detailsUpdateInput, order_checklist_detailsUncheckedUpdateInput>
    /**
     * Choose, which order_checklist_details to update.
     */
    where: order_checklist_detailsWhereUniqueInput
  }

  /**
   * order_checklist_details updateMany
   */
  export type order_checklist_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_checklist_details.
     */
    data: XOR<order_checklist_detailsUpdateManyMutationInput, order_checklist_detailsUncheckedUpdateManyInput>
    /**
     * Filter which order_checklist_details to update
     */
    where?: order_checklist_detailsWhereInput
    /**
     * Limit how many order_checklist_details to update.
     */
    limit?: number
  }

  /**
   * order_checklist_details upsert
   */
  export type order_checklist_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_details
     */
    select?: order_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_details
     */
    omit?: order_checklist_detailsOmit<ExtArgs> | null
    /**
     * The filter to search for the order_checklist_details to update in case it exists.
     */
    where: order_checklist_detailsWhereUniqueInput
    /**
     * In case the order_checklist_details found by the `where` argument doesn't exist, create a new order_checklist_details with this data.
     */
    create: XOR<order_checklist_detailsCreateInput, order_checklist_detailsUncheckedCreateInput>
    /**
     * In case the order_checklist_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_checklist_detailsUpdateInput, order_checklist_detailsUncheckedUpdateInput>
  }

  /**
   * order_checklist_details delete
   */
  export type order_checklist_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_details
     */
    select?: order_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_details
     */
    omit?: order_checklist_detailsOmit<ExtArgs> | null
    /**
     * Filter which order_checklist_details to delete.
     */
    where: order_checklist_detailsWhereUniqueInput
  }

  /**
   * order_checklist_details deleteMany
   */
  export type order_checklist_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_checklist_details to delete
     */
    where?: order_checklist_detailsWhereInput
    /**
     * Limit how many order_checklist_details to delete.
     */
    limit?: number
  }

  /**
   * order_checklist_details without action
   */
  export type order_checklist_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_details
     */
    select?: order_checklist_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_details
     */
    omit?: order_checklist_detailsOmit<ExtArgs> | null
  }


  /**
   * Model order_checklist_notes
   */

  export type AggregateOrder_checklist_notes = {
    _count: Order_checklist_notesCountAggregateOutputType | null
    _min: Order_checklist_notesMinAggregateOutputType | null
    _max: Order_checklist_notesMaxAggregateOutputType | null
  }

  export type Order_checklist_notesMinAggregateOutputType = {
    id: string | null
    order_checklist_detail_id: string | null
    checked_status: boolean | null
    notes: string | null
    notes_by: string | null
    updated_by: string | null
    created_by: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type Order_checklist_notesMaxAggregateOutputType = {
    id: string | null
    order_checklist_detail_id: string | null
    checked_status: boolean | null
    notes: string | null
    notes_by: string | null
    updated_by: string | null
    created_by: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type Order_checklist_notesCountAggregateOutputType = {
    id: number
    order_checklist_detail_id: number
    checked_status: number
    notes: number
    notes_by: number
    updated_by: number
    created_by: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type Order_checklist_notesMinAggregateInputType = {
    id?: true
    order_checklist_detail_id?: true
    checked_status?: true
    notes?: true
    notes_by?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
  }

  export type Order_checklist_notesMaxAggregateInputType = {
    id?: true
    order_checklist_detail_id?: true
    checked_status?: true
    notes?: true
    notes_by?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
  }

  export type Order_checklist_notesCountAggregateInputType = {
    id?: true
    order_checklist_detail_id?: true
    checked_status?: true
    notes?: true
    notes_by?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type Order_checklist_notesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_checklist_notes to aggregate.
     */
    where?: order_checklist_notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_checklist_notes to fetch.
     */
    orderBy?: order_checklist_notesOrderByWithRelationInput | order_checklist_notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_checklist_notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_checklist_notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_checklist_notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_checklist_notes
    **/
    _count?: true | Order_checklist_notesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_checklist_notesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_checklist_notesMaxAggregateInputType
  }

  export type GetOrder_checklist_notesAggregateType<T extends Order_checklist_notesAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_checklist_notes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_checklist_notes[P]>
      : GetScalarType<T[P], AggregateOrder_checklist_notes[P]>
  }




  export type order_checklist_notesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_checklist_notesWhereInput
    orderBy?: order_checklist_notesOrderByWithAggregationInput | order_checklist_notesOrderByWithAggregationInput[]
    by: Order_checklist_notesScalarFieldEnum[] | Order_checklist_notesScalarFieldEnum
    having?: order_checklist_notesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_checklist_notesCountAggregateInputType | true
    _min?: Order_checklist_notesMinAggregateInputType
    _max?: Order_checklist_notesMaxAggregateInputType
  }

  export type Order_checklist_notesGroupByOutputType = {
    id: string
    order_checklist_detail_id: string
    checked_status: boolean
    notes: string
    notes_by: string
    updated_by: string
    created_by: string
    updated_at: Date | null
    created_at: Date | null
    _count: Order_checklist_notesCountAggregateOutputType | null
    _min: Order_checklist_notesMinAggregateOutputType | null
    _max: Order_checklist_notesMaxAggregateOutputType | null
  }

  type GetOrder_checklist_notesGroupByPayload<T extends order_checklist_notesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_checklist_notesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_checklist_notesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_checklist_notesGroupByOutputType[P]>
            : GetScalarType<T[P], Order_checklist_notesGroupByOutputType[P]>
        }
      >
    >


  export type order_checklist_notesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_checklist_detail_id?: boolean
    checked_status?: boolean
    notes?: boolean
    notes_by?: boolean
    updated_by?: boolean
    created_by?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["order_checklist_notes"]>



  export type order_checklist_notesSelectScalar = {
    id?: boolean
    order_checklist_detail_id?: boolean
    checked_status?: boolean
    notes?: boolean
    notes_by?: boolean
    updated_by?: boolean
    created_by?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type order_checklist_notesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_checklist_detail_id" | "checked_status" | "notes" | "notes_by" | "updated_by" | "created_by" | "updated_at" | "created_at", ExtArgs["result"]["order_checklist_notes"]>

  export type $order_checklist_notesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_checklist_notes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_checklist_detail_id: string
      checked_status: boolean
      notes: string
      notes_by: string
      updated_by: string
      created_by: string
      updated_at: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["order_checklist_notes"]>
    composites: {}
  }

  type order_checklist_notesGetPayload<S extends boolean | null | undefined | order_checklist_notesDefaultArgs> = $Result.GetResult<Prisma.$order_checklist_notesPayload, S>

  type order_checklist_notesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_checklist_notesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_checklist_notesCountAggregateInputType | true
    }

  export interface order_checklist_notesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_checklist_notes'], meta: { name: 'order_checklist_notes' } }
    /**
     * Find zero or one Order_checklist_notes that matches the filter.
     * @param {order_checklist_notesFindUniqueArgs} args - Arguments to find a Order_checklist_notes
     * @example
     * // Get one Order_checklist_notes
     * const order_checklist_notes = await prisma.order_checklist_notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_checklist_notesFindUniqueArgs>(args: SelectSubset<T, order_checklist_notesFindUniqueArgs<ExtArgs>>): Prisma__order_checklist_notesClient<$Result.GetResult<Prisma.$order_checklist_notesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Order_checklist_notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_checklist_notesFindUniqueOrThrowArgs} args - Arguments to find a Order_checklist_notes
     * @example
     * // Get one Order_checklist_notes
     * const order_checklist_notes = await prisma.order_checklist_notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_checklist_notesFindUniqueOrThrowArgs>(args: SelectSubset<T, order_checklist_notesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_checklist_notesClient<$Result.GetResult<Prisma.$order_checklist_notesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Order_checklist_notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklist_notesFindFirstArgs} args - Arguments to find a Order_checklist_notes
     * @example
     * // Get one Order_checklist_notes
     * const order_checklist_notes = await prisma.order_checklist_notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_checklist_notesFindFirstArgs>(args?: SelectSubset<T, order_checklist_notesFindFirstArgs<ExtArgs>>): Prisma__order_checklist_notesClient<$Result.GetResult<Prisma.$order_checklist_notesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Order_checklist_notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklist_notesFindFirstOrThrowArgs} args - Arguments to find a Order_checklist_notes
     * @example
     * // Get one Order_checklist_notes
     * const order_checklist_notes = await prisma.order_checklist_notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_checklist_notesFindFirstOrThrowArgs>(args?: SelectSubset<T, order_checklist_notesFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_checklist_notesClient<$Result.GetResult<Prisma.$order_checklist_notesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Order_checklist_notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklist_notesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_checklist_notes
     * const order_checklist_notes = await prisma.order_checklist_notes.findMany()
     * 
     * // Get first 10 Order_checklist_notes
     * const order_checklist_notes = await prisma.order_checklist_notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_checklist_notesWithIdOnly = await prisma.order_checklist_notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_checklist_notesFindManyArgs>(args?: SelectSubset<T, order_checklist_notesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_checklist_notesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Order_checklist_notes.
     * @param {order_checklist_notesCreateArgs} args - Arguments to create a Order_checklist_notes.
     * @example
     * // Create one Order_checklist_notes
     * const Order_checklist_notes = await prisma.order_checklist_notes.create({
     *   data: {
     *     // ... data to create a Order_checklist_notes
     *   }
     * })
     * 
     */
    create<T extends order_checklist_notesCreateArgs>(args: SelectSubset<T, order_checklist_notesCreateArgs<ExtArgs>>): Prisma__order_checklist_notesClient<$Result.GetResult<Prisma.$order_checklist_notesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Order_checklist_notes.
     * @param {order_checklist_notesCreateManyArgs} args - Arguments to create many Order_checklist_notes.
     * @example
     * // Create many Order_checklist_notes
     * const order_checklist_notes = await prisma.order_checklist_notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_checklist_notesCreateManyArgs>(args?: SelectSubset<T, order_checklist_notesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_checklist_notes.
     * @param {order_checklist_notesDeleteArgs} args - Arguments to delete one Order_checklist_notes.
     * @example
     * // Delete one Order_checklist_notes
     * const Order_checklist_notes = await prisma.order_checklist_notes.delete({
     *   where: {
     *     // ... filter to delete one Order_checklist_notes
     *   }
     * })
     * 
     */
    delete<T extends order_checklist_notesDeleteArgs>(args: SelectSubset<T, order_checklist_notesDeleteArgs<ExtArgs>>): Prisma__order_checklist_notesClient<$Result.GetResult<Prisma.$order_checklist_notesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Order_checklist_notes.
     * @param {order_checklist_notesUpdateArgs} args - Arguments to update one Order_checklist_notes.
     * @example
     * // Update one Order_checklist_notes
     * const order_checklist_notes = await prisma.order_checklist_notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_checklist_notesUpdateArgs>(args: SelectSubset<T, order_checklist_notesUpdateArgs<ExtArgs>>): Prisma__order_checklist_notesClient<$Result.GetResult<Prisma.$order_checklist_notesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Order_checklist_notes.
     * @param {order_checklist_notesDeleteManyArgs} args - Arguments to filter Order_checklist_notes to delete.
     * @example
     * // Delete a few Order_checklist_notes
     * const { count } = await prisma.order_checklist_notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_checklist_notesDeleteManyArgs>(args?: SelectSubset<T, order_checklist_notesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_checklist_notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklist_notesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_checklist_notes
     * const order_checklist_notes = await prisma.order_checklist_notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_checklist_notesUpdateManyArgs>(args: SelectSubset<T, order_checklist_notesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_checklist_notes.
     * @param {order_checklist_notesUpsertArgs} args - Arguments to update or create a Order_checklist_notes.
     * @example
     * // Update or create a Order_checklist_notes
     * const order_checklist_notes = await prisma.order_checklist_notes.upsert({
     *   create: {
     *     // ... data to create a Order_checklist_notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_checklist_notes we want to update
     *   }
     * })
     */
    upsert<T extends order_checklist_notesUpsertArgs>(args: SelectSubset<T, order_checklist_notesUpsertArgs<ExtArgs>>): Prisma__order_checklist_notesClient<$Result.GetResult<Prisma.$order_checklist_notesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Order_checklist_notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklist_notesCountArgs} args - Arguments to filter Order_checklist_notes to count.
     * @example
     * // Count the number of Order_checklist_notes
     * const count = await prisma.order_checklist_notes.count({
     *   where: {
     *     // ... the filter for the Order_checklist_notes we want to count
     *   }
     * })
    **/
    count<T extends order_checklist_notesCountArgs>(
      args?: Subset<T, order_checklist_notesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_checklist_notesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_checklist_notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_checklist_notesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_checklist_notesAggregateArgs>(args: Subset<T, Order_checklist_notesAggregateArgs>): Prisma.PrismaPromise<GetOrder_checklist_notesAggregateType<T>>

    /**
     * Group by Order_checklist_notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_checklist_notesGroupByArgs} args - Group by arguments.
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
      T extends order_checklist_notesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_checklist_notesGroupByArgs['orderBy'] }
        : { orderBy?: order_checklist_notesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_checklist_notesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_checklist_notesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_checklist_notes model
   */
  readonly fields: order_checklist_notesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_checklist_notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_checklist_notesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the order_checklist_notes model
   */ 
  interface order_checklist_notesFieldRefs {
    readonly id: FieldRef<"order_checklist_notes", 'String'>
    readonly order_checklist_detail_id: FieldRef<"order_checklist_notes", 'String'>
    readonly checked_status: FieldRef<"order_checklist_notes", 'Boolean'>
    readonly notes: FieldRef<"order_checklist_notes", 'String'>
    readonly notes_by: FieldRef<"order_checklist_notes", 'String'>
    readonly updated_by: FieldRef<"order_checklist_notes", 'String'>
    readonly created_by: FieldRef<"order_checklist_notes", 'String'>
    readonly updated_at: FieldRef<"order_checklist_notes", 'DateTime'>
    readonly created_at: FieldRef<"order_checklist_notes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order_checklist_notes findUnique
   */
  export type order_checklist_notesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_notes
     */
    select?: order_checklist_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_notes
     */
    omit?: order_checklist_notesOmit<ExtArgs> | null
    /**
     * Filter, which order_checklist_notes to fetch.
     */
    where: order_checklist_notesWhereUniqueInput
  }

  /**
   * order_checklist_notes findUniqueOrThrow
   */
  export type order_checklist_notesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_notes
     */
    select?: order_checklist_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_notes
     */
    omit?: order_checklist_notesOmit<ExtArgs> | null
    /**
     * Filter, which order_checklist_notes to fetch.
     */
    where: order_checklist_notesWhereUniqueInput
  }

  /**
   * order_checklist_notes findFirst
   */
  export type order_checklist_notesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_notes
     */
    select?: order_checklist_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_notes
     */
    omit?: order_checklist_notesOmit<ExtArgs> | null
    /**
     * Filter, which order_checklist_notes to fetch.
     */
    where?: order_checklist_notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_checklist_notes to fetch.
     */
    orderBy?: order_checklist_notesOrderByWithRelationInput | order_checklist_notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_checklist_notes.
     */
    cursor?: order_checklist_notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_checklist_notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_checklist_notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_checklist_notes.
     */
    distinct?: Order_checklist_notesScalarFieldEnum | Order_checklist_notesScalarFieldEnum[]
  }

  /**
   * order_checklist_notes findFirstOrThrow
   */
  export type order_checklist_notesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_notes
     */
    select?: order_checklist_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_notes
     */
    omit?: order_checklist_notesOmit<ExtArgs> | null
    /**
     * Filter, which order_checklist_notes to fetch.
     */
    where?: order_checklist_notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_checklist_notes to fetch.
     */
    orderBy?: order_checklist_notesOrderByWithRelationInput | order_checklist_notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_checklist_notes.
     */
    cursor?: order_checklist_notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_checklist_notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_checklist_notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_checklist_notes.
     */
    distinct?: Order_checklist_notesScalarFieldEnum | Order_checklist_notesScalarFieldEnum[]
  }

  /**
   * order_checklist_notes findMany
   */
  export type order_checklist_notesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_notes
     */
    select?: order_checklist_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_notes
     */
    omit?: order_checklist_notesOmit<ExtArgs> | null
    /**
     * Filter, which order_checklist_notes to fetch.
     */
    where?: order_checklist_notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_checklist_notes to fetch.
     */
    orderBy?: order_checklist_notesOrderByWithRelationInput | order_checklist_notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_checklist_notes.
     */
    cursor?: order_checklist_notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_checklist_notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_checklist_notes.
     */
    skip?: number
    distinct?: Order_checklist_notesScalarFieldEnum | Order_checklist_notesScalarFieldEnum[]
  }

  /**
   * order_checklist_notes create
   */
  export type order_checklist_notesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_notes
     */
    select?: order_checklist_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_notes
     */
    omit?: order_checklist_notesOmit<ExtArgs> | null
    /**
     * The data needed to create a order_checklist_notes.
     */
    data: XOR<order_checklist_notesCreateInput, order_checklist_notesUncheckedCreateInput>
  }

  /**
   * order_checklist_notes createMany
   */
  export type order_checklist_notesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_checklist_notes.
     */
    data: order_checklist_notesCreateManyInput | order_checklist_notesCreateManyInput[]
  }

  /**
   * order_checklist_notes update
   */
  export type order_checklist_notesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_notes
     */
    select?: order_checklist_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_notes
     */
    omit?: order_checklist_notesOmit<ExtArgs> | null
    /**
     * The data needed to update a order_checklist_notes.
     */
    data: XOR<order_checklist_notesUpdateInput, order_checklist_notesUncheckedUpdateInput>
    /**
     * Choose, which order_checklist_notes to update.
     */
    where: order_checklist_notesWhereUniqueInput
  }

  /**
   * order_checklist_notes updateMany
   */
  export type order_checklist_notesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_checklist_notes.
     */
    data: XOR<order_checklist_notesUpdateManyMutationInput, order_checklist_notesUncheckedUpdateManyInput>
    /**
     * Filter which order_checklist_notes to update
     */
    where?: order_checklist_notesWhereInput
    /**
     * Limit how many order_checklist_notes to update.
     */
    limit?: number
  }

  /**
   * order_checklist_notes upsert
   */
  export type order_checklist_notesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_notes
     */
    select?: order_checklist_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_notes
     */
    omit?: order_checklist_notesOmit<ExtArgs> | null
    /**
     * The filter to search for the order_checklist_notes to update in case it exists.
     */
    where: order_checklist_notesWhereUniqueInput
    /**
     * In case the order_checklist_notes found by the `where` argument doesn't exist, create a new order_checklist_notes with this data.
     */
    create: XOR<order_checklist_notesCreateInput, order_checklist_notesUncheckedCreateInput>
    /**
     * In case the order_checklist_notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_checklist_notesUpdateInput, order_checklist_notesUncheckedUpdateInput>
  }

  /**
   * order_checklist_notes delete
   */
  export type order_checklist_notesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_notes
     */
    select?: order_checklist_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_notes
     */
    omit?: order_checklist_notesOmit<ExtArgs> | null
    /**
     * Filter which order_checklist_notes to delete.
     */
    where: order_checklist_notesWhereUniqueInput
  }

  /**
   * order_checklist_notes deleteMany
   */
  export type order_checklist_notesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_checklist_notes to delete
     */
    where?: order_checklist_notesWhereInput
    /**
     * Limit how many order_checklist_notes to delete.
     */
    limit?: number
  }

  /**
   * order_checklist_notes without action
   */
  export type order_checklist_notesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_checklist_notes
     */
    select?: order_checklist_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_checklist_notes
     */
    omit?: order_checklist_notesOmit<ExtArgs> | null
  }


  /**
   * Model order_image_checklists
   */

  export type AggregateOrder_image_checklists = {
    _count: Order_image_checklistsCountAggregateOutputType | null
    _min: Order_image_checklistsMinAggregateOutputType | null
    _max: Order_image_checklistsMaxAggregateOutputType | null
  }

  export type Order_image_checklistsMinAggregateOutputType = {
    id: string | null
    order_checklist_detail_id: string | null
    filename: string | null
    updated_by: string | null
    created_by: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type Order_image_checklistsMaxAggregateOutputType = {
    id: string | null
    order_checklist_detail_id: string | null
    filename: string | null
    updated_by: string | null
    created_by: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type Order_image_checklistsCountAggregateOutputType = {
    id: number
    order_checklist_detail_id: number
    filename: number
    updated_by: number
    created_by: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type Order_image_checklistsMinAggregateInputType = {
    id?: true
    order_checklist_detail_id?: true
    filename?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
  }

  export type Order_image_checklistsMaxAggregateInputType = {
    id?: true
    order_checklist_detail_id?: true
    filename?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
  }

  export type Order_image_checklistsCountAggregateInputType = {
    id?: true
    order_checklist_detail_id?: true
    filename?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type Order_image_checklistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_image_checklists to aggregate.
     */
    where?: order_image_checklistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_image_checklists to fetch.
     */
    orderBy?: order_image_checklistsOrderByWithRelationInput | order_image_checklistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_image_checklistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_image_checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_image_checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_image_checklists
    **/
    _count?: true | Order_image_checklistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_image_checklistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_image_checklistsMaxAggregateInputType
  }

  export type GetOrder_image_checklistsAggregateType<T extends Order_image_checklistsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_image_checklists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_image_checklists[P]>
      : GetScalarType<T[P], AggregateOrder_image_checklists[P]>
  }




  export type order_image_checklistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_image_checklistsWhereInput
    orderBy?: order_image_checklistsOrderByWithAggregationInput | order_image_checklistsOrderByWithAggregationInput[]
    by: Order_image_checklistsScalarFieldEnum[] | Order_image_checklistsScalarFieldEnum
    having?: order_image_checklistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_image_checklistsCountAggregateInputType | true
    _min?: Order_image_checklistsMinAggregateInputType
    _max?: Order_image_checklistsMaxAggregateInputType
  }

  export type Order_image_checklistsGroupByOutputType = {
    id: string
    order_checklist_detail_id: string
    filename: string
    updated_by: string
    created_by: string
    updated_at: Date | null
    created_at: Date | null
    _count: Order_image_checklistsCountAggregateOutputType | null
    _min: Order_image_checklistsMinAggregateOutputType | null
    _max: Order_image_checklistsMaxAggregateOutputType | null
  }

  type GetOrder_image_checklistsGroupByPayload<T extends order_image_checklistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_image_checklistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_image_checklistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_image_checklistsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_image_checklistsGroupByOutputType[P]>
        }
      >
    >


  export type order_image_checklistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_checklist_detail_id?: boolean
    filename?: boolean
    updated_by?: boolean
    created_by?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["order_image_checklists"]>



  export type order_image_checklistsSelectScalar = {
    id?: boolean
    order_checklist_detail_id?: boolean
    filename?: boolean
    updated_by?: boolean
    created_by?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type order_image_checklistsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_checklist_detail_id" | "filename" | "updated_by" | "created_by" | "updated_at" | "created_at", ExtArgs["result"]["order_image_checklists"]>

  export type $order_image_checklistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_image_checklists"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_checklist_detail_id: string
      filename: string
      updated_by: string
      created_by: string
      updated_at: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["order_image_checklists"]>
    composites: {}
  }

  type order_image_checklistsGetPayload<S extends boolean | null | undefined | order_image_checklistsDefaultArgs> = $Result.GetResult<Prisma.$order_image_checklistsPayload, S>

  type order_image_checklistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_image_checklistsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_image_checklistsCountAggregateInputType | true
    }

  export interface order_image_checklistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_image_checklists'], meta: { name: 'order_image_checklists' } }
    /**
     * Find zero or one Order_image_checklists that matches the filter.
     * @param {order_image_checklistsFindUniqueArgs} args - Arguments to find a Order_image_checklists
     * @example
     * // Get one Order_image_checklists
     * const order_image_checklists = await prisma.order_image_checklists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_image_checklistsFindUniqueArgs>(args: SelectSubset<T, order_image_checklistsFindUniqueArgs<ExtArgs>>): Prisma__order_image_checklistsClient<$Result.GetResult<Prisma.$order_image_checklistsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Order_image_checklists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_image_checklistsFindUniqueOrThrowArgs} args - Arguments to find a Order_image_checklists
     * @example
     * // Get one Order_image_checklists
     * const order_image_checklists = await prisma.order_image_checklists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_image_checklistsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_image_checklistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_image_checklistsClient<$Result.GetResult<Prisma.$order_image_checklistsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Order_image_checklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_image_checklistsFindFirstArgs} args - Arguments to find a Order_image_checklists
     * @example
     * // Get one Order_image_checklists
     * const order_image_checklists = await prisma.order_image_checklists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_image_checklistsFindFirstArgs>(args?: SelectSubset<T, order_image_checklistsFindFirstArgs<ExtArgs>>): Prisma__order_image_checklistsClient<$Result.GetResult<Prisma.$order_image_checklistsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Order_image_checklists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_image_checklistsFindFirstOrThrowArgs} args - Arguments to find a Order_image_checklists
     * @example
     * // Get one Order_image_checklists
     * const order_image_checklists = await prisma.order_image_checklists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_image_checklistsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_image_checklistsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_image_checklistsClient<$Result.GetResult<Prisma.$order_image_checklistsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Order_image_checklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_image_checklistsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_image_checklists
     * const order_image_checklists = await prisma.order_image_checklists.findMany()
     * 
     * // Get first 10 Order_image_checklists
     * const order_image_checklists = await prisma.order_image_checklists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_image_checklistsWithIdOnly = await prisma.order_image_checklists.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_image_checklistsFindManyArgs>(args?: SelectSubset<T, order_image_checklistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_image_checklistsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Order_image_checklists.
     * @param {order_image_checklistsCreateArgs} args - Arguments to create a Order_image_checklists.
     * @example
     * // Create one Order_image_checklists
     * const Order_image_checklists = await prisma.order_image_checklists.create({
     *   data: {
     *     // ... data to create a Order_image_checklists
     *   }
     * })
     * 
     */
    create<T extends order_image_checklistsCreateArgs>(args: SelectSubset<T, order_image_checklistsCreateArgs<ExtArgs>>): Prisma__order_image_checklistsClient<$Result.GetResult<Prisma.$order_image_checklistsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Order_image_checklists.
     * @param {order_image_checklistsCreateManyArgs} args - Arguments to create many Order_image_checklists.
     * @example
     * // Create many Order_image_checklists
     * const order_image_checklists = await prisma.order_image_checklists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_image_checklistsCreateManyArgs>(args?: SelectSubset<T, order_image_checklistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_image_checklists.
     * @param {order_image_checklistsDeleteArgs} args - Arguments to delete one Order_image_checklists.
     * @example
     * // Delete one Order_image_checklists
     * const Order_image_checklists = await prisma.order_image_checklists.delete({
     *   where: {
     *     // ... filter to delete one Order_image_checklists
     *   }
     * })
     * 
     */
    delete<T extends order_image_checklistsDeleteArgs>(args: SelectSubset<T, order_image_checklistsDeleteArgs<ExtArgs>>): Prisma__order_image_checklistsClient<$Result.GetResult<Prisma.$order_image_checklistsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Order_image_checklists.
     * @param {order_image_checklistsUpdateArgs} args - Arguments to update one Order_image_checklists.
     * @example
     * // Update one Order_image_checklists
     * const order_image_checklists = await prisma.order_image_checklists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_image_checklistsUpdateArgs>(args: SelectSubset<T, order_image_checklistsUpdateArgs<ExtArgs>>): Prisma__order_image_checklistsClient<$Result.GetResult<Prisma.$order_image_checklistsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Order_image_checklists.
     * @param {order_image_checklistsDeleteManyArgs} args - Arguments to filter Order_image_checklists to delete.
     * @example
     * // Delete a few Order_image_checklists
     * const { count } = await prisma.order_image_checklists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_image_checklistsDeleteManyArgs>(args?: SelectSubset<T, order_image_checklistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_image_checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_image_checklistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_image_checklists
     * const order_image_checklists = await prisma.order_image_checklists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_image_checklistsUpdateManyArgs>(args: SelectSubset<T, order_image_checklistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_image_checklists.
     * @param {order_image_checklistsUpsertArgs} args - Arguments to update or create a Order_image_checklists.
     * @example
     * // Update or create a Order_image_checklists
     * const order_image_checklists = await prisma.order_image_checklists.upsert({
     *   create: {
     *     // ... data to create a Order_image_checklists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_image_checklists we want to update
     *   }
     * })
     */
    upsert<T extends order_image_checklistsUpsertArgs>(args: SelectSubset<T, order_image_checklistsUpsertArgs<ExtArgs>>): Prisma__order_image_checklistsClient<$Result.GetResult<Prisma.$order_image_checklistsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Order_image_checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_image_checklistsCountArgs} args - Arguments to filter Order_image_checklists to count.
     * @example
     * // Count the number of Order_image_checklists
     * const count = await prisma.order_image_checklists.count({
     *   where: {
     *     // ... the filter for the Order_image_checklists we want to count
     *   }
     * })
    **/
    count<T extends order_image_checklistsCountArgs>(
      args?: Subset<T, order_image_checklistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_image_checklistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_image_checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_image_checklistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_image_checklistsAggregateArgs>(args: Subset<T, Order_image_checklistsAggregateArgs>): Prisma.PrismaPromise<GetOrder_image_checklistsAggregateType<T>>

    /**
     * Group by Order_image_checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_image_checklistsGroupByArgs} args - Group by arguments.
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
      T extends order_image_checklistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_image_checklistsGroupByArgs['orderBy'] }
        : { orderBy?: order_image_checklistsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_image_checklistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_image_checklistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_image_checklists model
   */
  readonly fields: order_image_checklistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_image_checklists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_image_checklistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the order_image_checklists model
   */ 
  interface order_image_checklistsFieldRefs {
    readonly id: FieldRef<"order_image_checklists", 'String'>
    readonly order_checklist_detail_id: FieldRef<"order_image_checklists", 'String'>
    readonly filename: FieldRef<"order_image_checklists", 'String'>
    readonly updated_by: FieldRef<"order_image_checklists", 'String'>
    readonly created_by: FieldRef<"order_image_checklists", 'String'>
    readonly updated_at: FieldRef<"order_image_checklists", 'DateTime'>
    readonly created_at: FieldRef<"order_image_checklists", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order_image_checklists findUnique
   */
  export type order_image_checklistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_checklists
     */
    select?: order_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_checklists
     */
    omit?: order_image_checklistsOmit<ExtArgs> | null
    /**
     * Filter, which order_image_checklists to fetch.
     */
    where: order_image_checklistsWhereUniqueInput
  }

  /**
   * order_image_checklists findUniqueOrThrow
   */
  export type order_image_checklistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_checklists
     */
    select?: order_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_checklists
     */
    omit?: order_image_checklistsOmit<ExtArgs> | null
    /**
     * Filter, which order_image_checklists to fetch.
     */
    where: order_image_checklistsWhereUniqueInput
  }

  /**
   * order_image_checklists findFirst
   */
  export type order_image_checklistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_checklists
     */
    select?: order_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_checklists
     */
    omit?: order_image_checklistsOmit<ExtArgs> | null
    /**
     * Filter, which order_image_checklists to fetch.
     */
    where?: order_image_checklistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_image_checklists to fetch.
     */
    orderBy?: order_image_checklistsOrderByWithRelationInput | order_image_checklistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_image_checklists.
     */
    cursor?: order_image_checklistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_image_checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_image_checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_image_checklists.
     */
    distinct?: Order_image_checklistsScalarFieldEnum | Order_image_checklistsScalarFieldEnum[]
  }

  /**
   * order_image_checklists findFirstOrThrow
   */
  export type order_image_checklistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_checklists
     */
    select?: order_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_checklists
     */
    omit?: order_image_checklistsOmit<ExtArgs> | null
    /**
     * Filter, which order_image_checklists to fetch.
     */
    where?: order_image_checklistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_image_checklists to fetch.
     */
    orderBy?: order_image_checklistsOrderByWithRelationInput | order_image_checklistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_image_checklists.
     */
    cursor?: order_image_checklistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_image_checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_image_checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_image_checklists.
     */
    distinct?: Order_image_checklistsScalarFieldEnum | Order_image_checklistsScalarFieldEnum[]
  }

  /**
   * order_image_checklists findMany
   */
  export type order_image_checklistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_checklists
     */
    select?: order_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_checklists
     */
    omit?: order_image_checklistsOmit<ExtArgs> | null
    /**
     * Filter, which order_image_checklists to fetch.
     */
    where?: order_image_checklistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_image_checklists to fetch.
     */
    orderBy?: order_image_checklistsOrderByWithRelationInput | order_image_checklistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_image_checklists.
     */
    cursor?: order_image_checklistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_image_checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_image_checklists.
     */
    skip?: number
    distinct?: Order_image_checklistsScalarFieldEnum | Order_image_checklistsScalarFieldEnum[]
  }

  /**
   * order_image_checklists create
   */
  export type order_image_checklistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_checklists
     */
    select?: order_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_checklists
     */
    omit?: order_image_checklistsOmit<ExtArgs> | null
    /**
     * The data needed to create a order_image_checklists.
     */
    data: XOR<order_image_checklistsCreateInput, order_image_checklistsUncheckedCreateInput>
  }

  /**
   * order_image_checklists createMany
   */
  export type order_image_checklistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_image_checklists.
     */
    data: order_image_checklistsCreateManyInput | order_image_checklistsCreateManyInput[]
  }

  /**
   * order_image_checklists update
   */
  export type order_image_checklistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_checklists
     */
    select?: order_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_checklists
     */
    omit?: order_image_checklistsOmit<ExtArgs> | null
    /**
     * The data needed to update a order_image_checklists.
     */
    data: XOR<order_image_checklistsUpdateInput, order_image_checklistsUncheckedUpdateInput>
    /**
     * Choose, which order_image_checklists to update.
     */
    where: order_image_checklistsWhereUniqueInput
  }

  /**
   * order_image_checklists updateMany
   */
  export type order_image_checklistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_image_checklists.
     */
    data: XOR<order_image_checklistsUpdateManyMutationInput, order_image_checklistsUncheckedUpdateManyInput>
    /**
     * Filter which order_image_checklists to update
     */
    where?: order_image_checklistsWhereInput
    /**
     * Limit how many order_image_checklists to update.
     */
    limit?: number
  }

  /**
   * order_image_checklists upsert
   */
  export type order_image_checklistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_checklists
     */
    select?: order_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_checklists
     */
    omit?: order_image_checklistsOmit<ExtArgs> | null
    /**
     * The filter to search for the order_image_checklists to update in case it exists.
     */
    where: order_image_checklistsWhereUniqueInput
    /**
     * In case the order_image_checklists found by the `where` argument doesn't exist, create a new order_image_checklists with this data.
     */
    create: XOR<order_image_checklistsCreateInput, order_image_checklistsUncheckedCreateInput>
    /**
     * In case the order_image_checklists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_image_checklistsUpdateInput, order_image_checklistsUncheckedUpdateInput>
  }

  /**
   * order_image_checklists delete
   */
  export type order_image_checklistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_checklists
     */
    select?: order_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_checklists
     */
    omit?: order_image_checklistsOmit<ExtArgs> | null
    /**
     * Filter which order_image_checklists to delete.
     */
    where: order_image_checklistsWhereUniqueInput
  }

  /**
   * order_image_checklists deleteMany
   */
  export type order_image_checklistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_image_checklists to delete
     */
    where?: order_image_checklistsWhereInput
    /**
     * Limit how many order_image_checklists to delete.
     */
    limit?: number
  }

  /**
   * order_image_checklists without action
   */
  export type order_image_checklistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_checklists
     */
    select?: order_image_checklistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_checklists
     */
    omit?: order_image_checklistsOmit<ExtArgs> | null
  }


  /**
   * Model order_image_notes
   */

  export type AggregateOrder_image_notes = {
    _count: Order_image_notesCountAggregateOutputType | null
    _min: Order_image_notesMinAggregateOutputType | null
    _max: Order_image_notesMaxAggregateOutputType | null
  }

  export type Order_image_notesMinAggregateOutputType = {
    id: string | null
    order_image_checklist_id: string | null
    filename: string | null
    status: boolean | null
    notes: string | null
    notes_by: string | null
    updated_by: string | null
    created_by: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type Order_image_notesMaxAggregateOutputType = {
    id: string | null
    order_image_checklist_id: string | null
    filename: string | null
    status: boolean | null
    notes: string | null
    notes_by: string | null
    updated_by: string | null
    created_by: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type Order_image_notesCountAggregateOutputType = {
    id: number
    order_image_checklist_id: number
    filename: number
    status: number
    notes: number
    notes_by: number
    updated_by: number
    created_by: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type Order_image_notesMinAggregateInputType = {
    id?: true
    order_image_checklist_id?: true
    filename?: true
    status?: true
    notes?: true
    notes_by?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
  }

  export type Order_image_notesMaxAggregateInputType = {
    id?: true
    order_image_checklist_id?: true
    filename?: true
    status?: true
    notes?: true
    notes_by?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
  }

  export type Order_image_notesCountAggregateInputType = {
    id?: true
    order_image_checklist_id?: true
    filename?: true
    status?: true
    notes?: true
    notes_by?: true
    updated_by?: true
    created_by?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type Order_image_notesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_image_notes to aggregate.
     */
    where?: order_image_notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_image_notes to fetch.
     */
    orderBy?: order_image_notesOrderByWithRelationInput | order_image_notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_image_notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_image_notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_image_notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_image_notes
    **/
    _count?: true | Order_image_notesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_image_notesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_image_notesMaxAggregateInputType
  }

  export type GetOrder_image_notesAggregateType<T extends Order_image_notesAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_image_notes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_image_notes[P]>
      : GetScalarType<T[P], AggregateOrder_image_notes[P]>
  }




  export type order_image_notesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_image_notesWhereInput
    orderBy?: order_image_notesOrderByWithAggregationInput | order_image_notesOrderByWithAggregationInput[]
    by: Order_image_notesScalarFieldEnum[] | Order_image_notesScalarFieldEnum
    having?: order_image_notesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_image_notesCountAggregateInputType | true
    _min?: Order_image_notesMinAggregateInputType
    _max?: Order_image_notesMaxAggregateInputType
  }

  export type Order_image_notesGroupByOutputType = {
    id: string
    order_image_checklist_id: string
    filename: string
    status: boolean
    notes: string
    notes_by: string
    updated_by: string
    created_by: string
    updated_at: Date | null
    created_at: Date | null
    _count: Order_image_notesCountAggregateOutputType | null
    _min: Order_image_notesMinAggregateOutputType | null
    _max: Order_image_notesMaxAggregateOutputType | null
  }

  type GetOrder_image_notesGroupByPayload<T extends order_image_notesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_image_notesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_image_notesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_image_notesGroupByOutputType[P]>
            : GetScalarType<T[P], Order_image_notesGroupByOutputType[P]>
        }
      >
    >


  export type order_image_notesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_image_checklist_id?: boolean
    filename?: boolean
    status?: boolean
    notes?: boolean
    notes_by?: boolean
    updated_by?: boolean
    created_by?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["order_image_notes"]>



  export type order_image_notesSelectScalar = {
    id?: boolean
    order_image_checklist_id?: boolean
    filename?: boolean
    status?: boolean
    notes?: boolean
    notes_by?: boolean
    updated_by?: boolean
    created_by?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type order_image_notesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_image_checklist_id" | "filename" | "status" | "notes" | "notes_by" | "updated_by" | "created_by" | "updated_at" | "created_at", ExtArgs["result"]["order_image_notes"]>

  export type $order_image_notesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_image_notes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_image_checklist_id: string
      filename: string
      status: boolean
      notes: string
      notes_by: string
      updated_by: string
      created_by: string
      updated_at: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["order_image_notes"]>
    composites: {}
  }

  type order_image_notesGetPayload<S extends boolean | null | undefined | order_image_notesDefaultArgs> = $Result.GetResult<Prisma.$order_image_notesPayload, S>

  type order_image_notesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_image_notesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_image_notesCountAggregateInputType | true
    }

  export interface order_image_notesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_image_notes'], meta: { name: 'order_image_notes' } }
    /**
     * Find zero or one Order_image_notes that matches the filter.
     * @param {order_image_notesFindUniqueArgs} args - Arguments to find a Order_image_notes
     * @example
     * // Get one Order_image_notes
     * const order_image_notes = await prisma.order_image_notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_image_notesFindUniqueArgs>(args: SelectSubset<T, order_image_notesFindUniqueArgs<ExtArgs>>): Prisma__order_image_notesClient<$Result.GetResult<Prisma.$order_image_notesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Order_image_notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_image_notesFindUniqueOrThrowArgs} args - Arguments to find a Order_image_notes
     * @example
     * // Get one Order_image_notes
     * const order_image_notes = await prisma.order_image_notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_image_notesFindUniqueOrThrowArgs>(args: SelectSubset<T, order_image_notesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_image_notesClient<$Result.GetResult<Prisma.$order_image_notesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Order_image_notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_image_notesFindFirstArgs} args - Arguments to find a Order_image_notes
     * @example
     * // Get one Order_image_notes
     * const order_image_notes = await prisma.order_image_notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_image_notesFindFirstArgs>(args?: SelectSubset<T, order_image_notesFindFirstArgs<ExtArgs>>): Prisma__order_image_notesClient<$Result.GetResult<Prisma.$order_image_notesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Order_image_notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_image_notesFindFirstOrThrowArgs} args - Arguments to find a Order_image_notes
     * @example
     * // Get one Order_image_notes
     * const order_image_notes = await prisma.order_image_notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_image_notesFindFirstOrThrowArgs>(args?: SelectSubset<T, order_image_notesFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_image_notesClient<$Result.GetResult<Prisma.$order_image_notesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Order_image_notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_image_notesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_image_notes
     * const order_image_notes = await prisma.order_image_notes.findMany()
     * 
     * // Get first 10 Order_image_notes
     * const order_image_notes = await prisma.order_image_notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_image_notesWithIdOnly = await prisma.order_image_notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_image_notesFindManyArgs>(args?: SelectSubset<T, order_image_notesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_image_notesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Order_image_notes.
     * @param {order_image_notesCreateArgs} args - Arguments to create a Order_image_notes.
     * @example
     * // Create one Order_image_notes
     * const Order_image_notes = await prisma.order_image_notes.create({
     *   data: {
     *     // ... data to create a Order_image_notes
     *   }
     * })
     * 
     */
    create<T extends order_image_notesCreateArgs>(args: SelectSubset<T, order_image_notesCreateArgs<ExtArgs>>): Prisma__order_image_notesClient<$Result.GetResult<Prisma.$order_image_notesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Order_image_notes.
     * @param {order_image_notesCreateManyArgs} args - Arguments to create many Order_image_notes.
     * @example
     * // Create many Order_image_notes
     * const order_image_notes = await prisma.order_image_notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_image_notesCreateManyArgs>(args?: SelectSubset<T, order_image_notesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_image_notes.
     * @param {order_image_notesDeleteArgs} args - Arguments to delete one Order_image_notes.
     * @example
     * // Delete one Order_image_notes
     * const Order_image_notes = await prisma.order_image_notes.delete({
     *   where: {
     *     // ... filter to delete one Order_image_notes
     *   }
     * })
     * 
     */
    delete<T extends order_image_notesDeleteArgs>(args: SelectSubset<T, order_image_notesDeleteArgs<ExtArgs>>): Prisma__order_image_notesClient<$Result.GetResult<Prisma.$order_image_notesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Order_image_notes.
     * @param {order_image_notesUpdateArgs} args - Arguments to update one Order_image_notes.
     * @example
     * // Update one Order_image_notes
     * const order_image_notes = await prisma.order_image_notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_image_notesUpdateArgs>(args: SelectSubset<T, order_image_notesUpdateArgs<ExtArgs>>): Prisma__order_image_notesClient<$Result.GetResult<Prisma.$order_image_notesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Order_image_notes.
     * @param {order_image_notesDeleteManyArgs} args - Arguments to filter Order_image_notes to delete.
     * @example
     * // Delete a few Order_image_notes
     * const { count } = await prisma.order_image_notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_image_notesDeleteManyArgs>(args?: SelectSubset<T, order_image_notesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_image_notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_image_notesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_image_notes
     * const order_image_notes = await prisma.order_image_notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_image_notesUpdateManyArgs>(args: SelectSubset<T, order_image_notesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_image_notes.
     * @param {order_image_notesUpsertArgs} args - Arguments to update or create a Order_image_notes.
     * @example
     * // Update or create a Order_image_notes
     * const order_image_notes = await prisma.order_image_notes.upsert({
     *   create: {
     *     // ... data to create a Order_image_notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_image_notes we want to update
     *   }
     * })
     */
    upsert<T extends order_image_notesUpsertArgs>(args: SelectSubset<T, order_image_notesUpsertArgs<ExtArgs>>): Prisma__order_image_notesClient<$Result.GetResult<Prisma.$order_image_notesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Order_image_notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_image_notesCountArgs} args - Arguments to filter Order_image_notes to count.
     * @example
     * // Count the number of Order_image_notes
     * const count = await prisma.order_image_notes.count({
     *   where: {
     *     // ... the filter for the Order_image_notes we want to count
     *   }
     * })
    **/
    count<T extends order_image_notesCountArgs>(
      args?: Subset<T, order_image_notesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_image_notesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_image_notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_image_notesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_image_notesAggregateArgs>(args: Subset<T, Order_image_notesAggregateArgs>): Prisma.PrismaPromise<GetOrder_image_notesAggregateType<T>>

    /**
     * Group by Order_image_notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_image_notesGroupByArgs} args - Group by arguments.
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
      T extends order_image_notesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_image_notesGroupByArgs['orderBy'] }
        : { orderBy?: order_image_notesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_image_notesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_image_notesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_image_notes model
   */
  readonly fields: order_image_notesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_image_notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_image_notesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the order_image_notes model
   */ 
  interface order_image_notesFieldRefs {
    readonly id: FieldRef<"order_image_notes", 'String'>
    readonly order_image_checklist_id: FieldRef<"order_image_notes", 'String'>
    readonly filename: FieldRef<"order_image_notes", 'String'>
    readonly status: FieldRef<"order_image_notes", 'Boolean'>
    readonly notes: FieldRef<"order_image_notes", 'String'>
    readonly notes_by: FieldRef<"order_image_notes", 'String'>
    readonly updated_by: FieldRef<"order_image_notes", 'String'>
    readonly created_by: FieldRef<"order_image_notes", 'String'>
    readonly updated_at: FieldRef<"order_image_notes", 'DateTime'>
    readonly created_at: FieldRef<"order_image_notes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order_image_notes findUnique
   */
  export type order_image_notesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_notes
     */
    select?: order_image_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_notes
     */
    omit?: order_image_notesOmit<ExtArgs> | null
    /**
     * Filter, which order_image_notes to fetch.
     */
    where: order_image_notesWhereUniqueInput
  }

  /**
   * order_image_notes findUniqueOrThrow
   */
  export type order_image_notesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_notes
     */
    select?: order_image_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_notes
     */
    omit?: order_image_notesOmit<ExtArgs> | null
    /**
     * Filter, which order_image_notes to fetch.
     */
    where: order_image_notesWhereUniqueInput
  }

  /**
   * order_image_notes findFirst
   */
  export type order_image_notesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_notes
     */
    select?: order_image_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_notes
     */
    omit?: order_image_notesOmit<ExtArgs> | null
    /**
     * Filter, which order_image_notes to fetch.
     */
    where?: order_image_notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_image_notes to fetch.
     */
    orderBy?: order_image_notesOrderByWithRelationInput | order_image_notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_image_notes.
     */
    cursor?: order_image_notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_image_notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_image_notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_image_notes.
     */
    distinct?: Order_image_notesScalarFieldEnum | Order_image_notesScalarFieldEnum[]
  }

  /**
   * order_image_notes findFirstOrThrow
   */
  export type order_image_notesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_notes
     */
    select?: order_image_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_notes
     */
    omit?: order_image_notesOmit<ExtArgs> | null
    /**
     * Filter, which order_image_notes to fetch.
     */
    where?: order_image_notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_image_notes to fetch.
     */
    orderBy?: order_image_notesOrderByWithRelationInput | order_image_notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_image_notes.
     */
    cursor?: order_image_notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_image_notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_image_notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_image_notes.
     */
    distinct?: Order_image_notesScalarFieldEnum | Order_image_notesScalarFieldEnum[]
  }

  /**
   * order_image_notes findMany
   */
  export type order_image_notesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_notes
     */
    select?: order_image_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_notes
     */
    omit?: order_image_notesOmit<ExtArgs> | null
    /**
     * Filter, which order_image_notes to fetch.
     */
    where?: order_image_notesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_image_notes to fetch.
     */
    orderBy?: order_image_notesOrderByWithRelationInput | order_image_notesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_image_notes.
     */
    cursor?: order_image_notesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_image_notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_image_notes.
     */
    skip?: number
    distinct?: Order_image_notesScalarFieldEnum | Order_image_notesScalarFieldEnum[]
  }

  /**
   * order_image_notes create
   */
  export type order_image_notesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_notes
     */
    select?: order_image_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_notes
     */
    omit?: order_image_notesOmit<ExtArgs> | null
    /**
     * The data needed to create a order_image_notes.
     */
    data: XOR<order_image_notesCreateInput, order_image_notesUncheckedCreateInput>
  }

  /**
   * order_image_notes createMany
   */
  export type order_image_notesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_image_notes.
     */
    data: order_image_notesCreateManyInput | order_image_notesCreateManyInput[]
  }

  /**
   * order_image_notes update
   */
  export type order_image_notesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_notes
     */
    select?: order_image_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_notes
     */
    omit?: order_image_notesOmit<ExtArgs> | null
    /**
     * The data needed to update a order_image_notes.
     */
    data: XOR<order_image_notesUpdateInput, order_image_notesUncheckedUpdateInput>
    /**
     * Choose, which order_image_notes to update.
     */
    where: order_image_notesWhereUniqueInput
  }

  /**
   * order_image_notes updateMany
   */
  export type order_image_notesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_image_notes.
     */
    data: XOR<order_image_notesUpdateManyMutationInput, order_image_notesUncheckedUpdateManyInput>
    /**
     * Filter which order_image_notes to update
     */
    where?: order_image_notesWhereInput
    /**
     * Limit how many order_image_notes to update.
     */
    limit?: number
  }

  /**
   * order_image_notes upsert
   */
  export type order_image_notesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_notes
     */
    select?: order_image_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_notes
     */
    omit?: order_image_notesOmit<ExtArgs> | null
    /**
     * The filter to search for the order_image_notes to update in case it exists.
     */
    where: order_image_notesWhereUniqueInput
    /**
     * In case the order_image_notes found by the `where` argument doesn't exist, create a new order_image_notes with this data.
     */
    create: XOR<order_image_notesCreateInput, order_image_notesUncheckedCreateInput>
    /**
     * In case the order_image_notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_image_notesUpdateInput, order_image_notesUncheckedUpdateInput>
  }

  /**
   * order_image_notes delete
   */
  export type order_image_notesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_notes
     */
    select?: order_image_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_notes
     */
    omit?: order_image_notesOmit<ExtArgs> | null
    /**
     * Filter which order_image_notes to delete.
     */
    where: order_image_notesWhereUniqueInput
  }

  /**
   * order_image_notes deleteMany
   */
  export type order_image_notesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_image_notes to delete
     */
    where?: order_image_notesWhereInput
    /**
     * Limit how many order_image_notes to delete.
     */
    limit?: number
  }

  /**
   * order_image_notes without action
   */
  export type order_image_notesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_image_notes
     */
    select?: order_image_notesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_image_notes
     */
    omit?: order_image_notesOmit<ExtArgs> | null
  }


  /**
   * Model sysdiagrams
   */

  export type AggregateSysdiagrams = {
    _count: SysdiagramsCountAggregateOutputType | null
    _avg: SysdiagramsAvgAggregateOutputType | null
    _sum: SysdiagramsSumAggregateOutputType | null
    _min: SysdiagramsMinAggregateOutputType | null
    _max: SysdiagramsMaxAggregateOutputType | null
  }

  export type SysdiagramsAvgAggregateOutputType = {
    principal_id: number | null
    diagram_id: number | null
    version: number | null
  }

  export type SysdiagramsSumAggregateOutputType = {
    principal_id: number | null
    diagram_id: number | null
    version: number | null
  }

  export type SysdiagramsMinAggregateOutputType = {
    name: string | null
    principal_id: number | null
    diagram_id: number | null
    version: number | null
    definition: Uint8Array | null
  }

  export type SysdiagramsMaxAggregateOutputType = {
    name: string | null
    principal_id: number | null
    diagram_id: number | null
    version: number | null
    definition: Uint8Array | null
  }

  export type SysdiagramsCountAggregateOutputType = {
    name: number
    principal_id: number
    diagram_id: number
    version: number
    definition: number
    _all: number
  }


  export type SysdiagramsAvgAggregateInputType = {
    principal_id?: true
    diagram_id?: true
    version?: true
  }

  export type SysdiagramsSumAggregateInputType = {
    principal_id?: true
    diagram_id?: true
    version?: true
  }

  export type SysdiagramsMinAggregateInputType = {
    name?: true
    principal_id?: true
    diagram_id?: true
    version?: true
    definition?: true
  }

  export type SysdiagramsMaxAggregateInputType = {
    name?: true
    principal_id?: true
    diagram_id?: true
    version?: true
    definition?: true
  }

  export type SysdiagramsCountAggregateInputType = {
    name?: true
    principal_id?: true
    diagram_id?: true
    version?: true
    definition?: true
    _all?: true
  }

  export type SysdiagramsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sysdiagrams to aggregate.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sysdiagrams
    **/
    _count?: true | SysdiagramsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysdiagramsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysdiagramsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysdiagramsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysdiagramsMaxAggregateInputType
  }

  export type GetSysdiagramsAggregateType<T extends SysdiagramsAggregateArgs> = {
        [P in keyof T & keyof AggregateSysdiagrams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysdiagrams[P]>
      : GetScalarType<T[P], AggregateSysdiagrams[P]>
  }




  export type sysdiagramsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sysdiagramsWhereInput
    orderBy?: sysdiagramsOrderByWithAggregationInput | sysdiagramsOrderByWithAggregationInput[]
    by: SysdiagramsScalarFieldEnum[] | SysdiagramsScalarFieldEnum
    having?: sysdiagramsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysdiagramsCountAggregateInputType | true
    _avg?: SysdiagramsAvgAggregateInputType
    _sum?: SysdiagramsSumAggregateInputType
    _min?: SysdiagramsMinAggregateInputType
    _max?: SysdiagramsMaxAggregateInputType
  }

  export type SysdiagramsGroupByOutputType = {
    name: string
    principal_id: number
    diagram_id: number
    version: number | null
    definition: Uint8Array | null
    _count: SysdiagramsCountAggregateOutputType | null
    _avg: SysdiagramsAvgAggregateOutputType | null
    _sum: SysdiagramsSumAggregateOutputType | null
    _min: SysdiagramsMinAggregateOutputType | null
    _max: SysdiagramsMaxAggregateOutputType | null
  }

  type GetSysdiagramsGroupByPayload<T extends sysdiagramsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysdiagramsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysdiagramsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysdiagramsGroupByOutputType[P]>
            : GetScalarType<T[P], SysdiagramsGroupByOutputType[P]>
        }
      >
    >


  export type sysdiagramsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    principal_id?: boolean
    diagram_id?: boolean
    version?: boolean
    definition?: boolean
  }, ExtArgs["result"]["sysdiagrams"]>



  export type sysdiagramsSelectScalar = {
    name?: boolean
    principal_id?: boolean
    diagram_id?: boolean
    version?: boolean
    definition?: boolean
  }

  export type sysdiagramsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "principal_id" | "diagram_id" | "version" | "definition", ExtArgs["result"]["sysdiagrams"]>

  export type $sysdiagramsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sysdiagrams"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      name: string
      principal_id: number
      diagram_id: number
      version: number | null
      definition: Uint8Array | null
    }, ExtArgs["result"]["sysdiagrams"]>
    composites: {}
  }

  type sysdiagramsGetPayload<S extends boolean | null | undefined | sysdiagramsDefaultArgs> = $Result.GetResult<Prisma.$sysdiagramsPayload, S>

  type sysdiagramsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sysdiagramsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SysdiagramsCountAggregateInputType | true
    }

  export interface sysdiagramsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sysdiagrams'], meta: { name: 'sysdiagrams' } }
    /**
     * Find zero or one Sysdiagrams that matches the filter.
     * @param {sysdiagramsFindUniqueArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sysdiagramsFindUniqueArgs>(args: SelectSubset<T, sysdiagramsFindUniqueArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Sysdiagrams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sysdiagramsFindUniqueOrThrowArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sysdiagramsFindUniqueOrThrowArgs>(args: SelectSubset<T, sysdiagramsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Sysdiagrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsFindFirstArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sysdiagramsFindFirstArgs>(args?: SelectSubset<T, sysdiagramsFindFirstArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Sysdiagrams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsFindFirstOrThrowArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sysdiagramsFindFirstOrThrowArgs>(args?: SelectSubset<T, sysdiagramsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Sysdiagrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findMany()
     * 
     * // Get first 10 Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const sysdiagramsWithNameOnly = await prisma.sysdiagrams.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends sysdiagramsFindManyArgs>(args?: SelectSubset<T, sysdiagramsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Sysdiagrams.
     * @param {sysdiagramsCreateArgs} args - Arguments to create a Sysdiagrams.
     * @example
     * // Create one Sysdiagrams
     * const Sysdiagrams = await prisma.sysdiagrams.create({
     *   data: {
     *     // ... data to create a Sysdiagrams
     *   }
     * })
     * 
     */
    create<T extends sysdiagramsCreateArgs>(args: SelectSubset<T, sysdiagramsCreateArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Sysdiagrams.
     * @param {sysdiagramsCreateManyArgs} args - Arguments to create many Sysdiagrams.
     * @example
     * // Create many Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sysdiagramsCreateManyArgs>(args?: SelectSubset<T, sysdiagramsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sysdiagrams.
     * @param {sysdiagramsDeleteArgs} args - Arguments to delete one Sysdiagrams.
     * @example
     * // Delete one Sysdiagrams
     * const Sysdiagrams = await prisma.sysdiagrams.delete({
     *   where: {
     *     // ... filter to delete one Sysdiagrams
     *   }
     * })
     * 
     */
    delete<T extends sysdiagramsDeleteArgs>(args: SelectSubset<T, sysdiagramsDeleteArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Sysdiagrams.
     * @param {sysdiagramsUpdateArgs} args - Arguments to update one Sysdiagrams.
     * @example
     * // Update one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sysdiagramsUpdateArgs>(args: SelectSubset<T, sysdiagramsUpdateArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Sysdiagrams.
     * @param {sysdiagramsDeleteManyArgs} args - Arguments to filter Sysdiagrams to delete.
     * @example
     * // Delete a few Sysdiagrams
     * const { count } = await prisma.sysdiagrams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sysdiagramsDeleteManyArgs>(args?: SelectSubset<T, sysdiagramsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sysdiagramsUpdateManyArgs>(args: SelectSubset<T, sysdiagramsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sysdiagrams.
     * @param {sysdiagramsUpsertArgs} args - Arguments to update or create a Sysdiagrams.
     * @example
     * // Update or create a Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.upsert({
     *   create: {
     *     // ... data to create a Sysdiagrams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sysdiagrams we want to update
     *   }
     * })
     */
    upsert<T extends sysdiagramsUpsertArgs>(args: SelectSubset<T, sysdiagramsUpsertArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsCountArgs} args - Arguments to filter Sysdiagrams to count.
     * @example
     * // Count the number of Sysdiagrams
     * const count = await prisma.sysdiagrams.count({
     *   where: {
     *     // ... the filter for the Sysdiagrams we want to count
     *   }
     * })
    **/
    count<T extends sysdiagramsCountArgs>(
      args?: Subset<T, sysdiagramsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysdiagramsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysdiagramsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SysdiagramsAggregateArgs>(args: Subset<T, SysdiagramsAggregateArgs>): Prisma.PrismaPromise<GetSysdiagramsAggregateType<T>>

    /**
     * Group by Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsGroupByArgs} args - Group by arguments.
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
      T extends sysdiagramsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sysdiagramsGroupByArgs['orderBy'] }
        : { orderBy?: sysdiagramsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sysdiagramsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysdiagramsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sysdiagrams model
   */
  readonly fields: sysdiagramsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sysdiagrams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sysdiagramsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the sysdiagrams model
   */ 
  interface sysdiagramsFieldRefs {
    readonly name: FieldRef<"sysdiagrams", 'String'>
    readonly principal_id: FieldRef<"sysdiagrams", 'Int'>
    readonly diagram_id: FieldRef<"sysdiagrams", 'Int'>
    readonly version: FieldRef<"sysdiagrams", 'Int'>
    readonly definition: FieldRef<"sysdiagrams", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * sysdiagrams findUnique
   */
  export type sysdiagramsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams findUniqueOrThrow
   */
  export type sysdiagramsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams findFirst
   */
  export type sysdiagramsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sysdiagrams.
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sysdiagrams.
     */
    distinct?: SysdiagramsScalarFieldEnum | SysdiagramsScalarFieldEnum[]
  }

  /**
   * sysdiagrams findFirstOrThrow
   */
  export type sysdiagramsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sysdiagrams.
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sysdiagrams.
     */
    distinct?: SysdiagramsScalarFieldEnum | SysdiagramsScalarFieldEnum[]
  }

  /**
   * sysdiagrams findMany
   */
  export type sysdiagramsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sysdiagrams.
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    distinct?: SysdiagramsScalarFieldEnum | SysdiagramsScalarFieldEnum[]
  }

  /**
   * sysdiagrams create
   */
  export type sysdiagramsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * The data needed to create a sysdiagrams.
     */
    data: XOR<sysdiagramsCreateInput, sysdiagramsUncheckedCreateInput>
  }

  /**
   * sysdiagrams createMany
   */
  export type sysdiagramsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sysdiagrams.
     */
    data: sysdiagramsCreateManyInput | sysdiagramsCreateManyInput[]
  }

  /**
   * sysdiagrams update
   */
  export type sysdiagramsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * The data needed to update a sysdiagrams.
     */
    data: XOR<sysdiagramsUpdateInput, sysdiagramsUncheckedUpdateInput>
    /**
     * Choose, which sysdiagrams to update.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams updateMany
   */
  export type sysdiagramsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sysdiagrams.
     */
    data: XOR<sysdiagramsUpdateManyMutationInput, sysdiagramsUncheckedUpdateManyInput>
    /**
     * Filter which sysdiagrams to update
     */
    where?: sysdiagramsWhereInput
    /**
     * Limit how many sysdiagrams to update.
     */
    limit?: number
  }

  /**
   * sysdiagrams upsert
   */
  export type sysdiagramsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * The filter to search for the sysdiagrams to update in case it exists.
     */
    where: sysdiagramsWhereUniqueInput
    /**
     * In case the sysdiagrams found by the `where` argument doesn't exist, create a new sysdiagrams with this data.
     */
    create: XOR<sysdiagramsCreateInput, sysdiagramsUncheckedCreateInput>
    /**
     * In case the sysdiagrams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sysdiagramsUpdateInput, sysdiagramsUncheckedUpdateInput>
  }

  /**
   * sysdiagrams delete
   */
  export type sysdiagramsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter which sysdiagrams to delete.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams deleteMany
   */
  export type sysdiagramsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sysdiagrams to delete
     */
    where?: sysdiagramsWhereInput
    /**
     * Limit how many sysdiagrams to delete.
     */
    limit?: number
  }

  /**
   * sysdiagrams without action
   */
  export type sysdiagramsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
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


  export const Access_tokensScalarFieldEnum: {
    id: 'id',
    tokenable_type: 'tokenable_type',
    tokenable_id: 'tokenable_id',
    name: 'name',
    token: 'token',
    abilities: 'abilities',
    last_used_at: 'last_used_at',
    expires_at: 'expires_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Access_tokensScalarFieldEnum = (typeof Access_tokensScalarFieldEnum)[keyof typeof Access_tokensScalarFieldEnum]


  export const Master_checklist_detailsScalarFieldEnum: {
    id: 'id',
    checklist_header_id: 'checklist_header_id',
    name: 'name',
    short_desc: 'short_desc',
    required_image: 'required_image',
    updated_by: 'updated_by',
    created_by: 'created_by',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type Master_checklist_detailsScalarFieldEnum = (typeof Master_checklist_detailsScalarFieldEnum)[keyof typeof Master_checklist_detailsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Master_checklistsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    short_desc: 'short_desc',
    workcenter: 'workcenter',
    model: 'model',
    status: 'status',
    updated_by: 'updated_by',
    created_by: 'created_by',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type Master_checklistsScalarFieldEnum = (typeof Master_checklistsScalarFieldEnum)[keyof typeof Master_checklistsScalarFieldEnum]


  export const Master_image_checklistsScalarFieldEnum: {
    id: 'id',
    checklist_detail_id: 'checklist_detail_id',
    filename: 'filename',
    updated_by: 'updated_by',
    created_by: 'created_by',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type Master_image_checklistsScalarFieldEnum = (typeof Master_image_checklistsScalarFieldEnum)[keyof typeof Master_image_checklistsScalarFieldEnum]


  export const Order_checklistsScalarFieldEnum: {
    id: 'id',
    checklist_id: 'checklist_id',
    order_id: 'order_id',
    model: 'model',
    workcenter: 'workcenter',
    status: 'status',
    date_open: 'date_open',
    date_closed: 'date_closed',
    updated_by: 'updated_by',
    created_by: 'created_by',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type Order_checklistsScalarFieldEnum = (typeof Order_checklistsScalarFieldEnum)[keyof typeof Order_checklistsScalarFieldEnum]


  export const Order_checklist_detailsScalarFieldEnum: {
    id: 'id',
    order_checklist_id: 'order_checklist_id',
    checked: 'checked',
    notes_by_prod: 'notes_by_prod',
    notes_by_qc: 'notes_by_qc',
    updated_by: 'updated_by',
    created_by: 'created_by',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type Order_checklist_detailsScalarFieldEnum = (typeof Order_checklist_detailsScalarFieldEnum)[keyof typeof Order_checklist_detailsScalarFieldEnum]


  export const Order_checklist_notesScalarFieldEnum: {
    id: 'id',
    order_checklist_detail_id: 'order_checklist_detail_id',
    checked_status: 'checked_status',
    notes: 'notes',
    notes_by: 'notes_by',
    updated_by: 'updated_by',
    created_by: 'created_by',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type Order_checklist_notesScalarFieldEnum = (typeof Order_checklist_notesScalarFieldEnum)[keyof typeof Order_checklist_notesScalarFieldEnum]


  export const Order_image_checklistsScalarFieldEnum: {
    id: 'id',
    order_checklist_detail_id: 'order_checklist_detail_id',
    filename: 'filename',
    updated_by: 'updated_by',
    created_by: 'created_by',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type Order_image_checklistsScalarFieldEnum = (typeof Order_image_checklistsScalarFieldEnum)[keyof typeof Order_image_checklistsScalarFieldEnum]


  export const Order_image_notesScalarFieldEnum: {
    id: 'id',
    order_image_checklist_id: 'order_image_checklist_id',
    filename: 'filename',
    status: 'status',
    notes: 'notes',
    notes_by: 'notes_by',
    updated_by: 'updated_by',
    created_by: 'created_by',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type Order_image_notesScalarFieldEnum = (typeof Order_image_notesScalarFieldEnum)[keyof typeof Order_image_notesScalarFieldEnum]


  export const SysdiagramsScalarFieldEnum: {
    name: 'name',
    principal_id: 'principal_id',
    diagram_id: 'diagram_id',
    version: 'version',
    definition: 'definition'
  };

  export type SysdiagramsScalarFieldEnum = (typeof SysdiagramsScalarFieldEnum)[keyof typeof SysdiagramsScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type access_tokensWhereInput = {
    AND?: access_tokensWhereInput | access_tokensWhereInput[]
    OR?: access_tokensWhereInput[]
    NOT?: access_tokensWhereInput | access_tokensWhereInput[]
    id?: StringFilter<"access_tokens"> | string
    tokenable_type?: StringFilter<"access_tokens"> | string
    tokenable_id?: StringFilter<"access_tokens"> | string
    name?: StringFilter<"access_tokens"> | string
    token?: StringFilter<"access_tokens"> | string
    abilities?: StringNullableFilter<"access_tokens"> | string | null
    last_used_at?: DateTimeNullableFilter<"access_tokens"> | Date | string | null
    expires_at?: DateTimeNullableFilter<"access_tokens"> | Date | string | null
    created_at?: DateTimeNullableFilter<"access_tokens"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"access_tokens"> | Date | string | null
  }

  export type access_tokensOrderByWithRelationInput = {
    id?: SortOrder
    tokenable_type?: SortOrder
    tokenable_id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    abilities?: SortOrderInput | SortOrder
    last_used_at?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type access_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: access_tokensWhereInput | access_tokensWhereInput[]
    OR?: access_tokensWhereInput[]
    NOT?: access_tokensWhereInput | access_tokensWhereInput[]
    tokenable_type?: StringFilter<"access_tokens"> | string
    tokenable_id?: StringFilter<"access_tokens"> | string
    name?: StringFilter<"access_tokens"> | string
    abilities?: StringNullableFilter<"access_tokens"> | string | null
    last_used_at?: DateTimeNullableFilter<"access_tokens"> | Date | string | null
    expires_at?: DateTimeNullableFilter<"access_tokens"> | Date | string | null
    created_at?: DateTimeNullableFilter<"access_tokens"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"access_tokens"> | Date | string | null
  }, "id" | "token">

  export type access_tokensOrderByWithAggregationInput = {
    id?: SortOrder
    tokenable_type?: SortOrder
    tokenable_id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    abilities?: SortOrderInput | SortOrder
    last_used_at?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: access_tokensCountOrderByAggregateInput
    _max?: access_tokensMaxOrderByAggregateInput
    _min?: access_tokensMinOrderByAggregateInput
  }

  export type access_tokensScalarWhereWithAggregatesInput = {
    AND?: access_tokensScalarWhereWithAggregatesInput | access_tokensScalarWhereWithAggregatesInput[]
    OR?: access_tokensScalarWhereWithAggregatesInput[]
    NOT?: access_tokensScalarWhereWithAggregatesInput | access_tokensScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"access_tokens"> | string
    tokenable_type?: StringWithAggregatesFilter<"access_tokens"> | string
    tokenable_id?: StringWithAggregatesFilter<"access_tokens"> | string
    name?: StringWithAggregatesFilter<"access_tokens"> | string
    token?: StringWithAggregatesFilter<"access_tokens"> | string
    abilities?: StringNullableWithAggregatesFilter<"access_tokens"> | string | null
    last_used_at?: DateTimeNullableWithAggregatesFilter<"access_tokens"> | Date | string | null
    expires_at?: DateTimeNullableWithAggregatesFilter<"access_tokens"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"access_tokens"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"access_tokens"> | Date | string | null
  }

  export type master_checklist_detailsWhereInput = {
    AND?: master_checklist_detailsWhereInput | master_checklist_detailsWhereInput[]
    OR?: master_checklist_detailsWhereInput[]
    NOT?: master_checklist_detailsWhereInput | master_checklist_detailsWhereInput[]
    id?: StringFilter<"master_checklist_details"> | string
    checklist_header_id?: StringFilter<"master_checklist_details"> | string
    name?: StringFilter<"master_checklist_details"> | string
    short_desc?: StringNullableFilter<"master_checklist_details"> | string | null
    required_image?: StringNullableFilter<"master_checklist_details"> | string | null
    updated_by?: StringFilter<"master_checklist_details"> | string
    created_by?: StringFilter<"master_checklist_details"> | string
    updated_at?: DateTimeNullableFilter<"master_checklist_details"> | Date | string | null
    created_at?: DateTimeNullableFilter<"master_checklist_details"> | Date | string | null
    master_checklists?: XOR<Master_checklistsScalarRelationFilter, master_checklistsWhereInput>
    users_master_checklist_details_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_master_checklist_details_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type master_checklist_detailsOrderByWithRelationInput = {
    id?: SortOrder
    checklist_header_id?: SortOrder
    name?: SortOrder
    short_desc?: SortOrderInput | SortOrder
    required_image?: SortOrderInput | SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    master_checklists?: master_checklistsOrderByWithRelationInput
    users_master_checklist_details_updated_byTousers?: usersOrderByWithRelationInput
    users_master_checklist_details_created_byTousers?: usersOrderByWithRelationInput
  }

  export type master_checklist_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: master_checklist_detailsWhereInput | master_checklist_detailsWhereInput[]
    OR?: master_checklist_detailsWhereInput[]
    NOT?: master_checklist_detailsWhereInput | master_checklist_detailsWhereInput[]
    checklist_header_id?: StringFilter<"master_checklist_details"> | string
    name?: StringFilter<"master_checklist_details"> | string
    short_desc?: StringNullableFilter<"master_checklist_details"> | string | null
    required_image?: StringNullableFilter<"master_checklist_details"> | string | null
    updated_by?: StringFilter<"master_checklist_details"> | string
    created_by?: StringFilter<"master_checklist_details"> | string
    updated_at?: DateTimeNullableFilter<"master_checklist_details"> | Date | string | null
    created_at?: DateTimeNullableFilter<"master_checklist_details"> | Date | string | null
    master_checklists?: XOR<Master_checklistsScalarRelationFilter, master_checklistsWhereInput>
    users_master_checklist_details_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_master_checklist_details_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type master_checklist_detailsOrderByWithAggregationInput = {
    id?: SortOrder
    checklist_header_id?: SortOrder
    name?: SortOrder
    short_desc?: SortOrderInput | SortOrder
    required_image?: SortOrderInput | SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: master_checklist_detailsCountOrderByAggregateInput
    _max?: master_checklist_detailsMaxOrderByAggregateInput
    _min?: master_checklist_detailsMinOrderByAggregateInput
  }

  export type master_checklist_detailsScalarWhereWithAggregatesInput = {
    AND?: master_checklist_detailsScalarWhereWithAggregatesInput | master_checklist_detailsScalarWhereWithAggregatesInput[]
    OR?: master_checklist_detailsScalarWhereWithAggregatesInput[]
    NOT?: master_checklist_detailsScalarWhereWithAggregatesInput | master_checklist_detailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"master_checklist_details"> | string
    checklist_header_id?: StringWithAggregatesFilter<"master_checklist_details"> | string
    name?: StringWithAggregatesFilter<"master_checklist_details"> | string
    short_desc?: StringNullableWithAggregatesFilter<"master_checklist_details"> | string | null
    required_image?: StringNullableWithAggregatesFilter<"master_checklist_details"> | string | null
    updated_by?: StringWithAggregatesFilter<"master_checklist_details"> | string
    created_by?: StringWithAggregatesFilter<"master_checklist_details"> | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"master_checklist_details"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"master_checklist_details"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    role?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: Master_checklist_detailsListRelationFilter
    master_checklist_details_master_checklist_details_created_byTousers?: Master_checklist_detailsListRelationFilter
    master_checklists_master_checklists_updated_byTousers?: Master_checklistsListRelationFilter
    master_checklists_master_checklists_created_byTousers?: Master_checklistsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrderInput | SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsOrderByRelationAggregateInput
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsOrderByRelationAggregateInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsOrderByRelationAggregateInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    role?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: Master_checklist_detailsListRelationFilter
    master_checklist_details_master_checklist_details_created_byTousers?: Master_checklist_detailsListRelationFilter
    master_checklists_master_checklists_updated_byTousers?: Master_checklistsListRelationFilter
    master_checklists_master_checklists_created_byTousers?: Master_checklistsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrderInput | SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    role?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type master_checklistsWhereInput = {
    AND?: master_checklistsWhereInput | master_checklistsWhereInput[]
    OR?: master_checklistsWhereInput[]
    NOT?: master_checklistsWhereInput | master_checklistsWhereInput[]
    id?: StringFilter<"master_checklists"> | string
    name?: StringFilter<"master_checklists"> | string
    short_desc?: StringFilter<"master_checklists"> | string
    workcenter?: StringFilter<"master_checklists"> | string
    model?: StringFilter<"master_checklists"> | string
    status?: BoolFilter<"master_checklists"> | boolean
    updated_by?: StringFilter<"master_checklists"> | string
    created_by?: StringFilter<"master_checklists"> | string
    updated_at?: DateTimeNullableFilter<"master_checklists"> | Date | string | null
    created_at?: DateTimeNullableFilter<"master_checklists"> | Date | string | null
    master_checklist_details?: Master_checklist_detailsListRelationFilter
    users_master_checklists_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_master_checklists_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type master_checklistsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    short_desc?: SortOrder
    workcenter?: SortOrder
    model?: SortOrder
    status?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    master_checklist_details?: master_checklist_detailsOrderByRelationAggregateInput
    users_master_checklists_updated_byTousers?: usersOrderByWithRelationInput
    users_master_checklists_created_byTousers?: usersOrderByWithRelationInput
  }

  export type master_checklistsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: master_checklistsWhereInput | master_checklistsWhereInput[]
    OR?: master_checklistsWhereInput[]
    NOT?: master_checklistsWhereInput | master_checklistsWhereInput[]
    name?: StringFilter<"master_checklists"> | string
    short_desc?: StringFilter<"master_checklists"> | string
    workcenter?: StringFilter<"master_checklists"> | string
    model?: StringFilter<"master_checklists"> | string
    status?: BoolFilter<"master_checklists"> | boolean
    updated_by?: StringFilter<"master_checklists"> | string
    created_by?: StringFilter<"master_checklists"> | string
    updated_at?: DateTimeNullableFilter<"master_checklists"> | Date | string | null
    created_at?: DateTimeNullableFilter<"master_checklists"> | Date | string | null
    master_checklist_details?: Master_checklist_detailsListRelationFilter
    users_master_checklists_updated_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
    users_master_checklists_created_byTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type master_checklistsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    short_desc?: SortOrder
    workcenter?: SortOrder
    model?: SortOrder
    status?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: master_checklistsCountOrderByAggregateInput
    _max?: master_checklistsMaxOrderByAggregateInput
    _min?: master_checklistsMinOrderByAggregateInput
  }

  export type master_checklistsScalarWhereWithAggregatesInput = {
    AND?: master_checklistsScalarWhereWithAggregatesInput | master_checklistsScalarWhereWithAggregatesInput[]
    OR?: master_checklistsScalarWhereWithAggregatesInput[]
    NOT?: master_checklistsScalarWhereWithAggregatesInput | master_checklistsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"master_checklists"> | string
    name?: StringWithAggregatesFilter<"master_checklists"> | string
    short_desc?: StringWithAggregatesFilter<"master_checklists"> | string
    workcenter?: StringWithAggregatesFilter<"master_checklists"> | string
    model?: StringWithAggregatesFilter<"master_checklists"> | string
    status?: BoolWithAggregatesFilter<"master_checklists"> | boolean
    updated_by?: StringWithAggregatesFilter<"master_checklists"> | string
    created_by?: StringWithAggregatesFilter<"master_checklists"> | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"master_checklists"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"master_checklists"> | Date | string | null
  }

  export type master_image_checklistsWhereInput = {
    AND?: master_image_checklistsWhereInput | master_image_checklistsWhereInput[]
    OR?: master_image_checklistsWhereInput[]
    NOT?: master_image_checklistsWhereInput | master_image_checklistsWhereInput[]
    id?: StringFilter<"master_image_checklists"> | string
    checklist_detail_id?: StringFilter<"master_image_checklists"> | string
    filename?: StringFilter<"master_image_checklists"> | string
    updated_by?: StringFilter<"master_image_checklists"> | string
    created_by?: StringFilter<"master_image_checklists"> | string
    updated_at?: DateTimeNullableFilter<"master_image_checklists"> | Date | string | null
    created_at?: DateTimeNullableFilter<"master_image_checklists"> | Date | string | null
  }

  export type master_image_checklistsOrderByWithRelationInput = {
    id?: SortOrder
    checklist_detail_id?: SortOrder
    filename?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type master_image_checklistsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: master_image_checklistsWhereInput | master_image_checklistsWhereInput[]
    OR?: master_image_checklistsWhereInput[]
    NOT?: master_image_checklistsWhereInput | master_image_checklistsWhereInput[]
    checklist_detail_id?: StringFilter<"master_image_checklists"> | string
    filename?: StringFilter<"master_image_checklists"> | string
    updated_by?: StringFilter<"master_image_checklists"> | string
    created_by?: StringFilter<"master_image_checklists"> | string
    updated_at?: DateTimeNullableFilter<"master_image_checklists"> | Date | string | null
    created_at?: DateTimeNullableFilter<"master_image_checklists"> | Date | string | null
  }, "id">

  export type master_image_checklistsOrderByWithAggregationInput = {
    id?: SortOrder
    checklist_detail_id?: SortOrder
    filename?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: master_image_checklistsCountOrderByAggregateInput
    _max?: master_image_checklistsMaxOrderByAggregateInput
    _min?: master_image_checklistsMinOrderByAggregateInput
  }

  export type master_image_checklistsScalarWhereWithAggregatesInput = {
    AND?: master_image_checklistsScalarWhereWithAggregatesInput | master_image_checklistsScalarWhereWithAggregatesInput[]
    OR?: master_image_checklistsScalarWhereWithAggregatesInput[]
    NOT?: master_image_checklistsScalarWhereWithAggregatesInput | master_image_checklistsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"master_image_checklists"> | string
    checklist_detail_id?: StringWithAggregatesFilter<"master_image_checklists"> | string
    filename?: StringWithAggregatesFilter<"master_image_checklists"> | string
    updated_by?: StringWithAggregatesFilter<"master_image_checklists"> | string
    created_by?: StringWithAggregatesFilter<"master_image_checklists"> | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"master_image_checklists"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"master_image_checklists"> | Date | string | null
  }

  export type order_checklistsWhereInput = {
    AND?: order_checklistsWhereInput | order_checklistsWhereInput[]
    OR?: order_checklistsWhereInput[]
    NOT?: order_checklistsWhereInput | order_checklistsWhereInput[]
    id?: StringFilter<"order_checklists"> | string
    checklist_id?: StringFilter<"order_checklists"> | string
    order_id?: StringFilter<"order_checklists"> | string
    model?: StringFilter<"order_checklists"> | string
    workcenter?: StringFilter<"order_checklists"> | string
    status?: BoolFilter<"order_checklists"> | boolean
    date_open?: DateTimeNullableFilter<"order_checklists"> | Date | string | null
    date_closed?: DateTimeNullableFilter<"order_checklists"> | Date | string | null
    updated_by?: StringFilter<"order_checklists"> | string
    created_by?: StringFilter<"order_checklists"> | string
    updated_at?: DateTimeNullableFilter<"order_checklists"> | Date | string | null
    created_at?: DateTimeNullableFilter<"order_checklists"> | Date | string | null
  }

  export type order_checklistsOrderByWithRelationInput = {
    id?: SortOrder
    checklist_id?: SortOrder
    order_id?: SortOrder
    model?: SortOrder
    workcenter?: SortOrder
    status?: SortOrder
    date_open?: SortOrderInput | SortOrder
    date_closed?: SortOrderInput | SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type order_checklistsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: order_checklistsWhereInput | order_checklistsWhereInput[]
    OR?: order_checklistsWhereInput[]
    NOT?: order_checklistsWhereInput | order_checklistsWhereInput[]
    checklist_id?: StringFilter<"order_checklists"> | string
    order_id?: StringFilter<"order_checklists"> | string
    model?: StringFilter<"order_checklists"> | string
    workcenter?: StringFilter<"order_checklists"> | string
    status?: BoolFilter<"order_checklists"> | boolean
    date_open?: DateTimeNullableFilter<"order_checklists"> | Date | string | null
    date_closed?: DateTimeNullableFilter<"order_checklists"> | Date | string | null
    updated_by?: StringFilter<"order_checklists"> | string
    created_by?: StringFilter<"order_checklists"> | string
    updated_at?: DateTimeNullableFilter<"order_checklists"> | Date | string | null
    created_at?: DateTimeNullableFilter<"order_checklists"> | Date | string | null
  }, "id">

  export type order_checklistsOrderByWithAggregationInput = {
    id?: SortOrder
    checklist_id?: SortOrder
    order_id?: SortOrder
    model?: SortOrder
    workcenter?: SortOrder
    status?: SortOrder
    date_open?: SortOrderInput | SortOrder
    date_closed?: SortOrderInput | SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: order_checklistsCountOrderByAggregateInput
    _max?: order_checklistsMaxOrderByAggregateInput
    _min?: order_checklistsMinOrderByAggregateInput
  }

  export type order_checklistsScalarWhereWithAggregatesInput = {
    AND?: order_checklistsScalarWhereWithAggregatesInput | order_checklistsScalarWhereWithAggregatesInput[]
    OR?: order_checklistsScalarWhereWithAggregatesInput[]
    NOT?: order_checklistsScalarWhereWithAggregatesInput | order_checklistsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"order_checklists"> | string
    checklist_id?: StringWithAggregatesFilter<"order_checklists"> | string
    order_id?: StringWithAggregatesFilter<"order_checklists"> | string
    model?: StringWithAggregatesFilter<"order_checklists"> | string
    workcenter?: StringWithAggregatesFilter<"order_checklists"> | string
    status?: BoolWithAggregatesFilter<"order_checklists"> | boolean
    date_open?: DateTimeNullableWithAggregatesFilter<"order_checklists"> | Date | string | null
    date_closed?: DateTimeNullableWithAggregatesFilter<"order_checklists"> | Date | string | null
    updated_by?: StringWithAggregatesFilter<"order_checklists"> | string
    created_by?: StringWithAggregatesFilter<"order_checklists"> | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"order_checklists"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"order_checklists"> | Date | string | null
  }

  export type order_checklist_detailsWhereInput = {
    AND?: order_checklist_detailsWhereInput | order_checklist_detailsWhereInput[]
    OR?: order_checklist_detailsWhereInput[]
    NOT?: order_checklist_detailsWhereInput | order_checklist_detailsWhereInput[]
    id?: StringFilter<"order_checklist_details"> | string
    order_checklist_id?: StringFilter<"order_checklist_details"> | string
    checked?: BoolFilter<"order_checklist_details"> | boolean
    notes_by_prod?: StringFilter<"order_checklist_details"> | string
    notes_by_qc?: StringFilter<"order_checklist_details"> | string
    updated_by?: StringFilter<"order_checklist_details"> | string
    created_by?: StringFilter<"order_checklist_details"> | string
    updated_at?: DateTimeNullableFilter<"order_checklist_details"> | Date | string | null
    created_at?: DateTimeNullableFilter<"order_checklist_details"> | Date | string | null
  }

  export type order_checklist_detailsOrderByWithRelationInput = {
    id?: SortOrder
    order_checklist_id?: SortOrder
    checked?: SortOrder
    notes_by_prod?: SortOrder
    notes_by_qc?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type order_checklist_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: order_checklist_detailsWhereInput | order_checklist_detailsWhereInput[]
    OR?: order_checklist_detailsWhereInput[]
    NOT?: order_checklist_detailsWhereInput | order_checklist_detailsWhereInput[]
    order_checklist_id?: StringFilter<"order_checklist_details"> | string
    checked?: BoolFilter<"order_checklist_details"> | boolean
    notes_by_prod?: StringFilter<"order_checklist_details"> | string
    notes_by_qc?: StringFilter<"order_checklist_details"> | string
    updated_by?: StringFilter<"order_checklist_details"> | string
    created_by?: StringFilter<"order_checklist_details"> | string
    updated_at?: DateTimeNullableFilter<"order_checklist_details"> | Date | string | null
    created_at?: DateTimeNullableFilter<"order_checklist_details"> | Date | string | null
  }, "id">

  export type order_checklist_detailsOrderByWithAggregationInput = {
    id?: SortOrder
    order_checklist_id?: SortOrder
    checked?: SortOrder
    notes_by_prod?: SortOrder
    notes_by_qc?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: order_checklist_detailsCountOrderByAggregateInput
    _max?: order_checklist_detailsMaxOrderByAggregateInput
    _min?: order_checklist_detailsMinOrderByAggregateInput
  }

  export type order_checklist_detailsScalarWhereWithAggregatesInput = {
    AND?: order_checklist_detailsScalarWhereWithAggregatesInput | order_checklist_detailsScalarWhereWithAggregatesInput[]
    OR?: order_checklist_detailsScalarWhereWithAggregatesInput[]
    NOT?: order_checklist_detailsScalarWhereWithAggregatesInput | order_checklist_detailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"order_checklist_details"> | string
    order_checklist_id?: StringWithAggregatesFilter<"order_checklist_details"> | string
    checked?: BoolWithAggregatesFilter<"order_checklist_details"> | boolean
    notes_by_prod?: StringWithAggregatesFilter<"order_checklist_details"> | string
    notes_by_qc?: StringWithAggregatesFilter<"order_checklist_details"> | string
    updated_by?: StringWithAggregatesFilter<"order_checklist_details"> | string
    created_by?: StringWithAggregatesFilter<"order_checklist_details"> | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"order_checklist_details"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"order_checklist_details"> | Date | string | null
  }

  export type order_checklist_notesWhereInput = {
    AND?: order_checklist_notesWhereInput | order_checklist_notesWhereInput[]
    OR?: order_checklist_notesWhereInput[]
    NOT?: order_checklist_notesWhereInput | order_checklist_notesWhereInput[]
    id?: StringFilter<"order_checklist_notes"> | string
    order_checklist_detail_id?: StringFilter<"order_checklist_notes"> | string
    checked_status?: BoolFilter<"order_checklist_notes"> | boolean
    notes?: StringFilter<"order_checklist_notes"> | string
    notes_by?: StringFilter<"order_checklist_notes"> | string
    updated_by?: StringFilter<"order_checklist_notes"> | string
    created_by?: StringFilter<"order_checklist_notes"> | string
    updated_at?: DateTimeNullableFilter<"order_checklist_notes"> | Date | string | null
    created_at?: DateTimeNullableFilter<"order_checklist_notes"> | Date | string | null
  }

  export type order_checklist_notesOrderByWithRelationInput = {
    id?: SortOrder
    order_checklist_detail_id?: SortOrder
    checked_status?: SortOrder
    notes?: SortOrder
    notes_by?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type order_checklist_notesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: order_checklist_notesWhereInput | order_checklist_notesWhereInput[]
    OR?: order_checklist_notesWhereInput[]
    NOT?: order_checklist_notesWhereInput | order_checklist_notesWhereInput[]
    order_checklist_detail_id?: StringFilter<"order_checklist_notes"> | string
    checked_status?: BoolFilter<"order_checklist_notes"> | boolean
    notes?: StringFilter<"order_checklist_notes"> | string
    notes_by?: StringFilter<"order_checklist_notes"> | string
    updated_by?: StringFilter<"order_checklist_notes"> | string
    created_by?: StringFilter<"order_checklist_notes"> | string
    updated_at?: DateTimeNullableFilter<"order_checklist_notes"> | Date | string | null
    created_at?: DateTimeNullableFilter<"order_checklist_notes"> | Date | string | null
  }, "id">

  export type order_checklist_notesOrderByWithAggregationInput = {
    id?: SortOrder
    order_checklist_detail_id?: SortOrder
    checked_status?: SortOrder
    notes?: SortOrder
    notes_by?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: order_checklist_notesCountOrderByAggregateInput
    _max?: order_checklist_notesMaxOrderByAggregateInput
    _min?: order_checklist_notesMinOrderByAggregateInput
  }

  export type order_checklist_notesScalarWhereWithAggregatesInput = {
    AND?: order_checklist_notesScalarWhereWithAggregatesInput | order_checklist_notesScalarWhereWithAggregatesInput[]
    OR?: order_checklist_notesScalarWhereWithAggregatesInput[]
    NOT?: order_checklist_notesScalarWhereWithAggregatesInput | order_checklist_notesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"order_checklist_notes"> | string
    order_checklist_detail_id?: StringWithAggregatesFilter<"order_checklist_notes"> | string
    checked_status?: BoolWithAggregatesFilter<"order_checklist_notes"> | boolean
    notes?: StringWithAggregatesFilter<"order_checklist_notes"> | string
    notes_by?: StringWithAggregatesFilter<"order_checklist_notes"> | string
    updated_by?: StringWithAggregatesFilter<"order_checklist_notes"> | string
    created_by?: StringWithAggregatesFilter<"order_checklist_notes"> | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"order_checklist_notes"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"order_checklist_notes"> | Date | string | null
  }

  export type order_image_checklistsWhereInput = {
    AND?: order_image_checklistsWhereInput | order_image_checklistsWhereInput[]
    OR?: order_image_checklistsWhereInput[]
    NOT?: order_image_checklistsWhereInput | order_image_checklistsWhereInput[]
    id?: StringFilter<"order_image_checklists"> | string
    order_checklist_detail_id?: StringFilter<"order_image_checklists"> | string
    filename?: StringFilter<"order_image_checklists"> | string
    updated_by?: StringFilter<"order_image_checklists"> | string
    created_by?: StringFilter<"order_image_checklists"> | string
    updated_at?: DateTimeNullableFilter<"order_image_checklists"> | Date | string | null
    created_at?: DateTimeNullableFilter<"order_image_checklists"> | Date | string | null
  }

  export type order_image_checklistsOrderByWithRelationInput = {
    id?: SortOrder
    order_checklist_detail_id?: SortOrder
    filename?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type order_image_checklistsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: order_image_checklistsWhereInput | order_image_checklistsWhereInput[]
    OR?: order_image_checklistsWhereInput[]
    NOT?: order_image_checklistsWhereInput | order_image_checklistsWhereInput[]
    order_checklist_detail_id?: StringFilter<"order_image_checklists"> | string
    filename?: StringFilter<"order_image_checklists"> | string
    updated_by?: StringFilter<"order_image_checklists"> | string
    created_by?: StringFilter<"order_image_checklists"> | string
    updated_at?: DateTimeNullableFilter<"order_image_checklists"> | Date | string | null
    created_at?: DateTimeNullableFilter<"order_image_checklists"> | Date | string | null
  }, "id">

  export type order_image_checklistsOrderByWithAggregationInput = {
    id?: SortOrder
    order_checklist_detail_id?: SortOrder
    filename?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: order_image_checklistsCountOrderByAggregateInput
    _max?: order_image_checklistsMaxOrderByAggregateInput
    _min?: order_image_checklistsMinOrderByAggregateInput
  }

  export type order_image_checklistsScalarWhereWithAggregatesInput = {
    AND?: order_image_checklistsScalarWhereWithAggregatesInput | order_image_checklistsScalarWhereWithAggregatesInput[]
    OR?: order_image_checklistsScalarWhereWithAggregatesInput[]
    NOT?: order_image_checklistsScalarWhereWithAggregatesInput | order_image_checklistsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"order_image_checklists"> | string
    order_checklist_detail_id?: StringWithAggregatesFilter<"order_image_checklists"> | string
    filename?: StringWithAggregatesFilter<"order_image_checklists"> | string
    updated_by?: StringWithAggregatesFilter<"order_image_checklists"> | string
    created_by?: StringWithAggregatesFilter<"order_image_checklists"> | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"order_image_checklists"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"order_image_checklists"> | Date | string | null
  }

  export type order_image_notesWhereInput = {
    AND?: order_image_notesWhereInput | order_image_notesWhereInput[]
    OR?: order_image_notesWhereInput[]
    NOT?: order_image_notesWhereInput | order_image_notesWhereInput[]
    id?: StringFilter<"order_image_notes"> | string
    order_image_checklist_id?: StringFilter<"order_image_notes"> | string
    filename?: StringFilter<"order_image_notes"> | string
    status?: BoolFilter<"order_image_notes"> | boolean
    notes?: StringFilter<"order_image_notes"> | string
    notes_by?: StringFilter<"order_image_notes"> | string
    updated_by?: StringFilter<"order_image_notes"> | string
    created_by?: StringFilter<"order_image_notes"> | string
    updated_at?: DateTimeNullableFilter<"order_image_notes"> | Date | string | null
    created_at?: DateTimeNullableFilter<"order_image_notes"> | Date | string | null
  }

  export type order_image_notesOrderByWithRelationInput = {
    id?: SortOrder
    order_image_checklist_id?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    notes_by?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type order_image_notesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: order_image_notesWhereInput | order_image_notesWhereInput[]
    OR?: order_image_notesWhereInput[]
    NOT?: order_image_notesWhereInput | order_image_notesWhereInput[]
    order_image_checklist_id?: StringFilter<"order_image_notes"> | string
    filename?: StringFilter<"order_image_notes"> | string
    status?: BoolFilter<"order_image_notes"> | boolean
    notes?: StringFilter<"order_image_notes"> | string
    notes_by?: StringFilter<"order_image_notes"> | string
    updated_by?: StringFilter<"order_image_notes"> | string
    created_by?: StringFilter<"order_image_notes"> | string
    updated_at?: DateTimeNullableFilter<"order_image_notes"> | Date | string | null
    created_at?: DateTimeNullableFilter<"order_image_notes"> | Date | string | null
  }, "id">

  export type order_image_notesOrderByWithAggregationInput = {
    id?: SortOrder
    order_image_checklist_id?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    notes_by?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: order_image_notesCountOrderByAggregateInput
    _max?: order_image_notesMaxOrderByAggregateInput
    _min?: order_image_notesMinOrderByAggregateInput
  }

  export type order_image_notesScalarWhereWithAggregatesInput = {
    AND?: order_image_notesScalarWhereWithAggregatesInput | order_image_notesScalarWhereWithAggregatesInput[]
    OR?: order_image_notesScalarWhereWithAggregatesInput[]
    NOT?: order_image_notesScalarWhereWithAggregatesInput | order_image_notesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"order_image_notes"> | string
    order_image_checklist_id?: StringWithAggregatesFilter<"order_image_notes"> | string
    filename?: StringWithAggregatesFilter<"order_image_notes"> | string
    status?: BoolWithAggregatesFilter<"order_image_notes"> | boolean
    notes?: StringWithAggregatesFilter<"order_image_notes"> | string
    notes_by?: StringWithAggregatesFilter<"order_image_notes"> | string
    updated_by?: StringWithAggregatesFilter<"order_image_notes"> | string
    created_by?: StringWithAggregatesFilter<"order_image_notes"> | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"order_image_notes"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"order_image_notes"> | Date | string | null
  }

  export type sysdiagramsWhereInput = {
    AND?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    OR?: sysdiagramsWhereInput[]
    NOT?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    name?: StringFilter<"sysdiagrams"> | string
    principal_id?: IntFilter<"sysdiagrams"> | number
    diagram_id?: IntFilter<"sysdiagrams"> | number
    version?: IntNullableFilter<"sysdiagrams"> | number | null
    definition?: BytesNullableFilter<"sysdiagrams"> | Uint8Array | null
  }

  export type sysdiagramsOrderByWithRelationInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrderInput | SortOrder
    definition?: SortOrderInput | SortOrder
  }

  export type sysdiagramsWhereUniqueInput = Prisma.AtLeast<{
    diagram_id?: number
    principal_id_name?: sysdiagramsPrincipal_idNameCompoundUniqueInput
    AND?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    OR?: sysdiagramsWhereInput[]
    NOT?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    name?: StringFilter<"sysdiagrams"> | string
    principal_id?: IntFilter<"sysdiagrams"> | number
    version?: IntNullableFilter<"sysdiagrams"> | number | null
    definition?: BytesNullableFilter<"sysdiagrams"> | Uint8Array | null
  }, "diagram_id" | "principal_id_name">

  export type sysdiagramsOrderByWithAggregationInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrderInput | SortOrder
    definition?: SortOrderInput | SortOrder
    _count?: sysdiagramsCountOrderByAggregateInput
    _avg?: sysdiagramsAvgOrderByAggregateInput
    _max?: sysdiagramsMaxOrderByAggregateInput
    _min?: sysdiagramsMinOrderByAggregateInput
    _sum?: sysdiagramsSumOrderByAggregateInput
  }

  export type sysdiagramsScalarWhereWithAggregatesInput = {
    AND?: sysdiagramsScalarWhereWithAggregatesInput | sysdiagramsScalarWhereWithAggregatesInput[]
    OR?: sysdiagramsScalarWhereWithAggregatesInput[]
    NOT?: sysdiagramsScalarWhereWithAggregatesInput | sysdiagramsScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"sysdiagrams"> | string
    principal_id?: IntWithAggregatesFilter<"sysdiagrams"> | number
    diagram_id?: IntWithAggregatesFilter<"sysdiagrams"> | number
    version?: IntNullableWithAggregatesFilter<"sysdiagrams"> | number | null
    definition?: BytesNullableWithAggregatesFilter<"sysdiagrams"> | Uint8Array | null
  }

  export type access_tokensCreateInput = {
    id?: string
    tokenable_type: string
    tokenable_id: string
    name: string
    token: string
    abilities?: string | null
    last_used_at?: Date | string | null
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type access_tokensUncheckedCreateInput = {
    id?: string
    tokenable_type: string
    tokenable_id: string
    name: string
    token: string
    abilities?: string | null
    last_used_at?: Date | string | null
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type access_tokensUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenable_type?: StringFieldUpdateOperationsInput | string
    tokenable_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type access_tokensUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenable_type?: StringFieldUpdateOperationsInput | string
    tokenable_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type access_tokensCreateManyInput = {
    id?: string
    tokenable_type: string
    tokenable_id: string
    name: string
    token: string
    abilities?: string | null
    last_used_at?: Date | string | null
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type access_tokensUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenable_type?: StringFieldUpdateOperationsInput | string
    tokenable_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type access_tokensUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenable_type?: StringFieldUpdateOperationsInput | string
    tokenable_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type master_checklist_detailsCreateInput = {
    id?: string
    name: string
    short_desc?: string | null
    required_image?: string | null
    updated_at?: Date | string | null
    created_at?: Date | string | null
    master_checklists: master_checklistsCreateNestedOneWithoutMaster_checklist_detailsInput
    users_master_checklist_details_updated_byTousers: usersCreateNestedOneWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput
    users_master_checklist_details_created_byTousers: usersCreateNestedOneWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput
  }

  export type master_checklist_detailsUncheckedCreateInput = {
    id?: string
    checklist_header_id: string
    name: string
    short_desc?: string | null
    required_image?: string | null
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type master_checklist_detailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: NullableStringFieldUpdateOperationsInput | string | null
    required_image?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklists?: master_checklistsUpdateOneRequiredWithoutMaster_checklist_detailsNestedInput
    users_master_checklist_details_updated_byTousers?: usersUpdateOneRequiredWithoutMaster_checklist_details_master_checklist_details_updated_byTousersNestedInput
    users_master_checklist_details_created_byTousers?: usersUpdateOneRequiredWithoutMaster_checklist_details_master_checklist_details_created_byTousersNestedInput
  }

  export type master_checklist_detailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklist_header_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: NullableStringFieldUpdateOperationsInput | string | null
    required_image?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type master_checklist_detailsCreateManyInput = {
    id?: string
    checklist_header_id: string
    name: string
    short_desc?: string | null
    required_image?: string | null
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type master_checklist_detailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: NullableStringFieldUpdateOperationsInput | string | null
    required_image?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type master_checklist_detailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklist_header_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: NullableStringFieldUpdateOperationsInput | string | null
    required_image?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id?: string
    name: string
    email: string
    role?: string | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsCreateNestedManyWithoutUsers_master_checklist_details_updated_byTousersInput
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsCreateNestedManyWithoutUsers_master_checklist_details_created_byTousersInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsCreateNestedManyWithoutUsers_master_checklists_updated_byTousersInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsCreateNestedManyWithoutUsers_master_checklists_created_byTousersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    role?: string | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsUncheckedCreateNestedManyWithoutUsers_master_checklist_details_updated_byTousersInput
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsUncheckedCreateNestedManyWithoutUsers_master_checklist_details_created_byTousersInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsUncheckedCreateNestedManyWithoutUsers_master_checklists_updated_byTousersInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsUncheckedCreateNestedManyWithoutUsers_master_checklists_created_byTousersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsUpdateManyWithoutUsers_master_checklist_details_updated_byTousersNestedInput
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsUpdateManyWithoutUsers_master_checklist_details_created_byTousersNestedInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsUpdateManyWithoutUsers_master_checklists_updated_byTousersNestedInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsUpdateManyWithoutUsers_master_checklists_created_byTousersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsUncheckedUpdateManyWithoutUsers_master_checklist_details_updated_byTousersNestedInput
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsUncheckedUpdateManyWithoutUsers_master_checklist_details_created_byTousersNestedInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsUncheckedUpdateManyWithoutUsers_master_checklists_updated_byTousersNestedInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsUncheckedUpdateManyWithoutUsers_master_checklists_created_byTousersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    name: string
    email: string
    role?: string | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type master_checklistsCreateInput = {
    id?: string
    name: string
    short_desc: string
    workcenter: string
    model: string
    status: boolean
    updated_at?: Date | string | null
    created_at?: Date | string | null
    master_checklist_details?: master_checklist_detailsCreateNestedManyWithoutMaster_checklistsInput
    users_master_checklists_updated_byTousers: usersCreateNestedOneWithoutMaster_checklists_master_checklists_updated_byTousersInput
    users_master_checklists_created_byTousers: usersCreateNestedOneWithoutMaster_checklists_master_checklists_created_byTousersInput
  }

  export type master_checklistsUncheckedCreateInput = {
    id?: string
    name: string
    short_desc: string
    workcenter: string
    model: string
    status: boolean
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
    master_checklist_details?: master_checklist_detailsUncheckedCreateNestedManyWithoutMaster_checklistsInput
  }

  export type master_checklistsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    workcenter?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklist_details?: master_checklist_detailsUpdateManyWithoutMaster_checklistsNestedInput
    users_master_checklists_updated_byTousers?: usersUpdateOneRequiredWithoutMaster_checklists_master_checklists_updated_byTousersNestedInput
    users_master_checklists_created_byTousers?: usersUpdateOneRequiredWithoutMaster_checklists_master_checklists_created_byTousersNestedInput
  }

  export type master_checklistsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    workcenter?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklist_details?: master_checklist_detailsUncheckedUpdateManyWithoutMaster_checklistsNestedInput
  }

  export type master_checklistsCreateManyInput = {
    id?: string
    name: string
    short_desc: string
    workcenter: string
    model: string
    status: boolean
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type master_checklistsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    workcenter?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type master_checklistsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    workcenter?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type master_image_checklistsCreateInput = {
    id?: string
    checklist_detail_id: string
    filename: string
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type master_image_checklistsUncheckedCreateInput = {
    id?: string
    checklist_detail_id: string
    filename: string
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type master_image_checklistsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklist_detail_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type master_image_checklistsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklist_detail_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type master_image_checklistsCreateManyInput = {
    id?: string
    checklist_detail_id: string
    filename: string
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type master_image_checklistsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklist_detail_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type master_image_checklistsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklist_detail_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_checklistsCreateInput = {
    id?: string
    checklist_id: string
    order_id: string
    model: string
    workcenter: string
    status: boolean
    date_open?: Date | string | null
    date_closed?: Date | string | null
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type order_checklistsUncheckedCreateInput = {
    id?: string
    checklist_id: string
    order_id: string
    model: string
    workcenter: string
    status: boolean
    date_open?: Date | string | null
    date_closed?: Date | string | null
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type order_checklistsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklist_id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    workcenter?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    date_open?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_closed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_checklistsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklist_id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    workcenter?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    date_open?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_closed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_checklistsCreateManyInput = {
    id?: string
    checklist_id: string
    order_id: string
    model: string
    workcenter: string
    status: boolean
    date_open?: Date | string | null
    date_closed?: Date | string | null
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type order_checklistsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklist_id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    workcenter?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    date_open?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_closed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_checklistsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklist_id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    workcenter?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    date_open?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_closed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_checklist_detailsCreateInput = {
    id?: string
    order_checklist_id: string
    checked: boolean
    notes_by_prod: string
    notes_by_qc: string
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type order_checklist_detailsUncheckedCreateInput = {
    id?: string
    order_checklist_id: string
    checked: boolean
    notes_by_prod: string
    notes_by_qc: string
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type order_checklist_detailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_checklist_id?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    notes_by_prod?: StringFieldUpdateOperationsInput | string
    notes_by_qc?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_checklist_detailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_checklist_id?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    notes_by_prod?: StringFieldUpdateOperationsInput | string
    notes_by_qc?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_checklist_detailsCreateManyInput = {
    id?: string
    order_checklist_id: string
    checked: boolean
    notes_by_prod: string
    notes_by_qc: string
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type order_checklist_detailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_checklist_id?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    notes_by_prod?: StringFieldUpdateOperationsInput | string
    notes_by_qc?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_checklist_detailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_checklist_id?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    notes_by_prod?: StringFieldUpdateOperationsInput | string
    notes_by_qc?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_checklist_notesCreateInput = {
    id?: string
    order_checklist_detail_id: string
    checked_status: boolean
    notes: string
    notes_by: string
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type order_checklist_notesUncheckedCreateInput = {
    id?: string
    order_checklist_detail_id: string
    checked_status: boolean
    notes: string
    notes_by: string
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type order_checklist_notesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_checklist_detail_id?: StringFieldUpdateOperationsInput | string
    checked_status?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    notes_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_checklist_notesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_checklist_detail_id?: StringFieldUpdateOperationsInput | string
    checked_status?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    notes_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_checklist_notesCreateManyInput = {
    id?: string
    order_checklist_detail_id: string
    checked_status: boolean
    notes: string
    notes_by: string
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type order_checklist_notesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_checklist_detail_id?: StringFieldUpdateOperationsInput | string
    checked_status?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    notes_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_checklist_notesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_checklist_detail_id?: StringFieldUpdateOperationsInput | string
    checked_status?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    notes_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_image_checklistsCreateInput = {
    id?: string
    order_checklist_detail_id: string
    filename: string
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type order_image_checklistsUncheckedCreateInput = {
    id?: string
    order_checklist_detail_id: string
    filename: string
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type order_image_checklistsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_checklist_detail_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_image_checklistsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_checklist_detail_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_image_checklistsCreateManyInput = {
    id?: string
    order_checklist_detail_id: string
    filename: string
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type order_image_checklistsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_checklist_detail_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_image_checklistsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_checklist_detail_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_image_notesCreateInput = {
    id?: string
    order_image_checklist_id: string
    filename: string
    status: boolean
    notes: string
    notes_by: string
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type order_image_notesUncheckedCreateInput = {
    id?: string
    order_image_checklist_id: string
    filename: string
    status: boolean
    notes: string
    notes_by: string
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type order_image_notesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_image_checklist_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    notes_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_image_notesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_image_checklist_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    notes_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_image_notesCreateManyInput = {
    id?: string
    order_image_checklist_id: string
    filename: string
    status: boolean
    notes: string
    notes_by: string
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type order_image_notesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_image_checklist_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    notes_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_image_notesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_image_checklist_id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    notes?: StringFieldUpdateOperationsInput | string
    notes_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sysdiagramsCreateInput = {
    name: string
    principal_id: number
    version?: number | null
    definition?: Uint8Array | null
  }

  export type sysdiagramsUncheckedCreateInput = {
    name: string
    principal_id: number
    diagram_id?: number
    version?: number | null
    definition?: Uint8Array | null
  }

  export type sysdiagramsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type sysdiagramsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    diagram_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type sysdiagramsCreateManyInput = {
    name: string
    principal_id: number
    version?: number | null
    definition?: Uint8Array | null
  }

  export type sysdiagramsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type sysdiagramsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    diagram_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type access_tokensCountOrderByAggregateInput = {
    id?: SortOrder
    tokenable_type?: SortOrder
    tokenable_id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    abilities?: SortOrder
    last_used_at?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type access_tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenable_type?: SortOrder
    tokenable_id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    abilities?: SortOrder
    last_used_at?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type access_tokensMinOrderByAggregateInput = {
    id?: SortOrder
    tokenable_type?: SortOrder
    tokenable_id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    abilities?: SortOrder
    last_used_at?: SortOrder
    expires_at?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Master_checklistsScalarRelationFilter = {
    is?: master_checklistsWhereInput
    isNot?: master_checklistsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type master_checklist_detailsCountOrderByAggregateInput = {
    id?: SortOrder
    checklist_header_id?: SortOrder
    name?: SortOrder
    short_desc?: SortOrder
    required_image?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type master_checklist_detailsMaxOrderByAggregateInput = {
    id?: SortOrder
    checklist_header_id?: SortOrder
    name?: SortOrder
    short_desc?: SortOrder
    required_image?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type master_checklist_detailsMinOrderByAggregateInput = {
    id?: SortOrder
    checklist_header_id?: SortOrder
    name?: SortOrder
    short_desc?: SortOrder
    required_image?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type Master_checklist_detailsListRelationFilter = {
    every?: master_checklist_detailsWhereInput
    some?: master_checklist_detailsWhereInput
    none?: master_checklist_detailsWhereInput
  }

  export type Master_checklistsListRelationFilter = {
    every?: master_checklistsWhereInput
    some?: master_checklistsWhereInput
    none?: master_checklistsWhereInput
  }

  export type master_checklist_detailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type master_checklistsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type master_checklistsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    short_desc?: SortOrder
    workcenter?: SortOrder
    model?: SortOrder
    status?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type master_checklistsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    short_desc?: SortOrder
    workcenter?: SortOrder
    model?: SortOrder
    status?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type master_checklistsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    short_desc?: SortOrder
    workcenter?: SortOrder
    model?: SortOrder
    status?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type master_image_checklistsCountOrderByAggregateInput = {
    id?: SortOrder
    checklist_detail_id?: SortOrder
    filename?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type master_image_checklistsMaxOrderByAggregateInput = {
    id?: SortOrder
    checklist_detail_id?: SortOrder
    filename?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type master_image_checklistsMinOrderByAggregateInput = {
    id?: SortOrder
    checklist_detail_id?: SortOrder
    filename?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type order_checklistsCountOrderByAggregateInput = {
    id?: SortOrder
    checklist_id?: SortOrder
    order_id?: SortOrder
    model?: SortOrder
    workcenter?: SortOrder
    status?: SortOrder
    date_open?: SortOrder
    date_closed?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type order_checklistsMaxOrderByAggregateInput = {
    id?: SortOrder
    checklist_id?: SortOrder
    order_id?: SortOrder
    model?: SortOrder
    workcenter?: SortOrder
    status?: SortOrder
    date_open?: SortOrder
    date_closed?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type order_checklistsMinOrderByAggregateInput = {
    id?: SortOrder
    checklist_id?: SortOrder
    order_id?: SortOrder
    model?: SortOrder
    workcenter?: SortOrder
    status?: SortOrder
    date_open?: SortOrder
    date_closed?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type order_checklist_detailsCountOrderByAggregateInput = {
    id?: SortOrder
    order_checklist_id?: SortOrder
    checked?: SortOrder
    notes_by_prod?: SortOrder
    notes_by_qc?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type order_checklist_detailsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_checklist_id?: SortOrder
    checked?: SortOrder
    notes_by_prod?: SortOrder
    notes_by_qc?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type order_checklist_detailsMinOrderByAggregateInput = {
    id?: SortOrder
    order_checklist_id?: SortOrder
    checked?: SortOrder
    notes_by_prod?: SortOrder
    notes_by_qc?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type order_checklist_notesCountOrderByAggregateInput = {
    id?: SortOrder
    order_checklist_detail_id?: SortOrder
    checked_status?: SortOrder
    notes?: SortOrder
    notes_by?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type order_checklist_notesMaxOrderByAggregateInput = {
    id?: SortOrder
    order_checklist_detail_id?: SortOrder
    checked_status?: SortOrder
    notes?: SortOrder
    notes_by?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type order_checklist_notesMinOrderByAggregateInput = {
    id?: SortOrder
    order_checklist_detail_id?: SortOrder
    checked_status?: SortOrder
    notes?: SortOrder
    notes_by?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type order_image_checklistsCountOrderByAggregateInput = {
    id?: SortOrder
    order_checklist_detail_id?: SortOrder
    filename?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type order_image_checklistsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_checklist_detail_id?: SortOrder
    filename?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type order_image_checklistsMinOrderByAggregateInput = {
    id?: SortOrder
    order_checklist_detail_id?: SortOrder
    filename?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type order_image_notesCountOrderByAggregateInput = {
    id?: SortOrder
    order_image_checklist_id?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    notes_by?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type order_image_notesMaxOrderByAggregateInput = {
    id?: SortOrder
    order_image_checklist_id?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    notes_by?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type order_image_notesMinOrderByAggregateInput = {
    id?: SortOrder
    order_image_checklist_id?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    notes_by?: SortOrder
    updated_by?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type sysdiagramsPrincipal_idNameCompoundUniqueInput = {
    principal_id: number
    name: string
  }

  export type sysdiagramsCountOrderByAggregateInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
    definition?: SortOrder
  }

  export type sysdiagramsAvgOrderByAggregateInput = {
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
  }

  export type sysdiagramsMaxOrderByAggregateInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
    definition?: SortOrder
  }

  export type sysdiagramsMinOrderByAggregateInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
    definition?: SortOrder
  }

  export type sysdiagramsSumOrderByAggregateInput = {
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type master_checklistsCreateNestedOneWithoutMaster_checklist_detailsInput = {
    create?: XOR<master_checklistsCreateWithoutMaster_checklist_detailsInput, master_checklistsUncheckedCreateWithoutMaster_checklist_detailsInput>
    connectOrCreate?: master_checklistsCreateOrConnectWithoutMaster_checklist_detailsInput
    connect?: master_checklistsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput = {
    create?: XOR<usersCreateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput, usersUncheckedCreateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput = {
    create?: XOR<usersCreateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput, usersUncheckedCreateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type master_checklistsUpdateOneRequiredWithoutMaster_checklist_detailsNestedInput = {
    create?: XOR<master_checklistsCreateWithoutMaster_checklist_detailsInput, master_checklistsUncheckedCreateWithoutMaster_checklist_detailsInput>
    connectOrCreate?: master_checklistsCreateOrConnectWithoutMaster_checklist_detailsInput
    upsert?: master_checklistsUpsertWithoutMaster_checklist_detailsInput
    connect?: master_checklistsWhereUniqueInput
    update?: XOR<XOR<master_checklistsUpdateToOneWithWhereWithoutMaster_checklist_detailsInput, master_checklistsUpdateWithoutMaster_checklist_detailsInput>, master_checklistsUncheckedUpdateWithoutMaster_checklist_detailsInput>
  }

  export type usersUpdateOneRequiredWithoutMaster_checklist_details_master_checklist_details_updated_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput, usersUncheckedCreateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput
    upsert?: usersUpsertWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput, usersUpdateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput>, usersUncheckedUpdateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput>
  }

  export type usersUpdateOneRequiredWithoutMaster_checklist_details_master_checklist_details_created_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput, usersUncheckedCreateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput
    upsert?: usersUpsertWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput, usersUpdateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput>, usersUncheckedUpdateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput>
  }

  export type master_checklist_detailsCreateNestedManyWithoutUsers_master_checklist_details_updated_byTousersInput = {
    create?: XOR<master_checklist_detailsCreateWithoutUsers_master_checklist_details_updated_byTousersInput, master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_updated_byTousersInput> | master_checklist_detailsCreateWithoutUsers_master_checklist_details_updated_byTousersInput[] | master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_updated_byTousersInput[]
    connectOrCreate?: master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_updated_byTousersInput | master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_updated_byTousersInput[]
    createMany?: master_checklist_detailsCreateManyUsers_master_checklist_details_updated_byTousersInputEnvelope
    connect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
  }

  export type master_checklist_detailsCreateNestedManyWithoutUsers_master_checklist_details_created_byTousersInput = {
    create?: XOR<master_checklist_detailsCreateWithoutUsers_master_checklist_details_created_byTousersInput, master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_created_byTousersInput> | master_checklist_detailsCreateWithoutUsers_master_checklist_details_created_byTousersInput[] | master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_created_byTousersInput[]
    connectOrCreate?: master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_created_byTousersInput | master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_created_byTousersInput[]
    createMany?: master_checklist_detailsCreateManyUsers_master_checklist_details_created_byTousersInputEnvelope
    connect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
  }

  export type master_checklistsCreateNestedManyWithoutUsers_master_checklists_updated_byTousersInput = {
    create?: XOR<master_checklistsCreateWithoutUsers_master_checklists_updated_byTousersInput, master_checklistsUncheckedCreateWithoutUsers_master_checklists_updated_byTousersInput> | master_checklistsCreateWithoutUsers_master_checklists_updated_byTousersInput[] | master_checklistsUncheckedCreateWithoutUsers_master_checklists_updated_byTousersInput[]
    connectOrCreate?: master_checklistsCreateOrConnectWithoutUsers_master_checklists_updated_byTousersInput | master_checklistsCreateOrConnectWithoutUsers_master_checklists_updated_byTousersInput[]
    createMany?: master_checklistsCreateManyUsers_master_checklists_updated_byTousersInputEnvelope
    connect?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
  }

  export type master_checklistsCreateNestedManyWithoutUsers_master_checklists_created_byTousersInput = {
    create?: XOR<master_checklistsCreateWithoutUsers_master_checklists_created_byTousersInput, master_checklistsUncheckedCreateWithoutUsers_master_checklists_created_byTousersInput> | master_checklistsCreateWithoutUsers_master_checklists_created_byTousersInput[] | master_checklistsUncheckedCreateWithoutUsers_master_checklists_created_byTousersInput[]
    connectOrCreate?: master_checklistsCreateOrConnectWithoutUsers_master_checklists_created_byTousersInput | master_checklistsCreateOrConnectWithoutUsers_master_checklists_created_byTousersInput[]
    createMany?: master_checklistsCreateManyUsers_master_checklists_created_byTousersInputEnvelope
    connect?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
  }

  export type master_checklist_detailsUncheckedCreateNestedManyWithoutUsers_master_checklist_details_updated_byTousersInput = {
    create?: XOR<master_checklist_detailsCreateWithoutUsers_master_checklist_details_updated_byTousersInput, master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_updated_byTousersInput> | master_checklist_detailsCreateWithoutUsers_master_checklist_details_updated_byTousersInput[] | master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_updated_byTousersInput[]
    connectOrCreate?: master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_updated_byTousersInput | master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_updated_byTousersInput[]
    createMany?: master_checklist_detailsCreateManyUsers_master_checklist_details_updated_byTousersInputEnvelope
    connect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
  }

  export type master_checklist_detailsUncheckedCreateNestedManyWithoutUsers_master_checklist_details_created_byTousersInput = {
    create?: XOR<master_checklist_detailsCreateWithoutUsers_master_checklist_details_created_byTousersInput, master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_created_byTousersInput> | master_checklist_detailsCreateWithoutUsers_master_checklist_details_created_byTousersInput[] | master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_created_byTousersInput[]
    connectOrCreate?: master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_created_byTousersInput | master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_created_byTousersInput[]
    createMany?: master_checklist_detailsCreateManyUsers_master_checklist_details_created_byTousersInputEnvelope
    connect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
  }

  export type master_checklistsUncheckedCreateNestedManyWithoutUsers_master_checklists_updated_byTousersInput = {
    create?: XOR<master_checklistsCreateWithoutUsers_master_checklists_updated_byTousersInput, master_checklistsUncheckedCreateWithoutUsers_master_checklists_updated_byTousersInput> | master_checklistsCreateWithoutUsers_master_checklists_updated_byTousersInput[] | master_checklistsUncheckedCreateWithoutUsers_master_checklists_updated_byTousersInput[]
    connectOrCreate?: master_checklistsCreateOrConnectWithoutUsers_master_checklists_updated_byTousersInput | master_checklistsCreateOrConnectWithoutUsers_master_checklists_updated_byTousersInput[]
    createMany?: master_checklistsCreateManyUsers_master_checklists_updated_byTousersInputEnvelope
    connect?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
  }

  export type master_checklistsUncheckedCreateNestedManyWithoutUsers_master_checklists_created_byTousersInput = {
    create?: XOR<master_checklistsCreateWithoutUsers_master_checklists_created_byTousersInput, master_checklistsUncheckedCreateWithoutUsers_master_checklists_created_byTousersInput> | master_checklistsCreateWithoutUsers_master_checklists_created_byTousersInput[] | master_checklistsUncheckedCreateWithoutUsers_master_checklists_created_byTousersInput[]
    connectOrCreate?: master_checklistsCreateOrConnectWithoutUsers_master_checklists_created_byTousersInput | master_checklistsCreateOrConnectWithoutUsers_master_checklists_created_byTousersInput[]
    createMany?: master_checklistsCreateManyUsers_master_checklists_created_byTousersInputEnvelope
    connect?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
  }

  export type master_checklist_detailsUpdateManyWithoutUsers_master_checklist_details_updated_byTousersNestedInput = {
    create?: XOR<master_checklist_detailsCreateWithoutUsers_master_checklist_details_updated_byTousersInput, master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_updated_byTousersInput> | master_checklist_detailsCreateWithoutUsers_master_checklist_details_updated_byTousersInput[] | master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_updated_byTousersInput[]
    connectOrCreate?: master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_updated_byTousersInput | master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_updated_byTousersInput[]
    upsert?: master_checklist_detailsUpsertWithWhereUniqueWithoutUsers_master_checklist_details_updated_byTousersInput | master_checklist_detailsUpsertWithWhereUniqueWithoutUsers_master_checklist_details_updated_byTousersInput[]
    createMany?: master_checklist_detailsCreateManyUsers_master_checklist_details_updated_byTousersInputEnvelope
    set?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    disconnect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    delete?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    connect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    update?: master_checklist_detailsUpdateWithWhereUniqueWithoutUsers_master_checklist_details_updated_byTousersInput | master_checklist_detailsUpdateWithWhereUniqueWithoutUsers_master_checklist_details_updated_byTousersInput[]
    updateMany?: master_checklist_detailsUpdateManyWithWhereWithoutUsers_master_checklist_details_updated_byTousersInput | master_checklist_detailsUpdateManyWithWhereWithoutUsers_master_checklist_details_updated_byTousersInput[]
    deleteMany?: master_checklist_detailsScalarWhereInput | master_checklist_detailsScalarWhereInput[]
  }

  export type master_checklist_detailsUpdateManyWithoutUsers_master_checklist_details_created_byTousersNestedInput = {
    create?: XOR<master_checklist_detailsCreateWithoutUsers_master_checklist_details_created_byTousersInput, master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_created_byTousersInput> | master_checklist_detailsCreateWithoutUsers_master_checklist_details_created_byTousersInput[] | master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_created_byTousersInput[]
    connectOrCreate?: master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_created_byTousersInput | master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_created_byTousersInput[]
    upsert?: master_checklist_detailsUpsertWithWhereUniqueWithoutUsers_master_checklist_details_created_byTousersInput | master_checklist_detailsUpsertWithWhereUniqueWithoutUsers_master_checklist_details_created_byTousersInput[]
    createMany?: master_checklist_detailsCreateManyUsers_master_checklist_details_created_byTousersInputEnvelope
    set?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    disconnect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    delete?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    connect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    update?: master_checklist_detailsUpdateWithWhereUniqueWithoutUsers_master_checklist_details_created_byTousersInput | master_checklist_detailsUpdateWithWhereUniqueWithoutUsers_master_checklist_details_created_byTousersInput[]
    updateMany?: master_checklist_detailsUpdateManyWithWhereWithoutUsers_master_checklist_details_created_byTousersInput | master_checklist_detailsUpdateManyWithWhereWithoutUsers_master_checklist_details_created_byTousersInput[]
    deleteMany?: master_checklist_detailsScalarWhereInput | master_checklist_detailsScalarWhereInput[]
  }

  export type master_checklistsUpdateManyWithoutUsers_master_checklists_updated_byTousersNestedInput = {
    create?: XOR<master_checklistsCreateWithoutUsers_master_checklists_updated_byTousersInput, master_checklistsUncheckedCreateWithoutUsers_master_checklists_updated_byTousersInput> | master_checklistsCreateWithoutUsers_master_checklists_updated_byTousersInput[] | master_checklistsUncheckedCreateWithoutUsers_master_checklists_updated_byTousersInput[]
    connectOrCreate?: master_checklistsCreateOrConnectWithoutUsers_master_checklists_updated_byTousersInput | master_checklistsCreateOrConnectWithoutUsers_master_checklists_updated_byTousersInput[]
    upsert?: master_checklistsUpsertWithWhereUniqueWithoutUsers_master_checklists_updated_byTousersInput | master_checklistsUpsertWithWhereUniqueWithoutUsers_master_checklists_updated_byTousersInput[]
    createMany?: master_checklistsCreateManyUsers_master_checklists_updated_byTousersInputEnvelope
    set?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
    disconnect?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
    delete?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
    connect?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
    update?: master_checklistsUpdateWithWhereUniqueWithoutUsers_master_checklists_updated_byTousersInput | master_checklistsUpdateWithWhereUniqueWithoutUsers_master_checklists_updated_byTousersInput[]
    updateMany?: master_checklistsUpdateManyWithWhereWithoutUsers_master_checklists_updated_byTousersInput | master_checklistsUpdateManyWithWhereWithoutUsers_master_checklists_updated_byTousersInput[]
    deleteMany?: master_checklistsScalarWhereInput | master_checklistsScalarWhereInput[]
  }

  export type master_checklistsUpdateManyWithoutUsers_master_checklists_created_byTousersNestedInput = {
    create?: XOR<master_checklistsCreateWithoutUsers_master_checklists_created_byTousersInput, master_checklistsUncheckedCreateWithoutUsers_master_checklists_created_byTousersInput> | master_checklistsCreateWithoutUsers_master_checklists_created_byTousersInput[] | master_checklistsUncheckedCreateWithoutUsers_master_checklists_created_byTousersInput[]
    connectOrCreate?: master_checklistsCreateOrConnectWithoutUsers_master_checklists_created_byTousersInput | master_checklistsCreateOrConnectWithoutUsers_master_checklists_created_byTousersInput[]
    upsert?: master_checklistsUpsertWithWhereUniqueWithoutUsers_master_checklists_created_byTousersInput | master_checklistsUpsertWithWhereUniqueWithoutUsers_master_checklists_created_byTousersInput[]
    createMany?: master_checklistsCreateManyUsers_master_checklists_created_byTousersInputEnvelope
    set?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
    disconnect?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
    delete?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
    connect?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
    update?: master_checklistsUpdateWithWhereUniqueWithoutUsers_master_checklists_created_byTousersInput | master_checklistsUpdateWithWhereUniqueWithoutUsers_master_checklists_created_byTousersInput[]
    updateMany?: master_checklistsUpdateManyWithWhereWithoutUsers_master_checklists_created_byTousersInput | master_checklistsUpdateManyWithWhereWithoutUsers_master_checklists_created_byTousersInput[]
    deleteMany?: master_checklistsScalarWhereInput | master_checklistsScalarWhereInput[]
  }

  export type master_checklist_detailsUncheckedUpdateManyWithoutUsers_master_checklist_details_updated_byTousersNestedInput = {
    create?: XOR<master_checklist_detailsCreateWithoutUsers_master_checklist_details_updated_byTousersInput, master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_updated_byTousersInput> | master_checklist_detailsCreateWithoutUsers_master_checklist_details_updated_byTousersInput[] | master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_updated_byTousersInput[]
    connectOrCreate?: master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_updated_byTousersInput | master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_updated_byTousersInput[]
    upsert?: master_checklist_detailsUpsertWithWhereUniqueWithoutUsers_master_checklist_details_updated_byTousersInput | master_checklist_detailsUpsertWithWhereUniqueWithoutUsers_master_checklist_details_updated_byTousersInput[]
    createMany?: master_checklist_detailsCreateManyUsers_master_checklist_details_updated_byTousersInputEnvelope
    set?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    disconnect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    delete?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    connect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    update?: master_checklist_detailsUpdateWithWhereUniqueWithoutUsers_master_checklist_details_updated_byTousersInput | master_checklist_detailsUpdateWithWhereUniqueWithoutUsers_master_checklist_details_updated_byTousersInput[]
    updateMany?: master_checklist_detailsUpdateManyWithWhereWithoutUsers_master_checklist_details_updated_byTousersInput | master_checklist_detailsUpdateManyWithWhereWithoutUsers_master_checklist_details_updated_byTousersInput[]
    deleteMany?: master_checklist_detailsScalarWhereInput | master_checklist_detailsScalarWhereInput[]
  }

  export type master_checklist_detailsUncheckedUpdateManyWithoutUsers_master_checklist_details_created_byTousersNestedInput = {
    create?: XOR<master_checklist_detailsCreateWithoutUsers_master_checklist_details_created_byTousersInput, master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_created_byTousersInput> | master_checklist_detailsCreateWithoutUsers_master_checklist_details_created_byTousersInput[] | master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_created_byTousersInput[]
    connectOrCreate?: master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_created_byTousersInput | master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_created_byTousersInput[]
    upsert?: master_checklist_detailsUpsertWithWhereUniqueWithoutUsers_master_checklist_details_created_byTousersInput | master_checklist_detailsUpsertWithWhereUniqueWithoutUsers_master_checklist_details_created_byTousersInput[]
    createMany?: master_checklist_detailsCreateManyUsers_master_checklist_details_created_byTousersInputEnvelope
    set?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    disconnect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    delete?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    connect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    update?: master_checklist_detailsUpdateWithWhereUniqueWithoutUsers_master_checklist_details_created_byTousersInput | master_checklist_detailsUpdateWithWhereUniqueWithoutUsers_master_checklist_details_created_byTousersInput[]
    updateMany?: master_checklist_detailsUpdateManyWithWhereWithoutUsers_master_checklist_details_created_byTousersInput | master_checklist_detailsUpdateManyWithWhereWithoutUsers_master_checklist_details_created_byTousersInput[]
    deleteMany?: master_checklist_detailsScalarWhereInput | master_checklist_detailsScalarWhereInput[]
  }

  export type master_checklistsUncheckedUpdateManyWithoutUsers_master_checklists_updated_byTousersNestedInput = {
    create?: XOR<master_checklistsCreateWithoutUsers_master_checklists_updated_byTousersInput, master_checklistsUncheckedCreateWithoutUsers_master_checklists_updated_byTousersInput> | master_checklistsCreateWithoutUsers_master_checklists_updated_byTousersInput[] | master_checklistsUncheckedCreateWithoutUsers_master_checklists_updated_byTousersInput[]
    connectOrCreate?: master_checklistsCreateOrConnectWithoutUsers_master_checklists_updated_byTousersInput | master_checklistsCreateOrConnectWithoutUsers_master_checklists_updated_byTousersInput[]
    upsert?: master_checklistsUpsertWithWhereUniqueWithoutUsers_master_checklists_updated_byTousersInput | master_checklistsUpsertWithWhereUniqueWithoutUsers_master_checklists_updated_byTousersInput[]
    createMany?: master_checklistsCreateManyUsers_master_checklists_updated_byTousersInputEnvelope
    set?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
    disconnect?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
    delete?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
    connect?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
    update?: master_checklistsUpdateWithWhereUniqueWithoutUsers_master_checklists_updated_byTousersInput | master_checklistsUpdateWithWhereUniqueWithoutUsers_master_checklists_updated_byTousersInput[]
    updateMany?: master_checklistsUpdateManyWithWhereWithoutUsers_master_checklists_updated_byTousersInput | master_checklistsUpdateManyWithWhereWithoutUsers_master_checklists_updated_byTousersInput[]
    deleteMany?: master_checklistsScalarWhereInput | master_checklistsScalarWhereInput[]
  }

  export type master_checklistsUncheckedUpdateManyWithoutUsers_master_checklists_created_byTousersNestedInput = {
    create?: XOR<master_checklistsCreateWithoutUsers_master_checklists_created_byTousersInput, master_checklistsUncheckedCreateWithoutUsers_master_checklists_created_byTousersInput> | master_checklistsCreateWithoutUsers_master_checklists_created_byTousersInput[] | master_checklistsUncheckedCreateWithoutUsers_master_checklists_created_byTousersInput[]
    connectOrCreate?: master_checklistsCreateOrConnectWithoutUsers_master_checklists_created_byTousersInput | master_checklistsCreateOrConnectWithoutUsers_master_checklists_created_byTousersInput[]
    upsert?: master_checklistsUpsertWithWhereUniqueWithoutUsers_master_checklists_created_byTousersInput | master_checklistsUpsertWithWhereUniqueWithoutUsers_master_checklists_created_byTousersInput[]
    createMany?: master_checklistsCreateManyUsers_master_checklists_created_byTousersInputEnvelope
    set?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
    disconnect?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
    delete?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
    connect?: master_checklistsWhereUniqueInput | master_checklistsWhereUniqueInput[]
    update?: master_checklistsUpdateWithWhereUniqueWithoutUsers_master_checklists_created_byTousersInput | master_checklistsUpdateWithWhereUniqueWithoutUsers_master_checklists_created_byTousersInput[]
    updateMany?: master_checklistsUpdateManyWithWhereWithoutUsers_master_checklists_created_byTousersInput | master_checklistsUpdateManyWithWhereWithoutUsers_master_checklists_created_byTousersInput[]
    deleteMany?: master_checklistsScalarWhereInput | master_checklistsScalarWhereInput[]
  }

  export type master_checklist_detailsCreateNestedManyWithoutMaster_checklistsInput = {
    create?: XOR<master_checklist_detailsCreateWithoutMaster_checklistsInput, master_checklist_detailsUncheckedCreateWithoutMaster_checklistsInput> | master_checklist_detailsCreateWithoutMaster_checklistsInput[] | master_checklist_detailsUncheckedCreateWithoutMaster_checklistsInput[]
    connectOrCreate?: master_checklist_detailsCreateOrConnectWithoutMaster_checklistsInput | master_checklist_detailsCreateOrConnectWithoutMaster_checklistsInput[]
    createMany?: master_checklist_detailsCreateManyMaster_checklistsInputEnvelope
    connect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutMaster_checklists_master_checklists_updated_byTousersInput = {
    create?: XOR<usersCreateWithoutMaster_checklists_master_checklists_updated_byTousersInput, usersUncheckedCreateWithoutMaster_checklists_master_checklists_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutMaster_checklists_master_checklists_updated_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutMaster_checklists_master_checklists_created_byTousersInput = {
    create?: XOR<usersCreateWithoutMaster_checklists_master_checklists_created_byTousersInput, usersUncheckedCreateWithoutMaster_checklists_master_checklists_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutMaster_checklists_master_checklists_created_byTousersInput
    connect?: usersWhereUniqueInput
  }

  export type master_checklist_detailsUncheckedCreateNestedManyWithoutMaster_checklistsInput = {
    create?: XOR<master_checklist_detailsCreateWithoutMaster_checklistsInput, master_checklist_detailsUncheckedCreateWithoutMaster_checklistsInput> | master_checklist_detailsCreateWithoutMaster_checklistsInput[] | master_checklist_detailsUncheckedCreateWithoutMaster_checklistsInput[]
    connectOrCreate?: master_checklist_detailsCreateOrConnectWithoutMaster_checklistsInput | master_checklist_detailsCreateOrConnectWithoutMaster_checklistsInput[]
    createMany?: master_checklist_detailsCreateManyMaster_checklistsInputEnvelope
    connect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type master_checklist_detailsUpdateManyWithoutMaster_checklistsNestedInput = {
    create?: XOR<master_checklist_detailsCreateWithoutMaster_checklistsInput, master_checklist_detailsUncheckedCreateWithoutMaster_checklistsInput> | master_checklist_detailsCreateWithoutMaster_checklistsInput[] | master_checklist_detailsUncheckedCreateWithoutMaster_checklistsInput[]
    connectOrCreate?: master_checklist_detailsCreateOrConnectWithoutMaster_checklistsInput | master_checklist_detailsCreateOrConnectWithoutMaster_checklistsInput[]
    upsert?: master_checklist_detailsUpsertWithWhereUniqueWithoutMaster_checklistsInput | master_checklist_detailsUpsertWithWhereUniqueWithoutMaster_checklistsInput[]
    createMany?: master_checklist_detailsCreateManyMaster_checklistsInputEnvelope
    set?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    disconnect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    delete?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    connect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    update?: master_checklist_detailsUpdateWithWhereUniqueWithoutMaster_checklistsInput | master_checklist_detailsUpdateWithWhereUniqueWithoutMaster_checklistsInput[]
    updateMany?: master_checklist_detailsUpdateManyWithWhereWithoutMaster_checklistsInput | master_checklist_detailsUpdateManyWithWhereWithoutMaster_checklistsInput[]
    deleteMany?: master_checklist_detailsScalarWhereInput | master_checklist_detailsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutMaster_checklists_master_checklists_updated_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutMaster_checklists_master_checklists_updated_byTousersInput, usersUncheckedCreateWithoutMaster_checklists_master_checklists_updated_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutMaster_checklists_master_checklists_updated_byTousersInput
    upsert?: usersUpsertWithoutMaster_checklists_master_checklists_updated_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMaster_checklists_master_checklists_updated_byTousersInput, usersUpdateWithoutMaster_checklists_master_checklists_updated_byTousersInput>, usersUncheckedUpdateWithoutMaster_checklists_master_checklists_updated_byTousersInput>
  }

  export type usersUpdateOneRequiredWithoutMaster_checklists_master_checklists_created_byTousersNestedInput = {
    create?: XOR<usersCreateWithoutMaster_checklists_master_checklists_created_byTousersInput, usersUncheckedCreateWithoutMaster_checklists_master_checklists_created_byTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutMaster_checklists_master_checklists_created_byTousersInput
    upsert?: usersUpsertWithoutMaster_checklists_master_checklists_created_byTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMaster_checklists_master_checklists_created_byTousersInput, usersUpdateWithoutMaster_checklists_master_checklists_created_byTousersInput>, usersUncheckedUpdateWithoutMaster_checklists_master_checklists_created_byTousersInput>
  }

  export type master_checklist_detailsUncheckedUpdateManyWithoutMaster_checklistsNestedInput = {
    create?: XOR<master_checklist_detailsCreateWithoutMaster_checklistsInput, master_checklist_detailsUncheckedCreateWithoutMaster_checklistsInput> | master_checklist_detailsCreateWithoutMaster_checklistsInput[] | master_checklist_detailsUncheckedCreateWithoutMaster_checklistsInput[]
    connectOrCreate?: master_checklist_detailsCreateOrConnectWithoutMaster_checklistsInput | master_checklist_detailsCreateOrConnectWithoutMaster_checklistsInput[]
    upsert?: master_checklist_detailsUpsertWithWhereUniqueWithoutMaster_checklistsInput | master_checklist_detailsUpsertWithWhereUniqueWithoutMaster_checklistsInput[]
    createMany?: master_checklist_detailsCreateManyMaster_checklistsInputEnvelope
    set?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    disconnect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    delete?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    connect?: master_checklist_detailsWhereUniqueInput | master_checklist_detailsWhereUniqueInput[]
    update?: master_checklist_detailsUpdateWithWhereUniqueWithoutMaster_checklistsInput | master_checklist_detailsUpdateWithWhereUniqueWithoutMaster_checklistsInput[]
    updateMany?: master_checklist_detailsUpdateManyWithWhereWithoutMaster_checklistsInput | master_checklist_detailsUpdateManyWithWhereWithoutMaster_checklistsInput[]
    deleteMany?: master_checklist_detailsScalarWhereInput | master_checklist_detailsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type master_checklistsCreateWithoutMaster_checklist_detailsInput = {
    id?: string
    name: string
    short_desc: string
    workcenter: string
    model: string
    status: boolean
    updated_at?: Date | string | null
    created_at?: Date | string | null
    users_master_checklists_updated_byTousers: usersCreateNestedOneWithoutMaster_checklists_master_checklists_updated_byTousersInput
    users_master_checklists_created_byTousers: usersCreateNestedOneWithoutMaster_checklists_master_checklists_created_byTousersInput
  }

  export type master_checklistsUncheckedCreateWithoutMaster_checklist_detailsInput = {
    id?: string
    name: string
    short_desc: string
    workcenter: string
    model: string
    status: boolean
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type master_checklistsCreateOrConnectWithoutMaster_checklist_detailsInput = {
    where: master_checklistsWhereUniqueInput
    create: XOR<master_checklistsCreateWithoutMaster_checklist_detailsInput, master_checklistsUncheckedCreateWithoutMaster_checklist_detailsInput>
  }

  export type usersCreateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput = {
    id?: string
    name: string
    email: string
    role?: string | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsCreateNestedManyWithoutUsers_master_checklist_details_created_byTousersInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsCreateNestedManyWithoutUsers_master_checklists_updated_byTousersInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsCreateNestedManyWithoutUsers_master_checklists_created_byTousersInput
  }

  export type usersUncheckedCreateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput = {
    id?: string
    name: string
    email: string
    role?: string | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsUncheckedCreateNestedManyWithoutUsers_master_checklist_details_created_byTousersInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsUncheckedCreateNestedManyWithoutUsers_master_checklists_updated_byTousersInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsUncheckedCreateNestedManyWithoutUsers_master_checklists_created_byTousersInput
  }

  export type usersCreateOrConnectWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput, usersUncheckedCreateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput>
  }

  export type usersCreateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput = {
    id?: string
    name: string
    email: string
    role?: string | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsCreateNestedManyWithoutUsers_master_checklist_details_updated_byTousersInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsCreateNestedManyWithoutUsers_master_checklists_updated_byTousersInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsCreateNestedManyWithoutUsers_master_checklists_created_byTousersInput
  }

  export type usersUncheckedCreateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput = {
    id?: string
    name: string
    email: string
    role?: string | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsUncheckedCreateNestedManyWithoutUsers_master_checklist_details_updated_byTousersInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsUncheckedCreateNestedManyWithoutUsers_master_checklists_updated_byTousersInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsUncheckedCreateNestedManyWithoutUsers_master_checklists_created_byTousersInput
  }

  export type usersCreateOrConnectWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput, usersUncheckedCreateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput>
  }

  export type master_checklistsUpsertWithoutMaster_checklist_detailsInput = {
    update: XOR<master_checklistsUpdateWithoutMaster_checklist_detailsInput, master_checklistsUncheckedUpdateWithoutMaster_checklist_detailsInput>
    create: XOR<master_checklistsCreateWithoutMaster_checklist_detailsInput, master_checklistsUncheckedCreateWithoutMaster_checklist_detailsInput>
    where?: master_checklistsWhereInput
  }

  export type master_checklistsUpdateToOneWithWhereWithoutMaster_checklist_detailsInput = {
    where?: master_checklistsWhereInput
    data: XOR<master_checklistsUpdateWithoutMaster_checklist_detailsInput, master_checklistsUncheckedUpdateWithoutMaster_checklist_detailsInput>
  }

  export type master_checklistsUpdateWithoutMaster_checklist_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    workcenter?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_master_checklists_updated_byTousers?: usersUpdateOneRequiredWithoutMaster_checklists_master_checklists_updated_byTousersNestedInput
    users_master_checklists_created_byTousers?: usersUpdateOneRequiredWithoutMaster_checklists_master_checklists_created_byTousersNestedInput
  }

  export type master_checklistsUncheckedUpdateWithoutMaster_checklist_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    workcenter?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput = {
    update: XOR<usersUpdateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput, usersUncheckedUpdateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput>
    create: XOR<usersCreateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput, usersUncheckedCreateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput, usersUncheckedUpdateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput>
  }

  export type usersUpdateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsUpdateManyWithoutUsers_master_checklist_details_created_byTousersNestedInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsUpdateManyWithoutUsers_master_checklists_updated_byTousersNestedInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsUpdateManyWithoutUsers_master_checklists_created_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsUncheckedUpdateManyWithoutUsers_master_checklist_details_created_byTousersNestedInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsUncheckedUpdateManyWithoutUsers_master_checklists_updated_byTousersNestedInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsUncheckedUpdateManyWithoutUsers_master_checklists_created_byTousersNestedInput
  }

  export type usersUpsertWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput = {
    update: XOR<usersUpdateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput, usersUncheckedUpdateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput>
    create: XOR<usersCreateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput, usersUncheckedCreateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput, usersUncheckedUpdateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput>
  }

  export type usersUpdateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsUpdateManyWithoutUsers_master_checklist_details_updated_byTousersNestedInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsUpdateManyWithoutUsers_master_checklists_updated_byTousersNestedInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsUpdateManyWithoutUsers_master_checklists_created_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsUncheckedUpdateManyWithoutUsers_master_checklist_details_updated_byTousersNestedInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsUncheckedUpdateManyWithoutUsers_master_checklists_updated_byTousersNestedInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsUncheckedUpdateManyWithoutUsers_master_checklists_created_byTousersNestedInput
  }

  export type master_checklist_detailsCreateWithoutUsers_master_checklist_details_updated_byTousersInput = {
    id?: string
    name: string
    short_desc?: string | null
    required_image?: string | null
    updated_at?: Date | string | null
    created_at?: Date | string | null
    master_checklists: master_checklistsCreateNestedOneWithoutMaster_checklist_detailsInput
    users_master_checklist_details_created_byTousers: usersCreateNestedOneWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput
  }

  export type master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_updated_byTousersInput = {
    id?: string
    checklist_header_id: string
    name: string
    short_desc?: string | null
    required_image?: string | null
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_updated_byTousersInput = {
    where: master_checklist_detailsWhereUniqueInput
    create: XOR<master_checklist_detailsCreateWithoutUsers_master_checklist_details_updated_byTousersInput, master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_updated_byTousersInput>
  }

  export type master_checklist_detailsCreateManyUsers_master_checklist_details_updated_byTousersInputEnvelope = {
    data: master_checklist_detailsCreateManyUsers_master_checklist_details_updated_byTousersInput | master_checklist_detailsCreateManyUsers_master_checklist_details_updated_byTousersInput[]
  }

  export type master_checklist_detailsCreateWithoutUsers_master_checklist_details_created_byTousersInput = {
    id?: string
    name: string
    short_desc?: string | null
    required_image?: string | null
    updated_at?: Date | string | null
    created_at?: Date | string | null
    master_checklists: master_checklistsCreateNestedOneWithoutMaster_checklist_detailsInput
    users_master_checklist_details_updated_byTousers: usersCreateNestedOneWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput
  }

  export type master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_created_byTousersInput = {
    id?: string
    checklist_header_id: string
    name: string
    short_desc?: string | null
    required_image?: string | null
    updated_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type master_checklist_detailsCreateOrConnectWithoutUsers_master_checklist_details_created_byTousersInput = {
    where: master_checklist_detailsWhereUniqueInput
    create: XOR<master_checklist_detailsCreateWithoutUsers_master_checklist_details_created_byTousersInput, master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_created_byTousersInput>
  }

  export type master_checklist_detailsCreateManyUsers_master_checklist_details_created_byTousersInputEnvelope = {
    data: master_checklist_detailsCreateManyUsers_master_checklist_details_created_byTousersInput | master_checklist_detailsCreateManyUsers_master_checklist_details_created_byTousersInput[]
  }

  export type master_checklistsCreateWithoutUsers_master_checklists_updated_byTousersInput = {
    id?: string
    name: string
    short_desc: string
    workcenter: string
    model: string
    status: boolean
    updated_at?: Date | string | null
    created_at?: Date | string | null
    master_checklist_details?: master_checklist_detailsCreateNestedManyWithoutMaster_checklistsInput
    users_master_checklists_created_byTousers: usersCreateNestedOneWithoutMaster_checklists_master_checklists_created_byTousersInput
  }

  export type master_checklistsUncheckedCreateWithoutUsers_master_checklists_updated_byTousersInput = {
    id?: string
    name: string
    short_desc: string
    workcenter: string
    model: string
    status: boolean
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
    master_checklist_details?: master_checklist_detailsUncheckedCreateNestedManyWithoutMaster_checklistsInput
  }

  export type master_checklistsCreateOrConnectWithoutUsers_master_checklists_updated_byTousersInput = {
    where: master_checklistsWhereUniqueInput
    create: XOR<master_checklistsCreateWithoutUsers_master_checklists_updated_byTousersInput, master_checklistsUncheckedCreateWithoutUsers_master_checklists_updated_byTousersInput>
  }

  export type master_checklistsCreateManyUsers_master_checklists_updated_byTousersInputEnvelope = {
    data: master_checklistsCreateManyUsers_master_checklists_updated_byTousersInput | master_checklistsCreateManyUsers_master_checklists_updated_byTousersInput[]
  }

  export type master_checklistsCreateWithoutUsers_master_checklists_created_byTousersInput = {
    id?: string
    name: string
    short_desc: string
    workcenter: string
    model: string
    status: boolean
    updated_at?: Date | string | null
    created_at?: Date | string | null
    master_checklist_details?: master_checklist_detailsCreateNestedManyWithoutMaster_checklistsInput
    users_master_checklists_updated_byTousers: usersCreateNestedOneWithoutMaster_checklists_master_checklists_updated_byTousersInput
  }

  export type master_checklistsUncheckedCreateWithoutUsers_master_checklists_created_byTousersInput = {
    id?: string
    name: string
    short_desc: string
    workcenter: string
    model: string
    status: boolean
    updated_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
    master_checklist_details?: master_checklist_detailsUncheckedCreateNestedManyWithoutMaster_checklistsInput
  }

  export type master_checklistsCreateOrConnectWithoutUsers_master_checklists_created_byTousersInput = {
    where: master_checklistsWhereUniqueInput
    create: XOR<master_checklistsCreateWithoutUsers_master_checklists_created_byTousersInput, master_checklistsUncheckedCreateWithoutUsers_master_checklists_created_byTousersInput>
  }

  export type master_checklistsCreateManyUsers_master_checklists_created_byTousersInputEnvelope = {
    data: master_checklistsCreateManyUsers_master_checklists_created_byTousersInput | master_checklistsCreateManyUsers_master_checklists_created_byTousersInput[]
  }

  export type master_checklist_detailsUpsertWithWhereUniqueWithoutUsers_master_checklist_details_updated_byTousersInput = {
    where: master_checklist_detailsWhereUniqueInput
    update: XOR<master_checklist_detailsUpdateWithoutUsers_master_checklist_details_updated_byTousersInput, master_checklist_detailsUncheckedUpdateWithoutUsers_master_checklist_details_updated_byTousersInput>
    create: XOR<master_checklist_detailsCreateWithoutUsers_master_checklist_details_updated_byTousersInput, master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_updated_byTousersInput>
  }

  export type master_checklist_detailsUpdateWithWhereUniqueWithoutUsers_master_checklist_details_updated_byTousersInput = {
    where: master_checklist_detailsWhereUniqueInput
    data: XOR<master_checklist_detailsUpdateWithoutUsers_master_checklist_details_updated_byTousersInput, master_checklist_detailsUncheckedUpdateWithoutUsers_master_checklist_details_updated_byTousersInput>
  }

  export type master_checklist_detailsUpdateManyWithWhereWithoutUsers_master_checklist_details_updated_byTousersInput = {
    where: master_checklist_detailsScalarWhereInput
    data: XOR<master_checklist_detailsUpdateManyMutationInput, master_checklist_detailsUncheckedUpdateManyWithoutUsers_master_checklist_details_updated_byTousersInput>
  }

  export type master_checklist_detailsScalarWhereInput = {
    AND?: master_checklist_detailsScalarWhereInput | master_checklist_detailsScalarWhereInput[]
    OR?: master_checklist_detailsScalarWhereInput[]
    NOT?: master_checklist_detailsScalarWhereInput | master_checklist_detailsScalarWhereInput[]
    id?: StringFilter<"master_checklist_details"> | string
    checklist_header_id?: StringFilter<"master_checklist_details"> | string
    name?: StringFilter<"master_checklist_details"> | string
    short_desc?: StringNullableFilter<"master_checklist_details"> | string | null
    required_image?: StringNullableFilter<"master_checklist_details"> | string | null
    updated_by?: StringFilter<"master_checklist_details"> | string
    created_by?: StringFilter<"master_checklist_details"> | string
    updated_at?: DateTimeNullableFilter<"master_checklist_details"> | Date | string | null
    created_at?: DateTimeNullableFilter<"master_checklist_details"> | Date | string | null
  }

  export type master_checklist_detailsUpsertWithWhereUniqueWithoutUsers_master_checklist_details_created_byTousersInput = {
    where: master_checklist_detailsWhereUniqueInput
    update: XOR<master_checklist_detailsUpdateWithoutUsers_master_checklist_details_created_byTousersInput, master_checklist_detailsUncheckedUpdateWithoutUsers_master_checklist_details_created_byTousersInput>
    create: XOR<master_checklist_detailsCreateWithoutUsers_master_checklist_details_created_byTousersInput, master_checklist_detailsUncheckedCreateWithoutUsers_master_checklist_details_created_byTousersInput>
  }

  export type master_checklist_detailsUpdateWithWhereUniqueWithoutUsers_master_checklist_details_created_byTousersInput = {
    where: master_checklist_detailsWhereUniqueInput
    data: XOR<master_checklist_detailsUpdateWithoutUsers_master_checklist_details_created_byTousersInput, master_checklist_detailsUncheckedUpdateWithoutUsers_master_checklist_details_created_byTousersInput>
  }

  export type master_checklist_detailsUpdateManyWithWhereWithoutUsers_master_checklist_details_created_byTousersInput = {
    where: master_checklist_detailsScalarWhereInput
    data: XOR<master_checklist_detailsUpdateManyMutationInput, master_checklist_detailsUncheckedUpdateManyWithoutUsers_master_checklist_details_created_byTousersInput>
  }

  export type master_checklistsUpsertWithWhereUniqueWithoutUsers_master_checklists_updated_byTousersInput = {
    where: master_checklistsWhereUniqueInput
    update: XOR<master_checklistsUpdateWithoutUsers_master_checklists_updated_byTousersInput, master_checklistsUncheckedUpdateWithoutUsers_master_checklists_updated_byTousersInput>
    create: XOR<master_checklistsCreateWithoutUsers_master_checklists_updated_byTousersInput, master_checklistsUncheckedCreateWithoutUsers_master_checklists_updated_byTousersInput>
  }

  export type master_checklistsUpdateWithWhereUniqueWithoutUsers_master_checklists_updated_byTousersInput = {
    where: master_checklistsWhereUniqueInput
    data: XOR<master_checklistsUpdateWithoutUsers_master_checklists_updated_byTousersInput, master_checklistsUncheckedUpdateWithoutUsers_master_checklists_updated_byTousersInput>
  }

  export type master_checklistsUpdateManyWithWhereWithoutUsers_master_checklists_updated_byTousersInput = {
    where: master_checklistsScalarWhereInput
    data: XOR<master_checklistsUpdateManyMutationInput, master_checklistsUncheckedUpdateManyWithoutUsers_master_checklists_updated_byTousersInput>
  }

  export type master_checklistsScalarWhereInput = {
    AND?: master_checklistsScalarWhereInput | master_checklistsScalarWhereInput[]
    OR?: master_checklistsScalarWhereInput[]
    NOT?: master_checklistsScalarWhereInput | master_checklistsScalarWhereInput[]
    id?: StringFilter<"master_checklists"> | string
    name?: StringFilter<"master_checklists"> | string
    short_desc?: StringFilter<"master_checklists"> | string
    workcenter?: StringFilter<"master_checklists"> | string
    model?: StringFilter<"master_checklists"> | string
    status?: BoolFilter<"master_checklists"> | boolean
    updated_by?: StringFilter<"master_checklists"> | string
    created_by?: StringFilter<"master_checklists"> | string
    updated_at?: DateTimeNullableFilter<"master_checklists"> | Date | string | null
    created_at?: DateTimeNullableFilter<"master_checklists"> | Date | string | null
  }

  export type master_checklistsUpsertWithWhereUniqueWithoutUsers_master_checklists_created_byTousersInput = {
    where: master_checklistsWhereUniqueInput
    update: XOR<master_checklistsUpdateWithoutUsers_master_checklists_created_byTousersInput, master_checklistsUncheckedUpdateWithoutUsers_master_checklists_created_byTousersInput>
    create: XOR<master_checklistsCreateWithoutUsers_master_checklists_created_byTousersInput, master_checklistsUncheckedCreateWithoutUsers_master_checklists_created_byTousersInput>
  }

  export type master_checklistsUpdateWithWhereUniqueWithoutUsers_master_checklists_created_byTousersInput = {
    where: master_checklistsWhereUniqueInput
    data: XOR<master_checklistsUpdateWithoutUsers_master_checklists_created_byTousersInput, master_checklistsUncheckedUpdateWithoutUsers_master_checklists_created_byTousersInput>
  }

  export type master_checklistsUpdateManyWithWhereWithoutUsers_master_checklists_created_byTousersInput = {
    where: master_checklistsScalarWhereInput
    data: XOR<master_checklistsUpdateManyMutationInput, master_checklistsUncheckedUpdateManyWithoutUsers_master_checklists_created_byTousersInput>
  }

  export type master_checklist_detailsCreateWithoutMaster_checklistsInput = {
    id?: string
    name: string
    short_desc?: string | null
    required_image?: string | null
    updated_at?: Date | string | null
    created_at?: Date | string | null
    users_master_checklist_details_updated_byTousers: usersCreateNestedOneWithoutMaster_checklist_details_master_checklist_details_updated_byTousersInput
    users_master_checklist_details_created_byTousers: usersCreateNestedOneWithoutMaster_checklist_details_master_checklist_details_created_byTousersInput
  }

  export type master_checklist_detailsUncheckedCreateWithoutMaster_checklistsInput = {
    id?: string
    name: string
    short_desc?: string | null
    required_image?: string | null
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type master_checklist_detailsCreateOrConnectWithoutMaster_checklistsInput = {
    where: master_checklist_detailsWhereUniqueInput
    create: XOR<master_checklist_detailsCreateWithoutMaster_checklistsInput, master_checklist_detailsUncheckedCreateWithoutMaster_checklistsInput>
  }

  export type master_checklist_detailsCreateManyMaster_checklistsInputEnvelope = {
    data: master_checklist_detailsCreateManyMaster_checklistsInput | master_checklist_detailsCreateManyMaster_checklistsInput[]
  }

  export type usersCreateWithoutMaster_checklists_master_checklists_updated_byTousersInput = {
    id?: string
    name: string
    email: string
    role?: string | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsCreateNestedManyWithoutUsers_master_checklist_details_updated_byTousersInput
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsCreateNestedManyWithoutUsers_master_checklist_details_created_byTousersInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsCreateNestedManyWithoutUsers_master_checklists_created_byTousersInput
  }

  export type usersUncheckedCreateWithoutMaster_checklists_master_checklists_updated_byTousersInput = {
    id?: string
    name: string
    email: string
    role?: string | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsUncheckedCreateNestedManyWithoutUsers_master_checklist_details_updated_byTousersInput
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsUncheckedCreateNestedManyWithoutUsers_master_checklist_details_created_byTousersInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsUncheckedCreateNestedManyWithoutUsers_master_checklists_created_byTousersInput
  }

  export type usersCreateOrConnectWithoutMaster_checklists_master_checklists_updated_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMaster_checklists_master_checklists_updated_byTousersInput, usersUncheckedCreateWithoutMaster_checklists_master_checklists_updated_byTousersInput>
  }

  export type usersCreateWithoutMaster_checklists_master_checklists_created_byTousersInput = {
    id?: string
    name: string
    email: string
    role?: string | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsCreateNestedManyWithoutUsers_master_checklist_details_updated_byTousersInput
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsCreateNestedManyWithoutUsers_master_checklist_details_created_byTousersInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsCreateNestedManyWithoutUsers_master_checklists_updated_byTousersInput
  }

  export type usersUncheckedCreateWithoutMaster_checklists_master_checklists_created_byTousersInput = {
    id?: string
    name: string
    email: string
    role?: string | null
    password: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsUncheckedCreateNestedManyWithoutUsers_master_checklist_details_updated_byTousersInput
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsUncheckedCreateNestedManyWithoutUsers_master_checklist_details_created_byTousersInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsUncheckedCreateNestedManyWithoutUsers_master_checklists_updated_byTousersInput
  }

  export type usersCreateOrConnectWithoutMaster_checklists_master_checklists_created_byTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMaster_checklists_master_checklists_created_byTousersInput, usersUncheckedCreateWithoutMaster_checklists_master_checklists_created_byTousersInput>
  }

  export type master_checklist_detailsUpsertWithWhereUniqueWithoutMaster_checklistsInput = {
    where: master_checklist_detailsWhereUniqueInput
    update: XOR<master_checklist_detailsUpdateWithoutMaster_checklistsInput, master_checklist_detailsUncheckedUpdateWithoutMaster_checklistsInput>
    create: XOR<master_checklist_detailsCreateWithoutMaster_checklistsInput, master_checklist_detailsUncheckedCreateWithoutMaster_checklistsInput>
  }

  export type master_checklist_detailsUpdateWithWhereUniqueWithoutMaster_checklistsInput = {
    where: master_checklist_detailsWhereUniqueInput
    data: XOR<master_checklist_detailsUpdateWithoutMaster_checklistsInput, master_checklist_detailsUncheckedUpdateWithoutMaster_checklistsInput>
  }

  export type master_checklist_detailsUpdateManyWithWhereWithoutMaster_checklistsInput = {
    where: master_checklist_detailsScalarWhereInput
    data: XOR<master_checklist_detailsUpdateManyMutationInput, master_checklist_detailsUncheckedUpdateManyWithoutMaster_checklistsInput>
  }

  export type usersUpsertWithoutMaster_checklists_master_checklists_updated_byTousersInput = {
    update: XOR<usersUpdateWithoutMaster_checklists_master_checklists_updated_byTousersInput, usersUncheckedUpdateWithoutMaster_checklists_master_checklists_updated_byTousersInput>
    create: XOR<usersCreateWithoutMaster_checklists_master_checklists_updated_byTousersInput, usersUncheckedCreateWithoutMaster_checklists_master_checklists_updated_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMaster_checklists_master_checklists_updated_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMaster_checklists_master_checklists_updated_byTousersInput, usersUncheckedUpdateWithoutMaster_checklists_master_checklists_updated_byTousersInput>
  }

  export type usersUpdateWithoutMaster_checklists_master_checklists_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsUpdateManyWithoutUsers_master_checklist_details_updated_byTousersNestedInput
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsUpdateManyWithoutUsers_master_checklist_details_created_byTousersNestedInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsUpdateManyWithoutUsers_master_checklists_created_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutMaster_checklists_master_checklists_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsUncheckedUpdateManyWithoutUsers_master_checklist_details_updated_byTousersNestedInput
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsUncheckedUpdateManyWithoutUsers_master_checklist_details_created_byTousersNestedInput
    master_checklists_master_checklists_created_byTousers?: master_checklistsUncheckedUpdateManyWithoutUsers_master_checklists_created_byTousersNestedInput
  }

  export type usersUpsertWithoutMaster_checklists_master_checklists_created_byTousersInput = {
    update: XOR<usersUpdateWithoutMaster_checklists_master_checklists_created_byTousersInput, usersUncheckedUpdateWithoutMaster_checklists_master_checklists_created_byTousersInput>
    create: XOR<usersCreateWithoutMaster_checklists_master_checklists_created_byTousersInput, usersUncheckedCreateWithoutMaster_checklists_master_checklists_created_byTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMaster_checklists_master_checklists_created_byTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMaster_checklists_master_checklists_created_byTousersInput, usersUncheckedUpdateWithoutMaster_checklists_master_checklists_created_byTousersInput>
  }

  export type usersUpdateWithoutMaster_checklists_master_checklists_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsUpdateManyWithoutUsers_master_checklist_details_updated_byTousersNestedInput
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsUpdateManyWithoutUsers_master_checklist_details_created_byTousersNestedInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsUpdateManyWithoutUsers_master_checklists_updated_byTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutMaster_checklists_master_checklists_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklist_details_master_checklist_details_updated_byTousers?: master_checklist_detailsUncheckedUpdateManyWithoutUsers_master_checklist_details_updated_byTousersNestedInput
    master_checklist_details_master_checklist_details_created_byTousers?: master_checklist_detailsUncheckedUpdateManyWithoutUsers_master_checklist_details_created_byTousersNestedInput
    master_checklists_master_checklists_updated_byTousers?: master_checklistsUncheckedUpdateManyWithoutUsers_master_checklists_updated_byTousersNestedInput
  }

  export type master_checklist_detailsCreateManyUsers_master_checklist_details_updated_byTousersInput = {
    id?: string
    checklist_header_id: string
    name: string
    short_desc?: string | null
    required_image?: string | null
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type master_checklist_detailsCreateManyUsers_master_checklist_details_created_byTousersInput = {
    id?: string
    checklist_header_id: string
    name: string
    short_desc?: string | null
    required_image?: string | null
    updated_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type master_checklistsCreateManyUsers_master_checklists_updated_byTousersInput = {
    id?: string
    name: string
    short_desc: string
    workcenter: string
    model: string
    status: boolean
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type master_checklistsCreateManyUsers_master_checklists_created_byTousersInput = {
    id?: string
    name: string
    short_desc: string
    workcenter: string
    model: string
    status: boolean
    updated_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type master_checklist_detailsUpdateWithoutUsers_master_checklist_details_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: NullableStringFieldUpdateOperationsInput | string | null
    required_image?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklists?: master_checklistsUpdateOneRequiredWithoutMaster_checklist_detailsNestedInput
    users_master_checklist_details_created_byTousers?: usersUpdateOneRequiredWithoutMaster_checklist_details_master_checklist_details_created_byTousersNestedInput
  }

  export type master_checklist_detailsUncheckedUpdateWithoutUsers_master_checklist_details_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklist_header_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: NullableStringFieldUpdateOperationsInput | string | null
    required_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type master_checklist_detailsUncheckedUpdateManyWithoutUsers_master_checklist_details_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklist_header_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: NullableStringFieldUpdateOperationsInput | string | null
    required_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type master_checklist_detailsUpdateWithoutUsers_master_checklist_details_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: NullableStringFieldUpdateOperationsInput | string | null
    required_image?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklists?: master_checklistsUpdateOneRequiredWithoutMaster_checklist_detailsNestedInput
    users_master_checklist_details_updated_byTousers?: usersUpdateOneRequiredWithoutMaster_checklist_details_master_checklist_details_updated_byTousersNestedInput
  }

  export type master_checklist_detailsUncheckedUpdateWithoutUsers_master_checklist_details_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklist_header_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: NullableStringFieldUpdateOperationsInput | string | null
    required_image?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type master_checklist_detailsUncheckedUpdateManyWithoutUsers_master_checklist_details_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    checklist_header_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: NullableStringFieldUpdateOperationsInput | string | null
    required_image?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type master_checklistsUpdateWithoutUsers_master_checklists_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    workcenter?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklist_details?: master_checklist_detailsUpdateManyWithoutMaster_checklistsNestedInput
    users_master_checklists_created_byTousers?: usersUpdateOneRequiredWithoutMaster_checklists_master_checklists_created_byTousersNestedInput
  }

  export type master_checklistsUncheckedUpdateWithoutUsers_master_checklists_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    workcenter?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklist_details?: master_checklist_detailsUncheckedUpdateManyWithoutMaster_checklistsNestedInput
  }

  export type master_checklistsUncheckedUpdateManyWithoutUsers_master_checklists_updated_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    workcenter?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type master_checklistsUpdateWithoutUsers_master_checklists_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    workcenter?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklist_details?: master_checklist_detailsUpdateManyWithoutMaster_checklistsNestedInput
    users_master_checklists_updated_byTousers?: usersUpdateOneRequiredWithoutMaster_checklists_master_checklists_updated_byTousersNestedInput
  }

  export type master_checklistsUncheckedUpdateWithoutUsers_master_checklists_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    workcenter?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    master_checklist_details?: master_checklist_detailsUncheckedUpdateManyWithoutMaster_checklistsNestedInput
  }

  export type master_checklistsUncheckedUpdateManyWithoutUsers_master_checklists_created_byTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: StringFieldUpdateOperationsInput | string
    workcenter?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    updated_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type master_checklist_detailsCreateManyMaster_checklistsInput = {
    id?: string
    name: string
    short_desc?: string | null
    required_image?: string | null
    updated_by: string
    created_by: string
    updated_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type master_checklist_detailsUpdateWithoutMaster_checklistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: NullableStringFieldUpdateOperationsInput | string | null
    required_image?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_master_checklist_details_updated_byTousers?: usersUpdateOneRequiredWithoutMaster_checklist_details_master_checklist_details_updated_byTousersNestedInput
    users_master_checklist_details_created_byTousers?: usersUpdateOneRequiredWithoutMaster_checklist_details_master_checklist_details_created_byTousersNestedInput
  }

  export type master_checklist_detailsUncheckedUpdateWithoutMaster_checklistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: NullableStringFieldUpdateOperationsInput | string | null
    required_image?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type master_checklist_detailsUncheckedUpdateManyWithoutMaster_checklistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    short_desc?: NullableStringFieldUpdateOperationsInput | string | null
    required_image?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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