import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InstructorModel = runtime.Types.Result.DefaultSelection<Prisma.$InstructorPayload>;
export type AggregateInstructor = {
    _count: InstructorCountAggregateOutputType | null;
    _min: InstructorMinAggregateOutputType | null;
    _max: InstructorMaxAggregateOutputType | null;
};
export type InstructorMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    surname: string | null;
    isActive: boolean | null;
    phoneNumber: string | null;
    secondaryPhoneNumber: string | null;
    whatsappPhoneNumber: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InstructorMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    surname: string | null;
    isActive: boolean | null;
    phoneNumber: string | null;
    secondaryPhoneNumber: string | null;
    whatsappPhoneNumber: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InstructorCountAggregateOutputType = {
    id: number;
    userId: number;
    name: number;
    surname: number;
    isActive: number;
    phoneNumber: number;
    secondaryPhoneNumber: number;
    whatsappPhoneNumber: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type InstructorMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    surname?: true;
    isActive?: true;
    phoneNumber?: true;
    secondaryPhoneNumber?: true;
    whatsappPhoneNumber?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InstructorMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    surname?: true;
    isActive?: true;
    phoneNumber?: true;
    secondaryPhoneNumber?: true;
    whatsappPhoneNumber?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InstructorCountAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    surname?: true;
    isActive?: true;
    phoneNumber?: true;
    secondaryPhoneNumber?: true;
    whatsappPhoneNumber?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type InstructorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InstructorWhereInput;
    orderBy?: Prisma.InstructorOrderByWithRelationInput | Prisma.InstructorOrderByWithRelationInput[];
    cursor?: Prisma.InstructorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InstructorCountAggregateInputType;
    _min?: InstructorMinAggregateInputType;
    _max?: InstructorMaxAggregateInputType;
};
export type GetInstructorAggregateType<T extends InstructorAggregateArgs> = {
    [P in keyof T & keyof AggregateInstructor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInstructor[P]> : Prisma.GetScalarType<T[P], AggregateInstructor[P]>;
};
export type InstructorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InstructorWhereInput;
    orderBy?: Prisma.InstructorOrderByWithAggregationInput | Prisma.InstructorOrderByWithAggregationInput[];
    by: Prisma.InstructorScalarFieldEnum[] | Prisma.InstructorScalarFieldEnum;
    having?: Prisma.InstructorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InstructorCountAggregateInputType | true;
    _min?: InstructorMinAggregateInputType;
    _max?: InstructorMaxAggregateInputType;
};
export type InstructorGroupByOutputType = {
    id: string;
    userId: string | null;
    name: string;
    surname: string;
    isActive: boolean;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    createdAt: Date;
    updatedAt: Date;
    _count: InstructorCountAggregateOutputType | null;
    _min: InstructorMinAggregateOutputType | null;
    _max: InstructorMaxAggregateOutputType | null;
};
type GetInstructorGroupByPayload<T extends InstructorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InstructorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InstructorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InstructorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InstructorGroupByOutputType[P]>;
}>>;
export type InstructorWhereInput = {
    AND?: Prisma.InstructorWhereInput | Prisma.InstructorWhereInput[];
    OR?: Prisma.InstructorWhereInput[];
    NOT?: Prisma.InstructorWhereInput | Prisma.InstructorWhereInput[];
    id?: Prisma.StringFilter<"Instructor"> | string;
    userId?: Prisma.StringNullableFilter<"Instructor"> | string | null;
    name?: Prisma.StringFilter<"Instructor"> | string;
    surname?: Prisma.StringFilter<"Instructor"> | string;
    isActive?: Prisma.BoolFilter<"Instructor"> | boolean;
    phoneNumber?: Prisma.StringFilter<"Instructor"> | string;
    secondaryPhoneNumber?: Prisma.StringFilter<"Instructor"> | string;
    whatsappPhoneNumber?: Prisma.StringFilter<"Instructor"> | string;
    createdAt?: Prisma.DateTimeFilter<"Instructor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Instructor"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    mainPrograms?: Prisma.ProgramListRelationFilter;
    backupPrograms?: Prisma.ProgramListRelationFilter;
};
export type InstructorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    secondaryPhoneNumber?: Prisma.SortOrder;
    whatsappPhoneNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    mainPrograms?: Prisma.ProgramOrderByRelationAggregateInput;
    backupPrograms?: Prisma.ProgramOrderByRelationAggregateInput;
};
export type InstructorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.InstructorWhereInput | Prisma.InstructorWhereInput[];
    OR?: Prisma.InstructorWhereInput[];
    NOT?: Prisma.InstructorWhereInput | Prisma.InstructorWhereInput[];
    name?: Prisma.StringFilter<"Instructor"> | string;
    surname?: Prisma.StringFilter<"Instructor"> | string;
    isActive?: Prisma.BoolFilter<"Instructor"> | boolean;
    phoneNumber?: Prisma.StringFilter<"Instructor"> | string;
    secondaryPhoneNumber?: Prisma.StringFilter<"Instructor"> | string;
    whatsappPhoneNumber?: Prisma.StringFilter<"Instructor"> | string;
    createdAt?: Prisma.DateTimeFilter<"Instructor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Instructor"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    mainPrograms?: Prisma.ProgramListRelationFilter;
    backupPrograms?: Prisma.ProgramListRelationFilter;
}, "id" | "userId">;
export type InstructorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    secondaryPhoneNumber?: Prisma.SortOrder;
    whatsappPhoneNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.InstructorCountOrderByAggregateInput;
    _max?: Prisma.InstructorMaxOrderByAggregateInput;
    _min?: Prisma.InstructorMinOrderByAggregateInput;
};
export type InstructorScalarWhereWithAggregatesInput = {
    AND?: Prisma.InstructorScalarWhereWithAggregatesInput | Prisma.InstructorScalarWhereWithAggregatesInput[];
    OR?: Prisma.InstructorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InstructorScalarWhereWithAggregatesInput | Prisma.InstructorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Instructor"> | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"Instructor"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"Instructor"> | string;
    surname?: Prisma.StringWithAggregatesFilter<"Instructor"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"Instructor"> | boolean;
    phoneNumber?: Prisma.StringWithAggregatesFilter<"Instructor"> | string;
    secondaryPhoneNumber?: Prisma.StringWithAggregatesFilter<"Instructor"> | string;
    whatsappPhoneNumber?: Prisma.StringWithAggregatesFilter<"Instructor"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Instructor"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Instructor"> | Date | string;
};
export type InstructorCreateInput = {
    id?: string;
    name: string;
    surname: string;
    isActive?: boolean;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutInstructorProfileInput;
    mainPrograms?: Prisma.ProgramCreateNestedManyWithoutInstructorInput;
    backupPrograms?: Prisma.ProgramCreateNestedManyWithoutBackupInstructorsInput;
};
export type InstructorUncheckedCreateInput = {
    id?: string;
    userId?: string | null;
    name: string;
    surname: string;
    isActive?: boolean;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mainPrograms?: Prisma.ProgramUncheckedCreateNestedManyWithoutInstructorInput;
    backupPrograms?: Prisma.ProgramUncheckedCreateNestedManyWithoutBackupInstructorsInput;
};
export type InstructorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutInstructorProfileNestedInput;
    mainPrograms?: Prisma.ProgramUpdateManyWithoutInstructorNestedInput;
    backupPrograms?: Prisma.ProgramUpdateManyWithoutBackupInstructorsNestedInput;
};
export type InstructorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mainPrograms?: Prisma.ProgramUncheckedUpdateManyWithoutInstructorNestedInput;
    backupPrograms?: Prisma.ProgramUncheckedUpdateManyWithoutBackupInstructorsNestedInput;
};
export type InstructorCreateManyInput = {
    id?: string;
    userId?: string | null;
    name: string;
    surname: string;
    isActive?: boolean;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InstructorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InstructorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InstructorNullableScalarRelationFilter = {
    is?: Prisma.InstructorWhereInput | null;
    isNot?: Prisma.InstructorWhereInput | null;
};
export type InstructorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    secondaryPhoneNumber?: Prisma.SortOrder;
    whatsappPhoneNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InstructorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    secondaryPhoneNumber?: Prisma.SortOrder;
    whatsappPhoneNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InstructorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    secondaryPhoneNumber?: Prisma.SortOrder;
    whatsappPhoneNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InstructorListRelationFilter = {
    every?: Prisma.InstructorWhereInput;
    some?: Prisma.InstructorWhereInput;
    none?: Prisma.InstructorWhereInput;
};
export type InstructorOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InstructorCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.InstructorCreateWithoutUserInput, Prisma.InstructorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.InstructorCreateOrConnectWithoutUserInput;
    connect?: Prisma.InstructorWhereUniqueInput;
};
export type InstructorUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.InstructorCreateWithoutUserInput, Prisma.InstructorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.InstructorCreateOrConnectWithoutUserInput;
    connect?: Prisma.InstructorWhereUniqueInput;
};
export type InstructorUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.InstructorCreateWithoutUserInput, Prisma.InstructorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.InstructorCreateOrConnectWithoutUserInput;
    upsert?: Prisma.InstructorUpsertWithoutUserInput;
    disconnect?: Prisma.InstructorWhereInput | boolean;
    delete?: Prisma.InstructorWhereInput | boolean;
    connect?: Prisma.InstructorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InstructorUpdateToOneWithWhereWithoutUserInput, Prisma.InstructorUpdateWithoutUserInput>, Prisma.InstructorUncheckedUpdateWithoutUserInput>;
};
export type InstructorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.InstructorCreateWithoutUserInput, Prisma.InstructorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.InstructorCreateOrConnectWithoutUserInput;
    upsert?: Prisma.InstructorUpsertWithoutUserInput;
    disconnect?: Prisma.InstructorWhereInput | boolean;
    delete?: Prisma.InstructorWhereInput | boolean;
    connect?: Prisma.InstructorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InstructorUpdateToOneWithWhereWithoutUserInput, Prisma.InstructorUpdateWithoutUserInput>, Prisma.InstructorUncheckedUpdateWithoutUserInput>;
};
export type InstructorCreateNestedOneWithoutMainProgramsInput = {
    create?: Prisma.XOR<Prisma.InstructorCreateWithoutMainProgramsInput, Prisma.InstructorUncheckedCreateWithoutMainProgramsInput>;
    connectOrCreate?: Prisma.InstructorCreateOrConnectWithoutMainProgramsInput;
    connect?: Prisma.InstructorWhereUniqueInput;
};
export type InstructorCreateNestedManyWithoutBackupProgramsInput = {
    create?: Prisma.XOR<Prisma.InstructorCreateWithoutBackupProgramsInput, Prisma.InstructorUncheckedCreateWithoutBackupProgramsInput> | Prisma.InstructorCreateWithoutBackupProgramsInput[] | Prisma.InstructorUncheckedCreateWithoutBackupProgramsInput[];
    connectOrCreate?: Prisma.InstructorCreateOrConnectWithoutBackupProgramsInput | Prisma.InstructorCreateOrConnectWithoutBackupProgramsInput[];
    connect?: Prisma.InstructorWhereUniqueInput | Prisma.InstructorWhereUniqueInput[];
};
export type InstructorUncheckedCreateNestedManyWithoutBackupProgramsInput = {
    create?: Prisma.XOR<Prisma.InstructorCreateWithoutBackupProgramsInput, Prisma.InstructorUncheckedCreateWithoutBackupProgramsInput> | Prisma.InstructorCreateWithoutBackupProgramsInput[] | Prisma.InstructorUncheckedCreateWithoutBackupProgramsInput[];
    connectOrCreate?: Prisma.InstructorCreateOrConnectWithoutBackupProgramsInput | Prisma.InstructorCreateOrConnectWithoutBackupProgramsInput[];
    connect?: Prisma.InstructorWhereUniqueInput | Prisma.InstructorWhereUniqueInput[];
};
export type InstructorUpdateOneWithoutMainProgramsNestedInput = {
    create?: Prisma.XOR<Prisma.InstructorCreateWithoutMainProgramsInput, Prisma.InstructorUncheckedCreateWithoutMainProgramsInput>;
    connectOrCreate?: Prisma.InstructorCreateOrConnectWithoutMainProgramsInput;
    upsert?: Prisma.InstructorUpsertWithoutMainProgramsInput;
    disconnect?: Prisma.InstructorWhereInput | boolean;
    delete?: Prisma.InstructorWhereInput | boolean;
    connect?: Prisma.InstructorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InstructorUpdateToOneWithWhereWithoutMainProgramsInput, Prisma.InstructorUpdateWithoutMainProgramsInput>, Prisma.InstructorUncheckedUpdateWithoutMainProgramsInput>;
};
export type InstructorUpdateManyWithoutBackupProgramsNestedInput = {
    create?: Prisma.XOR<Prisma.InstructorCreateWithoutBackupProgramsInput, Prisma.InstructorUncheckedCreateWithoutBackupProgramsInput> | Prisma.InstructorCreateWithoutBackupProgramsInput[] | Prisma.InstructorUncheckedCreateWithoutBackupProgramsInput[];
    connectOrCreate?: Prisma.InstructorCreateOrConnectWithoutBackupProgramsInput | Prisma.InstructorCreateOrConnectWithoutBackupProgramsInput[];
    upsert?: Prisma.InstructorUpsertWithWhereUniqueWithoutBackupProgramsInput | Prisma.InstructorUpsertWithWhereUniqueWithoutBackupProgramsInput[];
    set?: Prisma.InstructorWhereUniqueInput | Prisma.InstructorWhereUniqueInput[];
    disconnect?: Prisma.InstructorWhereUniqueInput | Prisma.InstructorWhereUniqueInput[];
    delete?: Prisma.InstructorWhereUniqueInput | Prisma.InstructorWhereUniqueInput[];
    connect?: Prisma.InstructorWhereUniqueInput | Prisma.InstructorWhereUniqueInput[];
    update?: Prisma.InstructorUpdateWithWhereUniqueWithoutBackupProgramsInput | Prisma.InstructorUpdateWithWhereUniqueWithoutBackupProgramsInput[];
    updateMany?: Prisma.InstructorUpdateManyWithWhereWithoutBackupProgramsInput | Prisma.InstructorUpdateManyWithWhereWithoutBackupProgramsInput[];
    deleteMany?: Prisma.InstructorScalarWhereInput | Prisma.InstructorScalarWhereInput[];
};
export type InstructorUncheckedUpdateManyWithoutBackupProgramsNestedInput = {
    create?: Prisma.XOR<Prisma.InstructorCreateWithoutBackupProgramsInput, Prisma.InstructorUncheckedCreateWithoutBackupProgramsInput> | Prisma.InstructorCreateWithoutBackupProgramsInput[] | Prisma.InstructorUncheckedCreateWithoutBackupProgramsInput[];
    connectOrCreate?: Prisma.InstructorCreateOrConnectWithoutBackupProgramsInput | Prisma.InstructorCreateOrConnectWithoutBackupProgramsInput[];
    upsert?: Prisma.InstructorUpsertWithWhereUniqueWithoutBackupProgramsInput | Prisma.InstructorUpsertWithWhereUniqueWithoutBackupProgramsInput[];
    set?: Prisma.InstructorWhereUniqueInput | Prisma.InstructorWhereUniqueInput[];
    disconnect?: Prisma.InstructorWhereUniqueInput | Prisma.InstructorWhereUniqueInput[];
    delete?: Prisma.InstructorWhereUniqueInput | Prisma.InstructorWhereUniqueInput[];
    connect?: Prisma.InstructorWhereUniqueInput | Prisma.InstructorWhereUniqueInput[];
    update?: Prisma.InstructorUpdateWithWhereUniqueWithoutBackupProgramsInput | Prisma.InstructorUpdateWithWhereUniqueWithoutBackupProgramsInput[];
    updateMany?: Prisma.InstructorUpdateManyWithWhereWithoutBackupProgramsInput | Prisma.InstructorUpdateManyWithWhereWithoutBackupProgramsInput[];
    deleteMany?: Prisma.InstructorScalarWhereInput | Prisma.InstructorScalarWhereInput[];
};
export type InstructorCreateWithoutUserInput = {
    id?: string;
    name: string;
    surname: string;
    isActive?: boolean;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mainPrograms?: Prisma.ProgramCreateNestedManyWithoutInstructorInput;
    backupPrograms?: Prisma.ProgramCreateNestedManyWithoutBackupInstructorsInput;
};
export type InstructorUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    surname: string;
    isActive?: boolean;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mainPrograms?: Prisma.ProgramUncheckedCreateNestedManyWithoutInstructorInput;
    backupPrograms?: Prisma.ProgramUncheckedCreateNestedManyWithoutBackupInstructorsInput;
};
export type InstructorCreateOrConnectWithoutUserInput = {
    where: Prisma.InstructorWhereUniqueInput;
    create: Prisma.XOR<Prisma.InstructorCreateWithoutUserInput, Prisma.InstructorUncheckedCreateWithoutUserInput>;
};
export type InstructorUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.InstructorUpdateWithoutUserInput, Prisma.InstructorUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.InstructorCreateWithoutUserInput, Prisma.InstructorUncheckedCreateWithoutUserInput>;
    where?: Prisma.InstructorWhereInput;
};
export type InstructorUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.InstructorWhereInput;
    data: Prisma.XOR<Prisma.InstructorUpdateWithoutUserInput, Prisma.InstructorUncheckedUpdateWithoutUserInput>;
};
export type InstructorUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mainPrograms?: Prisma.ProgramUpdateManyWithoutInstructorNestedInput;
    backupPrograms?: Prisma.ProgramUpdateManyWithoutBackupInstructorsNestedInput;
};
export type InstructorUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mainPrograms?: Prisma.ProgramUncheckedUpdateManyWithoutInstructorNestedInput;
    backupPrograms?: Prisma.ProgramUncheckedUpdateManyWithoutBackupInstructorsNestedInput;
};
export type InstructorCreateWithoutMainProgramsInput = {
    id?: string;
    name: string;
    surname: string;
    isActive?: boolean;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutInstructorProfileInput;
    backupPrograms?: Prisma.ProgramCreateNestedManyWithoutBackupInstructorsInput;
};
export type InstructorUncheckedCreateWithoutMainProgramsInput = {
    id?: string;
    userId?: string | null;
    name: string;
    surname: string;
    isActive?: boolean;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    backupPrograms?: Prisma.ProgramUncheckedCreateNestedManyWithoutBackupInstructorsInput;
};
export type InstructorCreateOrConnectWithoutMainProgramsInput = {
    where: Prisma.InstructorWhereUniqueInput;
    create: Prisma.XOR<Prisma.InstructorCreateWithoutMainProgramsInput, Prisma.InstructorUncheckedCreateWithoutMainProgramsInput>;
};
export type InstructorCreateWithoutBackupProgramsInput = {
    id?: string;
    name: string;
    surname: string;
    isActive?: boolean;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutInstructorProfileInput;
    mainPrograms?: Prisma.ProgramCreateNestedManyWithoutInstructorInput;
};
export type InstructorUncheckedCreateWithoutBackupProgramsInput = {
    id?: string;
    userId?: string | null;
    name: string;
    surname: string;
    isActive?: boolean;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mainPrograms?: Prisma.ProgramUncheckedCreateNestedManyWithoutInstructorInput;
};
export type InstructorCreateOrConnectWithoutBackupProgramsInput = {
    where: Prisma.InstructorWhereUniqueInput;
    create: Prisma.XOR<Prisma.InstructorCreateWithoutBackupProgramsInput, Prisma.InstructorUncheckedCreateWithoutBackupProgramsInput>;
};
export type InstructorUpsertWithoutMainProgramsInput = {
    update: Prisma.XOR<Prisma.InstructorUpdateWithoutMainProgramsInput, Prisma.InstructorUncheckedUpdateWithoutMainProgramsInput>;
    create: Prisma.XOR<Prisma.InstructorCreateWithoutMainProgramsInput, Prisma.InstructorUncheckedCreateWithoutMainProgramsInput>;
    where?: Prisma.InstructorWhereInput;
};
export type InstructorUpdateToOneWithWhereWithoutMainProgramsInput = {
    where?: Prisma.InstructorWhereInput;
    data: Prisma.XOR<Prisma.InstructorUpdateWithoutMainProgramsInput, Prisma.InstructorUncheckedUpdateWithoutMainProgramsInput>;
};
export type InstructorUpdateWithoutMainProgramsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutInstructorProfileNestedInput;
    backupPrograms?: Prisma.ProgramUpdateManyWithoutBackupInstructorsNestedInput;
};
export type InstructorUncheckedUpdateWithoutMainProgramsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    backupPrograms?: Prisma.ProgramUncheckedUpdateManyWithoutBackupInstructorsNestedInput;
};
export type InstructorUpsertWithWhereUniqueWithoutBackupProgramsInput = {
    where: Prisma.InstructorWhereUniqueInput;
    update: Prisma.XOR<Prisma.InstructorUpdateWithoutBackupProgramsInput, Prisma.InstructorUncheckedUpdateWithoutBackupProgramsInput>;
    create: Prisma.XOR<Prisma.InstructorCreateWithoutBackupProgramsInput, Prisma.InstructorUncheckedCreateWithoutBackupProgramsInput>;
};
export type InstructorUpdateWithWhereUniqueWithoutBackupProgramsInput = {
    where: Prisma.InstructorWhereUniqueInput;
    data: Prisma.XOR<Prisma.InstructorUpdateWithoutBackupProgramsInput, Prisma.InstructorUncheckedUpdateWithoutBackupProgramsInput>;
};
export type InstructorUpdateManyWithWhereWithoutBackupProgramsInput = {
    where: Prisma.InstructorScalarWhereInput;
    data: Prisma.XOR<Prisma.InstructorUpdateManyMutationInput, Prisma.InstructorUncheckedUpdateManyWithoutBackupProgramsInput>;
};
export type InstructorScalarWhereInput = {
    AND?: Prisma.InstructorScalarWhereInput | Prisma.InstructorScalarWhereInput[];
    OR?: Prisma.InstructorScalarWhereInput[];
    NOT?: Prisma.InstructorScalarWhereInput | Prisma.InstructorScalarWhereInput[];
    id?: Prisma.StringFilter<"Instructor"> | string;
    userId?: Prisma.StringNullableFilter<"Instructor"> | string | null;
    name?: Prisma.StringFilter<"Instructor"> | string;
    surname?: Prisma.StringFilter<"Instructor"> | string;
    isActive?: Prisma.BoolFilter<"Instructor"> | boolean;
    phoneNumber?: Prisma.StringFilter<"Instructor"> | string;
    secondaryPhoneNumber?: Prisma.StringFilter<"Instructor"> | string;
    whatsappPhoneNumber?: Prisma.StringFilter<"Instructor"> | string;
    createdAt?: Prisma.DateTimeFilter<"Instructor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Instructor"> | Date | string;
};
export type InstructorUpdateWithoutBackupProgramsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutInstructorProfileNestedInput;
    mainPrograms?: Prisma.ProgramUpdateManyWithoutInstructorNestedInput;
};
export type InstructorUncheckedUpdateWithoutBackupProgramsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mainPrograms?: Prisma.ProgramUncheckedUpdateManyWithoutInstructorNestedInput;
};
export type InstructorUncheckedUpdateManyWithoutBackupProgramsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InstructorCountOutputType = {
    mainPrograms: number;
    backupPrograms: number;
};
export type InstructorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mainPrograms?: boolean | InstructorCountOutputTypeCountMainProgramsArgs;
    backupPrograms?: boolean | InstructorCountOutputTypeCountBackupProgramsArgs;
};
export type InstructorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorCountOutputTypeSelect<ExtArgs> | null;
};
export type InstructorCountOutputTypeCountMainProgramsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramWhereInput;
};
export type InstructorCountOutputTypeCountBackupProgramsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramWhereInput;
};
export type InstructorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    surname?: boolean;
    isActive?: boolean;
    phoneNumber?: boolean;
    secondaryPhoneNumber?: boolean;
    whatsappPhoneNumber?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.Instructor$userArgs<ExtArgs>;
    mainPrograms?: boolean | Prisma.Instructor$mainProgramsArgs<ExtArgs>;
    backupPrograms?: boolean | Prisma.Instructor$backupProgramsArgs<ExtArgs>;
    _count?: boolean | Prisma.InstructorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["instructor"]>;
