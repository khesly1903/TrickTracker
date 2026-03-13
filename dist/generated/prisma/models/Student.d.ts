import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StudentModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentPayload>;
export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
};
export type StudentMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    surname: string | null;
    type: $Enums.StudentType | null;
    dob: Date | null;
    phoneNumber: string | null;
    secondaryPhoneNumber: string | null;
    whatsappPhoneNumber: string | null;
    school: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StudentMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    surname: string | null;
    type: $Enums.StudentType | null;
    dob: Date | null;
    phoneNumber: string | null;
    secondaryPhoneNumber: string | null;
    whatsappPhoneNumber: string | null;
    school: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StudentCountAggregateOutputType = {
    id: number;
    userId: number;
    name: number;
    surname: number;
    type: number;
    dob: number;
    injuries: number;
    phoneNumber: number;
    secondaryPhoneNumber: number;
    whatsappPhoneNumber: number;
    school: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StudentMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    surname?: true;
    type?: true;
    dob?: true;
    phoneNumber?: true;
    secondaryPhoneNumber?: true;
    whatsappPhoneNumber?: true;
    school?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StudentMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    surname?: true;
    type?: true;
    dob?: true;
    phoneNumber?: true;
    secondaryPhoneNumber?: true;
    whatsappPhoneNumber?: true;
    school?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StudentCountAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    surname?: true;
    type?: true;
    dob?: true;
    injuries?: true;
    phoneNumber?: true;
    secondaryPhoneNumber?: true;
    whatsappPhoneNumber?: true;
    school?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StudentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentCountAggregateInputType;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
};
export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
    [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudent[P]> : Prisma.GetScalarType<T[P], AggregateStudent[P]>;
};
export type StudentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithAggregationInput | Prisma.StudentOrderByWithAggregationInput[];
    by: Prisma.StudentScalarFieldEnum[] | Prisma.StudentScalarFieldEnum;
    having?: Prisma.StudentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentCountAggregateInputType | true;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
};
export type StudentGroupByOutputType = {
    id: string;
    userId: string | null;
    name: string;
    surname: string;
    type: $Enums.StudentType;
    dob: Date;
    injuries: string[];
    phoneNumber: string | null;
    secondaryPhoneNumber: string | null;
    whatsappPhoneNumber: string | null;
    school: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: StudentCountAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
};
type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentGroupByOutputType[P]>;
}>>;
export type StudentWhereInput = {
    AND?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    OR?: Prisma.StudentWhereInput[];
    NOT?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    id?: Prisma.StringFilter<"Student"> | string;
    userId?: Prisma.StringNullableFilter<"Student"> | string | null;
    name?: Prisma.StringFilter<"Student"> | string;
    surname?: Prisma.StringFilter<"Student"> | string;
    type?: Prisma.EnumStudentTypeFilter<"Student"> | $Enums.StudentType;
    dob?: Prisma.DateTimeFilter<"Student"> | Date | string;
    injuries?: Prisma.StringNullableListFilter<"Student">;
    phoneNumber?: Prisma.StringNullableFilter<"Student"> | string | null;
    secondaryPhoneNumber?: Prisma.StringNullableFilter<"Student"> | string | null;
    whatsappPhoneNumber?: Prisma.StringNullableFilter<"Student"> | string | null;
    school?: Prisma.StringNullableFilter<"Student"> | string | null;
    isActive?: Prisma.BoolFilter<"Student"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Student"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Student"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    studentContacts?: Prisma.StudentContactListRelationFilter;
    studentPrograms?: Prisma.StudentProgramListRelationFilter;
    studentSkills?: Prisma.StudentSkillListRelationFilter;
};
export type StudentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    dob?: Prisma.SortOrder;
    injuries?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    secondaryPhoneNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    whatsappPhoneNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    school?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    studentContacts?: Prisma.StudentContactOrderByRelationAggregateInput;
    studentPrograms?: Prisma.StudentProgramOrderByRelationAggregateInput;
    studentSkills?: Prisma.StudentSkillOrderByRelationAggregateInput;
};
export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    OR?: Prisma.StudentWhereInput[];
    NOT?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    name?: Prisma.StringFilter<"Student"> | string;
    surname?: Prisma.StringFilter<"Student"> | string;
    type?: Prisma.EnumStudentTypeFilter<"Student"> | $Enums.StudentType;
    dob?: Prisma.DateTimeFilter<"Student"> | Date | string;
    injuries?: Prisma.StringNullableListFilter<"Student">;
    phoneNumber?: Prisma.StringNullableFilter<"Student"> | string | null;
    secondaryPhoneNumber?: Prisma.StringNullableFilter<"Student"> | string | null;
    whatsappPhoneNumber?: Prisma.StringNullableFilter<"Student"> | string | null;
    school?: Prisma.StringNullableFilter<"Student"> | string | null;
    isActive?: Prisma.BoolFilter<"Student"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Student"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Student"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    studentContacts?: Prisma.StudentContactListRelationFilter;
    studentPrograms?: Prisma.StudentProgramListRelationFilter;
    studentSkills?: Prisma.StudentSkillListRelationFilter;
}, "id" | "userId">;
export type StudentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    dob?: Prisma.SortOrder;
    injuries?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    secondaryPhoneNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    whatsappPhoneNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    school?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StudentCountOrderByAggregateInput;
    _max?: Prisma.StudentMaxOrderByAggregateInput;
    _min?: Prisma.StudentMinOrderByAggregateInput;
};
export type StudentScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentScalarWhereWithAggregatesInput | Prisma.StudentScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentScalarWhereWithAggregatesInput | Prisma.StudentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    surname?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    type?: Prisma.EnumStudentTypeWithAggregatesFilter<"Student"> | $Enums.StudentType;
    dob?: Prisma.DateTimeWithAggregatesFilter<"Student"> | Date | string;
    injuries?: Prisma.StringNullableListFilter<"Student">;
    phoneNumber?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    secondaryPhoneNumber?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    whatsappPhoneNumber?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    school?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Student"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Student"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Student"> | Date | string;
};
export type StudentCreateInput = {
    id?: string;
    name: string;
    surname: string;
    type: $Enums.StudentType;
    dob: Date | string;
    injuries?: Prisma.StudentCreateinjuriesInput | string[];
    phoneNumber?: string | null;
    secondaryPhoneNumber?: string | null;
    whatsappPhoneNumber?: string | null;
    school?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    studentContacts?: Prisma.StudentContactCreateNestedManyWithoutStudentInput;
    studentPrograms?: Prisma.StudentProgramCreateNestedManyWithoutStudentInput;
    studentSkills?: Prisma.StudentSkillCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateInput = {
    id?: string;
    userId?: string | null;
    name: string;
    surname: string;
    type: $Enums.StudentType;
    dob: Date | string;
    injuries?: Prisma.StudentCreateinjuriesInput | string[];
    phoneNumber?: string | null;
    secondaryPhoneNumber?: string | null;
    whatsappPhoneNumber?: string | null;
    school?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentContacts?: Prisma.StudentContactUncheckedCreateNestedManyWithoutStudentInput;
    studentPrograms?: Prisma.StudentProgramUncheckedCreateNestedManyWithoutStudentInput;
    studentSkills?: Prisma.StudentSkillUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStudentTypeFieldUpdateOperationsInput | $Enums.StudentType;
    dob?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    injuries?: Prisma.StudentUpdateinjuriesInput | string[];
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    school?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutStudentProfileNestedInput;
    studentContacts?: Prisma.StudentContactUpdateManyWithoutStudentNestedInput;
    studentPrograms?: Prisma.StudentProgramUpdateManyWithoutStudentNestedInput;
    studentSkills?: Prisma.StudentSkillUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStudentTypeFieldUpdateOperationsInput | $Enums.StudentType;
    dob?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    injuries?: Prisma.StudentUpdateinjuriesInput | string[];
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    school?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentContacts?: Prisma.StudentContactUncheckedUpdateManyWithoutStudentNestedInput;
    studentPrograms?: Prisma.StudentProgramUncheckedUpdateManyWithoutStudentNestedInput;
    studentSkills?: Prisma.StudentSkillUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateManyInput = {
    id?: string;
    userId?: string | null;
    name: string;
    surname: string;
    type: $Enums.StudentType;
    dob: Date | string;
    injuries?: Prisma.StudentCreateinjuriesInput | string[];
    phoneNumber?: string | null;
    secondaryPhoneNumber?: string | null;
    whatsappPhoneNumber?: string | null;
    school?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StudentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStudentTypeFieldUpdateOperationsInput | $Enums.StudentType;
    dob?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    injuries?: Prisma.StudentUpdateinjuriesInput | string[];
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    school?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStudentTypeFieldUpdateOperationsInput | $Enums.StudentType;
    dob?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    injuries?: Prisma.StudentUpdateinjuriesInput | string[];
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    school?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StudentNullableScalarRelationFilter = {
    is?: Prisma.StudentWhereInput | null;
    isNot?: Prisma.StudentWhereInput | null;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type StudentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    dob?: Prisma.SortOrder;
    injuries?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    secondaryPhoneNumber?: Prisma.SortOrder;
    whatsappPhoneNumber?: Prisma.SortOrder;
    school?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    dob?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    secondaryPhoneNumber?: Prisma.SortOrder;
    whatsappPhoneNumber?: Prisma.SortOrder;
    school?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    dob?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    secondaryPhoneNumber?: Prisma.SortOrder;
    whatsappPhoneNumber?: Prisma.SortOrder;
    school?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StudentScalarRelationFilter = {
    is?: Prisma.StudentWhereInput;
    isNot?: Prisma.StudentWhereInput;
};
export type StudentCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutUserInput, Prisma.StudentUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutUserInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutUserInput, Prisma.StudentUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutUserInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutUserInput, Prisma.StudentUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutUserInput;
    upsert?: Prisma.StudentUpsertWithoutUserInput;
    disconnect?: Prisma.StudentWhereInput | boolean;
    delete?: Prisma.StudentWhereInput | boolean;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutUserInput, Prisma.StudentUpdateWithoutUserInput>, Prisma.StudentUncheckedUpdateWithoutUserInput>;
};
export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutUserInput, Prisma.StudentUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutUserInput;
    upsert?: Prisma.StudentUpsertWithoutUserInput;
    disconnect?: Prisma.StudentWhereInput | boolean;
    delete?: Prisma.StudentWhereInput | boolean;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutUserInput, Prisma.StudentUpdateWithoutUserInput>, Prisma.StudentUncheckedUpdateWithoutUserInput>;
};
export type StudentCreateinjuriesInput = {
    set: string[];
};
export type EnumStudentTypeFieldUpdateOperationsInput = {
    set?: $Enums.StudentType;
};
export type StudentUpdateinjuriesInput = {
    set?: string[];
    push?: string | string[];
};
export type StudentCreateNestedOneWithoutStudentSkillsInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutStudentSkillsInput, Prisma.StudentUncheckedCreateWithoutStudentSkillsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutStudentSkillsInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneRequiredWithoutStudentSkillsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutStudentSkillsInput, Prisma.StudentUncheckedCreateWithoutStudentSkillsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutStudentSkillsInput;
    upsert?: Prisma.StudentUpsertWithoutStudentSkillsInput;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutStudentSkillsInput, Prisma.StudentUpdateWithoutStudentSkillsInput>, Prisma.StudentUncheckedUpdateWithoutStudentSkillsInput>;
};
export type StudentCreateNestedOneWithoutStudentProgramsInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutStudentProgramsInput, Prisma.StudentUncheckedCreateWithoutStudentProgramsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutStudentProgramsInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneRequiredWithoutStudentProgramsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutStudentProgramsInput, Prisma.StudentUncheckedCreateWithoutStudentProgramsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutStudentProgramsInput;
    upsert?: Prisma.StudentUpsertWithoutStudentProgramsInput;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutStudentProgramsInput, Prisma.StudentUpdateWithoutStudentProgramsInput>, Prisma.StudentUncheckedUpdateWithoutStudentProgramsInput>;
};
export type StudentCreateNestedOneWithoutStudentContactsInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutStudentContactsInput, Prisma.StudentUncheckedCreateWithoutStudentContactsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutStudentContactsInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneRequiredWithoutStudentContactsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutStudentContactsInput, Prisma.StudentUncheckedCreateWithoutStudentContactsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutStudentContactsInput;
    upsert?: Prisma.StudentUpsertWithoutStudentContactsInput;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutStudentContactsInput, Prisma.StudentUpdateWithoutStudentContactsInput>, Prisma.StudentUncheckedUpdateWithoutStudentContactsInput>;
};
export type StudentCreateWithoutUserInput = {
    id?: string;
    name: string;
    surname: string;
    type: $Enums.StudentType;
    dob: Date | string;
    injuries?: Prisma.StudentCreateinjuriesInput | string[];
    phoneNumber?: string | null;
    secondaryPhoneNumber?: string | null;
    whatsappPhoneNumber?: string | null;
    school?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentContacts?: Prisma.StudentContactCreateNestedManyWithoutStudentInput;
    studentPrograms?: Prisma.StudentProgramCreateNestedManyWithoutStudentInput;
    studentSkills?: Prisma.StudentSkillCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    surname: string;
    type: $Enums.StudentType;
    dob: Date | string;
    injuries?: Prisma.StudentCreateinjuriesInput | string[];
    phoneNumber?: string | null;
    secondaryPhoneNumber?: string | null;
    whatsappPhoneNumber?: string | null;
    school?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentContacts?: Prisma.StudentContactUncheckedCreateNestedManyWithoutStudentInput;
    studentPrograms?: Prisma.StudentProgramUncheckedCreateNestedManyWithoutStudentInput;
    studentSkills?: Prisma.StudentSkillUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutUserInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutUserInput, Prisma.StudentUncheckedCreateWithoutUserInput>;
};
export type StudentUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutUserInput, Prisma.StudentUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutUserInput, Prisma.StudentUncheckedCreateWithoutUserInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutUserInput, Prisma.StudentUncheckedUpdateWithoutUserInput>;
};
export type StudentUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStudentTypeFieldUpdateOperationsInput | $Enums.StudentType;
    dob?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    injuries?: Prisma.StudentUpdateinjuriesInput | string[];
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    school?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentContacts?: Prisma.StudentContactUpdateManyWithoutStudentNestedInput;
    studentPrograms?: Prisma.StudentProgramUpdateManyWithoutStudentNestedInput;
    studentSkills?: Prisma.StudentSkillUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStudentTypeFieldUpdateOperationsInput | $Enums.StudentType;
    dob?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    injuries?: Prisma.StudentUpdateinjuriesInput | string[];
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    school?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentContacts?: Prisma.StudentContactUncheckedUpdateManyWithoutStudentNestedInput;
    studentPrograms?: Prisma.StudentProgramUncheckedUpdateManyWithoutStudentNestedInput;
    studentSkills?: Prisma.StudentSkillUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateWithoutStudentSkillsInput = {
    id?: string;
    name: string;
    surname: string;
    type: $Enums.StudentType;
    dob: Date | string;
    injuries?: Prisma.StudentCreateinjuriesInput | string[];
    phoneNumber?: string | null;
    secondaryPhoneNumber?: string | null;
    whatsappPhoneNumber?: string | null;
    school?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    studentContacts?: Prisma.StudentContactCreateNestedManyWithoutStudentInput;
    studentPrograms?: Prisma.StudentProgramCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutStudentSkillsInput = {
    id?: string;
    userId?: string | null;
    name: string;
    surname: string;
    type: $Enums.StudentType;
    dob: Date | string;
    injuries?: Prisma.StudentCreateinjuriesInput | string[];
    phoneNumber?: string | null;
    secondaryPhoneNumber?: string | null;
    whatsappPhoneNumber?: string | null;
    school?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentContacts?: Prisma.StudentContactUncheckedCreateNestedManyWithoutStudentInput;
    studentPrograms?: Prisma.StudentProgramUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutStudentSkillsInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutStudentSkillsInput, Prisma.StudentUncheckedCreateWithoutStudentSkillsInput>;
};
export type StudentUpsertWithoutStudentSkillsInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutStudentSkillsInput, Prisma.StudentUncheckedUpdateWithoutStudentSkillsInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutStudentSkillsInput, Prisma.StudentUncheckedCreateWithoutStudentSkillsInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutStudentSkillsInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutStudentSkillsInput, Prisma.StudentUncheckedUpdateWithoutStudentSkillsInput>;
};
export type StudentUpdateWithoutStudentSkillsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStudentTypeFieldUpdateOperationsInput | $Enums.StudentType;
    dob?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    injuries?: Prisma.StudentUpdateinjuriesInput | string[];
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    school?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutStudentProfileNestedInput;
    studentContacts?: Prisma.StudentContactUpdateManyWithoutStudentNestedInput;
    studentPrograms?: Prisma.StudentProgramUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutStudentSkillsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStudentTypeFieldUpdateOperationsInput | $Enums.StudentType;
    dob?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    injuries?: Prisma.StudentUpdateinjuriesInput | string[];
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    school?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentContacts?: Prisma.StudentContactUncheckedUpdateManyWithoutStudentNestedInput;
    studentPrograms?: Prisma.StudentProgramUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateWithoutStudentProgramsInput = {
    id?: string;
    name: string;
    surname: string;
    type: $Enums.StudentType;
    dob: Date | string;
    injuries?: Prisma.StudentCreateinjuriesInput | string[];
    phoneNumber?: string | null;
    secondaryPhoneNumber?: string | null;
    whatsappPhoneNumber?: string | null;
    school?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    studentContacts?: Prisma.StudentContactCreateNestedManyWithoutStudentInput;
    studentSkills?: Prisma.StudentSkillCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutStudentProgramsInput = {
    id?: string;
    userId?: string | null;
    name: string;
    surname: string;
    type: $Enums.StudentType;
    dob: Date | string;
    injuries?: Prisma.StudentCreateinjuriesInput | string[];
    phoneNumber?: string | null;
    secondaryPhoneNumber?: string | null;
    whatsappPhoneNumber?: string | null;
    school?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentContacts?: Prisma.StudentContactUncheckedCreateNestedManyWithoutStudentInput;
    studentSkills?: Prisma.StudentSkillUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutStudentProgramsInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutStudentProgramsInput, Prisma.StudentUncheckedCreateWithoutStudentProgramsInput>;
};
export type StudentUpsertWithoutStudentProgramsInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutStudentProgramsInput, Prisma.StudentUncheckedUpdateWithoutStudentProgramsInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutStudentProgramsInput, Prisma.StudentUncheckedCreateWithoutStudentProgramsInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutStudentProgramsInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutStudentProgramsInput, Prisma.StudentUncheckedUpdateWithoutStudentProgramsInput>;
};
export type StudentUpdateWithoutStudentProgramsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStudentTypeFieldUpdateOperationsInput | $Enums.StudentType;
    dob?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    injuries?: Prisma.StudentUpdateinjuriesInput | string[];
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    school?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutStudentProfileNestedInput;
    studentContacts?: Prisma.StudentContactUpdateManyWithoutStudentNestedInput;
    studentSkills?: Prisma.StudentSkillUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutStudentProgramsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStudentTypeFieldUpdateOperationsInput | $Enums.StudentType;
    dob?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    injuries?: Prisma.StudentUpdateinjuriesInput | string[];
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    school?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentContacts?: Prisma.StudentContactUncheckedUpdateManyWithoutStudentNestedInput;
    studentSkills?: Prisma.StudentSkillUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateWithoutStudentContactsInput = {
    id?: string;
    name: string;
    surname: string;
    type: $Enums.StudentType;
    dob: Date | string;
    injuries?: Prisma.StudentCreateinjuriesInput | string[];
    phoneNumber?: string | null;
    secondaryPhoneNumber?: string | null;
    whatsappPhoneNumber?: string | null;
    school?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    studentPrograms?: Prisma.StudentProgramCreateNestedManyWithoutStudentInput;
    studentSkills?: Prisma.StudentSkillCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutStudentContactsInput = {
    id?: string;
    userId?: string | null;
    name: string;
    surname: string;
    type: $Enums.StudentType;
    dob: Date | string;
    injuries?: Prisma.StudentCreateinjuriesInput | string[];
    phoneNumber?: string | null;
    secondaryPhoneNumber?: string | null;
    whatsappPhoneNumber?: string | null;
    school?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentPrograms?: Prisma.StudentProgramUncheckedCreateNestedManyWithoutStudentInput;
    studentSkills?: Prisma.StudentSkillUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutStudentContactsInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutStudentContactsInput, Prisma.StudentUncheckedCreateWithoutStudentContactsInput>;
};
export type StudentUpsertWithoutStudentContactsInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutStudentContactsInput, Prisma.StudentUncheckedUpdateWithoutStudentContactsInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutStudentContactsInput, Prisma.StudentUncheckedCreateWithoutStudentContactsInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutStudentContactsInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutStudentContactsInput, Prisma.StudentUncheckedUpdateWithoutStudentContactsInput>;
};
export type StudentUpdateWithoutStudentContactsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStudentTypeFieldUpdateOperationsInput | $Enums.StudentType;
    dob?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    injuries?: Prisma.StudentUpdateinjuriesInput | string[];
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    school?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutStudentProfileNestedInput;
    studentPrograms?: Prisma.StudentProgramUpdateManyWithoutStudentNestedInput;
    studentSkills?: Prisma.StudentSkillUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutStudentContactsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumStudentTypeFieldUpdateOperationsInput | $Enums.StudentType;
    dob?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    injuries?: Prisma.StudentUpdateinjuriesInput | string[];
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    secondaryPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappPhoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    school?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentPrograms?: Prisma.StudentProgramUncheckedUpdateManyWithoutStudentNestedInput;
    studentSkills?: Prisma.StudentSkillUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCountOutputType = {
    studentContacts: number;
    studentPrograms: number;
    studentSkills: number;
};
export type StudentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    studentContacts?: boolean | StudentCountOutputTypeCountStudentContactsArgs;
    studentPrograms?: boolean | StudentCountOutputTypeCountStudentProgramsArgs;
    studentSkills?: boolean | StudentCountOutputTypeCountStudentSkillsArgs;
};
export type StudentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentCountOutputTypeSelect<ExtArgs> | null;
};
export type StudentCountOutputTypeCountStudentContactsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentContactWhereInput;
};
export type StudentCountOutputTypeCountStudentProgramsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentProgramWhereInput;
};
export type StudentCountOutputTypeCountStudentSkillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentSkillWhereInput;
};
export type StudentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    surname?: boolean;
    type?: boolean;
    dob?: boolean;
    injuries?: boolean;
    phoneNumber?: boolean;
    secondaryPhoneNumber?: boolean;
    whatsappPhoneNumber?: boolean;
    school?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.Student$userArgs<ExtArgs>;
    studentContacts?: boolean | Prisma.Student$studentContactsArgs<ExtArgs>;
    studentPrograms?: boolean | Prisma.Student$studentProgramsArgs<ExtArgs>;
    studentSkills?: boolean | Prisma.Student$studentSkillsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["student"]>;
