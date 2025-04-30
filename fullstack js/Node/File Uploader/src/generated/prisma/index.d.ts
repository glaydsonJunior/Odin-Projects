
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model folders
 * 
 */
export type folders = $Result.DefaultSelection<Prisma.$foldersPayload>
/**
 * Model files
 * 
 */
export type files = $Result.DefaultSelection<Prisma.$filesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.folders`: Exposes CRUD operations for the **folders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Folders
    * const folders = await prisma.folders.findMany()
    * ```
    */
  get folders(): Prisma.foldersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.files`: Exposes CRUD operations for the **files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.files.findMany()
    * ```
    */
  get files(): Prisma.filesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    users: 'users',
    folders: 'folders',
    files: 'files'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "folders" | "files"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
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
      folders: {
        payload: Prisma.$foldersPayload<ExtArgs>
        fields: Prisma.foldersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.foldersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.foldersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload>
          }
          findFirst: {
            args: Prisma.foldersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.foldersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload>
          }
          findMany: {
            args: Prisma.foldersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload>[]
          }
          create: {
            args: Prisma.foldersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload>
          }
          createMany: {
            args: Prisma.foldersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.foldersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload>[]
          }
          delete: {
            args: Prisma.foldersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload>
          }
          update: {
            args: Prisma.foldersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload>
          }
          deleteMany: {
            args: Prisma.foldersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.foldersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.foldersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload>[]
          }
          upsert: {
            args: Prisma.foldersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foldersPayload>
          }
          aggregate: {
            args: Prisma.FoldersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFolders>
          }
          groupBy: {
            args: Prisma.foldersGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoldersGroupByOutputType>[]
          }
          count: {
            args: Prisma.foldersCountArgs<ExtArgs>
            result: $Utils.Optional<FoldersCountAggregateOutputType> | number
          }
        }
      }
      files: {
        payload: Prisma.$filesPayload<ExtArgs>
        fields: Prisma.filesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.filesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.filesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          findFirst: {
            args: Prisma.filesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.filesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          findMany: {
            args: Prisma.filesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>[]
          }
          create: {
            args: Prisma.filesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          createMany: {
            args: Prisma.filesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.filesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>[]
          }
          delete: {
            args: Prisma.filesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          update: {
            args: Prisma.filesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          deleteMany: {
            args: Prisma.filesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.filesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.filesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>[]
          }
          upsert: {
            args: Prisma.filesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          aggregate: {
            args: Prisma.FilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiles>
          }
          groupBy: {
            args: Prisma.filesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.filesCountArgs<ExtArgs>
            result: $Utils.Optional<FilesCountAggregateOutputType> | number
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
    users?: usersOmit
    folders?: foldersOmit
    files?: filesOmit
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
    folder: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | UsersCountOutputTypeCountFolderArgs
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
  export type UsersCountOutputTypeCountFolderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: foldersWhereInput
  }


  /**
   * Count Type FoldersCountOutputType
   */

  export type FoldersCountOutputType = {
    file: number
  }

  export type FoldersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | FoldersCountOutputTypeCountFileArgs
  }

  // Custom InputTypes
  /**
   * FoldersCountOutputType without action
   */
  export type FoldersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoldersCountOutputType
     */
    select?: FoldersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoldersCountOutputType without action
   */
  export type FoldersCountOutputTypeCountFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
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
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
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
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    username: string
    password: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
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
    email?: boolean
    username?: boolean
    password?: boolean
    folder?: boolean | users$folderArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | users$folderArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      folder: Prisma.$foldersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      password: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    folder<T extends users$folderArgs<ExtArgs> = {}>(args?: Subset<T, users$folderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
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
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
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
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
   * users.folder
   */
  export type users$folderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    where?: foldersWhereInput
    orderBy?: foldersOrderByWithRelationInput | foldersOrderByWithRelationInput[]
    cursor?: foldersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoldersScalarFieldEnum | FoldersScalarFieldEnum[]
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
   * Model folders
   */

  export type AggregateFolders = {
    _count: FoldersCountAggregateOutputType | null
    _avg: FoldersAvgAggregateOutputType | null
    _sum: FoldersSumAggregateOutputType | null
    _min: FoldersMinAggregateOutputType | null
    _max: FoldersMaxAggregateOutputType | null
  }

  export type FoldersAvgAggregateOutputType = {
    id: number | null
  }

  export type FoldersSumAggregateOutputType = {
    id: number | null
  }

  export type FoldersMinAggregateOutputType = {
    id: number | null
    folder_name: string | null
    account_email: string | null
  }

  export type FoldersMaxAggregateOutputType = {
    id: number | null
    folder_name: string | null
    account_email: string | null
  }

  export type FoldersCountAggregateOutputType = {
    id: number
    folder_name: number
    account_email: number
    _all: number
  }


  export type FoldersAvgAggregateInputType = {
    id?: true
  }

  export type FoldersSumAggregateInputType = {
    id?: true
  }

  export type FoldersMinAggregateInputType = {
    id?: true
    folder_name?: true
    account_email?: true
  }

  export type FoldersMaxAggregateInputType = {
    id?: true
    folder_name?: true
    account_email?: true
  }

  export type FoldersCountAggregateInputType = {
    id?: true
    folder_name?: true
    account_email?: true
    _all?: true
  }

  export type FoldersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which folders to aggregate.
     */
    where?: foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of folders to fetch.
     */
    orderBy?: foldersOrderByWithRelationInput | foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned folders
    **/
    _count?: true | FoldersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoldersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoldersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoldersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoldersMaxAggregateInputType
  }

  export type GetFoldersAggregateType<T extends FoldersAggregateArgs> = {
        [P in keyof T & keyof AggregateFolders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFolders[P]>
      : GetScalarType<T[P], AggregateFolders[P]>
  }




  export type foldersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: foldersWhereInput
    orderBy?: foldersOrderByWithAggregationInput | foldersOrderByWithAggregationInput[]
    by: FoldersScalarFieldEnum[] | FoldersScalarFieldEnum
    having?: foldersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoldersCountAggregateInputType | true
    _avg?: FoldersAvgAggregateInputType
    _sum?: FoldersSumAggregateInputType
    _min?: FoldersMinAggregateInputType
    _max?: FoldersMaxAggregateInputType
  }

  export type FoldersGroupByOutputType = {
    id: number
    folder_name: string
    account_email: string
    _count: FoldersCountAggregateOutputType | null
    _avg: FoldersAvgAggregateOutputType | null
    _sum: FoldersSumAggregateOutputType | null
    _min: FoldersMinAggregateOutputType | null
    _max: FoldersMaxAggregateOutputType | null
  }

  type GetFoldersGroupByPayload<T extends foldersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoldersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoldersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoldersGroupByOutputType[P]>
            : GetScalarType<T[P], FoldersGroupByOutputType[P]>
        }
      >
    >


  export type foldersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    folder_name?: boolean
    account_email?: boolean
    account_owner?: boolean | usersDefaultArgs<ExtArgs>
    file?: boolean | folders$fileArgs<ExtArgs>
    _count?: boolean | FoldersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folders"]>

  export type foldersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    folder_name?: boolean
    account_email?: boolean
    account_owner?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folders"]>

  export type foldersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    folder_name?: boolean
    account_email?: boolean
    account_owner?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folders"]>

  export type foldersSelectScalar = {
    id?: boolean
    folder_name?: boolean
    account_email?: boolean
  }

  export type foldersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "folder_name" | "account_email", ExtArgs["result"]["folders"]>
  export type foldersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_owner?: boolean | usersDefaultArgs<ExtArgs>
    file?: boolean | folders$fileArgs<ExtArgs>
    _count?: boolean | FoldersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type foldersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_owner?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type foldersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_owner?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $foldersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "folders"
    objects: {
      account_owner: Prisma.$usersPayload<ExtArgs>
      file: Prisma.$filesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      folder_name: string
      account_email: string
    }, ExtArgs["result"]["folders"]>
    composites: {}
  }

  type foldersGetPayload<S extends boolean | null | undefined | foldersDefaultArgs> = $Result.GetResult<Prisma.$foldersPayload, S>

  type foldersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<foldersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoldersCountAggregateInputType | true
    }

  export interface foldersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['folders'], meta: { name: 'folders' } }
    /**
     * Find zero or one Folders that matches the filter.
     * @param {foldersFindUniqueArgs} args - Arguments to find a Folders
     * @example
     * // Get one Folders
     * const folders = await prisma.folders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends foldersFindUniqueArgs>(args: SelectSubset<T, foldersFindUniqueArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Folders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {foldersFindUniqueOrThrowArgs} args - Arguments to find a Folders
     * @example
     * // Get one Folders
     * const folders = await prisma.folders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends foldersFindUniqueOrThrowArgs>(args: SelectSubset<T, foldersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foldersFindFirstArgs} args - Arguments to find a Folders
     * @example
     * // Get one Folders
     * const folders = await prisma.folders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends foldersFindFirstArgs>(args?: SelectSubset<T, foldersFindFirstArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foldersFindFirstOrThrowArgs} args - Arguments to find a Folders
     * @example
     * // Get one Folders
     * const folders = await prisma.folders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends foldersFindFirstOrThrowArgs>(args?: SelectSubset<T, foldersFindFirstOrThrowArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foldersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Folders
     * const folders = await prisma.folders.findMany()
     * 
     * // Get first 10 Folders
     * const folders = await prisma.folders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foldersWithIdOnly = await prisma.folders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends foldersFindManyArgs>(args?: SelectSubset<T, foldersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Folders.
     * @param {foldersCreateArgs} args - Arguments to create a Folders.
     * @example
     * // Create one Folders
     * const Folders = await prisma.folders.create({
     *   data: {
     *     // ... data to create a Folders
     *   }
     * })
     * 
     */
    create<T extends foldersCreateArgs>(args: SelectSubset<T, foldersCreateArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Folders.
     * @param {foldersCreateManyArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folders = await prisma.folders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends foldersCreateManyArgs>(args?: SelectSubset<T, foldersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Folders and returns the data saved in the database.
     * @param {foldersCreateManyAndReturnArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folders = await prisma.folders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Folders and only return the `id`
     * const foldersWithIdOnly = await prisma.folders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends foldersCreateManyAndReturnArgs>(args?: SelectSubset<T, foldersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Folders.
     * @param {foldersDeleteArgs} args - Arguments to delete one Folders.
     * @example
     * // Delete one Folders
     * const Folders = await prisma.folders.delete({
     *   where: {
     *     // ... filter to delete one Folders
     *   }
     * })
     * 
     */
    delete<T extends foldersDeleteArgs>(args: SelectSubset<T, foldersDeleteArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Folders.
     * @param {foldersUpdateArgs} args - Arguments to update one Folders.
     * @example
     * // Update one Folders
     * const folders = await prisma.folders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends foldersUpdateArgs>(args: SelectSubset<T, foldersUpdateArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Folders.
     * @param {foldersDeleteManyArgs} args - Arguments to filter Folders to delete.
     * @example
     * // Delete a few Folders
     * const { count } = await prisma.folders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends foldersDeleteManyArgs>(args?: SelectSubset<T, foldersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foldersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Folders
     * const folders = await prisma.folders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends foldersUpdateManyArgs>(args: SelectSubset<T, foldersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folders and returns the data updated in the database.
     * @param {foldersUpdateManyAndReturnArgs} args - Arguments to update many Folders.
     * @example
     * // Update many Folders
     * const folders = await prisma.folders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Folders and only return the `id`
     * const foldersWithIdOnly = await prisma.folders.updateManyAndReturn({
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
    updateManyAndReturn<T extends foldersUpdateManyAndReturnArgs>(args: SelectSubset<T, foldersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Folders.
     * @param {foldersUpsertArgs} args - Arguments to update or create a Folders.
     * @example
     * // Update or create a Folders
     * const folders = await prisma.folders.upsert({
     *   create: {
     *     // ... data to create a Folders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Folders we want to update
     *   }
     * })
     */
    upsert<T extends foldersUpsertArgs>(args: SelectSubset<T, foldersUpsertArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foldersCountArgs} args - Arguments to filter Folders to count.
     * @example
     * // Count the number of Folders
     * const count = await prisma.folders.count({
     *   where: {
     *     // ... the filter for the Folders we want to count
     *   }
     * })
    **/
    count<T extends foldersCountArgs>(
      args?: Subset<T, foldersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoldersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoldersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoldersAggregateArgs>(args: Subset<T, FoldersAggregateArgs>): Prisma.PrismaPromise<GetFoldersAggregateType<T>>

    /**
     * Group by Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foldersGroupByArgs} args - Group by arguments.
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
      T extends foldersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: foldersGroupByArgs['orderBy'] }
        : { orderBy?: foldersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, foldersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoldersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the folders model
   */
  readonly fields: foldersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for folders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__foldersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account_owner<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    file<T extends folders$fileArgs<ExtArgs> = {}>(args?: Subset<T, folders$fileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the folders model
   */
  interface foldersFieldRefs {
    readonly id: FieldRef<"folders", 'Int'>
    readonly folder_name: FieldRef<"folders", 'String'>
    readonly account_email: FieldRef<"folders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * folders findUnique
   */
  export type foldersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * Filter, which folders to fetch.
     */
    where: foldersWhereUniqueInput
  }

  /**
   * folders findUniqueOrThrow
   */
  export type foldersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * Filter, which folders to fetch.
     */
    where: foldersWhereUniqueInput
  }

  /**
   * folders findFirst
   */
  export type foldersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * Filter, which folders to fetch.
     */
    where?: foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of folders to fetch.
     */
    orderBy?: foldersOrderByWithRelationInput | foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for folders.
     */
    cursor?: foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of folders.
     */
    distinct?: FoldersScalarFieldEnum | FoldersScalarFieldEnum[]
  }

  /**
   * folders findFirstOrThrow
   */
  export type foldersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * Filter, which folders to fetch.
     */
    where?: foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of folders to fetch.
     */
    orderBy?: foldersOrderByWithRelationInput | foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for folders.
     */
    cursor?: foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of folders.
     */
    distinct?: FoldersScalarFieldEnum | FoldersScalarFieldEnum[]
  }

  /**
   * folders findMany
   */
  export type foldersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * Filter, which folders to fetch.
     */
    where?: foldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of folders to fetch.
     */
    orderBy?: foldersOrderByWithRelationInput | foldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing folders.
     */
    cursor?: foldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` folders.
     */
    skip?: number
    distinct?: FoldersScalarFieldEnum | FoldersScalarFieldEnum[]
  }

  /**
   * folders create
   */
  export type foldersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * The data needed to create a folders.
     */
    data: XOR<foldersCreateInput, foldersUncheckedCreateInput>
  }

  /**
   * folders createMany
   */
  export type foldersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many folders.
     */
    data: foldersCreateManyInput | foldersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * folders createManyAndReturn
   */
  export type foldersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * The data used to create many folders.
     */
    data: foldersCreateManyInput | foldersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * folders update
   */
  export type foldersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * The data needed to update a folders.
     */
    data: XOR<foldersUpdateInput, foldersUncheckedUpdateInput>
    /**
     * Choose, which folders to update.
     */
    where: foldersWhereUniqueInput
  }

  /**
   * folders updateMany
   */
  export type foldersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update folders.
     */
    data: XOR<foldersUpdateManyMutationInput, foldersUncheckedUpdateManyInput>
    /**
     * Filter which folders to update
     */
    where?: foldersWhereInput
    /**
     * Limit how many folders to update.
     */
    limit?: number
  }

  /**
   * folders updateManyAndReturn
   */
  export type foldersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * The data used to update folders.
     */
    data: XOR<foldersUpdateManyMutationInput, foldersUncheckedUpdateManyInput>
    /**
     * Filter which folders to update
     */
    where?: foldersWhereInput
    /**
     * Limit how many folders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * folders upsert
   */
  export type foldersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * The filter to search for the folders to update in case it exists.
     */
    where: foldersWhereUniqueInput
    /**
     * In case the folders found by the `where` argument doesn't exist, create a new folders with this data.
     */
    create: XOR<foldersCreateInput, foldersUncheckedCreateInput>
    /**
     * In case the folders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<foldersUpdateInput, foldersUncheckedUpdateInput>
  }

  /**
   * folders delete
   */
  export type foldersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
    /**
     * Filter which folders to delete.
     */
    where: foldersWhereUniqueInput
  }

  /**
   * folders deleteMany
   */
  export type foldersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which folders to delete
     */
    where?: foldersWhereInput
    /**
     * Limit how many folders to delete.
     */
    limit?: number
  }

  /**
   * folders.file
   */
  export type folders$fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    where?: filesWhereInput
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    cursor?: filesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * folders without action
   */
  export type foldersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the folders
     */
    select?: foldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the folders
     */
    omit?: foldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foldersInclude<ExtArgs> | null
  }


  /**
   * Model files
   */

  export type AggregateFiles = {
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  export type FilesAvgAggregateOutputType = {
    id: number | null
    folder_location: number | null
  }

  export type FilesSumAggregateOutputType = {
    id: number | null
    folder_location: number | null
  }

  export type FilesMinAggregateOutputType = {
    id: number | null
    filename: string | null
    folder_location: number | null
  }

  export type FilesMaxAggregateOutputType = {
    id: number | null
    filename: string | null
    folder_location: number | null
  }

  export type FilesCountAggregateOutputType = {
    id: number
    filename: number
    folder_location: number
    _all: number
  }


  export type FilesAvgAggregateInputType = {
    id?: true
    folder_location?: true
  }

  export type FilesSumAggregateInputType = {
    id?: true
    folder_location?: true
  }

  export type FilesMinAggregateInputType = {
    id?: true
    filename?: true
    folder_location?: true
  }

  export type FilesMaxAggregateInputType = {
    id?: true
    filename?: true
    folder_location?: true
  }

  export type FilesCountAggregateInputType = {
    id?: true
    filename?: true
    folder_location?: true
    _all?: true
  }

  export type FilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which files to aggregate.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned files
    **/
    _count?: true | FilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilesMaxAggregateInputType
  }

  export type GetFilesAggregateType<T extends FilesAggregateArgs> = {
        [P in keyof T & keyof AggregateFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiles[P]>
      : GetScalarType<T[P], AggregateFiles[P]>
  }




  export type filesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filesWhereInput
    orderBy?: filesOrderByWithAggregationInput | filesOrderByWithAggregationInput[]
    by: FilesScalarFieldEnum[] | FilesScalarFieldEnum
    having?: filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilesCountAggregateInputType | true
    _avg?: FilesAvgAggregateInputType
    _sum?: FilesSumAggregateInputType
    _min?: FilesMinAggregateInputType
    _max?: FilesMaxAggregateInputType
  }

  export type FilesGroupByOutputType = {
    id: number
    filename: string
    folder_location: number
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  type GetFilesGroupByPayload<T extends filesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilesGroupByOutputType[P]>
            : GetScalarType<T[P], FilesGroupByOutputType[P]>
        }
      >
    >


  export type filesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    folder_location?: boolean
    folder_file?: boolean | foldersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type filesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    folder_location?: boolean
    folder_file?: boolean | foldersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type filesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    folder_location?: boolean
    folder_file?: boolean | foldersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type filesSelectScalar = {
    id?: boolean
    filename?: boolean
    folder_location?: boolean
  }

  export type filesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "folder_location", ExtArgs["result"]["files"]>
  export type filesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder_file?: boolean | foldersDefaultArgs<ExtArgs>
  }
  export type filesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder_file?: boolean | foldersDefaultArgs<ExtArgs>
  }
  export type filesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder_file?: boolean | foldersDefaultArgs<ExtArgs>
  }

  export type $filesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "files"
    objects: {
      folder_file: Prisma.$foldersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string
      folder_location: number
    }, ExtArgs["result"]["files"]>
    composites: {}
  }

  type filesGetPayload<S extends boolean | null | undefined | filesDefaultArgs> = $Result.GetResult<Prisma.$filesPayload, S>

  type filesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilesCountAggregateInputType | true
    }

  export interface filesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['files'], meta: { name: 'files' } }
    /**
     * Find zero or one Files that matches the filter.
     * @param {filesFindUniqueArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends filesFindUniqueArgs>(args: SelectSubset<T, filesFindUniqueArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {filesFindUniqueOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends filesFindUniqueOrThrowArgs>(args: SelectSubset<T, filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesFindFirstArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends filesFindFirstArgs>(args?: SelectSubset<T, filesFindFirstArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesFindFirstOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends filesFindFirstOrThrowArgs>(args?: SelectSubset<T, filesFindFirstOrThrowArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.files.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filesWithIdOnly = await prisma.files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends filesFindManyArgs>(args?: SelectSubset<T, filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Files.
     * @param {filesCreateArgs} args - Arguments to create a Files.
     * @example
     * // Create one Files
     * const Files = await prisma.files.create({
     *   data: {
     *     // ... data to create a Files
     *   }
     * })
     * 
     */
    create<T extends filesCreateArgs>(args: SelectSubset<T, filesCreateArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {filesCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends filesCreateManyArgs>(args?: SelectSubset<T, filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {filesCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends filesCreateManyAndReturnArgs>(args?: SelectSubset<T, filesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Files.
     * @param {filesDeleteArgs} args - Arguments to delete one Files.
     * @example
     * // Delete one Files
     * const Files = await prisma.files.delete({
     *   where: {
     *     // ... filter to delete one Files
     *   }
     * })
     * 
     */
    delete<T extends filesDeleteArgs>(args: SelectSubset<T, filesDeleteArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Files.
     * @param {filesUpdateArgs} args - Arguments to update one Files.
     * @example
     * // Update one Files
     * const files = await prisma.files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends filesUpdateArgs>(args: SelectSubset<T, filesUpdateArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {filesDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends filesDeleteManyArgs>(args?: SelectSubset<T, filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends filesUpdateManyArgs>(args: SelectSubset<T, filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {filesUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.updateManyAndReturn({
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
    updateManyAndReturn<T extends filesUpdateManyAndReturnArgs>(args: SelectSubset<T, filesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Files.
     * @param {filesUpsertArgs} args - Arguments to update or create a Files.
     * @example
     * // Update or create a Files
     * const files = await prisma.files.upsert({
     *   create: {
     *     // ... data to create a Files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Files we want to update
     *   }
     * })
     */
    upsert<T extends filesUpsertArgs>(args: SelectSubset<T, filesUpsertArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.files.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends filesCountArgs>(
      args?: Subset<T, filesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilesAggregateArgs>(args: Subset<T, FilesAggregateArgs>): Prisma.PrismaPromise<GetFilesAggregateType<T>>

    /**
     * Group by Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesGroupByArgs} args - Group by arguments.
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
      T extends filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: filesGroupByArgs['orderBy'] }
        : { orderBy?: filesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the files model
   */
  readonly fields: filesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__filesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    folder_file<T extends foldersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, foldersDefaultArgs<ExtArgs>>): Prisma__foldersClient<$Result.GetResult<Prisma.$foldersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the files model
   */
  interface filesFieldRefs {
    readonly id: FieldRef<"files", 'Int'>
    readonly filename: FieldRef<"files", 'String'>
    readonly folder_location: FieldRef<"files", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * files findUnique
   */
  export type filesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files findUniqueOrThrow
   */
  export type filesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files findFirst
   */
  export type filesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * files findFirstOrThrow
   */
  export type filesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * files findMany
   */
  export type filesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing files.
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * files create
   */
  export type filesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * The data needed to create a files.
     */
    data: XOR<filesCreateInput, filesUncheckedCreateInput>
  }

  /**
   * files createMany
   */
  export type filesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many files.
     */
    data: filesCreateManyInput | filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * files createManyAndReturn
   */
  export type filesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * The data used to create many files.
     */
    data: filesCreateManyInput | filesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * files update
   */
  export type filesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * The data needed to update a files.
     */
    data: XOR<filesUpdateInput, filesUncheckedUpdateInput>
    /**
     * Choose, which files to update.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files updateMany
   */
  export type filesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update files.
     */
    data: XOR<filesUpdateManyMutationInput, filesUncheckedUpdateManyInput>
    /**
     * Filter which files to update
     */
    where?: filesWhereInput
    /**
     * Limit how many files to update.
     */
    limit?: number
  }

  /**
   * files updateManyAndReturn
   */
  export type filesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * The data used to update files.
     */
    data: XOR<filesUpdateManyMutationInput, filesUncheckedUpdateManyInput>
    /**
     * Filter which files to update
     */
    where?: filesWhereInput
    /**
     * Limit how many files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * files upsert
   */
  export type filesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * The filter to search for the files to update in case it exists.
     */
    where: filesWhereUniqueInput
    /**
     * In case the files found by the `where` argument doesn't exist, create a new files with this data.
     */
    create: XOR<filesCreateInput, filesUncheckedCreateInput>
    /**
     * In case the files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<filesUpdateInput, filesUncheckedUpdateInput>
  }

  /**
   * files delete
   */
  export type filesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter which files to delete.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files deleteMany
   */
  export type filesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which files to delete
     */
    where?: filesWhereInput
    /**
     * Limit how many files to delete.
     */
    limit?: number
  }

  /**
   * files without action
   */
  export type filesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const FoldersScalarFieldEnum: {
    id: 'id',
    folder_name: 'folder_name',
    account_email: 'account_email'
  };

  export type FoldersScalarFieldEnum = (typeof FoldersScalarFieldEnum)[keyof typeof FoldersScalarFieldEnum]


  export const FilesScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    folder_location: 'folder_location'
  };

  export type FilesScalarFieldEnum = (typeof FilesScalarFieldEnum)[keyof typeof FilesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    folder?: FoldersListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    folder?: foldersOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    folder?: FoldersListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
  }

  export type foldersWhereInput = {
    AND?: foldersWhereInput | foldersWhereInput[]
    OR?: foldersWhereInput[]
    NOT?: foldersWhereInput | foldersWhereInput[]
    id?: IntFilter<"folders"> | number
    folder_name?: StringFilter<"folders"> | string
    account_email?: StringFilter<"folders"> | string
    account_owner?: XOR<UsersScalarRelationFilter, usersWhereInput>
    file?: FilesListRelationFilter
  }

  export type foldersOrderByWithRelationInput = {
    id?: SortOrder
    folder_name?: SortOrder
    account_email?: SortOrder
    account_owner?: usersOrderByWithRelationInput
    file?: filesOrderByRelationAggregateInput
  }

  export type foldersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: foldersWhereInput | foldersWhereInput[]
    OR?: foldersWhereInput[]
    NOT?: foldersWhereInput | foldersWhereInput[]
    folder_name?: StringFilter<"folders"> | string
    account_email?: StringFilter<"folders"> | string
    account_owner?: XOR<UsersScalarRelationFilter, usersWhereInput>
    file?: FilesListRelationFilter
  }, "id">

  export type foldersOrderByWithAggregationInput = {
    id?: SortOrder
    folder_name?: SortOrder
    account_email?: SortOrder
    _count?: foldersCountOrderByAggregateInput
    _avg?: foldersAvgOrderByAggregateInput
    _max?: foldersMaxOrderByAggregateInput
    _min?: foldersMinOrderByAggregateInput
    _sum?: foldersSumOrderByAggregateInput
  }

  export type foldersScalarWhereWithAggregatesInput = {
    AND?: foldersScalarWhereWithAggregatesInput | foldersScalarWhereWithAggregatesInput[]
    OR?: foldersScalarWhereWithAggregatesInput[]
    NOT?: foldersScalarWhereWithAggregatesInput | foldersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"folders"> | number
    folder_name?: StringWithAggregatesFilter<"folders"> | string
    account_email?: StringWithAggregatesFilter<"folders"> | string
  }

  export type filesWhereInput = {
    AND?: filesWhereInput | filesWhereInput[]
    OR?: filesWhereInput[]
    NOT?: filesWhereInput | filesWhereInput[]
    id?: IntFilter<"files"> | number
    filename?: StringFilter<"files"> | string
    folder_location?: IntFilter<"files"> | number
    folder_file?: XOR<FoldersScalarRelationFilter, foldersWhereInput>
  }

  export type filesOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    folder_location?: SortOrder
    folder_file?: foldersOrderByWithRelationInput
  }

  export type filesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: filesWhereInput | filesWhereInput[]
    OR?: filesWhereInput[]
    NOT?: filesWhereInput | filesWhereInput[]
    filename?: StringFilter<"files"> | string
    folder_location?: IntFilter<"files"> | number
    folder_file?: XOR<FoldersScalarRelationFilter, foldersWhereInput>
  }, "id">

  export type filesOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    folder_location?: SortOrder
    _count?: filesCountOrderByAggregateInput
    _avg?: filesAvgOrderByAggregateInput
    _max?: filesMaxOrderByAggregateInput
    _min?: filesMinOrderByAggregateInput
    _sum?: filesSumOrderByAggregateInput
  }

  export type filesScalarWhereWithAggregatesInput = {
    AND?: filesScalarWhereWithAggregatesInput | filesScalarWhereWithAggregatesInput[]
    OR?: filesScalarWhereWithAggregatesInput[]
    NOT?: filesScalarWhereWithAggregatesInput | filesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"files"> | number
    filename?: StringWithAggregatesFilter<"files"> | string
    folder_location?: IntWithAggregatesFilter<"files"> | number
  }

  export type usersCreateInput = {
    email: string
    username: string
    password: string
    folder?: foldersCreateNestedManyWithoutAccount_ownerInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    password: string
    folder?: foldersUncheckedCreateNestedManyWithoutAccount_ownerInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    folder?: foldersUpdateManyWithoutAccount_ownerNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    folder?: foldersUncheckedUpdateManyWithoutAccount_ownerNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    username: string
    password: string
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type foldersCreateInput = {
    folder_name: string
    account_owner: usersCreateNestedOneWithoutFolderInput
    file?: filesCreateNestedManyWithoutFolder_fileInput
  }

  export type foldersUncheckedCreateInput = {
    id?: number
    folder_name: string
    account_email: string
    file?: filesUncheckedCreateNestedManyWithoutFolder_fileInput
  }

  export type foldersUpdateInput = {
    folder_name?: StringFieldUpdateOperationsInput | string
    account_owner?: usersUpdateOneRequiredWithoutFolderNestedInput
    file?: filesUpdateManyWithoutFolder_fileNestedInput
  }

  export type foldersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    folder_name?: StringFieldUpdateOperationsInput | string
    account_email?: StringFieldUpdateOperationsInput | string
    file?: filesUncheckedUpdateManyWithoutFolder_fileNestedInput
  }

  export type foldersCreateManyInput = {
    id?: number
    folder_name: string
    account_email: string
  }

  export type foldersUpdateManyMutationInput = {
    folder_name?: StringFieldUpdateOperationsInput | string
  }

  export type foldersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    folder_name?: StringFieldUpdateOperationsInput | string
    account_email?: StringFieldUpdateOperationsInput | string
  }

  export type filesCreateInput = {
    filename: string
    folder_file: foldersCreateNestedOneWithoutFileInput
  }

  export type filesUncheckedCreateInput = {
    id?: number
    filename: string
    folder_location: number
  }

  export type filesUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
    folder_file?: foldersUpdateOneRequiredWithoutFileNestedInput
  }

  export type filesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    folder_location?: IntFieldUpdateOperationsInput | number
  }

  export type filesCreateManyInput = {
    id?: number
    filename: string
    folder_location: number
  }

  export type filesUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type filesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    folder_location?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FoldersListRelationFilter = {
    every?: foldersWhereInput
    some?: foldersWhereInput
    none?: foldersWhereInput
  }

  export type foldersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type FilesListRelationFilter = {
    every?: filesWhereInput
    some?: filesWhereInput
    none?: filesWhereInput
  }

  export type filesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type foldersCountOrderByAggregateInput = {
    id?: SortOrder
    folder_name?: SortOrder
    account_email?: SortOrder
  }

  export type foldersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type foldersMaxOrderByAggregateInput = {
    id?: SortOrder
    folder_name?: SortOrder
    account_email?: SortOrder
  }

  export type foldersMinOrderByAggregateInput = {
    id?: SortOrder
    folder_name?: SortOrder
    account_email?: SortOrder
  }

  export type foldersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FoldersScalarRelationFilter = {
    is?: foldersWhereInput
    isNot?: foldersWhereInput
  }

  export type filesCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    folder_location?: SortOrder
  }

  export type filesAvgOrderByAggregateInput = {
    id?: SortOrder
    folder_location?: SortOrder
  }

  export type filesMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    folder_location?: SortOrder
  }

  export type filesMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    folder_location?: SortOrder
  }

  export type filesSumOrderByAggregateInput = {
    id?: SortOrder
    folder_location?: SortOrder
  }

  export type foldersCreateNestedManyWithoutAccount_ownerInput = {
    create?: XOR<foldersCreateWithoutAccount_ownerInput, foldersUncheckedCreateWithoutAccount_ownerInput> | foldersCreateWithoutAccount_ownerInput[] | foldersUncheckedCreateWithoutAccount_ownerInput[]
    connectOrCreate?: foldersCreateOrConnectWithoutAccount_ownerInput | foldersCreateOrConnectWithoutAccount_ownerInput[]
    createMany?: foldersCreateManyAccount_ownerInputEnvelope
    connect?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
  }

  export type foldersUncheckedCreateNestedManyWithoutAccount_ownerInput = {
    create?: XOR<foldersCreateWithoutAccount_ownerInput, foldersUncheckedCreateWithoutAccount_ownerInput> | foldersCreateWithoutAccount_ownerInput[] | foldersUncheckedCreateWithoutAccount_ownerInput[]
    connectOrCreate?: foldersCreateOrConnectWithoutAccount_ownerInput | foldersCreateOrConnectWithoutAccount_ownerInput[]
    createMany?: foldersCreateManyAccount_ownerInputEnvelope
    connect?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type foldersUpdateManyWithoutAccount_ownerNestedInput = {
    create?: XOR<foldersCreateWithoutAccount_ownerInput, foldersUncheckedCreateWithoutAccount_ownerInput> | foldersCreateWithoutAccount_ownerInput[] | foldersUncheckedCreateWithoutAccount_ownerInput[]
    connectOrCreate?: foldersCreateOrConnectWithoutAccount_ownerInput | foldersCreateOrConnectWithoutAccount_ownerInput[]
    upsert?: foldersUpsertWithWhereUniqueWithoutAccount_ownerInput | foldersUpsertWithWhereUniqueWithoutAccount_ownerInput[]
    createMany?: foldersCreateManyAccount_ownerInputEnvelope
    set?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
    disconnect?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
    delete?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
    connect?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
    update?: foldersUpdateWithWhereUniqueWithoutAccount_ownerInput | foldersUpdateWithWhereUniqueWithoutAccount_ownerInput[]
    updateMany?: foldersUpdateManyWithWhereWithoutAccount_ownerInput | foldersUpdateManyWithWhereWithoutAccount_ownerInput[]
    deleteMany?: foldersScalarWhereInput | foldersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type foldersUncheckedUpdateManyWithoutAccount_ownerNestedInput = {
    create?: XOR<foldersCreateWithoutAccount_ownerInput, foldersUncheckedCreateWithoutAccount_ownerInput> | foldersCreateWithoutAccount_ownerInput[] | foldersUncheckedCreateWithoutAccount_ownerInput[]
    connectOrCreate?: foldersCreateOrConnectWithoutAccount_ownerInput | foldersCreateOrConnectWithoutAccount_ownerInput[]
    upsert?: foldersUpsertWithWhereUniqueWithoutAccount_ownerInput | foldersUpsertWithWhereUniqueWithoutAccount_ownerInput[]
    createMany?: foldersCreateManyAccount_ownerInputEnvelope
    set?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
    disconnect?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
    delete?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
    connect?: foldersWhereUniqueInput | foldersWhereUniqueInput[]
    update?: foldersUpdateWithWhereUniqueWithoutAccount_ownerInput | foldersUpdateWithWhereUniqueWithoutAccount_ownerInput[]
    updateMany?: foldersUpdateManyWithWhereWithoutAccount_ownerInput | foldersUpdateManyWithWhereWithoutAccount_ownerInput[]
    deleteMany?: foldersScalarWhereInput | foldersScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutFolderInput = {
    create?: XOR<usersCreateWithoutFolderInput, usersUncheckedCreateWithoutFolderInput>
    connectOrCreate?: usersCreateOrConnectWithoutFolderInput
    connect?: usersWhereUniqueInput
  }

  export type filesCreateNestedManyWithoutFolder_fileInput = {
    create?: XOR<filesCreateWithoutFolder_fileInput, filesUncheckedCreateWithoutFolder_fileInput> | filesCreateWithoutFolder_fileInput[] | filesUncheckedCreateWithoutFolder_fileInput[]
    connectOrCreate?: filesCreateOrConnectWithoutFolder_fileInput | filesCreateOrConnectWithoutFolder_fileInput[]
    createMany?: filesCreateManyFolder_fileInputEnvelope
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
  }

  export type filesUncheckedCreateNestedManyWithoutFolder_fileInput = {
    create?: XOR<filesCreateWithoutFolder_fileInput, filesUncheckedCreateWithoutFolder_fileInput> | filesCreateWithoutFolder_fileInput[] | filesUncheckedCreateWithoutFolder_fileInput[]
    connectOrCreate?: filesCreateOrConnectWithoutFolder_fileInput | filesCreateOrConnectWithoutFolder_fileInput[]
    createMany?: filesCreateManyFolder_fileInputEnvelope
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutFolderNestedInput = {
    create?: XOR<usersCreateWithoutFolderInput, usersUncheckedCreateWithoutFolderInput>
    connectOrCreate?: usersCreateOrConnectWithoutFolderInput
    upsert?: usersUpsertWithoutFolderInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFolderInput, usersUpdateWithoutFolderInput>, usersUncheckedUpdateWithoutFolderInput>
  }

  export type filesUpdateManyWithoutFolder_fileNestedInput = {
    create?: XOR<filesCreateWithoutFolder_fileInput, filesUncheckedCreateWithoutFolder_fileInput> | filesCreateWithoutFolder_fileInput[] | filesUncheckedCreateWithoutFolder_fileInput[]
    connectOrCreate?: filesCreateOrConnectWithoutFolder_fileInput | filesCreateOrConnectWithoutFolder_fileInput[]
    upsert?: filesUpsertWithWhereUniqueWithoutFolder_fileInput | filesUpsertWithWhereUniqueWithoutFolder_fileInput[]
    createMany?: filesCreateManyFolder_fileInputEnvelope
    set?: filesWhereUniqueInput | filesWhereUniqueInput[]
    disconnect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    delete?: filesWhereUniqueInput | filesWhereUniqueInput[]
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    update?: filesUpdateWithWhereUniqueWithoutFolder_fileInput | filesUpdateWithWhereUniqueWithoutFolder_fileInput[]
    updateMany?: filesUpdateManyWithWhereWithoutFolder_fileInput | filesUpdateManyWithWhereWithoutFolder_fileInput[]
    deleteMany?: filesScalarWhereInput | filesScalarWhereInput[]
  }

  export type filesUncheckedUpdateManyWithoutFolder_fileNestedInput = {
    create?: XOR<filesCreateWithoutFolder_fileInput, filesUncheckedCreateWithoutFolder_fileInput> | filesCreateWithoutFolder_fileInput[] | filesUncheckedCreateWithoutFolder_fileInput[]
    connectOrCreate?: filesCreateOrConnectWithoutFolder_fileInput | filesCreateOrConnectWithoutFolder_fileInput[]
    upsert?: filesUpsertWithWhereUniqueWithoutFolder_fileInput | filesUpsertWithWhereUniqueWithoutFolder_fileInput[]
    createMany?: filesCreateManyFolder_fileInputEnvelope
    set?: filesWhereUniqueInput | filesWhereUniqueInput[]
    disconnect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    delete?: filesWhereUniqueInput | filesWhereUniqueInput[]
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    update?: filesUpdateWithWhereUniqueWithoutFolder_fileInput | filesUpdateWithWhereUniqueWithoutFolder_fileInput[]
    updateMany?: filesUpdateManyWithWhereWithoutFolder_fileInput | filesUpdateManyWithWhereWithoutFolder_fileInput[]
    deleteMany?: filesScalarWhereInput | filesScalarWhereInput[]
  }

  export type foldersCreateNestedOneWithoutFileInput = {
    create?: XOR<foldersCreateWithoutFileInput, foldersUncheckedCreateWithoutFileInput>
    connectOrCreate?: foldersCreateOrConnectWithoutFileInput
    connect?: foldersWhereUniqueInput
  }

  export type foldersUpdateOneRequiredWithoutFileNestedInput = {
    create?: XOR<foldersCreateWithoutFileInput, foldersUncheckedCreateWithoutFileInput>
    connectOrCreate?: foldersCreateOrConnectWithoutFileInput
    upsert?: foldersUpsertWithoutFileInput
    connect?: foldersWhereUniqueInput
    update?: XOR<XOR<foldersUpdateToOneWithWhereWithoutFileInput, foldersUpdateWithoutFileInput>, foldersUncheckedUpdateWithoutFileInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type foldersCreateWithoutAccount_ownerInput = {
    folder_name: string
    file?: filesCreateNestedManyWithoutFolder_fileInput
  }

  export type foldersUncheckedCreateWithoutAccount_ownerInput = {
    id?: number
    folder_name: string
    file?: filesUncheckedCreateNestedManyWithoutFolder_fileInput
  }

  export type foldersCreateOrConnectWithoutAccount_ownerInput = {
    where: foldersWhereUniqueInput
    create: XOR<foldersCreateWithoutAccount_ownerInput, foldersUncheckedCreateWithoutAccount_ownerInput>
  }

  export type foldersCreateManyAccount_ownerInputEnvelope = {
    data: foldersCreateManyAccount_ownerInput | foldersCreateManyAccount_ownerInput[]
    skipDuplicates?: boolean
  }

  export type foldersUpsertWithWhereUniqueWithoutAccount_ownerInput = {
    where: foldersWhereUniqueInput
    update: XOR<foldersUpdateWithoutAccount_ownerInput, foldersUncheckedUpdateWithoutAccount_ownerInput>
    create: XOR<foldersCreateWithoutAccount_ownerInput, foldersUncheckedCreateWithoutAccount_ownerInput>
  }

  export type foldersUpdateWithWhereUniqueWithoutAccount_ownerInput = {
    where: foldersWhereUniqueInput
    data: XOR<foldersUpdateWithoutAccount_ownerInput, foldersUncheckedUpdateWithoutAccount_ownerInput>
  }

  export type foldersUpdateManyWithWhereWithoutAccount_ownerInput = {
    where: foldersScalarWhereInput
    data: XOR<foldersUpdateManyMutationInput, foldersUncheckedUpdateManyWithoutAccount_ownerInput>
  }

  export type foldersScalarWhereInput = {
    AND?: foldersScalarWhereInput | foldersScalarWhereInput[]
    OR?: foldersScalarWhereInput[]
    NOT?: foldersScalarWhereInput | foldersScalarWhereInput[]
    id?: IntFilter<"folders"> | number
    folder_name?: StringFilter<"folders"> | string
    account_email?: StringFilter<"folders"> | string
  }

  export type usersCreateWithoutFolderInput = {
    email: string
    username: string
    password: string
  }

  export type usersUncheckedCreateWithoutFolderInput = {
    id?: number
    email: string
    username: string
    password: string
  }

  export type usersCreateOrConnectWithoutFolderInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFolderInput, usersUncheckedCreateWithoutFolderInput>
  }

  export type filesCreateWithoutFolder_fileInput = {
    filename: string
  }

  export type filesUncheckedCreateWithoutFolder_fileInput = {
    id?: number
    filename: string
  }

  export type filesCreateOrConnectWithoutFolder_fileInput = {
    where: filesWhereUniqueInput
    create: XOR<filesCreateWithoutFolder_fileInput, filesUncheckedCreateWithoutFolder_fileInput>
  }

  export type filesCreateManyFolder_fileInputEnvelope = {
    data: filesCreateManyFolder_fileInput | filesCreateManyFolder_fileInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutFolderInput = {
    update: XOR<usersUpdateWithoutFolderInput, usersUncheckedUpdateWithoutFolderInput>
    create: XOR<usersCreateWithoutFolderInput, usersUncheckedCreateWithoutFolderInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFolderInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFolderInput, usersUncheckedUpdateWithoutFolderInput>
  }

  export type usersUpdateWithoutFolderInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateWithoutFolderInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type filesUpsertWithWhereUniqueWithoutFolder_fileInput = {
    where: filesWhereUniqueInput
    update: XOR<filesUpdateWithoutFolder_fileInput, filesUncheckedUpdateWithoutFolder_fileInput>
    create: XOR<filesCreateWithoutFolder_fileInput, filesUncheckedCreateWithoutFolder_fileInput>
  }

  export type filesUpdateWithWhereUniqueWithoutFolder_fileInput = {
    where: filesWhereUniqueInput
    data: XOR<filesUpdateWithoutFolder_fileInput, filesUncheckedUpdateWithoutFolder_fileInput>
  }

  export type filesUpdateManyWithWhereWithoutFolder_fileInput = {
    where: filesScalarWhereInput
    data: XOR<filesUpdateManyMutationInput, filesUncheckedUpdateManyWithoutFolder_fileInput>
  }

  export type filesScalarWhereInput = {
    AND?: filesScalarWhereInput | filesScalarWhereInput[]
    OR?: filesScalarWhereInput[]
    NOT?: filesScalarWhereInput | filesScalarWhereInput[]
    id?: IntFilter<"files"> | number
    filename?: StringFilter<"files"> | string
    folder_location?: IntFilter<"files"> | number
  }

  export type foldersCreateWithoutFileInput = {
    folder_name: string
    account_owner: usersCreateNestedOneWithoutFolderInput
  }

  export type foldersUncheckedCreateWithoutFileInput = {
    id?: number
    folder_name: string
    account_email: string
  }

  export type foldersCreateOrConnectWithoutFileInput = {
    where: foldersWhereUniqueInput
    create: XOR<foldersCreateWithoutFileInput, foldersUncheckedCreateWithoutFileInput>
  }

  export type foldersUpsertWithoutFileInput = {
    update: XOR<foldersUpdateWithoutFileInput, foldersUncheckedUpdateWithoutFileInput>
    create: XOR<foldersCreateWithoutFileInput, foldersUncheckedCreateWithoutFileInput>
    where?: foldersWhereInput
  }

  export type foldersUpdateToOneWithWhereWithoutFileInput = {
    where?: foldersWhereInput
    data: XOR<foldersUpdateWithoutFileInput, foldersUncheckedUpdateWithoutFileInput>
  }

  export type foldersUpdateWithoutFileInput = {
    folder_name?: StringFieldUpdateOperationsInput | string
    account_owner?: usersUpdateOneRequiredWithoutFolderNestedInput
  }

  export type foldersUncheckedUpdateWithoutFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    folder_name?: StringFieldUpdateOperationsInput | string
    account_email?: StringFieldUpdateOperationsInput | string
  }

  export type foldersCreateManyAccount_ownerInput = {
    id?: number
    folder_name: string
  }

  export type foldersUpdateWithoutAccount_ownerInput = {
    folder_name?: StringFieldUpdateOperationsInput | string
    file?: filesUpdateManyWithoutFolder_fileNestedInput
  }

  export type foldersUncheckedUpdateWithoutAccount_ownerInput = {
    id?: IntFieldUpdateOperationsInput | number
    folder_name?: StringFieldUpdateOperationsInput | string
    file?: filesUncheckedUpdateManyWithoutFolder_fileNestedInput
  }

  export type foldersUncheckedUpdateManyWithoutAccount_ownerInput = {
    id?: IntFieldUpdateOperationsInput | number
    folder_name?: StringFieldUpdateOperationsInput | string
  }

  export type filesCreateManyFolder_fileInput = {
    id?: number
    filename: string
  }

  export type filesUpdateWithoutFolder_fileInput = {
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type filesUncheckedUpdateWithoutFolder_fileInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type filesUncheckedUpdateManyWithoutFolder_fileInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
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