export type InstructorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    surname?: boolean;
    isActive?: boolean;
    phoneNumber?: boolean;
    secondaryPhoneNumber?: boolean;
    whatsappPhoneNumber?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.Instructor$userArgs<ExtArgs>;
}, ExtArgs["result"]["instructor"]>;
export type InstructorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    surname?: boolean;
    isActive?: boolean;
    phoneNumber?: boolean;
    secondaryPhoneNumber?: boolean;
    whatsappPhoneNumber?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.Instructor$userArgs<ExtArgs>;
}, ExtArgs["result"]["instructor"]>;
export type InstructorSelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    surname?: boolean;
    isActive?: boolean;
    phoneNumber?: boolean;
    secondaryPhoneNumber?: boolean;
    whatsappPhoneNumber?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type InstructorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "name" | "surname" | "isActive" | "phoneNumber" | "secondaryPhoneNumber" | "whatsappPhoneNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["instructor"]>;
export type InstructorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Instructor$userArgs<ExtArgs>;
    mainPrograms?: boolean | Prisma.Instructor$mainProgramsArgs<ExtArgs>;
    backupPrograms?: boolean | Prisma.Instructor$backupProgramsArgs<ExtArgs>;
    _count?: boolean | Prisma.InstructorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type InstructorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Instructor$userArgs<ExtArgs>;
};
export type InstructorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Instructor$userArgs<ExtArgs>;
};
export type $InstructorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Instructor";
    objects: {
        user: Prisma.$UserPayload<ExtArgs> | null;
        mainPrograms: Prisma.$ProgramPayload<ExtArgs>[];
        backupPrograms: Prisma.$ProgramPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string | null;
        name: string;
        surname: string;
        isActive: boolean;
        phoneNumber: string;
        secondaryPhoneNumber: string;
        whatsappPhoneNumber: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["instructor"]>;
    composites: {};
};
export type InstructorGetPayload<S extends boolean | null | undefined | InstructorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InstructorPayload, S>;
export type InstructorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InstructorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InstructorCountAggregateInputType | true;
};
export interface InstructorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Instructor'];
        meta: {
            name: 'Instructor';
        };
    };
    findUnique<T extends InstructorFindUniqueArgs>(args: Prisma.SelectSubset<T, InstructorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InstructorClient<runtime.Types.Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InstructorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InstructorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InstructorClient<runtime.Types.Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InstructorFindFirstArgs>(args?: Prisma.SelectSubset<T, InstructorFindFirstArgs<ExtArgs>>): Prisma.Prisma__InstructorClient<runtime.Types.Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InstructorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InstructorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InstructorClient<runtime.Types.Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InstructorFindManyArgs>(args?: Prisma.SelectSubset<T, InstructorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InstructorCreateArgs>(args: Prisma.SelectSubset<T, InstructorCreateArgs<ExtArgs>>): Prisma.Prisma__InstructorClient<runtime.Types.Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InstructorCreateManyArgs>(args?: Prisma.SelectSubset<T, InstructorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InstructorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InstructorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InstructorDeleteArgs>(args: Prisma.SelectSubset<T, InstructorDeleteArgs<ExtArgs>>): Prisma.Prisma__InstructorClient<runtime.Types.Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InstructorUpdateArgs>(args: Prisma.SelectSubset<T, InstructorUpdateArgs<ExtArgs>>): Prisma.Prisma__InstructorClient<runtime.Types.Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InstructorDeleteManyArgs>(args?: Prisma.SelectSubset<T, InstructorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InstructorUpdateManyArgs>(args: Prisma.SelectSubset<T, InstructorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InstructorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InstructorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InstructorUpsertArgs>(args: Prisma.SelectSubset<T, InstructorUpsertArgs<ExtArgs>>): Prisma.Prisma__InstructorClient<runtime.Types.Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InstructorCountArgs>(args?: Prisma.Subset<T, InstructorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InstructorCountAggregateOutputType> : number>;
    aggregate<T extends InstructorAggregateArgs>(args: Prisma.Subset<T, InstructorAggregateArgs>): Prisma.PrismaPromise<GetInstructorAggregateType<T>>;
    groupBy<T extends InstructorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InstructorGroupByArgs['orderBy'];
    } : {
        orderBy?: InstructorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InstructorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InstructorFieldRefs;
}
export interface Prisma__InstructorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.Instructor$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Instructor$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    mainPrograms<T extends Prisma.Instructor$mainProgramsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Instructor$mainProgramsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    backupPrograms<T extends Prisma.Instructor$backupProgramsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Instructor$backupProgramsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InstructorFieldRefs {
    readonly id: Prisma.FieldRef<"Instructor", 'String'>;
    readonly userId: Prisma.FieldRef<"Instructor", 'String'>;
    readonly name: Prisma.FieldRef<"Instructor", 'String'>;
    readonly surname: Prisma.FieldRef<"Instructor", 'String'>;
    readonly isActive: Prisma.FieldRef<"Instructor", 'Boolean'>;
    readonly phoneNumber: Prisma.FieldRef<"Instructor", 'String'>;
    readonly secondaryPhoneNumber: Prisma.FieldRef<"Instructor", 'String'>;
    readonly whatsappPhoneNumber: Prisma.FieldRef<"Instructor", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Instructor", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Instructor", 'DateTime'>;
}
export type InstructorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorSelect<ExtArgs> | null;
    omit?: Prisma.InstructorOmit<ExtArgs> | null;
    include?: Prisma.InstructorInclude<ExtArgs> | null;
    where: Prisma.InstructorWhereUniqueInput;
};
export type InstructorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorSelect<ExtArgs> | null;
    omit?: Prisma.InstructorOmit<ExtArgs> | null;
    include?: Prisma.InstructorInclude<ExtArgs> | null;
    where: Prisma.InstructorWhereUniqueInput;
};
export type InstructorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorSelect<ExtArgs> | null;
    omit?: Prisma.InstructorOmit<ExtArgs> | null;
    include?: Prisma.InstructorInclude<ExtArgs> | null;
    where?: Prisma.InstructorWhereInput;
    orderBy?: Prisma.InstructorOrderByWithRelationInput | Prisma.InstructorOrderByWithRelationInput[];
    cursor?: Prisma.InstructorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InstructorScalarFieldEnum | Prisma.InstructorScalarFieldEnum[];
};
export type InstructorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorSelect<ExtArgs> | null;
    omit?: Prisma.InstructorOmit<ExtArgs> | null;
    include?: Prisma.InstructorInclude<ExtArgs> | null;
    where?: Prisma.InstructorWhereInput;
    orderBy?: Prisma.InstructorOrderByWithRelationInput | Prisma.InstructorOrderByWithRelationInput[];
    cursor?: Prisma.InstructorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InstructorScalarFieldEnum | Prisma.InstructorScalarFieldEnum[];
};
export type InstructorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorSelect<ExtArgs> | null;
    omit?: Prisma.InstructorOmit<ExtArgs> | null;
    include?: Prisma.InstructorInclude<ExtArgs> | null;
    where?: Prisma.InstructorWhereInput;
    orderBy?: Prisma.InstructorOrderByWithRelationInput | Prisma.InstructorOrderByWithRelationInput[];
    cursor?: Prisma.InstructorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InstructorScalarFieldEnum | Prisma.InstructorScalarFieldEnum[];
};
export type InstructorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorSelect<ExtArgs> | null;
    omit?: Prisma.InstructorOmit<ExtArgs> | null;
    include?: Prisma.InstructorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InstructorCreateInput, Prisma.InstructorUncheckedCreateInput>;
};
export type InstructorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InstructorCreateManyInput | Prisma.InstructorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InstructorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InstructorOmit<ExtArgs> | null;
    data: Prisma.InstructorCreateManyInput | Prisma.InstructorCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InstructorIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InstructorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorSelect<ExtArgs> | null;
    omit?: Prisma.InstructorOmit<ExtArgs> | null;
    include?: Prisma.InstructorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InstructorUpdateInput, Prisma.InstructorUncheckedUpdateInput>;
    where: Prisma.InstructorWhereUniqueInput;
};
export type InstructorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InstructorUpdateManyMutationInput, Prisma.InstructorUncheckedUpdateManyInput>;
    where?: Prisma.InstructorWhereInput;
    limit?: number;
};
export type InstructorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InstructorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InstructorUpdateManyMutationInput, Prisma.InstructorUncheckedUpdateManyInput>;
    where?: Prisma.InstructorWhereInput;
    limit?: number;
    include?: Prisma.InstructorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InstructorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorSelect<ExtArgs> | null;
    omit?: Prisma.InstructorOmit<ExtArgs> | null;
    include?: Prisma.InstructorInclude<ExtArgs> | null;
    where: Prisma.InstructorWhereUniqueInput;
    create: Prisma.XOR<Prisma.InstructorCreateInput, Prisma.InstructorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InstructorUpdateInput, Prisma.InstructorUncheckedUpdateInput>;
};
export type InstructorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorSelect<ExtArgs> | null;
    omit?: Prisma.InstructorOmit<ExtArgs> | null;
    include?: Prisma.InstructorInclude<ExtArgs> | null;
    where: Prisma.InstructorWhereUniqueInput;
};
export type InstructorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InstructorWhereInput;
    limit?: number;
};
export type Instructor$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Instructor$mainProgramsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Instructor$backupProgramsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InstructorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstructorSelect<ExtArgs> | null;
    omit?: Prisma.InstructorOmit<ExtArgs> | null;
    include?: Prisma.InstructorInclude<ExtArgs> | null;
};
export {};