export type StudentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    surname?: boolean;
    type?: boolean;
    dob?: boolean;
    injuries?: boolean;
    phoneNumber?: boolean;
    secondaryPhoneNumber?: boolean;
    whatsappPhoneNumber?: boolean;
    school?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.Student$userArgs<ExtArgs>;
}, ExtArgs["result"]["student"]>;
export type StudentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    surname?: boolean;
    type?: boolean;
    dob?: boolean;
    injuries?: boolean;
    phoneNumber?: boolean;
    secondaryPhoneNumber?: boolean;
    whatsappPhoneNumber?: boolean;
    school?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.Student$userArgs<ExtArgs>;
}, ExtArgs["result"]["student"]>;
export type StudentSelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    surname?: boolean;
    type?: boolean;
    dob?: boolean;
    injuries?: boolean;
    phoneNumber?: boolean;
    secondaryPhoneNumber?: boolean;
    whatsappPhoneNumber?: boolean;
    school?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StudentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "name" | "surname" | "type" | "dob" | "injuries" | "phoneNumber" | "secondaryPhoneNumber" | "whatsappPhoneNumber" | "school" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>;
export type StudentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Student$userArgs<ExtArgs>;
    studentContacts?: boolean | Prisma.Student$studentContactsArgs<ExtArgs>;
    studentPrograms?: boolean | Prisma.Student$studentProgramsArgs<ExtArgs>;
    studentSkills?: boolean | Prisma.Student$studentSkillsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StudentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Student$userArgs<ExtArgs>;
};
export type StudentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Student$userArgs<ExtArgs>;
};
export type $StudentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Student";
    objects: {
        user: Prisma.$UserPayload<ExtArgs> | null;
        studentContacts: Prisma.$StudentContactPayload<ExtArgs>[];
        studentPrograms: Prisma.$StudentProgramPayload<ExtArgs>[];
        studentSkills: Prisma.$StudentSkillPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string | null;
        name: string;
        surname: string;
        type: $Enums.StudentType;
        dob: Date;
        injuries: string[];
        phoneNumber: string | null;
        secondaryPhoneNumber: string | null;
        whatsappPhoneNumber: string | null;
        school: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["student"]>;
    composites: {};
};
export type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentPayload, S>;
export type StudentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentCountAggregateInputType | true;
};
export interface StudentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Student'];
        meta: {
            name: 'Student';
        };
    };
    findUnique<T extends StudentFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentFindManyArgs>(args?: Prisma.SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentCreateArgs>(args: Prisma.SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StudentDeleteArgs>(args: Prisma.SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentUpdateArgs>(args: Prisma.SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StudentUpsertArgs>(args: Prisma.SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentCountArgs>(args?: Prisma.Subset<T, StudentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentCountAggregateOutputType> : number>;
    aggregate<T extends StudentAggregateArgs>(args: Prisma.Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>;
    groupBy<T extends StudentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentFieldRefs;
}
export interface Prisma__StudentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.Student$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    studentContacts<T extends Prisma.Student$studentContactsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$studentContactsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    studentPrograms<T extends Prisma.Student$studentProgramsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$studentProgramsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    studentSkills<T extends Prisma.Student$studentSkillsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$studentSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentFieldRefs {
    readonly id: Prisma.FieldRef<"Student", 'String'>;
    readonly userId: Prisma.FieldRef<"Student", 'String'>;
    readonly name: Prisma.FieldRef<"Student", 'String'>;
    readonly surname: Prisma.FieldRef<"Student", 'String'>;
    readonly type: Prisma.FieldRef<"Student", 'StudentType'>;
    readonly dob: Prisma.FieldRef<"Student", 'DateTime'>;
    readonly injuries: Prisma.FieldRef<"Student", 'String[]'>;
    readonly phoneNumber: Prisma.FieldRef<"Student", 'String'>;
    readonly secondaryPhoneNumber: Prisma.FieldRef<"Student", 'String'>;
    readonly whatsappPhoneNumber: Prisma.FieldRef<"Student", 'String'>;
    readonly school: Prisma.FieldRef<"Student", 'String'>;
    readonly isActive: Prisma.FieldRef<"Student", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Student", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Student", 'DateTime'>;
}
export type StudentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentCreateInput, Prisma.StudentUncheckedCreateInput>;
};
export type StudentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentCreateManyInput | Prisma.StudentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    data: Prisma.StudentCreateManyInput | Prisma.StudentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StudentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StudentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentUpdateInput, Prisma.StudentUncheckedUpdateInput>;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyInput>;
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type StudentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyInput>;
    where?: Prisma.StudentWhereInput;
    limit?: number;
    include?: Prisma.StudentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StudentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateInput, Prisma.StudentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentUpdateInput, Prisma.StudentUncheckedUpdateInput>;
};
export type StudentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type Student$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Student$studentContactsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentContactSelect<ExtArgs> | null;
    omit?: Prisma.StudentContactOmit<ExtArgs> | null;
    include?: Prisma.StudentContactInclude<ExtArgs> | null;
    where?: Prisma.StudentContactWhereInput;
    orderBy?: Prisma.StudentContactOrderByWithRelationInput | Prisma.StudentContactOrderByWithRelationInput[];
    cursor?: Prisma.StudentContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentContactScalarFieldEnum | Prisma.StudentContactScalarFieldEnum[];
};
export type Student$studentProgramsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Student$studentSkillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
};
export {};
