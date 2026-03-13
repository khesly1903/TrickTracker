import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Student: "Student";
    readonly Contact: "Contact";
    readonly Instructor: "Instructor";
    readonly Class: "Class";
    readonly Program: "Program";
    readonly ProgramSchedule: "ProgramSchedule";
    readonly Skill: "Skill";
    readonly StudentSkill: "StudentSkill";
    readonly Attendance: "Attendance";
    readonly Location: "Location";
    readonly StudentProgram: "StudentProgram";
    readonly StudentContact: "StudentContact";
    readonly ProgramSkill: "ProgramSkill";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "student" | "contact" | "instructor" | "class" | "program" | "programSchedule" | "skill" | "studentSkill" | "attendance" | "location" | "studentProgram" | "studentContact" | "programSkill";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Student: {
            payload: Prisma.$StudentPayload<ExtArgs>;
            fields: Prisma.StudentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                findFirst: {
                    args: Prisma.StudentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                findMany: {
                    args: Prisma.StudentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>[];
                };
                create: {
                    args: Prisma.StudentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                createMany: {
                    args: Prisma.StudentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>[];
                };
                delete: {
                    args: Prisma.StudentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                update: {
                    args: Prisma.StudentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                deleteMany: {
                    args: Prisma.StudentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>[];
                };
                upsert: {
                    args: Prisma.StudentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                aggregate: {
                    args: Prisma.StudentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudent>;
                };
                groupBy: {
                    args: Prisma.StudentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentCountAggregateOutputType> | number;
                };
            };
        };
        Contact: {
            payload: Prisma.$ContactPayload<ExtArgs>;
            fields: Prisma.ContactFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ContactFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                findFirst: {
                    args: Prisma.ContactFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                findMany: {
                    args: Prisma.ContactFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>[];
                };
                create: {
                    args: Prisma.ContactCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                createMany: {
                    args: Prisma.ContactCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>[];
                };
                delete: {
                    args: Prisma.ContactDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                update: {
                    args: Prisma.ContactUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                deleteMany: {
                    args: Prisma.ContactDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ContactUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>[];
                };
                upsert: {
                    args: Prisma.ContactUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                aggregate: {
                    args: Prisma.ContactAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContact>;
                };
                groupBy: {
                    args: Prisma.ContactGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ContactCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactCountAggregateOutputType> | number;
                };
            };
        };
        Instructor: {
            payload: Prisma.$InstructorPayload<ExtArgs>;
            fields: Prisma.InstructorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InstructorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InstructorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorPayload>;
                };
                findFirst: {
                    args: Prisma.InstructorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InstructorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorPayload>;
                };
                findMany: {
                    args: Prisma.InstructorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorPayload>[];
                };
                create: {
                    args: Prisma.InstructorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorPayload>;
                };
                createMany: {
                    args: Prisma.InstructorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InstructorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorPayload>[];
                };
                delete: {
                    args: Prisma.InstructorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorPayload>;
                };
                update: {
                    args: Prisma.InstructorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorPayload>;
                };
                deleteMany: {
                    args: Prisma.InstructorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InstructorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InstructorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorPayload>[];
                };
                upsert: {
                    args: Prisma.InstructorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InstructorPayload>;
                };
                aggregate: {
                    args: Prisma.InstructorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInstructor>;
                };
                groupBy: {
                    args: Prisma.InstructorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InstructorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InstructorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InstructorCountAggregateOutputType> | number;
                };
            };
        };
        Class: {
            payload: Prisma.$ClassPayload<ExtArgs>;
            fields: Prisma.ClassFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClassFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                findFirst: {
                    args: Prisma.ClassFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                findMany: {
                    args: Prisma.ClassFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>[];
                };
                create: {
                    args: Prisma.ClassCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                createMany: {
                    args: Prisma.ClassCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>[];
                };
                delete: {
                    args: Prisma.ClassDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                update: {
                    args: Prisma.ClassUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                deleteMany: {
                    args: Prisma.ClassDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClassUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>[];
                };
                upsert: {
                    args: Prisma.ClassUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClassPayload>;
                };
                aggregate: {
                    args: Prisma.ClassAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClass>;
                };
                groupBy: {
                    args: Prisma.ClassGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClassCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassCountAggregateOutputType> | number;
                };
            };
        };
        Program: {
            payload: Prisma.$ProgramPayload<ExtArgs>;
            fields: Prisma.ProgramFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProgramFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProgramFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramPayload>;
                };
                findFirst: {
                    args: Prisma.ProgramFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProgramFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramPayload>;
                };
                findMany: {
                    args: Prisma.ProgramFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramPayload>[];
                };
                create: {
                    args: Prisma.ProgramCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramPayload>;
                };
                createMany: {
                    args: Prisma.ProgramCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProgramCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramPayload>[];
                };
                delete: {
                    args: Prisma.ProgramDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramPayload>;
                };
                update: {
                    args: Prisma.ProgramUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramPayload>;
                };
                deleteMany: {
                    args: Prisma.ProgramDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProgramUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProgramUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramPayload>[];
                };
                upsert: {
                    args: Prisma.ProgramUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramPayload>;
                };
                aggregate: {
                    args: Prisma.ProgramAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProgram>;
                };
                groupBy: {
                    args: Prisma.ProgramGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgramGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProgramCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgramCountAggregateOutputType> | number;
                };
            };
        };
        ProgramSchedule: {
            payload: Prisma.$ProgramSchedulePayload<ExtArgs>;
            fields: Prisma.ProgramScheduleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProgramScheduleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSchedulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProgramScheduleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSchedulePayload>;
                };
                findFirst: {
                    args: Prisma.ProgramScheduleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSchedulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProgramScheduleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSchedulePayload>;
                };
                findMany: {
                    args: Prisma.ProgramScheduleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSchedulePayload>[];
                };
                create: {
                    args: Prisma.ProgramScheduleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSchedulePayload>;
                };
                createMany: {
                    args: Prisma.ProgramScheduleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProgramScheduleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSchedulePayload>[];
                };
                delete: {
                    args: Prisma.ProgramScheduleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSchedulePayload>;
                };
                update: {
                    args: Prisma.ProgramScheduleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSchedulePayload>;
                };
                deleteMany: {
                    args: Prisma.ProgramScheduleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProgramScheduleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProgramScheduleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSchedulePayload>[];
                };
                upsert: {
                    args: Prisma.ProgramScheduleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSchedulePayload>;
                };
                aggregate: {
                    args: Prisma.ProgramScheduleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProgramSchedule>;
                };
                groupBy: {
                    args: Prisma.ProgramScheduleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgramScheduleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProgramScheduleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgramScheduleCountAggregateOutputType> | number;
                };
            };
        };
        Skill: {
            payload: Prisma.$SkillPayload<ExtArgs>;
            fields: Prisma.SkillFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SkillFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                findFirst: {
                    args: Prisma.SkillFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                findMany: {
                    args: Prisma.SkillFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>[];
                };
                create: {
                    args: Prisma.SkillCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                createMany: {
                    args: Prisma.SkillCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>[];
                };
                delete: {
                    args: Prisma.SkillDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                update: {
                    args: Prisma.SkillUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                deleteMany: {
                    args: Prisma.SkillDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SkillUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>[];
                };
                upsert: {
                    args: Prisma.SkillUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SkillPayload>;
                };
                aggregate: {
                    args: Prisma.SkillAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSkill>;
                };
                groupBy: {
                    args: Prisma.SkillGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SkillGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SkillCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SkillCountAggregateOutputType> | number;
                };
            };
        };
        StudentSkill: {
            payload: Prisma.$StudentSkillPayload<ExtArgs>;
            fields: Prisma.StudentSkillFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentSkillFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentSkillPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentSkillFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentSkillPayload>;
                };
                findFirst: {
                    args: Prisma.StudentSkillFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentSkillPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentSkillFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentSkillPayload>;
                };
                findMany: {
                    args: Prisma.StudentSkillFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentSkillPayload>[];
                };
                create: {
                    args: Prisma.StudentSkillCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentSkillPayload>;
                };
                createMany: {
                    args: Prisma.StudentSkillCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StudentSkillCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentSkillPayload>[];
                };
                delete: {
                    args: Prisma.StudentSkillDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentSkillPayload>;
                };
                update: {
                    args: Prisma.StudentSkillUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentSkillPayload>;
                };
                deleteMany: {
                    args: Prisma.StudentSkillDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentSkillUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StudentSkillUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentSkillPayload>[];
                };
                upsert: {
                    args: Prisma.StudentSkillUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentSkillPayload>;
                };
                aggregate: {
                    args: Prisma.StudentSkillAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudentSkill>;
                };
                groupBy: {
                    args: Prisma.StudentSkillGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentSkillGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentSkillCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentSkillCountAggregateOutputType> | number;
                };
            };
        };
        Attendance: {
            payload: Prisma.$AttendancePayload<ExtArgs>;
            fields: Prisma.AttendanceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AttendanceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                findFirst: {
                    args: Prisma.AttendanceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                findMany: {
                    args: Prisma.AttendanceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>[];
                };
                create: {
                    args: Prisma.AttendanceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                createMany: {
                    args: Prisma.AttendanceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>[];
                };
                delete: {
                    args: Prisma.AttendanceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                update: {
                    args: Prisma.AttendanceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                deleteMany: {
                    args: Prisma.AttendanceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AttendanceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>[];
                };
                upsert: {
                    args: Prisma.AttendanceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AttendancePayload>;
                };
                aggregate: {
                    args: Prisma.AttendanceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAttendance>;
                };
                groupBy: {
                    args: Prisma.AttendanceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AttendanceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AttendanceCountAggregateOutputType> | number;
                };
            };
        };
        Location: {
            payload: Prisma.$LocationPayload<ExtArgs>;
            fields: Prisma.LocationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LocationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>;
                };
                findFirst: {
                    args: Prisma.LocationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>;
                };
                findMany: {
                    args: Prisma.LocationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>[];
                };
                create: {
                    args: Prisma.LocationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>;
                };
                createMany: {
                    args: Prisma.LocationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>[];
                };
                delete: {
                    args: Prisma.LocationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>;
                };
                update: {
                    args: Prisma.LocationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>;
                };
                deleteMany: {
                    args: Prisma.LocationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LocationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>[];
                };
                upsert: {
                    args: Prisma.LocationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LocationPayload>;
                };
                aggregate: {
                    args: Prisma.LocationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLocation>;
                };
                groupBy: {
                    args: Prisma.LocationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LocationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LocationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LocationCountAggregateOutputType> | number;
                };
            };
        };
        StudentProgram: {
            payload: Prisma.$StudentProgramPayload<ExtArgs>;
            fields: Prisma.StudentProgramFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentProgramFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProgramPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentProgramFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProgramPayload>;
                };
                findFirst: {
                    args: Prisma.StudentProgramFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProgramPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentProgramFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProgramPayload>;
                };
                findMany: {
                    args: Prisma.StudentProgramFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProgramPayload>[];
                };
                create: {
                    args: Prisma.StudentProgramCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProgramPayload>;
                };
                createMany: {
                    args: Prisma.StudentProgramCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StudentProgramCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProgramPayload>[];
                };
                delete: {
                    args: Prisma.StudentProgramDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProgramPayload>;
                };
                update: {
                    args: Prisma.StudentProgramUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProgramPayload>;
                };
                deleteMany: {
                    args: Prisma.StudentProgramDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentProgramUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StudentProgramUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProgramPayload>[];
                };
                upsert: {
                    args: Prisma.StudentProgramUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentProgramPayload>;
                };
                aggregate: {
                    args: Prisma.StudentProgramAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudentProgram>;
                };
                groupBy: {
                    args: Prisma.StudentProgramGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentProgramGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentProgramCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentProgramCountAggregateOutputType> | number;
                };
            };
        };
        StudentContact: {
            payload: Prisma.$StudentContactPayload<ExtArgs>;
            fields: Prisma.StudentContactFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentContactFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentContactFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload>;
                };
                findFirst: {
                    args: Prisma.StudentContactFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentContactFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload>;
                };
                findMany: {
                    args: Prisma.StudentContactFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload>[];
                };
                create: {
                    args: Prisma.StudentContactCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload>;
                };
                createMany: {
                    args: Prisma.StudentContactCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StudentContactCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload>[];
                };
                delete: {
                    args: Prisma.StudentContactDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload>;
                };
                update: {
                    args: Prisma.StudentContactUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload>;
                };
                deleteMany: {
                    args: Prisma.StudentContactDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentContactUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StudentContactUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload>[];
                };
                upsert: {
                    args: Prisma.StudentContactUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload>;
                };
                aggregate: {
                    args: Prisma.StudentContactAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudentContact>;
                };
                groupBy: {
                    args: Prisma.StudentContactGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentContactGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentContactCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentContactCountAggregateOutputType> | number;
                };
            };
        };
        ProgramSkill: {
            payload: Prisma.$ProgramSkillPayload<ExtArgs>;
            fields: Prisma.ProgramSkillFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProgramSkillFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSkillPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProgramSkillFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSkillPayload>;
                };
                findFirst: {
                    args: Prisma.ProgramSkillFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSkillPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProgramSkillFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSkillPayload>;
                };
                findMany: {
                    args: Prisma.ProgramSkillFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSkillPayload>[];
                };
                create: {
                    args: Prisma.ProgramSkillCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSkillPayload>;
                };
                createMany: {
                    args: Prisma.ProgramSkillCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProgramSkillCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSkillPayload>[];
                };
                delete: {
                    args: Prisma.ProgramSkillDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSkillPayload>;
                };
                update: {
                    args: Prisma.ProgramSkillUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSkillPayload>;
                };
                deleteMany: {
                    args: Prisma.ProgramSkillDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProgramSkillUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProgramSkillUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSkillPayload>[];
                };
                upsert: {
                    args: Prisma.ProgramSkillUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramSkillPayload>;
                };
                aggregate: {
                    args: Prisma.ProgramSkillAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProgramSkill>;
                };
                groupBy: {
                    args: Prisma.ProgramSkillGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgramSkillGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProgramSkillCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgramSkillCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly roles: "roles";
    readonly isActive: "isActive";
    readonly lastLoginAt: "lastLoginAt";
    readonly refreshToken: "refreshToken";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const StudentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly name: "name";
    readonly surname: "surname";
    readonly type: "type";
    readonly dob: "dob";
    readonly injuries: "injuries";
    readonly phoneNumber: "phoneNumber";
    readonly secondaryPhoneNumber: "secondaryPhoneNumber";
    readonly whatsappPhoneNumber: "whatsappPhoneNumber";
    readonly school: "school";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];
export declare const ContactScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly name: "name";
    readonly surname: "surname";
    readonly type: "type";
    readonly phoneNumber: "phoneNumber";
    readonly secondaryPhoneNumber: "secondaryPhoneNumber";
    readonly whatsappPhoneNumber: "whatsappPhoneNumber";
    readonly email: "email";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum];
export declare const InstructorScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly name: "name";
    readonly surname: "surname";
    readonly isActive: "isActive";
    readonly phoneNumber: "phoneNumber";
    readonly secondaryPhoneNumber: "secondaryPhoneNumber";
    readonly whatsappPhoneNumber: "whatsappPhoneNumber";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InstructorScalarFieldEnum = (typeof InstructorScalarFieldEnum)[keyof typeof InstructorScalarFieldEnum];
export declare const ClassScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly type: "type";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum];
export declare const ProgramScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly isActive: "isActive";
    readonly price: "price";
    readonly Stage: "Stage";
    readonly gender: "gender";
    readonly capcaity: "capcaity";
    readonly requiredEquipment: "requiredEquipment";
    readonly instructorId: "instructorId";
    readonly minAge: "minAge";
    readonly maxAge: "maxAge";
    readonly minLevel: "minLevel";
    readonly maxLevel: "maxLevel";
    readonly classId: "classId";
    readonly locationId: "locationId";
};
export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum];
export declare const ProgramScheduleScalarFieldEnum: {
    readonly id: "id";
    readonly dayOfWeek: "dayOfWeek";
    readonly startTime: "startTime";
    readonly duration: "duration";
    readonly endTime: "endTime";
    readonly type: "type";
    readonly programId: "programId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProgramScheduleScalarFieldEnum = (typeof ProgramScheduleScalarFieldEnum)[keyof typeof ProgramScheduleScalarFieldEnum];
export declare const SkillScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly type: "type";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum];
export declare const StudentSkillScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly skillId: "skillId";
    readonly status: "status";
    readonly achievedAt: "achievedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StudentSkillScalarFieldEnum = (typeof StudentSkillScalarFieldEnum)[keyof typeof StudentSkillScalarFieldEnum];
