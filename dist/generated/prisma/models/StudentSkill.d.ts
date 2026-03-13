import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StudentSkillModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentSkillPayload>;
export type AggregateStudentSkill = {
    _count: StudentSkillCountAggregateOutputType | null;
    _min: StudentSkillMinAggregateOutputType | null;
    _max: StudentSkillMaxAggregateOutputType | null;
};
export type StudentSkillMinAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    skillId: string | null;
    status: $Enums.SkillStatus | null;
    achievedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StudentSkillMaxAggregateOutputType = {
    id: string | null;
    studentId: string | null;
    skillId: string | null;
    status: $Enums.SkillStatus | null;
    achievedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StudentSkillCountAggregateOutputType = {
    id: number;
    studentId: number;
    skillId: number;
    status: number;
    achievedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StudentSkillMinAggregateInputType = {
    id?: true;
    studentId?: true;
    skillId?: true;
    status?: true;
    achievedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StudentSkillMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    skillId?: true;
    status?: true;
    achievedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StudentSkillCountAggregateInputType = {
    id?: true;
    studentId?: true;
    skillId?: true;
    status?: true;
    achievedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StudentSkillAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentSkillWhereInput;
    orderBy?: Prisma.StudentSkillOrderByWithRelationInput | Prisma.StudentSkillOrderByWithRelationInput[];
    cursor?: Prisma.StudentSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentSkillCountAggregateInputType;
    _min?: StudentSkillMinAggregateInputType;
    _max?: StudentSkillMaxAggregateInputType;
};
export type GetStudentSkillAggregateType<T extends StudentSkillAggregateArgs> = {
    [P in keyof T & keyof AggregateStudentSkill]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudentSkill[P]> : Prisma.GetScalarType<T[P], AggregateStudentSkill[P]>;
};
export type StudentSkillGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentSkillWhereInput;
    orderBy?: Prisma.StudentSkillOrderByWithAggregationInput | Prisma.StudentSkillOrderByWithAggregationInput[];
    by: Prisma.StudentSkillScalarFieldEnum[] | Prisma.StudentSkillScalarFieldEnum;
    having?: Prisma.StudentSkillScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentSkillCountAggregateInputType | true;
    _min?: StudentSkillMinAggregateInputType;
    _max?: StudentSkillMaxAggregateInputType;
};
export type StudentSkillGroupByOutputType = {
    id: string;
    studentId: string;
    skillId: string;
    status: $Enums.SkillStatus;
    achievedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: StudentSkillCountAggregateOutputType | null;
    _min: StudentSkillMinAggregateOutputType | null;
    _max: StudentSkillMaxAggregateOutputType | null;
};
type GetStudentSkillGroupByPayload<T extends StudentSkillGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentSkillGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentSkillGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentSkillGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentSkillGroupByOutputType[P]>;
}>>;
export type StudentSkillWhereInput = {
    AND?: Prisma.StudentSkillWhereInput | Prisma.StudentSkillWhereInput[];
    OR?: Prisma.StudentSkillWhereInput[];
    NOT?: Prisma.StudentSkillWhereInput | Prisma.StudentSkillWhereInput[];
    id?: Prisma.StringFilter<"StudentSkill"> | string;
    studentId?: Prisma.StringFilter<"StudentSkill"> | string;
    skillId?: Prisma.StringFilter<"StudentSkill"> | string;
    status?: Prisma.EnumSkillStatusFilter<"StudentSkill"> | $Enums.SkillStatus;
    achievedAt?: Prisma.DateTimeNullableFilter<"StudentSkill"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"StudentSkill"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StudentSkill"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    skill?: Prisma.XOR<Prisma.SkillScalarRelationFilter, Prisma.SkillWhereInput>;
};
export type StudentSkillOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    achievedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    student?: Prisma.StudentOrderByWithRelationInput;
    skill?: Prisma.SkillOrderByWithRelationInput;
};
export type StudentSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    studentId_skillId?: Prisma.StudentSkillStudentIdSkillIdCompoundUniqueInput;
    AND?: Prisma.StudentSkillWhereInput | Prisma.StudentSkillWhereInput[];
    OR?: Prisma.StudentSkillWhereInput[];
    NOT?: Prisma.StudentSkillWhereInput | Prisma.StudentSkillWhereInput[];
    studentId?: Prisma.StringFilter<"StudentSkill"> | string;
    skillId?: Prisma.StringFilter<"StudentSkill"> | string;
    status?: Prisma.EnumSkillStatusFilter<"StudentSkill"> | $Enums.SkillStatus;
    achievedAt?: Prisma.DateTimeNullableFilter<"StudentSkill"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"StudentSkill"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StudentSkill"> | Date | string;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    skill?: Prisma.XOR<Prisma.SkillScalarRelationFilter, Prisma.SkillWhereInput>;
}, "id" | "studentId_skillId">;
export type StudentSkillOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    achievedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StudentSkillCountOrderByAggregateInput;
    _max?: Prisma.StudentSkillMaxOrderByAggregateInput;
    _min?: Prisma.StudentSkillMinOrderByAggregateInput;
};
export type StudentSkillScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentSkillScalarWhereWithAggregatesInput | Prisma.StudentSkillScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentSkillScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentSkillScalarWhereWithAggregatesInput | Prisma.StudentSkillScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StudentSkill"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"StudentSkill"> | string;
    skillId?: Prisma.StringWithAggregatesFilter<"StudentSkill"> | string;
    status?: Prisma.EnumSkillStatusWithAggregatesFilter<"StudentSkill"> | $Enums.SkillStatus;
    achievedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"StudentSkill"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StudentSkill"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"StudentSkill"> | Date | string;
};
export type StudentSkillCreateInput = {
    id?: string;
    status?: $Enums.SkillStatus;
    achievedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutStudentSkillsInput;
    skill: Prisma.SkillCreateNestedOneWithoutStudentSkillsInput;
};
export type StudentSkillUncheckedCreateInput = {
    id?: string;
    studentId: string;
    skillId: string;
    status?: $Enums.SkillStatus;
    achievedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentSkillUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSkillStatusFieldUpdateOperationsInput | $Enums.SkillStatus;
    achievedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutStudentSkillsNestedInput;
    skill?: Prisma.SkillUpdateOneRequiredWithoutStudentSkillsNestedInput;
};
export type StudentSkillUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSkillStatusFieldUpdateOperationsInput | $Enums.SkillStatus;
    achievedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentSkillCreateManyInput = {
    id?: string;
    studentId: string;
    skillId: string;
    status?: $Enums.SkillStatus;
    achievedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentSkillUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSkillStatusFieldUpdateOperationsInput | $Enums.SkillStatus;
    achievedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentSkillUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSkillStatusFieldUpdateOperationsInput | $Enums.SkillStatus;
    achievedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentSkillListRelationFilter = {
    every?: Prisma.StudentSkillWhereInput;
    some?: Prisma.StudentSkillWhereInput;
    none?: Prisma.StudentSkillWhereInput;
};
export type StudentSkillOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StudentSkillStudentIdSkillIdCompoundUniqueInput = {
    studentId: string;
    skillId: string;
};
export type StudentSkillCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    achievedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentSkillMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    achievedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentSkillMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    achievedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentSkillCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentSkillCreateWithoutStudentInput, Prisma.StudentSkillUncheckedCreateWithoutStudentInput> | Prisma.StudentSkillCreateWithoutStudentInput[] | Prisma.StudentSkillUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentSkillCreateOrConnectWithoutStudentInput | Prisma.StudentSkillCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentSkillCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
};
export type StudentSkillUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentSkillCreateWithoutStudentInput, Prisma.StudentSkillUncheckedCreateWithoutStudentInput> | Prisma.StudentSkillCreateWithoutStudentInput[] | Prisma.StudentSkillUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentSkillCreateOrConnectWithoutStudentInput | Prisma.StudentSkillCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentSkillCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
};
export type StudentSkillUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentSkillCreateWithoutStudentInput, Prisma.StudentSkillUncheckedCreateWithoutStudentInput> | Prisma.StudentSkillCreateWithoutStudentInput[] | Prisma.StudentSkillUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentSkillCreateOrConnectWithoutStudentInput | Prisma.StudentSkillCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentSkillUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentSkillUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentSkillCreateManyStudentInputEnvelope;
    set?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
    disconnect?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
    delete?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
    connect?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
    update?: Prisma.StudentSkillUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentSkillUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentSkillUpdateManyWithWhereWithoutStudentInput | Prisma.StudentSkillUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentSkillScalarWhereInput | Prisma.StudentSkillScalarWhereInput[];
};
export type StudentSkillUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentSkillCreateWithoutStudentInput, Prisma.StudentSkillUncheckedCreateWithoutStudentInput> | Prisma.StudentSkillCreateWithoutStudentInput[] | Prisma.StudentSkillUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentSkillCreateOrConnectWithoutStudentInput | Prisma.StudentSkillCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentSkillUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentSkillUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentSkillCreateManyStudentInputEnvelope;
    set?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
    disconnect?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
    delete?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
    connect?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
    update?: Prisma.StudentSkillUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentSkillUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentSkillUpdateManyWithWhereWithoutStudentInput | Prisma.StudentSkillUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentSkillScalarWhereInput | Prisma.StudentSkillScalarWhereInput[];
};
export type StudentSkillCreateNestedManyWithoutSkillInput = {
    create?: Prisma.XOR<Prisma.StudentSkillCreateWithoutSkillInput, Prisma.StudentSkillUncheckedCreateWithoutSkillInput> | Prisma.StudentSkillCreateWithoutSkillInput[] | Prisma.StudentSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.StudentSkillCreateOrConnectWithoutSkillInput | Prisma.StudentSkillCreateOrConnectWithoutSkillInput[];
    createMany?: Prisma.StudentSkillCreateManySkillInputEnvelope;
    connect?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
};
export type StudentSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: Prisma.XOR<Prisma.StudentSkillCreateWithoutSkillInput, Prisma.StudentSkillUncheckedCreateWithoutSkillInput> | Prisma.StudentSkillCreateWithoutSkillInput[] | Prisma.StudentSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.StudentSkillCreateOrConnectWithoutSkillInput | Prisma.StudentSkillCreateOrConnectWithoutSkillInput[];
    createMany?: Prisma.StudentSkillCreateManySkillInputEnvelope;
    connect?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
};
export type StudentSkillUpdateManyWithoutSkillNestedInput = {
    create?: Prisma.XOR<Prisma.StudentSkillCreateWithoutSkillInput, Prisma.StudentSkillUncheckedCreateWithoutSkillInput> | Prisma.StudentSkillCreateWithoutSkillInput[] | Prisma.StudentSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.StudentSkillCreateOrConnectWithoutSkillInput | Prisma.StudentSkillCreateOrConnectWithoutSkillInput[];
    upsert?: Prisma.StudentSkillUpsertWithWhereUniqueWithoutSkillInput | Prisma.StudentSkillUpsertWithWhereUniqueWithoutSkillInput[];
    createMany?: Prisma.StudentSkillCreateManySkillInputEnvelope;
    set?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
    disconnect?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
    delete?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
    connect?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
    update?: Prisma.StudentSkillUpdateWithWhereUniqueWithoutSkillInput | Prisma.StudentSkillUpdateWithWhereUniqueWithoutSkillInput[];
    updateMany?: Prisma.StudentSkillUpdateManyWithWhereWithoutSkillInput | Prisma.StudentSkillUpdateManyWithWhereWithoutSkillInput[];
    deleteMany?: Prisma.StudentSkillScalarWhereInput | Prisma.StudentSkillScalarWhereInput[];
};
export type StudentSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: Prisma.XOR<Prisma.StudentSkillCreateWithoutSkillInput, Prisma.StudentSkillUncheckedCreateWithoutSkillInput> | Prisma.StudentSkillCreateWithoutSkillInput[] | Prisma.StudentSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.StudentSkillCreateOrConnectWithoutSkillInput | Prisma.StudentSkillCreateOrConnectWithoutSkillInput[];
    upsert?: Prisma.StudentSkillUpsertWithWhereUniqueWithoutSkillInput | Prisma.StudentSkillUpsertWithWhereUniqueWithoutSkillInput[];
    createMany?: Prisma.StudentSkillCreateManySkillInputEnvelope;
    set?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
    disconnect?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
    delete?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
    connect?: Prisma.StudentSkillWhereUniqueInput | Prisma.StudentSkillWhereUniqueInput[];
    update?: Prisma.StudentSkillUpdateWithWhereUniqueWithoutSkillInput | Prisma.StudentSkillUpdateWithWhereUniqueWithoutSkillInput[];
    updateMany?: Prisma.StudentSkillUpdateManyWithWhereWithoutSkillInput | Prisma.StudentSkillUpdateManyWithWhereWithoutSkillInput[];
    deleteMany?: Prisma.StudentSkillScalarWhereInput | Prisma.StudentSkillScalarWhereInput[];
};
export type EnumSkillStatusFieldUpdateOperationsInput = {
    set?: $Enums.SkillStatus;
};
export type StudentSkillCreateWithoutStudentInput = {
    id?: string;
    status?: $Enums.SkillStatus;
    achievedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    skill: Prisma.SkillCreateNestedOneWithoutStudentSkillsInput;
};
export type StudentSkillUncheckedCreateWithoutStudentInput = {
    id?: string;
    skillId: string;
    status?: $Enums.SkillStatus;
    achievedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentSkillCreateOrConnectWithoutStudentInput = {
    where: Prisma.StudentSkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentSkillCreateWithoutStudentInput, Prisma.StudentSkillUncheckedCreateWithoutStudentInput>;
};
export type StudentSkillCreateManyStudentInputEnvelope = {
    data: Prisma.StudentSkillCreateManyStudentInput | Prisma.StudentSkillCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type StudentSkillUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentSkillWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentSkillUpdateWithoutStudentInput, Prisma.StudentSkillUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.StudentSkillCreateWithoutStudentInput, Prisma.StudentSkillUncheckedCreateWithoutStudentInput>;
};
export type StudentSkillUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentSkillWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentSkillUpdateWithoutStudentInput, Prisma.StudentSkillUncheckedUpdateWithoutStudentInput>;
};
export type StudentSkillUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.StudentSkillScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentSkillUpdateManyMutationInput, Prisma.StudentSkillUncheckedUpdateManyWithoutStudentInput>;
};
export type StudentSkillScalarWhereInput = {
    AND?: Prisma.StudentSkillScalarWhereInput | Prisma.StudentSkillScalarWhereInput[];
    OR?: Prisma.StudentSkillScalarWhereInput[];
    NOT?: Prisma.StudentSkillScalarWhereInput | Prisma.StudentSkillScalarWhereInput[];
    id?: Prisma.StringFilter<"StudentSkill"> | string;
    studentId?: Prisma.StringFilter<"StudentSkill"> | string;
    skillId?: Prisma.StringFilter<"StudentSkill"> | string;
    status?: Prisma.EnumSkillStatusFilter<"StudentSkill"> | $Enums.SkillStatus;
    achievedAt?: Prisma.DateTimeNullableFilter<"StudentSkill"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"StudentSkill"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StudentSkill"> | Date | string;
};
export type StudentSkillCreateWithoutSkillInput = {
    id?: string;
    status?: $Enums.SkillStatus;
    achievedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: Prisma.StudentCreateNestedOneWithoutStudentSkillsInput;
};
export type StudentSkillUncheckedCreateWithoutSkillInput = {
    id?: string;
    studentId: string;
    status?: $Enums.SkillStatus;
    achievedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentSkillCreateOrConnectWithoutSkillInput = {
    where: Prisma.StudentSkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentSkillCreateWithoutSkillInput, Prisma.StudentSkillUncheckedCreateWithoutSkillInput>;
};
export type StudentSkillCreateManySkillInputEnvelope = {
    data: Prisma.StudentSkillCreateManySkillInput | Prisma.StudentSkillCreateManySkillInput[];
    skipDuplicates?: boolean;
};
export type StudentSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: Prisma.StudentSkillWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentSkillUpdateWithoutSkillInput, Prisma.StudentSkillUncheckedUpdateWithoutSkillInput>;
    create: Prisma.XOR<Prisma.StudentSkillCreateWithoutSkillInput, Prisma.StudentSkillUncheckedCreateWithoutSkillInput>;
};
export type StudentSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: Prisma.StudentSkillWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentSkillUpdateWithoutSkillInput, Prisma.StudentSkillUncheckedUpdateWithoutSkillInput>;
};
export type StudentSkillUpdateManyWithWhereWithoutSkillInput = {
    where: Prisma.StudentSkillScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentSkillUpdateManyMutationInput, Prisma.StudentSkillUncheckedUpdateManyWithoutSkillInput>;
};
export type StudentSkillCreateManyStudentInput = {
    id?: string;
    skillId: string;
    status?: $Enums.SkillStatus;
    achievedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentSkillUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSkillStatusFieldUpdateOperationsInput | $Enums.SkillStatus;
    achievedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skill?: Prisma.SkillUpdateOneRequiredWithoutStudentSkillsNestedInput;
};
export type StudentSkillUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSkillStatusFieldUpdateOperationsInput | $Enums.SkillStatus;
    achievedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentSkillUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSkillStatusFieldUpdateOperationsInput | $Enums.SkillStatus;
    achievedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentSkillCreateManySkillInput = {
    id?: string;
    studentId: string;
    status?: $Enums.SkillStatus;
    achievedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentSkillUpdateWithoutSkillInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSkillStatusFieldUpdateOperationsInput | $Enums.SkillStatus;
    achievedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student?: Prisma.StudentUpdateOneRequiredWithoutStudentSkillsNestedInput;
};
export type StudentSkillUncheckedUpdateWithoutSkillInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSkillStatusFieldUpdateOperationsInput | $Enums.SkillStatus;
    achievedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentSkillUncheckedUpdateManyWithoutSkillInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSkillStatusFieldUpdateOperationsInput | $Enums.SkillStatus;
    achievedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentSkillSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    skillId?: boolean;
    status?: boolean;
    achievedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentSkill"]>;
