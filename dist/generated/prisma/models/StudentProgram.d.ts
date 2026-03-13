import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StudentProgramModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentProgramPayload>;
export type AggregateStudentProgram = {
    _count: StudentProgramCountAggregateOutputType | null;
    _min: StudentProgramMinAggregateOutputType | null;
    _max: StudentProgramMaxAggregateOutputType | null;
};
export type StudentProgramMinAggregateOutputType = {
    id: string | null;
    isActive: boolean | null;
    studentId: string | null;
    programId: string | null;
};
export type StudentProgramMaxAggregateOutputType = {
    id: string | null;
    isActive: boolean | null;
    studentId: string | null;
    programId: string | null;
};
export type StudentProgramCountAggregateOutputType = {
    id: number;
    isActive: number;
    studentId: number;
    programId: number;
    _all: number;
};
export type StudentProgramMinAggregateInputType = {
    id?: true;
    isActive?: true;
    studentId?: true;
    programId?: true;
};
export type StudentProgramMaxAggregateInputType = {
    id?: true;
    isActive?: true;
    studentId?: true;
    programId?: true;
};
export type StudentProgramCountAggregateInputType = {
    id?: true;
    isActive?: true;
    studentId?: true;
    programId?: true;
    _all?: true;
};
export type StudentProgramAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentProgramWhereInput;
    orderBy?: Prisma.StudentProgramOrderByWithRelationInput | Prisma.StudentProgramOrderByWithRelationInput[];
    cursor?: Prisma.StudentProgramWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentProgramCountAggregateInputType;
    _min?: StudentProgramMinAggregateInputType;
    _max?: StudentProgramMaxAggregateInputType;
};
export type GetStudentProgramAggregateType<T extends StudentProgramAggregateArgs> = {
    [P in keyof T & keyof AggregateStudentProgram]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudentProgram[P]> : Prisma.GetScalarType<T[P], AggregateStudentProgram[P]>;
};
export type StudentProgramGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentProgramWhereInput;
    orderBy?: Prisma.StudentProgramOrderByWithAggregationInput | Prisma.StudentProgramOrderByWithAggregationInput[];
    by: Prisma.StudentProgramScalarFieldEnum[] | Prisma.StudentProgramScalarFieldEnum;
    having?: Prisma.StudentProgramScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentProgramCountAggregateInputType | true;
    _min?: StudentProgramMinAggregateInputType;
    _max?: StudentProgramMaxAggregateInputType;
};
export type StudentProgramGroupByOutputType = {
    id: string;
    isActive: boolean;
    studentId: string;
    programId: string;
    _count: StudentProgramCountAggregateOutputType | null;
    _min: StudentProgramMinAggregateOutputType | null;
    _max: StudentProgramMaxAggregateOutputType | null;
};
type GetStudentProgramGroupByPayload<T extends StudentProgramGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentProgramGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentProgramGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentProgramGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentProgramGroupByOutputType[P]>;
}>>;
export type StudentProgramWhereInput = {
    AND?: Prisma.StudentProgramWhereInput | Prisma.StudentProgramWhereInput[];
    OR?: Prisma.StudentProgramWhereInput[];
    NOT?: Prisma.StudentProgramWhereInput | Prisma.StudentProgramWhereInput[];
    id?: Prisma.StringFilter<"StudentProgram"> | string;
    isActive?: Prisma.BoolFilter<"StudentProgram"> | boolean;
    studentId?: Prisma.StringFilter<"StudentProgram"> | string;
    programId?: Prisma.StringFilter<"StudentProgram"> | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    program?: Prisma.XOR<Prisma.ProgramScalarRelationFilter, Prisma.ProgramWhereInput>;
    attendances?: Prisma.AttendanceListRelationFilter;
};
export type StudentProgramOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    programId?: Prisma.SortOrder;
    student?: Prisma.StudentOrderByWithRelationInput;
    program?: Prisma.ProgramOrderByWithRelationInput;
    attendances?: Prisma.AttendanceOrderByRelationAggregateInput;
};
export type StudentProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    studentId_programId?: Prisma.StudentProgramStudentIdProgramIdCompoundUniqueInput;
    AND?: Prisma.StudentProgramWhereInput | Prisma.StudentProgramWhereInput[];
    OR?: Prisma.StudentProgramWhereInput[];
    NOT?: Prisma.StudentProgramWhereInput | Prisma.StudentProgramWhereInput[];
    isActive?: Prisma.BoolFilter<"StudentProgram"> | boolean;
    studentId?: Prisma.StringFilter<"StudentProgram"> | string;
    programId?: Prisma.StringFilter<"StudentProgram"> | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    program?: Prisma.XOR<Prisma.ProgramScalarRelationFilter, Prisma.ProgramWhereInput>;
    attendances?: Prisma.AttendanceListRelationFilter;
}, "id" | "studentId_programId">;
export type StudentProgramOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    programId?: Prisma.SortOrder;
    _count?: Prisma.StudentProgramCountOrderByAggregateInput;
    _max?: Prisma.StudentProgramMaxOrderByAggregateInput;
    _min?: Prisma.StudentProgramMinOrderByAggregateInput;
};
export type StudentProgramScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentProgramScalarWhereWithAggregatesInput | Prisma.StudentProgramScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentProgramScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentProgramScalarWhereWithAggregatesInput | Prisma.StudentProgramScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StudentProgram"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"StudentProgram"> | boolean;
    studentId?: Prisma.StringWithAggregatesFilter<"StudentProgram"> | string;
    programId?: Prisma.StringWithAggregatesFilter<"StudentProgram"> | string;
};
export type StudentProgramCreateInput = {
    id?: string;
    isActive?: boolean;
    student: Prisma.StudentCreateNestedOneWithoutStudentProgramsInput;
    program: Prisma.ProgramCreateNestedOneWithoutStudentProgramsInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutStudentProgramInput;
};
export type StudentProgramUncheckedCreateInput = {
    id?: string;
    isActive?: boolean;
    studentId: string;
    programId: string;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutStudentProgramInput;
};
export type StudentProgramUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    student?: Prisma.StudentUpdateOneRequiredWithoutStudentProgramsNestedInput;
    program?: Prisma.ProgramUpdateOneRequiredWithoutStudentProgramsNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutStudentProgramNestedInput;
};
export type StudentProgramUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    programId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutStudentProgramNestedInput;
};
export type StudentProgramCreateManyInput = {
    id?: string;
    isActive?: boolean;
    studentId: string;
    programId: string;
};
export type StudentProgramUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type StudentProgramUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    programId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StudentProgramListRelationFilter = {
    every?: Prisma.StudentProgramWhereInput;
    some?: Prisma.StudentProgramWhereInput;
    none?: Prisma.StudentProgramWhereInput;
};
export type StudentProgramOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StudentProgramScalarRelationFilter = {
    is?: Prisma.StudentProgramWhereInput;
    isNot?: Prisma.StudentProgramWhereInput;
};
export type StudentProgramStudentIdProgramIdCompoundUniqueInput = {
    studentId: string;
    programId: string;
};
export type StudentProgramCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    programId?: Prisma.SortOrder;
};
export type StudentProgramMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    programId?: Prisma.SortOrder;
};
export type StudentProgramMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    programId?: Prisma.SortOrder;
};
export type StudentProgramCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentProgramCreateWithoutStudentInput, Prisma.StudentProgramUncheckedCreateWithoutStudentInput> | Prisma.StudentProgramCreateWithoutStudentInput[] | Prisma.StudentProgramUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentProgramCreateOrConnectWithoutStudentInput | Prisma.StudentProgramCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentProgramCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
};
export type StudentProgramUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentProgramCreateWithoutStudentInput, Prisma.StudentProgramUncheckedCreateWithoutStudentInput> | Prisma.StudentProgramCreateWithoutStudentInput[] | Prisma.StudentProgramUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentProgramCreateOrConnectWithoutStudentInput | Prisma.StudentProgramCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentProgramCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
};
export type StudentProgramUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProgramCreateWithoutStudentInput, Prisma.StudentProgramUncheckedCreateWithoutStudentInput> | Prisma.StudentProgramCreateWithoutStudentInput[] | Prisma.StudentProgramUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentProgramCreateOrConnectWithoutStudentInput | Prisma.StudentProgramCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentProgramUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentProgramUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentProgramCreateManyStudentInputEnvelope;
    set?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
    disconnect?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
    delete?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
    connect?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
    update?: Prisma.StudentProgramUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentProgramUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentProgramUpdateManyWithWhereWithoutStudentInput | Prisma.StudentProgramUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentProgramScalarWhereInput | Prisma.StudentProgramScalarWhereInput[];
};
export type StudentProgramUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProgramCreateWithoutStudentInput, Prisma.StudentProgramUncheckedCreateWithoutStudentInput> | Prisma.StudentProgramCreateWithoutStudentInput[] | Prisma.StudentProgramUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentProgramCreateOrConnectWithoutStudentInput | Prisma.StudentProgramCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentProgramUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentProgramUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentProgramCreateManyStudentInputEnvelope;
    set?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
    disconnect?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
    delete?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
    connect?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
    update?: Prisma.StudentProgramUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentProgramUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentProgramUpdateManyWithWhereWithoutStudentInput | Prisma.StudentProgramUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentProgramScalarWhereInput | Prisma.StudentProgramScalarWhereInput[];
};
export type StudentProgramCreateNestedManyWithoutProgramInput = {
    create?: Prisma.XOR<Prisma.StudentProgramCreateWithoutProgramInput, Prisma.StudentProgramUncheckedCreateWithoutProgramInput> | Prisma.StudentProgramCreateWithoutProgramInput[] | Prisma.StudentProgramUncheckedCreateWithoutProgramInput[];
    connectOrCreate?: Prisma.StudentProgramCreateOrConnectWithoutProgramInput | Prisma.StudentProgramCreateOrConnectWithoutProgramInput[];
    createMany?: Prisma.StudentProgramCreateManyProgramInputEnvelope;
    connect?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
};
export type StudentProgramUncheckedCreateNestedManyWithoutProgramInput = {
    create?: Prisma.XOR<Prisma.StudentProgramCreateWithoutProgramInput, Prisma.StudentProgramUncheckedCreateWithoutProgramInput> | Prisma.StudentProgramCreateWithoutProgramInput[] | Prisma.StudentProgramUncheckedCreateWithoutProgramInput[];
    connectOrCreate?: Prisma.StudentProgramCreateOrConnectWithoutProgramInput | Prisma.StudentProgramCreateOrConnectWithoutProgramInput[];
    createMany?: Prisma.StudentProgramCreateManyProgramInputEnvelope;
    connect?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
};
export type StudentProgramUpdateManyWithoutProgramNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProgramCreateWithoutProgramInput, Prisma.StudentProgramUncheckedCreateWithoutProgramInput> | Prisma.StudentProgramCreateWithoutProgramInput[] | Prisma.StudentProgramUncheckedCreateWithoutProgramInput[];
    connectOrCreate?: Prisma.StudentProgramCreateOrConnectWithoutProgramInput | Prisma.StudentProgramCreateOrConnectWithoutProgramInput[];
    upsert?: Prisma.StudentProgramUpsertWithWhereUniqueWithoutProgramInput | Prisma.StudentProgramUpsertWithWhereUniqueWithoutProgramInput[];
    createMany?: Prisma.StudentProgramCreateManyProgramInputEnvelope;
    set?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
    disconnect?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
    delete?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
    connect?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
    update?: Prisma.StudentProgramUpdateWithWhereUniqueWithoutProgramInput | Prisma.StudentProgramUpdateWithWhereUniqueWithoutProgramInput[];
    updateMany?: Prisma.StudentProgramUpdateManyWithWhereWithoutProgramInput | Prisma.StudentProgramUpdateManyWithWhereWithoutProgramInput[];
    deleteMany?: Prisma.StudentProgramScalarWhereInput | Prisma.StudentProgramScalarWhereInput[];
};
export type StudentProgramUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProgramCreateWithoutProgramInput, Prisma.StudentProgramUncheckedCreateWithoutProgramInput> | Prisma.StudentProgramCreateWithoutProgramInput[] | Prisma.StudentProgramUncheckedCreateWithoutProgramInput[];
    connectOrCreate?: Prisma.StudentProgramCreateOrConnectWithoutProgramInput | Prisma.StudentProgramCreateOrConnectWithoutProgramInput[];
    upsert?: Prisma.StudentProgramUpsertWithWhereUniqueWithoutProgramInput | Prisma.StudentProgramUpsertWithWhereUniqueWithoutProgramInput[];
    createMany?: Prisma.StudentProgramCreateManyProgramInputEnvelope;
    set?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
    disconnect?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
    delete?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
    connect?: Prisma.StudentProgramWhereUniqueInput | Prisma.StudentProgramWhereUniqueInput[];
    update?: Prisma.StudentProgramUpdateWithWhereUniqueWithoutProgramInput | Prisma.StudentProgramUpdateWithWhereUniqueWithoutProgramInput[];
    updateMany?: Prisma.StudentProgramUpdateManyWithWhereWithoutProgramInput | Prisma.StudentProgramUpdateManyWithWhereWithoutProgramInput[];
    deleteMany?: Prisma.StudentProgramScalarWhereInput | Prisma.StudentProgramScalarWhereInput[];
};
export type StudentProgramCreateNestedOneWithoutAttendancesInput = {
    create?: Prisma.XOR<Prisma.StudentProgramCreateWithoutAttendancesInput, Prisma.StudentProgramUncheckedCreateWithoutAttendancesInput>;
    connectOrCreate?: Prisma.StudentProgramCreateOrConnectWithoutAttendancesInput;
    connect?: Prisma.StudentProgramWhereUniqueInput;
};
export type StudentProgramUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: Prisma.XOR<Prisma.StudentProgramCreateWithoutAttendancesInput, Prisma.StudentProgramUncheckedCreateWithoutAttendancesInput>;
    connectOrCreate?: Prisma.StudentProgramCreateOrConnectWithoutAttendancesInput;
    upsert?: Prisma.StudentProgramUpsertWithoutAttendancesInput;
    connect?: Prisma.StudentProgramWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentProgramUpdateToOneWithWhereWithoutAttendancesInput, Prisma.StudentProgramUpdateWithoutAttendancesInput>, Prisma.StudentProgramUncheckedUpdateWithoutAttendancesInput>;
};
export type StudentProgramCreateWithoutStudentInput = {
    id?: string;
    isActive?: boolean;
    program: Prisma.ProgramCreateNestedOneWithoutStudentProgramsInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutStudentProgramInput;
};
export type StudentProgramUncheckedCreateWithoutStudentInput = {
    id?: string;
    isActive?: boolean;
    programId: string;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutStudentProgramInput;
};
export type StudentProgramCreateOrConnectWithoutStudentInput = {
    where: Prisma.StudentProgramWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProgramCreateWithoutStudentInput, Prisma.StudentProgramUncheckedCreateWithoutStudentInput>;
};
export type StudentProgramCreateManyStudentInputEnvelope = {
    data: Prisma.StudentProgramCreateManyStudentInput | Prisma.StudentProgramCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type StudentProgramUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentProgramWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentProgramUpdateWithoutStudentInput, Prisma.StudentProgramUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.StudentProgramCreateWithoutStudentInput, Prisma.StudentProgramUncheckedCreateWithoutStudentInput>;
};
export type StudentProgramUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentProgramWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentProgramUpdateWithoutStudentInput, Prisma.StudentProgramUncheckedUpdateWithoutStudentInput>;
};
export type StudentProgramUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.StudentProgramScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentProgramUpdateManyMutationInput, Prisma.StudentProgramUncheckedUpdateManyWithoutStudentInput>;
};
export type StudentProgramScalarWhereInput = {
    AND?: Prisma.StudentProgramScalarWhereInput | Prisma.StudentProgramScalarWhereInput[];
    OR?: Prisma.StudentProgramScalarWhereInput[];
    NOT?: Prisma.StudentProgramScalarWhereInput | Prisma.StudentProgramScalarWhereInput[];
    id?: Prisma.StringFilter<"StudentProgram"> | string;
    isActive?: Prisma.BoolFilter<"StudentProgram"> | boolean;
    studentId?: Prisma.StringFilter<"StudentProgram"> | string;
    programId?: Prisma.StringFilter<"StudentProgram"> | string;
};
export type StudentProgramCreateWithoutProgramInput = {
    id?: string;
    isActive?: boolean;
    student: Prisma.StudentCreateNestedOneWithoutStudentProgramsInput;
    attendances?: Prisma.AttendanceCreateNestedManyWithoutStudentProgramInput;
};
export type StudentProgramUncheckedCreateWithoutProgramInput = {
    id?: string;
    isActive?: boolean;
    studentId: string;
    attendances?: Prisma.AttendanceUncheckedCreateNestedManyWithoutStudentProgramInput;
};
export type StudentProgramCreateOrConnectWithoutProgramInput = {
    where: Prisma.StudentProgramWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProgramCreateWithoutProgramInput, Prisma.StudentProgramUncheckedCreateWithoutProgramInput>;
};
export type StudentProgramCreateManyProgramInputEnvelope = {
    data: Prisma.StudentProgramCreateManyProgramInput | Prisma.StudentProgramCreateManyProgramInput[];
    skipDuplicates?: boolean;
};
export type StudentProgramUpsertWithWhereUniqueWithoutProgramInput = {
    where: Prisma.StudentProgramWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentProgramUpdateWithoutProgramInput, Prisma.StudentProgramUncheckedUpdateWithoutProgramInput>;
    create: Prisma.XOR<Prisma.StudentProgramCreateWithoutProgramInput, Prisma.StudentProgramUncheckedCreateWithoutProgramInput>;
};
export type StudentProgramUpdateWithWhereUniqueWithoutProgramInput = {
    where: Prisma.StudentProgramWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentProgramUpdateWithoutProgramInput, Prisma.StudentProgramUncheckedUpdateWithoutProgramInput>;
};
export type StudentProgramUpdateManyWithWhereWithoutProgramInput = {
    where: Prisma.StudentProgramScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentProgramUpdateManyMutationInput, Prisma.StudentProgramUncheckedUpdateManyWithoutProgramInput>;
};
export type StudentProgramCreateWithoutAttendancesInput = {
    id?: string;
    isActive?: boolean;
    student: Prisma.StudentCreateNestedOneWithoutStudentProgramsInput;
    program: Prisma.ProgramCreateNestedOneWithoutStudentProgramsInput;
};
export type StudentProgramUncheckedCreateWithoutAttendancesInput = {
    id?: string;
    isActive?: boolean;
    studentId: string;
    programId: string;
};
export type StudentProgramCreateOrConnectWithoutAttendancesInput = {
    where: Prisma.StudentProgramWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProgramCreateWithoutAttendancesInput, Prisma.StudentProgramUncheckedCreateWithoutAttendancesInput>;
};
export type StudentProgramUpsertWithoutAttendancesInput = {
    update: Prisma.XOR<Prisma.StudentProgramUpdateWithoutAttendancesInput, Prisma.StudentProgramUncheckedUpdateWithoutAttendancesInput>;
    create: Prisma.XOR<Prisma.StudentProgramCreateWithoutAttendancesInput, Prisma.StudentProgramUncheckedCreateWithoutAttendancesInput>;
    where?: Prisma.StudentProgramWhereInput;
};
export type StudentProgramUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: Prisma.StudentProgramWhereInput;
    data: Prisma.XOR<Prisma.StudentProgramUpdateWithoutAttendancesInput, Prisma.StudentProgramUncheckedUpdateWithoutAttendancesInput>;
};
export type StudentProgramUpdateWithoutAttendancesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    student?: Prisma.StudentUpdateOneRequiredWithoutStudentProgramsNestedInput;
    program?: Prisma.ProgramUpdateOneRequiredWithoutStudentProgramsNestedInput;
};
export type StudentProgramUncheckedUpdateWithoutAttendancesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    programId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StudentProgramCreateManyStudentInput = {
    id?: string;
    isActive?: boolean;
    programId: string;
};
export type StudentProgramUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    program?: Prisma.ProgramUpdateOneRequiredWithoutStudentProgramsNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutStudentProgramNestedInput;
};
export type StudentProgramUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    programId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutStudentProgramNestedInput;
};
export type StudentProgramUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    programId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StudentProgramCreateManyProgramInput = {
    id?: string;
    isActive?: boolean;
    studentId: string;
};
export type StudentProgramUpdateWithoutProgramInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    student?: Prisma.StudentUpdateOneRequiredWithoutStudentProgramsNestedInput;
    attendances?: Prisma.AttendanceUpdateManyWithoutStudentProgramNestedInput;
};
export type StudentProgramUncheckedUpdateWithoutProgramInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    attendances?: Prisma.AttendanceUncheckedUpdateManyWithoutStudentProgramNestedInput;
};
export type StudentProgramUncheckedUpdateManyWithoutProgramInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StudentProgramCountOutputType = {
    attendances: number;
};
export type StudentProgramCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attendances?: boolean | StudentProgramCountOutputTypeCountAttendancesArgs;
};
export type StudentProgramCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProgramCountOutputTypeSelect<ExtArgs> | null;
};
export type StudentProgramCountOutputTypeCountAttendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceWhereInput;
};
export type StudentProgramSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    isActive?: boolean;
    studentId?: boolean;
    programId?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
    attendances?: boolean | Prisma.StudentProgram$attendancesArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentProgramCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentProgram"]>;