export declare const AttendanceScalarFieldEnum: {
    readonly id: "id";
    readonly attended: "attended";
    readonly note: "note";
    readonly studentProgramId: "studentProgramId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum];
export declare const LocationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly address: "address";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum];
export declare const StudentProgramScalarFieldEnum: {
    readonly id: "id";
    readonly isActive: "isActive";
    readonly studentId: "studentId";
    readonly programId: "programId";
};
export type StudentProgramScalarFieldEnum = (typeof StudentProgramScalarFieldEnum)[keyof typeof StudentProgramScalarFieldEnum];
export declare const StudentContactScalarFieldEnum: {
    readonly studentId: "studentId";
    readonly contactId: "contactId";
};
export type StudentContactScalarFieldEnum = (typeof StudentContactScalarFieldEnum)[keyof typeof StudentContactScalarFieldEnum];
export declare const ProgramSkillScalarFieldEnum: {
    readonly programId: "programId";
    readonly skillId: "skillId";
    readonly stage: "stage";
};
export type ProgramSkillScalarFieldEnum = (typeof ProgramSkillScalarFieldEnum)[keyof typeof ProgramSkillScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumStudentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentType'>;
export type ListEnumStudentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentType[]'>;
export type EnumContactTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactTypes'>;
export type ListEnumContactTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactTypes[]'>;
export type EnumClassTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClassTypes'>;
export type ListEnumClassTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClassTypes[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type ListEnumStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Stage[]'>;
export type EnumStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Stage'>;
export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>;
export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumProgramLevelsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgramLevels'>;
export type ListEnumProgramLevelsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgramLevels[]'>;
export type EnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek'>;
export type ListEnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek[]'>;
export type EnumScheduleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleType'>;
export type ListEnumScheduleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleType[]'>;
export type EnumSkillTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillType'>;
export type ListEnumSkillTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillType[]'>;
export type EnumSkillStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillStatus'>;
export type ListEnumSkillStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillStatus[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    student?: Prisma.StudentOmit;
    contact?: Prisma.ContactOmit;
    instructor?: Prisma.InstructorOmit;
    class?: Prisma.ClassOmit;
    program?: Prisma.ProgramOmit;
    programSchedule?: Prisma.ProgramScheduleOmit;
    skill?: Prisma.SkillOmit;
    studentSkill?: Prisma.StudentSkillOmit;
    attendance?: Prisma.AttendanceOmit;
    location?: Prisma.LocationOmit;
    studentProgram?: Prisma.StudentProgramOmit;
    studentContact?: Prisma.StudentContactOmit;
    programSkill?: Prisma.ProgramSkillOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
