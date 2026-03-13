import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AttendanceModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendancePayload>;
export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null;
    _min: AttendanceMinAggregateOutputType | null;
    _max: AttendanceMaxAggregateOutputType | null;
};
export type AttendanceMinAggregateOutputType = {
    id: string | null;
    attended: boolean | null;
    note: string | null;
    studentProgramId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AttendanceMaxAggregateOutputType = {
    id: string | null;
    attended: boolean | null;
    note: string | null;
    studentProgramId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AttendanceCountAggregateOutputType = {
    id: number;
    attended: number;
    note: number;
    studentProgramId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AttendanceMinAggregateInputType = {
    id?: true;
    attended?: true;
    note?: true;
    studentProgramId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AttendanceMaxAggregateInputType = {
    id?: true;
    attended?: true;
    note?: true;
    studentProgramId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AttendanceCountAggregateInputType = {
    id?: true;
    attended?: true;
    note?: true;
    studentProgramId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AttendanceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceWhereInput;
    orderBy?: Prisma.AttendanceOrderByWithRelationInput | Prisma.AttendanceOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttendanceCountAggregateInputType;
    _min?: AttendanceMinAggregateInputType;
    _max?: AttendanceMaxAggregateInputType;
};
export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendance[P]> : Prisma.GetScalarType<T[P], AggregateAttendance[P]>;
};
export type AttendanceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceWhereInput;
    orderBy?: Prisma.AttendanceOrderByWithAggregationInput | Prisma.AttendanceOrderByWithAggregationInput[];
    by: Prisma.AttendanceScalarFieldEnum[] | Prisma.AttendanceScalarFieldEnum;
    having?: Prisma.AttendanceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceCountAggregateInputType | true;
    _min?: AttendanceMinAggregateInputType;
    _max?: AttendanceMaxAggregateInputType;
};
export type AttendanceGroupByOutputType = {
    id: string;
    attended: boolean;
    note: string | null;
    studentProgramId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: AttendanceCountAggregateOutputType | null;
    _min: AttendanceMinAggregateOutputType | null;
    _max: AttendanceMaxAggregateOutputType | null;
};
type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendanceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendanceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendanceGroupByOutputType[P]>;
}>>;
export type AttendanceWhereInput = {
    AND?: Prisma.AttendanceWhereInput | Prisma.AttendanceWhereInput[];
    OR?: Prisma.AttendanceWhereInput[];
    NOT?: Prisma.AttendanceWhereInput | Prisma.AttendanceWhereInput[];
    id?: Prisma.StringFilter<"Attendance"> | string;
    attended?: Prisma.BoolFilter<"Attendance"> | boolean;
    note?: Prisma.StringNullableFilter<"Attendance"> | string | null;
    studentProgramId?: Prisma.StringFilter<"Attendance"> | string;
    createdAt?: Prisma.DateTimeFilter<"Attendance"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Attendance"> | Date | string;
    studentProgram?: Prisma.XOR<Prisma.StudentProgramScalarRelationFilter, Prisma.StudentProgramWhereInput>;
};
export type AttendanceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    attended?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    studentProgramId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    studentProgram?: Prisma.StudentProgramOrderByWithRelationInput;
};
export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AttendanceWhereInput | Prisma.AttendanceWhereInput[];
    OR?: Prisma.AttendanceWhereInput[];
    NOT?: Prisma.AttendanceWhereInput | Prisma.AttendanceWhereInput[];
    attended?: Prisma.BoolFilter<"Attendance"> | boolean;
    note?: Prisma.StringNullableFilter<"Attendance"> | string | null;
    studentProgramId?: Prisma.StringFilter<"Attendance"> | string;
    createdAt?: Prisma.DateTimeFilter<"Attendance"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Attendance"> | Date | string;
    studentProgram?: Prisma.XOR<Prisma.StudentProgramScalarRelationFilter, Prisma.StudentProgramWhereInput>;
}, "id">;
export type AttendanceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    attended?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    studentProgramId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AttendanceCountOrderByAggregateInput;
    _max?: Prisma.AttendanceMaxOrderByAggregateInput;
    _min?: Prisma.AttendanceMinOrderByAggregateInput;
};
export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendanceScalarWhereWithAggregatesInput | Prisma.AttendanceScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendanceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendanceScalarWhereWithAggregatesInput | Prisma.AttendanceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Attendance"> | string;
    attended?: Prisma.BoolWithAggregatesFilter<"Attendance"> | boolean;
    note?: Prisma.StringNullableWithAggregatesFilter<"Attendance"> | string | null;
    studentProgramId?: Prisma.StringWithAggregatesFilter<"Attendance"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Attendance"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Attendance"> | Date | string;
};
export type AttendanceCreateInput = {
    id?: string;
    attended: boolean;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentProgram: Prisma.StudentProgramCreateNestedOneWithoutAttendancesInput;
};
export type AttendanceUncheckedCreateInput = {
    id?: string;
    attended: boolean;
    note?: string | null;
    studentProgramId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentProgram?: Prisma.StudentProgramUpdateOneRequiredWithoutAttendancesNestedInput;
};
export type AttendanceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentProgramId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCreateManyInput = {
    id?: string;
    attended: boolean;
    note?: string | null;
    studentProgramId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentProgramId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attended?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    studentProgramId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AttendanceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attended?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    studentProgramId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AttendanceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    attended?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    studentProgramId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AttendanceListRelationFilter = {
    every?: Prisma.AttendanceWhereInput;
    some?: Prisma.AttendanceWhereInput;
    none?: Prisma.AttendanceWhereInput;
};
export type AttendanceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttendanceCreateNestedManyWithoutStudentProgramInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutStudentProgramInput, Prisma.AttendanceUncheckedCreateWithoutStudentProgramInput> | Prisma.AttendanceCreateWithoutStudentProgramInput[] | Prisma.AttendanceUncheckedCreateWithoutStudentProgramInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutStudentProgramInput | Prisma.AttendanceCreateOrConnectWithoutStudentProgramInput[];
    createMany?: Prisma.AttendanceCreateManyStudentProgramInputEnvelope;
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
};
export type AttendanceUncheckedCreateNestedManyWithoutStudentProgramInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutStudentProgramInput, Prisma.AttendanceUncheckedCreateWithoutStudentProgramInput> | Prisma.AttendanceCreateWithoutStudentProgramInput[] | Prisma.AttendanceUncheckedCreateWithoutStudentProgramInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutStudentProgramInput | Prisma.AttendanceCreateOrConnectWithoutStudentProgramInput[];
    createMany?: Prisma.AttendanceCreateManyStudentProgramInputEnvelope;
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
};
export type AttendanceUpdateManyWithoutStudentProgramNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutStudentProgramInput, Prisma.AttendanceUncheckedCreateWithoutStudentProgramInput> | Prisma.AttendanceCreateWithoutStudentProgramInput[] | Prisma.AttendanceUncheckedCreateWithoutStudentProgramInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutStudentProgramInput | Prisma.AttendanceCreateOrConnectWithoutStudentProgramInput[];
    upsert?: Prisma.AttendanceUpsertWithWhereUniqueWithoutStudentProgramInput | Prisma.AttendanceUpsertWithWhereUniqueWithoutStudentProgramInput[];
    createMany?: Prisma.AttendanceCreateManyStudentProgramInputEnvelope;
    set?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    disconnect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    delete?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    update?: Prisma.AttendanceUpdateWithWhereUniqueWithoutStudentProgramInput | Prisma.AttendanceUpdateWithWhereUniqueWithoutStudentProgramInput[];
    updateMany?: Prisma.AttendanceUpdateManyWithWhereWithoutStudentProgramInput | Prisma.AttendanceUpdateManyWithWhereWithoutStudentProgramInput[];
    deleteMany?: Prisma.AttendanceScalarWhereInput | Prisma.AttendanceScalarWhereInput[];
};
export type AttendanceUncheckedUpdateManyWithoutStudentProgramNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceCreateWithoutStudentProgramInput, Prisma.AttendanceUncheckedCreateWithoutStudentProgramInput> | Prisma.AttendanceCreateWithoutStudentProgramInput[] | Prisma.AttendanceUncheckedCreateWithoutStudentProgramInput[];
    connectOrCreate?: Prisma.AttendanceCreateOrConnectWithoutStudentProgramInput | Prisma.AttendanceCreateOrConnectWithoutStudentProgramInput[];
    upsert?: Prisma.AttendanceUpsertWithWhereUniqueWithoutStudentProgramInput | Prisma.AttendanceUpsertWithWhereUniqueWithoutStudentProgramInput[];
    createMany?: Prisma.AttendanceCreateManyStudentProgramInputEnvelope;
    set?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    disconnect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    delete?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    connect?: Prisma.AttendanceWhereUniqueInput | Prisma.AttendanceWhereUniqueInput[];
    update?: Prisma.AttendanceUpdateWithWhereUniqueWithoutStudentProgramInput | Prisma.AttendanceUpdateWithWhereUniqueWithoutStudentProgramInput[];
    updateMany?: Prisma.AttendanceUpdateManyWithWhereWithoutStudentProgramInput | Prisma.AttendanceUpdateManyWithWhereWithoutStudentProgramInput[];
    deleteMany?: Prisma.AttendanceScalarWhereInput | Prisma.AttendanceScalarWhereInput[];
};
export type AttendanceCreateWithoutStudentProgramInput = {
    id?: string;
    attended: boolean;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceUncheckedCreateWithoutStudentProgramInput = {
    id?: string;
    attended: boolean;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceCreateOrConnectWithoutStudentProgramInput = {
    where: Prisma.AttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceCreateWithoutStudentProgramInput, Prisma.AttendanceUncheckedCreateWithoutStudentProgramInput>;
};
export type AttendanceCreateManyStudentProgramInputEnvelope = {
    data: Prisma.AttendanceCreateManyStudentProgramInput | Prisma.AttendanceCreateManyStudentProgramInput[];
    skipDuplicates?: boolean;
};
export type AttendanceUpsertWithWhereUniqueWithoutStudentProgramInput = {
    where: Prisma.AttendanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceUpdateWithoutStudentProgramInput, Prisma.AttendanceUncheckedUpdateWithoutStudentProgramInput>;
    create: Prisma.XOR<Prisma.AttendanceCreateWithoutStudentProgramInput, Prisma.AttendanceUncheckedCreateWithoutStudentProgramInput>;
};
export type AttendanceUpdateWithWhereUniqueWithoutStudentProgramInput = {
    where: Prisma.AttendanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceUpdateWithoutStudentProgramInput, Prisma.AttendanceUncheckedUpdateWithoutStudentProgramInput>;
};
export type AttendanceUpdateManyWithWhereWithoutStudentProgramInput = {
    where: Prisma.AttendanceScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceUpdateManyMutationInput, Prisma.AttendanceUncheckedUpdateManyWithoutStudentProgramInput>;
};
export type AttendanceScalarWhereInput = {
    AND?: Prisma.AttendanceScalarWhereInput | Prisma.AttendanceScalarWhereInput[];
    OR?: Prisma.AttendanceScalarWhereInput[];
    NOT?: Prisma.AttendanceScalarWhereInput | Prisma.AttendanceScalarWhereInput[];
    id?: Prisma.StringFilter<"Attendance"> | string;
    attended?: Prisma.BoolFilter<"Attendance"> | boolean;
    note?: Prisma.StringNullableFilter<"Attendance"> | string | null;
    studentProgramId?: Prisma.StringFilter<"Attendance"> | string;
    createdAt?: Prisma.DateTimeFilter<"Attendance"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Attendance"> | Date | string;
};
export type AttendanceCreateManyStudentProgramInput = {
    id?: string;
    attended: boolean;
    note?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceUpdateWithoutStudentProgramInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceUncheckedUpdateWithoutStudentProgramInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceUncheckedUpdateManyWithoutStudentProgramInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attended?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attended?: boolean;
    note?: boolean;
    studentProgramId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    studentProgram?: boolean | Prisma.StudentProgramDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendance"]>;
export type AttendanceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attended?: boolean;
    note?: boolean;
    studentProgramId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    studentProgram?: boolean | Prisma.StudentProgramDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendance"]>;
export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    attended?: boolean;
    note?: boolean;
    studentProgramId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    studentProgram?: boolean | Prisma.StudentProgramDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendance"]>;
export type AttendanceSelectScalar = {
    id?: boolean;
    attended?: boolean;
    note?: boolean;
    studentProgramId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AttendanceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "attended" | "note" | "studentProgramId" | "createdAt" | "updatedAt", ExtArgs["result"]["attendance"]>;
export type AttendanceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    studentProgram?: boolean | Prisma.StudentProgramDefaultArgs<ExtArgs>;
};
export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    studentProgram?: boolean | Prisma.StudentProgramDefaultArgs<ExtArgs>;
};
export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    studentProgram?: boolean | Prisma.StudentProgramDefaultArgs<ExtArgs>;
};
export type $AttendancePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Attendance";
    objects: {
        studentProgram: Prisma.$StudentProgramPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        attended: boolean;
        note: string | null;
        studentProgramId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["attendance"]>;
    composites: {};
};
export type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendancePayload, S>;
export type AttendanceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendanceCountAggregateInputType | true;
};
export interface AttendanceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Attendance'];
        meta: {
            name: 'Attendance';
        };
    };
    findUnique<T extends AttendanceFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttendanceFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttendanceFindManyArgs>(args?: Prisma.SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttendanceCreateArgs>(args: Prisma.SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttendanceCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttendanceDeleteArgs>(args: Prisma.SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttendanceUpdateArgs>(args: Prisma.SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttendanceUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttendanceUpsertArgs>(args: Prisma.SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendanceClient<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttendanceCountArgs>(args?: Prisma.Subset<T, AttendanceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendanceCountAggregateOutputType> : number>;
    aggregate<T extends AttendanceAggregateArgs>(args: Prisma.Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>;
    groupBy<T extends AttendanceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendanceGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendanceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttendanceFieldRefs;
}
export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    studentProgram<T extends Prisma.StudentProgramDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProgramDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentProgramClient<runtime.Types.Result.GetResult<Prisma.$StudentProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttendanceFieldRefs {
    readonly id: Prisma.FieldRef<"Attendance", 'String'>;
    readonly attended: Prisma.FieldRef<"Attendance", 'Boolean'>;
    readonly note: Prisma.FieldRef<"Attendance", 'String'>;
    readonly studentProgramId: Prisma.FieldRef<"Attendance", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Attendance", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Attendance", 'DateTime'>;
}
export type AttendanceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    where: Prisma.AttendanceWhereUniqueInput;
};
export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    where: Prisma.AttendanceWhereUniqueInput;
};
export type AttendanceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    where?: Prisma.AttendanceWhereInput;
    orderBy?: Prisma.AttendanceOrderByWithRelationInput | Prisma.AttendanceOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceScalarFieldEnum | Prisma.AttendanceScalarFieldEnum[];
};
export type AttendanceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    where?: Prisma.AttendanceWhereInput;
    orderBy?: Prisma.AttendanceOrderByWithRelationInput | Prisma.AttendanceOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceScalarFieldEnum | Prisma.AttendanceScalarFieldEnum[];
};
export type AttendanceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    where?: Prisma.AttendanceWhereInput;
    orderBy?: Prisma.AttendanceOrderByWithRelationInput | Prisma.AttendanceOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceScalarFieldEnum | Prisma.AttendanceScalarFieldEnum[];
};
export type AttendanceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceCreateInput, Prisma.AttendanceUncheckedCreateInput>;
};
export type AttendanceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttendanceCreateManyInput | Prisma.AttendanceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttendanceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    data: Prisma.AttendanceCreateManyInput | Prisma.AttendanceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AttendanceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AttendanceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceUpdateInput, Prisma.AttendanceUncheckedUpdateInput>;
    where: Prisma.AttendanceWhereUniqueInput;
};
export type AttendanceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttendanceUpdateManyMutationInput, Prisma.AttendanceUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceWhereInput;
    limit?: number;
};
export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceUpdateManyMutationInput, Prisma.AttendanceUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceWhereInput;
    limit?: number;
    include?: Prisma.AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AttendanceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    where: Prisma.AttendanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceCreateInput, Prisma.AttendanceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttendanceUpdateInput, Prisma.AttendanceUncheckedUpdateInput>;
};
export type AttendanceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
    where: Prisma.AttendanceWhereUniqueInput;
};
export type AttendanceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceWhereInput;
    limit?: number;
};
export type AttendanceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceOmit<ExtArgs> | null;
    include?: Prisma.AttendanceInclude<ExtArgs> | null;
};
export {};