export type StudentProgramSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    isActive?: boolean;
    studentId?: boolean;
    programId?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentProgram"]>;
export type StudentProgramSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    isActive?: boolean;
    studentId?: boolean;
    programId?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentProgram"]>;
export type StudentProgramSelectScalar = {
    id?: boolean;
    isActive?: boolean;
    studentId?: boolean;
    programId?: boolean;
};
export type StudentProgramOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "isActive" | "studentId" | "programId", ExtArgs["result"]["studentProgram"]>;
export type StudentProgramInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
    attendances?: boolean | Prisma.StudentProgram$attendancesArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentProgramCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StudentProgramIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
};
export type StudentProgramIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
};
export type $StudentProgramPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StudentProgram";
    objects: {
        student: Prisma.$StudentPayload<ExtArgs>;
        program: Prisma.$ProgramPayload<ExtArgs>;
        attendances: Prisma.$AttendancePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        isActive: boolean;
        studentId: string;
        programId: string;
    }, ExtArgs["result"]["studentProgram"]>;
    composites: {};
};
export type StudentProgramGetPayload<S extends boolean | null | undefined | StudentProgramDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentProgramPayload, S>;
export type StudentProgramCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentProgramCountAggregateInputType | true;
};
export interface StudentProgramDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StudentProgram'];
        meta: {
            name: 'StudentProgram';
        };
    };
    findUnique<T extends StudentProgramFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentProgramFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentProgramClient<runtime.Types.Result.GetResult<Prisma.$StudentProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentProgramFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentProgramClient<runtime.Types.Result.GetResult<Prisma.$StudentProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentProgramFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentProgramFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentProgramClient<runtime.Types.Result.GetResult<Prisma.$StudentProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentProgramFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentProgramClient<runtime.Types.Result.GetResult<Prisma.$StudentProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentProgramFindManyArgs>(args?: Prisma.SelectSubset<T, StudentProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentProgramCreateArgs>(args: Prisma.SelectSubset<T, StudentProgramCreateArgs<ExtArgs>>): Prisma.Prisma__StudentProgramClient<runtime.Types.Result.GetResult<Prisma.$StudentProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentProgramCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StudentProgramCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentProgramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StudentProgramDeleteArgs>(args: Prisma.SelectSubset<T, StudentProgramDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentProgramClient<runtime.Types.Result.GetResult<Prisma.$StudentProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentProgramUpdateArgs>(args: Prisma.SelectSubset<T, StudentProgramUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentProgramClient<runtime.Types.Result.GetResult<Prisma.$StudentProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentProgramDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentProgramUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StudentProgramUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentProgramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentProgramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StudentProgramUpsertArgs>(args: Prisma.SelectSubset<T, StudentProgramUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentProgramClient<runtime.Types.Result.GetResult<Prisma.$StudentProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentProgramCountArgs>(args?: Prisma.Subset<T, StudentProgramCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentProgramCountAggregateOutputType> : number>;
    aggregate<T extends StudentProgramAggregateArgs>(args: Prisma.Subset<T, StudentProgramAggregateArgs>): Prisma.PrismaPromise<GetStudentProgramAggregateType<T>>;
    groupBy<T extends StudentProgramGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentProgramGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentProgramGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentProgramFieldRefs;
}
export interface Prisma__StudentProgramClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    program<T extends Prisma.ProgramDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProgramDefaultArgs<ExtArgs>>): Prisma.Prisma__ProgramClient<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    attendances<T extends Prisma.StudentProgram$attendancesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentProgram$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentProgramFieldRefs {
    readonly id: Prisma.FieldRef<"StudentProgram", 'String'>;
    readonly isActive: Prisma.FieldRef<"StudentProgram", 'Boolean'>;
    readonly studentId: Prisma.FieldRef<"StudentProgram", 'String'>;
    readonly programId: Prisma.FieldRef<"StudentProgram", 'String'>;
}
export type StudentProgramFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProgramSelect<ExtArgs> | null;
    omit?: Prisma.StudentProgramOmit<ExtArgs> | null;
    include?: Prisma.StudentProgramInclude<ExtArgs> | null;
    where: Prisma.StudentProgramWhereUniqueInput;
};
export type StudentProgramFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProgramSelect<ExtArgs> | null;
    omit?: Prisma.StudentProgramOmit<ExtArgs> | null;
    include?: Prisma.StudentProgramInclude<ExtArgs> | null;
    where: Prisma.StudentProgramWhereUniqueInput;
};
export type StudentProgramFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProgramSelect<ExtArgs> | null;
    omit?: Prisma.StudentProgramOmit<ExtArgs> | null;
    include?: Prisma.StudentProgramInclude<ExtArgs> | null;
    where?: Prisma.StudentProgramWhereInput;
    orderBy?: Prisma.StudentProgramOrderByWithRelationInput | Prisma.StudentProgramOrderByWithRelationInput[];
    cursor?: Prisma.StudentProgramWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentProgramScalarFieldEnum | Prisma.StudentProgramScalarFieldEnum[];
};
export type StudentProgramFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProgramSelect<ExtArgs> | null;
    omit?: Prisma.StudentProgramOmit<ExtArgs> | null;
    include?: Prisma.StudentProgramInclude<ExtArgs> | null;
    where?: Prisma.StudentProgramWhereInput;
    orderBy?: Prisma.StudentProgramOrderByWithRelationInput | Prisma.StudentProgramOrderByWithRelationInput[];
    cursor?: Prisma.StudentProgramWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentProgramScalarFieldEnum | Prisma.StudentProgramScalarFieldEnum[];
};
export type StudentProgramFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProgramSelect<ExtArgs> | null;
    omit?: Prisma.StudentProgramOmit<ExtArgs> | null;
    include?: Prisma.StudentProgramInclude<ExtArgs> | null;
    where?: Prisma.StudentProgramWhereInput;
    orderBy?: Prisma.StudentProgramOrderByWithRelationInput | Prisma.StudentProgramOrderByWithRelationInput[];
    cursor?: Prisma.StudentProgramWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentProgramScalarFieldEnum | Prisma.StudentProgramScalarFieldEnum[];
};
export type StudentProgramCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProgramSelect<ExtArgs> | null;
    omit?: Prisma.StudentProgramOmit<ExtArgs> | null;
    include?: Prisma.StudentProgramInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentProgramCreateInput, Prisma.StudentProgramUncheckedCreateInput>;
};
export type StudentProgramCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentProgramCreateManyInput | Prisma.StudentProgramCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentProgramCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProgramSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentProgramOmit<ExtArgs> | null;
    data: Prisma.StudentProgramCreateManyInput | Prisma.StudentProgramCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StudentProgramIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StudentProgramUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProgramSelect<ExtArgs> | null;
    omit?: Prisma.StudentProgramOmit<ExtArgs> | null;
    include?: Prisma.StudentProgramInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentProgramUpdateInput, Prisma.StudentProgramUncheckedUpdateInput>;
    where: Prisma.StudentProgramWhereUniqueInput;
};
export type StudentProgramUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentProgramUpdateManyMutationInput, Prisma.StudentProgramUncheckedUpdateManyInput>;
    where?: Prisma.StudentProgramWhereInput;
    limit?: number;
};
export type StudentProgramUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProgramSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentProgramOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentProgramUpdateManyMutationInput, Prisma.StudentProgramUncheckedUpdateManyInput>;
    where?: Prisma.StudentProgramWhereInput;
    limit?: number;
    include?: Prisma.StudentProgramIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StudentProgramUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProgramSelect<ExtArgs> | null;
    omit?: Prisma.StudentProgramOmit<ExtArgs> | null;
    include?: Prisma.StudentProgramInclude<ExtArgs> | null;
    where: Prisma.StudentProgramWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentProgramCreateInput, Prisma.StudentProgramUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentProgramUpdateInput, Prisma.StudentProgramUncheckedUpdateInput>;
};
export type StudentProgramDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProgramSelect<ExtArgs> | null;
    omit?: Prisma.StudentProgramOmit<ExtArgs> | null;
    include?: Prisma.StudentProgramInclude<ExtArgs> | null;
    where: Prisma.StudentProgramWhereUniqueInput;
};
export type StudentProgramDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentProgramWhereInput;
    limit?: number;
};
export type StudentProgram$attendancesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentProgramDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentProgramSelect<ExtArgs> | null;
    omit?: Prisma.StudentProgramOmit<ExtArgs> | null;
    include?: Prisma.StudentProgramInclude<ExtArgs> | null;
};
export {};