export type StudentSkillSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    skillId?: boolean;
    status?: boolean;
    achievedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentSkill"]>;
export type StudentSkillSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    skillId?: boolean;
    status?: boolean;
    achievedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentSkill"]>;
export type StudentSkillSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    skillId?: boolean;
    status?: boolean;
    achievedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StudentSkillOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentId" | "skillId" | "status" | "achievedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["studentSkill"]>;
export type StudentSkillInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type StudentSkillIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type StudentSkillIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type $StudentSkillPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StudentSkill";
    objects: {
        student: Prisma.$StudentPayload<ExtArgs>;
        skill: Prisma.$SkillPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        studentId: string;
        skillId: string;
        status: $Enums.SkillStatus;
        achievedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["studentSkill"]>;
    composites: {};
};
export type StudentSkillGetPayload<S extends boolean | null | undefined | StudentSkillDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentSkillPayload, S>;
export type StudentSkillCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentSkillCountAggregateInputType | true;
};
export interface StudentSkillDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StudentSkill'];
        meta: {
            name: 'StudentSkill';
        };
    };
    findUnique<T extends StudentSkillFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentSkillFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentSkillClient<runtime.Types.Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentSkillFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentSkillClient<runtime.Types.Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentSkillFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentSkillFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentSkillClient<runtime.Types.Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentSkillFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentSkillClient<runtime.Types.Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentSkillFindManyArgs>(args?: Prisma.SelectSubset<T, StudentSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentSkillCreateArgs>(args: Prisma.SelectSubset<T, StudentSkillCreateArgs<ExtArgs>>): Prisma.Prisma__StudentSkillClient<runtime.Types.Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentSkillCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StudentSkillCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StudentSkillDeleteArgs>(args: Prisma.SelectSubset<T, StudentSkillDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentSkillClient<runtime.Types.Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentSkillUpdateArgs>(args: Prisma.SelectSubset<T, StudentSkillUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentSkillClient<runtime.Types.Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentSkillDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentSkillUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StudentSkillUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StudentSkillUpsertArgs>(args: Prisma.SelectSubset<T, StudentSkillUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentSkillClient<runtime.Types.Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentSkillCountArgs>(args?: Prisma.Subset<T, StudentSkillCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentSkillCountAggregateOutputType> : number>;
    aggregate<T extends StudentSkillAggregateArgs>(args: Prisma.Subset<T, StudentSkillAggregateArgs>): Prisma.PrismaPromise<GetStudentSkillAggregateType<T>>;
    groupBy<T extends StudentSkillGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentSkillGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentSkillGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentSkillFieldRefs;
}
export interface Prisma__StudentSkillClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    skill<T extends Prisma.SkillDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SkillDefaultArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentSkillFieldRefs {
    readonly id: Prisma.FieldRef<"StudentSkill", 'String'>;
    readonly studentId: Prisma.FieldRef<"StudentSkill", 'String'>;
    readonly skillId: Prisma.FieldRef<"StudentSkill", 'String'>;
    readonly status: Prisma.FieldRef<"StudentSkill", 'SkillStatus'>;
    readonly achievedAt: Prisma.FieldRef<"StudentSkill", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"StudentSkill", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"StudentSkill", 'DateTime'>;
}
export type StudentSkillFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSkillSelect<ExtArgs> | null;
    omit?: Prisma.StudentSkillOmit<ExtArgs> | null;
    include?: Prisma.StudentSkillInclude<ExtArgs> | null;
    where: Prisma.StudentSkillWhereUniqueInput;
};
export type StudentSkillFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSkillSelect<ExtArgs> | null;
    omit?: Prisma.StudentSkillOmit<ExtArgs> | null;
    include?: Prisma.StudentSkillInclude<ExtArgs> | null;
    where: Prisma.StudentSkillWhereUniqueInput;
};
export type StudentSkillFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSkillSelect<ExtArgs> | null;
    omit?: Prisma.StudentSkillOmit<ExtArgs> | null;
    include?: Prisma.StudentSkillInclude<ExtArgs> | null;
    where?: Prisma.StudentSkillWhereInput;
    orderBy?: Prisma.StudentSkillOrderByWithRelationInput | Prisma.StudentSkillOrderByWithRelationInput[];
    cursor?: Prisma.StudentSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentSkillScalarFieldEnum | Prisma.StudentSkillScalarFieldEnum[];
};
export type StudentSkillFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSkillSelect<ExtArgs> | null;
    omit?: Prisma.StudentSkillOmit<ExtArgs> | null;
    include?: Prisma.StudentSkillInclude<ExtArgs> | null;
    where?: Prisma.StudentSkillWhereInput;
    orderBy?: Prisma.StudentSkillOrderByWithRelationInput | Prisma.StudentSkillOrderByWithRelationInput[];
    cursor?: Prisma.StudentSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentSkillScalarFieldEnum | Prisma.StudentSkillScalarFieldEnum[];
};
export type StudentSkillFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSkillSelect<ExtArgs> | null;
    omit?: Prisma.StudentSkillOmit<ExtArgs> | null;
    include?: Prisma.StudentSkillInclude<ExtArgs> | null;
    where?: Prisma.StudentSkillWhereInput;
    orderBy?: Prisma.StudentSkillOrderByWithRelationInput | Prisma.StudentSkillOrderByWithRelationInput[];
    cursor?: Prisma.StudentSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentSkillScalarFieldEnum | Prisma.StudentSkillScalarFieldEnum[];
};
export type StudentSkillCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSkillSelect<ExtArgs> | null;
    omit?: Prisma.StudentSkillOmit<ExtArgs> | null;
    include?: Prisma.StudentSkillInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentSkillCreateInput, Prisma.StudentSkillUncheckedCreateInput>;
};
export type StudentSkillCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentSkillCreateManyInput | Prisma.StudentSkillCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentSkillCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSkillSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentSkillOmit<ExtArgs> | null;
    data: Prisma.StudentSkillCreateManyInput | Prisma.StudentSkillCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StudentSkillIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StudentSkillUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSkillSelect<ExtArgs> | null;
    omit?: Prisma.StudentSkillOmit<ExtArgs> | null;
    include?: Prisma.StudentSkillInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentSkillUpdateInput, Prisma.StudentSkillUncheckedUpdateInput>;
    where: Prisma.StudentSkillWhereUniqueInput;
};
export type StudentSkillUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentSkillUpdateManyMutationInput, Prisma.StudentSkillUncheckedUpdateManyInput>;
    where?: Prisma.StudentSkillWhereInput;
    limit?: number;
};
export type StudentSkillUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSkillSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentSkillOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentSkillUpdateManyMutationInput, Prisma.StudentSkillUncheckedUpdateManyInput>;
    where?: Prisma.StudentSkillWhereInput;
    limit?: number;
    include?: Prisma.StudentSkillIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StudentSkillUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSkillSelect<ExtArgs> | null;
    omit?: Prisma.StudentSkillOmit<ExtArgs> | null;
    include?: Prisma.StudentSkillInclude<ExtArgs> | null;
    where: Prisma.StudentSkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentSkillCreateInput, Prisma.StudentSkillUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentSkillUpdateInput, Prisma.StudentSkillUncheckedUpdateInput>;
};
export type StudentSkillDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSkillSelect<ExtArgs> | null;
    omit?: Prisma.StudentSkillOmit<ExtArgs> | null;
    include?: Prisma.StudentSkillInclude<ExtArgs> | null;
    where: Prisma.StudentSkillWhereUniqueInput;
};
export type StudentSkillDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentSkillWhereInput;
    limit?: number;
};
export type StudentSkillDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSkillSelect<ExtArgs> | null;
    omit?: Prisma.StudentSkillOmit<ExtArgs> | null;
    include?: Prisma.StudentSkillInclude<ExtArgs> | null;
};
export {};
