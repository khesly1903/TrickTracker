import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClassModel = runtime.Types.Result.DefaultSelection<Prisma.$ClassPayload>;
export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null;
    _min: ClassMinAggregateOutputType | null;
    _max: ClassMaxAggregateOutputType | null;
};
export type ClassMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: $Enums.ClassTypes | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClassMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: $Enums.ClassTypes | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClassCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ClassMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClassMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClassCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ClassAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassWhereInput;
    orderBy?: Prisma.ClassOrderByWithRelationInput | Prisma.ClassOrderByWithRelationInput[];
    cursor?: Prisma.ClassWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClassCountAggregateInputType;
    _min?: ClassMinAggregateInputType;
    _max?: ClassMaxAggregateInputType;
};
export type GetClassAggregateType<T extends ClassAggregateArgs> = {
    [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClass[P]> : Prisma.GetScalarType<T[P], AggregateClass[P]>;
};
export type ClassGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassWhereInput;
    orderBy?: Prisma.ClassOrderByWithAggregationInput | Prisma.ClassOrderByWithAggregationInput[];
    by: Prisma.ClassScalarFieldEnum[] | Prisma.ClassScalarFieldEnum;
    having?: Prisma.ClassScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClassCountAggregateInputType | true;
    _min?: ClassMinAggregateInputType;
    _max?: ClassMaxAggregateInputType;
};
export type ClassGroupByOutputType = {
    id: string;
    name: string;
    type: $Enums.ClassTypes;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ClassCountAggregateOutputType | null;
    _min: ClassMinAggregateOutputType | null;
    _max: ClassMaxAggregateOutputType | null;
};
type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClassGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClassGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClassGroupByOutputType[P]>;
}>>;
export type ClassWhereInput = {
    AND?: Prisma.ClassWhereInput | Prisma.ClassWhereInput[];
    OR?: Prisma.ClassWhereInput[];
    NOT?: Prisma.ClassWhereInput | Prisma.ClassWhereInput[];
    id?: Prisma.StringFilter<"Class"> | string;
    name?: Prisma.StringFilter<"Class"> | string;
    type?: Prisma.EnumClassTypesFilter<"Class"> | $Enums.ClassTypes;
    isActive?: Prisma.BoolFilter<"Class"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Class"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Class"> | Date | string;
    programs?: Prisma.ProgramListRelationFilter;
};
export type ClassOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    programs?: Prisma.ProgramOrderByRelationAggregateInput;
};
export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ClassWhereInput | Prisma.ClassWhereInput[];
    OR?: Prisma.ClassWhereInput[];
    NOT?: Prisma.ClassWhereInput | Prisma.ClassWhereInput[];
    name?: Prisma.StringFilter<"Class"> | string;
    type?: Prisma.EnumClassTypesFilter<"Class"> | $Enums.ClassTypes;
    isActive?: Prisma.BoolFilter<"Class"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Class"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Class"> | Date | string;
    programs?: Prisma.ProgramListRelationFilter;
}, "id">;
export type ClassOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ClassCountOrderByAggregateInput;
    _max?: Prisma.ClassMaxOrderByAggregateInput;
    _min?: Prisma.ClassMinOrderByAggregateInput;
};
export type ClassScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClassScalarWhereWithAggregatesInput | Prisma.ClassScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClassScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClassScalarWhereWithAggregatesInput | Prisma.ClassScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Class"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Class"> | string;
    type?: Prisma.EnumClassTypesWithAggregatesFilter<"Class"> | $Enums.ClassTypes;
    isActive?: Prisma.BoolWithAggregatesFilter<"Class"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Class"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Class"> | Date | string;
};
export type ClassCreateInput = {
    id?: string;
    name: string;
    type?: $Enums.ClassTypes;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    programs?: Prisma.ProgramCreateNestedManyWithoutInheritedClassInput;
};
export type ClassUncheckedCreateInput = {
    id?: string;
    name: string;
    type?: $Enums.ClassTypes;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    programs?: Prisma.ProgramUncheckedCreateNestedManyWithoutInheritedClassInput;
};
export type ClassUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumClassTypesFieldUpdateOperationsInput | $Enums.ClassTypes;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    programs?: Prisma.ProgramUpdateManyWithoutInheritedClassNestedInput;
};
export type ClassUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumClassTypesFieldUpdateOperationsInput | $Enums.ClassTypes;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    programs?: Prisma.ProgramUncheckedUpdateManyWithoutInheritedClassNestedInput;
};
export type ClassCreateManyInput = {
    id?: string;
    name: string;
    type?: $Enums.ClassTypes;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClassUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumClassTypesFieldUpdateOperationsInput | $Enums.ClassTypes;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumClassTypesFieldUpdateOperationsInput | $Enums.ClassTypes;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClassMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClassMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClassScalarRelationFilter = {
    is?: Prisma.ClassWhereInput;
    isNot?: Prisma.ClassWhereInput;
};
export type EnumClassTypesFieldUpdateOperationsInput = {
    set?: $Enums.ClassTypes;
};
export type ClassCreateNestedOneWithoutProgramsInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutProgramsInput, Prisma.ClassUncheckedCreateWithoutProgramsInput>;
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutProgramsInput;
    connect?: Prisma.ClassWhereUniqueInput;
};
export type ClassUpdateOneRequiredWithoutProgramsNestedInput = {
    create?: Prisma.XOR<Prisma.ClassCreateWithoutProgramsInput, Prisma.ClassUncheckedCreateWithoutProgramsInput>;
    connectOrCreate?: Prisma.ClassCreateOrConnectWithoutProgramsInput;
    upsert?: Prisma.ClassUpsertWithoutProgramsInput;
    connect?: Prisma.ClassWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClassUpdateToOneWithWhereWithoutProgramsInput, Prisma.ClassUpdateWithoutProgramsInput>, Prisma.ClassUncheckedUpdateWithoutProgramsInput>;
};
export type ClassCreateWithoutProgramsInput = {
    id?: string;
    name: string;
    type?: $Enums.ClassTypes;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClassUncheckedCreateWithoutProgramsInput = {
    id?: string;
    name: string;
    type?: $Enums.ClassTypes;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ClassCreateOrConnectWithoutProgramsInput = {
    where: Prisma.ClassWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassCreateWithoutProgramsInput, Prisma.ClassUncheckedCreateWithoutProgramsInput>;
};
export type ClassUpsertWithoutProgramsInput = {
    update: Prisma.XOR<Prisma.ClassUpdateWithoutProgramsInput, Prisma.ClassUncheckedUpdateWithoutProgramsInput>;
    create: Prisma.XOR<Prisma.ClassCreateWithoutProgramsInput, Prisma.ClassUncheckedCreateWithoutProgramsInput>;
    where?: Prisma.ClassWhereInput;
};
export type ClassUpdateToOneWithWhereWithoutProgramsInput = {
    where?: Prisma.ClassWhereInput;
    data: Prisma.XOR<Prisma.ClassUpdateWithoutProgramsInput, Prisma.ClassUncheckedUpdateWithoutProgramsInput>;
};
export type ClassUpdateWithoutProgramsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumClassTypesFieldUpdateOperationsInput | $Enums.ClassTypes;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassUncheckedUpdateWithoutProgramsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumClassTypesFieldUpdateOperationsInput | $Enums.ClassTypes;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClassCountOutputType = {
    programs: number;
};
export type ClassCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    programs?: boolean | ClassCountOutputTypeCountProgramsArgs;
};
export type ClassCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassCountOutputTypeSelect<ExtArgs> | null;
};
export type ClassCountOutputTypeCountProgramsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramWhereInput;
};
export type ClassSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    programs?: boolean | Prisma.Class$programsArgs<ExtArgs>;
    _count?: boolean | Prisma.ClassCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["class"]>;
export type ClassSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["class"]>;
export type ClassSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["class"]>;
export type ClassSelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ClassOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "type" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["class"]>;
export type ClassInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    programs?: boolean | Prisma.Class$programsArgs<ExtArgs>;
    _count?: boolean | Prisma.ClassCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClassIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ClassIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ClassPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Class";
    objects: {
        programs: Prisma.$ProgramPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        type: $Enums.ClassTypes;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["class"]>;
    composites: {};
};
export type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClassPayload, S>;
export type ClassCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClassCountAggregateInputType | true;
};
export interface ClassDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Class'];
        meta: {
            name: 'Class';
        };
    };
    findUnique<T extends ClassFindUniqueArgs>(args: Prisma.SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClassFindFirstArgs>(args?: Prisma.SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClassFindManyArgs>(args?: Prisma.SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClassCreateArgs>(args: Prisma.SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClassCreateManyArgs>(args?: Prisma.SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClassDeleteArgs>(args: Prisma.SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClassUpdateArgs>(args: Prisma.SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClassDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClassUpdateManyArgs>(args: Prisma.SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClassUpsertArgs>(args: Prisma.SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma.Prisma__ClassClient<runtime.Types.Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClassCountArgs>(args?: Prisma.Subset<T, ClassCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClassCountAggregateOutputType> : number>;
    aggregate<T extends ClassAggregateArgs>(args: Prisma.Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>;
    groupBy<T extends ClassGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClassGroupByArgs['orderBy'];
    } : {
        orderBy?: ClassGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClassFieldRefs;
}
export interface Prisma__ClassClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    programs<T extends Prisma.Class$programsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Class$programsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClassFieldRefs {
    readonly id: Prisma.FieldRef<"Class", 'String'>;
    readonly name: Prisma.FieldRef<"Class", 'String'>;
    readonly type: Prisma.FieldRef<"Class", 'ClassTypes'>;
    readonly isActive: Prisma.FieldRef<"Class", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Class", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Class", 'DateTime'>;
}
export type ClassFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
    where: Prisma.ClassWhereUniqueInput;
};
export type ClassFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
    where: Prisma.ClassWhereUniqueInput;
};
export type ClassFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
    where?: Prisma.ClassWhereInput;
    orderBy?: Prisma.ClassOrderByWithRelationInput | Prisma.ClassOrderByWithRelationInput[];
    cursor?: Prisma.ClassWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClassScalarFieldEnum | Prisma.ClassScalarFieldEnum[];
};
export type ClassFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
    where?: Prisma.ClassWhereInput;
    orderBy?: Prisma.ClassOrderByWithRelationInput | Prisma.ClassOrderByWithRelationInput[];
    cursor?: Prisma.ClassWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClassScalarFieldEnum | Prisma.ClassScalarFieldEnum[];
};
export type ClassFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
    where?: Prisma.ClassWhereInput;
    orderBy?: Prisma.ClassOrderByWithRelationInput | Prisma.ClassOrderByWithRelationInput[];
    cursor?: Prisma.ClassWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClassScalarFieldEnum | Prisma.ClassScalarFieldEnum[];
};
export type ClassCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClassCreateInput, Prisma.ClassUncheckedCreateInput>;
};
export type ClassCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClassCreateManyInput | Prisma.ClassCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClassCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    data: Prisma.ClassCreateManyInput | Prisma.ClassCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClassUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClassUpdateInput, Prisma.ClassUncheckedUpdateInput>;
    where: Prisma.ClassWhereUniqueInput;
};
export type ClassUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClassUpdateManyMutationInput, Prisma.ClassUncheckedUpdateManyInput>;
    where?: Prisma.ClassWhereInput;
    limit?: number;
};
export type ClassUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClassUpdateManyMutationInput, Prisma.ClassUncheckedUpdateManyInput>;
    where?: Prisma.ClassWhereInput;
    limit?: number;
};
export type ClassUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
    where: Prisma.ClassWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClassCreateInput, Prisma.ClassUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClassUpdateInput, Prisma.ClassUncheckedUpdateInput>;
};
export type ClassDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
    where: Prisma.ClassWhereUniqueInput;
};
export type ClassDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClassWhereInput;
    limit?: number;
};
export type Class$programsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSelect<ExtArgs> | null;
    omit?: Prisma.ProgramOmit<ExtArgs> | null;
    include?: Prisma.ProgramInclude<ExtArgs> | null;
    where?: Prisma.ProgramWhereInput;
    orderBy?: Prisma.ProgramOrderByWithRelationInput | Prisma.ProgramOrderByWithRelationInput[];
    cursor?: Prisma.ProgramWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramScalarFieldEnum | Prisma.ProgramScalarFieldEnum[];
};
export type ClassDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClassSelect<ExtArgs> | null;
    omit?: Prisma.ClassOmit<ExtArgs> | null;
    include?: Prisma.ClassInclude<ExtArgs> | null;
};
export {};
