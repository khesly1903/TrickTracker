import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContactModel = runtime.Types.Result.DefaultSelection<Prisma.$ContactPayload>;
export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null;
    _min: ContactMinAggregateOutputType | null;
    _max: ContactMaxAggregateOutputType | null;
};
export type ContactMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    surname: string | null;
    type: $Enums.ContactTypes | null;
    phoneNumber: string | null;
    secondaryPhoneNumber: string | null;
    whatsappPhoneNumber: string | null;
    email: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ContactMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    surname: string | null;
    type: $Enums.ContactTypes | null;
    phoneNumber: string | null;
    secondaryPhoneNumber: string | null;
    whatsappPhoneNumber: string | null;
    email: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ContactCountAggregateOutputType = {
    id: number;
    userId: number;
    name: number;
    surname: number;
    type: number;
    phoneNumber: number;
    secondaryPhoneNumber: number;
    whatsappPhoneNumber: number;
    email: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ContactMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    surname?: true;
    type?: true;
    phoneNumber?: true;
    secondaryPhoneNumber?: true;
    whatsappPhoneNumber?: true;
    email?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ContactMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    surname?: true;
    type?: true;
    phoneNumber?: true;
    secondaryPhoneNumber?: true;
    whatsappPhoneNumber?: true;
    email?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ContactCountAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    surname?: true;
    type?: true;
    phoneNumber?: true;
    secondaryPhoneNumber?: true;
    whatsappPhoneNumber?: true;
    email?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ContactAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithRelationInput | Prisma.ContactOrderByWithRelationInput[];
    cursor?: Prisma.ContactWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContactCountAggregateInputType;
    _min?: ContactMinAggregateInputType;
    _max?: ContactMaxAggregateInputType;
};
export type GetContactAggregateType<T extends ContactAggregateArgs> = {
    [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContact[P]> : Prisma.GetScalarType<T[P], AggregateContact[P]>;
};
export type ContactGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithAggregationInput | Prisma.ContactOrderByWithAggregationInput[];
    by: Prisma.ContactScalarFieldEnum[] | Prisma.ContactScalarFieldEnum;
    having?: Prisma.ContactScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContactCountAggregateInputType | true;
    _min?: ContactMinAggregateInputType;
    _max?: ContactMaxAggregateInputType;
};
export type ContactGroupByOutputType = {
    id: string;
    userId: string | null;
    name: string;
    surname: string;
    type: $Enums.ContactTypes;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    email: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ContactCountAggregateOutputType | null;
    _min: ContactMinAggregateOutputType | null;
    _max: ContactMaxAggregateOutputType | null;
};
type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContactGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContactGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContactGroupByOutputType[P]>;
}>>;
export type ContactWhereInput = {
    AND?: Prisma.ContactWhereInput | Prisma.ContactWhereInput[];
    OR?: Prisma.ContactWhereInput[];
    NOT?: Prisma.ContactWhereInput | Prisma.ContactWhereInput[];
    id?: Prisma.StringFilter<"Contact"> | string;
    userId?: Prisma.StringNullableFilter<"Contact"> | string | null;
    name?: Prisma.StringFilter<"Contact"> | string;
    surname?: Prisma.StringFilter<"Contact"> | string;
    type?: Prisma.EnumContactTypesFilter<"Contact"> | $Enums.ContactTypes;
    phoneNumber?: Prisma.StringFilter<"Contact"> | string;
    secondaryPhoneNumber?: Prisma.StringFilter<"Contact"> | string;
    whatsappPhoneNumber?: Prisma.StringFilter<"Contact"> | string;
    email?: Prisma.StringNullableFilter<"Contact"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Contact"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Contact"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    studentContacts?: Prisma.StudentContactListRelationFilter;
};
export type ContactOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    secondaryPhoneNumber?: Prisma.SortOrder;
    whatsappPhoneNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    studentContacts?: Prisma.StudentContactOrderByRelationAggregateInput;
};
export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    email?: string;
    AND?: Prisma.ContactWhereInput | Prisma.ContactWhereInput[];
    OR?: Prisma.ContactWhereInput[];
    NOT?: Prisma.ContactWhereInput | Prisma.ContactWhereInput[];
    name?: Prisma.StringFilter<"Contact"> | string;
    surname?: Prisma.StringFilter<"Contact"> | string;
    type?: Prisma.EnumContactTypesFilter<"Contact"> | $Enums.ContactTypes;
    phoneNumber?: Prisma.StringFilter<"Contact"> | string;
    secondaryPhoneNumber?: Prisma.StringFilter<"Contact"> | string;
    whatsappPhoneNumber?: Prisma.StringFilter<"Contact"> | string;
    createdAt?: Prisma.DateTimeFilter<"Contact"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Contact"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    studentContacts?: Prisma.StudentContactListRelationFilter;
}, "id" | "userId" | "email">;
export type ContactOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    secondaryPhoneNumber?: Prisma.SortOrder;
    whatsappPhoneNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ContactCountOrderByAggregateInput;
    _max?: Prisma.ContactMaxOrderByAggregateInput;
    _min?: Prisma.ContactMinOrderByAggregateInput;
};
export type ContactScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContactScalarWhereWithAggregatesInput | Prisma.ContactScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContactScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContactScalarWhereWithAggregatesInput | Prisma.ContactScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Contact"> | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"Contact"> | string;
    surname?: Prisma.StringWithAggregatesFilter<"Contact"> | string;
    type?: Prisma.EnumContactTypesWithAggregatesFilter<"Contact"> | $Enums.ContactTypes;
    phoneNumber?: Prisma.StringWithAggregatesFilter<"Contact"> | string;
    secondaryPhoneNumber?: Prisma.StringWithAggregatesFilter<"Contact"> | string;
    whatsappPhoneNumber?: Prisma.StringWithAggregatesFilter<"Contact"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Contact"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Contact"> | Date | string;
};
export type ContactCreateInput = {
    id?: string;
    name: string;
    surname: string;
    type?: $Enums.ContactTypes;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    email?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutContactProfileInput;
    studentContacts?: Prisma.StudentContactCreateNestedManyWithoutContactInput;
};
export type ContactUncheckedCreateInput = {
    id?: string;
    userId?: string | null;
    name: string;
    surname: string;
    type?: $Enums.ContactTypes;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    email?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentContacts?: Prisma.StudentContactUncheckedCreateNestedManyWithoutContactInput;
};
export type ContactUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContactTypesFieldUpdateOperationsInput | $Enums.ContactTypes;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutContactProfileNestedInput;
    studentContacts?: Prisma.StudentContactUpdateManyWithoutContactNestedInput;
};
export type ContactUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContactTypesFieldUpdateOperationsInput | $Enums.ContactTypes;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentContacts?: Prisma.StudentContactUncheckedUpdateManyWithoutContactNestedInput;
};
export type ContactCreateManyInput = {
    id?: string;
    userId?: string | null;
    name: string;
    surname: string;
    type?: $Enums.ContactTypes;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    email?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ContactUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContactTypesFieldUpdateOperationsInput | $Enums.ContactTypes;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContactTypesFieldUpdateOperationsInput | $Enums.ContactTypes;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactNullableScalarRelationFilter = {
    is?: Prisma.ContactWhereInput | null;
    isNot?: Prisma.ContactWhereInput | null;
};
export type ContactCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    secondaryPhoneNumber?: Prisma.SortOrder;
    whatsappPhoneNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ContactMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    secondaryPhoneNumber?: Prisma.SortOrder;
    whatsappPhoneNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ContactMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    surname?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    secondaryPhoneNumber?: Prisma.SortOrder;
    whatsappPhoneNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ContactScalarRelationFilter = {
    is?: Prisma.ContactWhereInput;
    isNot?: Prisma.ContactWhereInput;
};
export type ContactCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutUserInput, Prisma.ContactUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutUserInput;
    connect?: Prisma.ContactWhereUniqueInput;
};
export type ContactUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutUserInput, Prisma.ContactUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutUserInput;
    connect?: Prisma.ContactWhereUniqueInput;
};
export type ContactUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutUserInput, Prisma.ContactUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ContactUpsertWithoutUserInput;
    disconnect?: Prisma.ContactWhereInput | boolean;
    delete?: Prisma.ContactWhereInput | boolean;
    connect?: Prisma.ContactWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContactUpdateToOneWithWhereWithoutUserInput, Prisma.ContactUpdateWithoutUserInput>, Prisma.ContactUncheckedUpdateWithoutUserInput>;
};
export type ContactUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutUserInput, Prisma.ContactUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ContactUpsertWithoutUserInput;
    disconnect?: Prisma.ContactWhereInput | boolean;
    delete?: Prisma.ContactWhereInput | boolean;
    connect?: Prisma.ContactWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContactUpdateToOneWithWhereWithoutUserInput, Prisma.ContactUpdateWithoutUserInput>, Prisma.ContactUncheckedUpdateWithoutUserInput>;
};
export type EnumContactTypesFieldUpdateOperationsInput = {
    set?: $Enums.ContactTypes;
};
export type ContactCreateNestedOneWithoutStudentContactsInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutStudentContactsInput, Prisma.ContactUncheckedCreateWithoutStudentContactsInput>;
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutStudentContactsInput;
    connect?: Prisma.ContactWhereUniqueInput;
};
export type ContactUpdateOneRequiredWithoutStudentContactsNestedInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutStudentContactsInput, Prisma.ContactUncheckedCreateWithoutStudentContactsInput>;
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutStudentContactsInput;
    upsert?: Prisma.ContactUpsertWithoutStudentContactsInput;
    connect?: Prisma.ContactWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContactUpdateToOneWithWhereWithoutStudentContactsInput, Prisma.ContactUpdateWithoutStudentContactsInput>, Prisma.ContactUncheckedUpdateWithoutStudentContactsInput>;
};
export type ContactCreateWithoutUserInput = {
    id?: string;
    name: string;
    surname: string;
    type?: $Enums.ContactTypes;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    email?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentContacts?: Prisma.StudentContactCreateNestedManyWithoutContactInput;
};
export type ContactUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    surname: string;
    type?: $Enums.ContactTypes;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    email?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    studentContacts?: Prisma.StudentContactUncheckedCreateNestedManyWithoutContactInput;
};
export type ContactCreateOrConnectWithoutUserInput = {
    where: Prisma.ContactWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactCreateWithoutUserInput, Prisma.ContactUncheckedCreateWithoutUserInput>;
};
export type ContactUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.ContactUpdateWithoutUserInput, Prisma.ContactUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ContactCreateWithoutUserInput, Prisma.ContactUncheckedCreateWithoutUserInput>;
    where?: Prisma.ContactWhereInput;
};
export type ContactUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.ContactWhereInput;
    data: Prisma.XOR<Prisma.ContactUpdateWithoutUserInput, Prisma.ContactUncheckedUpdateWithoutUserInput>;
};
export type ContactUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContactTypesFieldUpdateOperationsInput | $Enums.ContactTypes;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentContacts?: Prisma.StudentContactUpdateManyWithoutContactNestedInput;
};
export type ContactUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContactTypesFieldUpdateOperationsInput | $Enums.ContactTypes;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    studentContacts?: Prisma.StudentContactUncheckedUpdateManyWithoutContactNestedInput;
};
export type ContactCreateWithoutStudentContactsInput = {
    id?: string;
    name: string;
    surname: string;
    type?: $Enums.ContactTypes;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    email?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutContactProfileInput;
};
export type ContactUncheckedCreateWithoutStudentContactsInput = {
    id?: string;
    userId?: string | null;
    name: string;
    surname: string;
    type?: $Enums.ContactTypes;
    phoneNumber: string;
    secondaryPhoneNumber: string;
    whatsappPhoneNumber: string;
    email?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ContactCreateOrConnectWithoutStudentContactsInput = {
    where: Prisma.ContactWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactCreateWithoutStudentContactsInput, Prisma.ContactUncheckedCreateWithoutStudentContactsInput>;
};
export type ContactUpsertWithoutStudentContactsInput = {
    update: Prisma.XOR<Prisma.ContactUpdateWithoutStudentContactsInput, Prisma.ContactUncheckedUpdateWithoutStudentContactsInput>;
    create: Prisma.XOR<Prisma.ContactCreateWithoutStudentContactsInput, Prisma.ContactUncheckedCreateWithoutStudentContactsInput>;
    where?: Prisma.ContactWhereInput;
};
export type ContactUpdateToOneWithWhereWithoutStudentContactsInput = {
    where?: Prisma.ContactWhereInput;
    data: Prisma.XOR<Prisma.ContactUpdateWithoutStudentContactsInput, Prisma.ContactUncheckedUpdateWithoutStudentContactsInput>;
};
export type ContactUpdateWithoutStudentContactsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContactTypesFieldUpdateOperationsInput | $Enums.ContactTypes;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutContactProfileNestedInput;
};
export type ContactUncheckedUpdateWithoutStudentContactsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    surname?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContactTypesFieldUpdateOperationsInput | $Enums.ContactTypes;
    phoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    secondaryPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    whatsappPhoneNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactCountOutputType = {
    studentContacts: number;
};
export type ContactCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    studentContacts?: boolean | ContactCountOutputTypeCountStudentContactsArgs;
};
export type ContactCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactCountOutputTypeSelect<ExtArgs> | null;
};
export type ContactCountOutputTypeCountStudentContactsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentContactWhereInput;
};
export type ContactSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    surname?: boolean;
    type?: boolean;
    phoneNumber?: boolean;
    secondaryPhoneNumber?: boolean;
    whatsappPhoneNumber?: boolean;
    email?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.Contact$userArgs<ExtArgs>;
    studentContacts?: boolean | Prisma.Contact$studentContactsArgs<ExtArgs>;
    _count?: boolean | Prisma.ContactCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contact"]>;
export type ContactSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    surname?: boolean;
    type?: boolean;
    phoneNumber?: boolean;
    secondaryPhoneNumber?: boolean;
    whatsappPhoneNumber?: boolean;
    email?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.Contact$userArgs<ExtArgs>;
}, ExtArgs["result"]["contact"]>;
export type ContactSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    surname?: boolean;
    type?: boolean;
    phoneNumber?: boolean;
    secondaryPhoneNumber?: boolean;
    whatsappPhoneNumber?: boolean;
    email?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.Contact$userArgs<ExtArgs>;
}, ExtArgs["result"]["contact"]>;
export type ContactSelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    surname?: boolean;
    type?: boolean;
    phoneNumber?: boolean;
    secondaryPhoneNumber?: boolean;
    whatsappPhoneNumber?: boolean;
    email?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ContactOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "name" | "surname" | "type" | "phoneNumber" | "secondaryPhoneNumber" | "whatsappPhoneNumber" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["contact"]>;
export type ContactInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Contact$userArgs<ExtArgs>;
    studentContacts?: boolean | Prisma.Contact$studentContactsArgs<ExtArgs>;
    _count?: boolean | Prisma.ContactCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ContactIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Contact$userArgs<ExtArgs>;
};
export type ContactIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Contact$userArgs<ExtArgs>;
};
export type $ContactPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Contact";
    objects: {
        user: Prisma.$UserPayload<ExtArgs> | null;
        studentContacts: Prisma.$StudentContactPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string | null;
        name: string;
        surname: string;
        type: $Enums.ContactTypes;
        phoneNumber: string;
        secondaryPhoneNumber: string;
        whatsappPhoneNumber: string;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["contact"]>;
    composites: {};
};
export type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContactPayload, S>;
export type ContactCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContactCountAggregateInputType | true;
};
export interface ContactDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Contact'];
        meta: {
            name: 'Contact';
        };
    };
    findUnique<T extends ContactFindUniqueArgs>(args: Prisma.SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContactFindFirstArgs>(args?: Prisma.SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContactFindManyArgs>(args?: Prisma.SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContactCreateArgs>(args: Prisma.SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContactCreateManyArgs>(args?: Prisma.SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContactDeleteArgs>(args: Prisma.SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContactUpdateArgs>(args: Prisma.SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContactDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContactUpdateManyArgs>(args: Prisma.SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContactUpsertArgs>(args: Prisma.SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContactCountArgs>(args?: Prisma.Subset<T, ContactCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContactCountAggregateOutputType> : number>;
    aggregate<T extends ContactAggregateArgs>(args: Prisma.Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>;
    groupBy<T extends ContactGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContactGroupByArgs['orderBy'];
    } : {
        orderBy?: ContactGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContactFieldRefs;
}
export interface Prisma__ContactClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.Contact$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Contact$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    studentContacts<T extends Prisma.Contact$studentContactsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Contact$studentContactsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContactFieldRefs {
    readonly id: Prisma.FieldRef<"Contact", 'String'>;
    readonly userId: Prisma.FieldRef<"Contact", 'String'>;
    readonly name: Prisma.FieldRef<"Contact", 'String'>;
    readonly surname: Prisma.FieldRef<"Contact", 'String'>;
    readonly type: Prisma.FieldRef<"Contact", 'ContactTypes'>;
    readonly phoneNumber: Prisma.FieldRef<"Contact", 'String'>;
    readonly secondaryPhoneNumber: Prisma.FieldRef<"Contact", 'String'>;
    readonly whatsappPhoneNumber: Prisma.FieldRef<"Contact", 'String'>;
    readonly email: Prisma.FieldRef<"Contact", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Contact", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Contact", 'DateTime'>;
}
export type ContactFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where: Prisma.ContactWhereUniqueInput;
};
export type ContactFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where: Prisma.ContactWhereUniqueInput;
};
export type ContactFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithRelationInput | Prisma.ContactOrderByWithRelationInput[];
    cursor?: Prisma.ContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactScalarFieldEnum | Prisma.ContactScalarFieldEnum[];
};
export type ContactFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithRelationInput | Prisma.ContactOrderByWithRelationInput[];
    cursor?: Prisma.ContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactScalarFieldEnum | Prisma.ContactScalarFieldEnum[];
};
export type ContactFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithRelationInput | Prisma.ContactOrderByWithRelationInput[];
    cursor?: Prisma.ContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactScalarFieldEnum | Prisma.ContactScalarFieldEnum[];
};
export type ContactCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactCreateInput, Prisma.ContactUncheckedCreateInput>;
};
export type ContactCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContactCreateManyInput | Prisma.ContactCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContactCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    data: Prisma.ContactCreateManyInput | Prisma.ContactCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContactIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContactUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactUpdateInput, Prisma.ContactUncheckedUpdateInput>;
    where: Prisma.ContactWhereUniqueInput;
};
export type ContactUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContactUpdateManyMutationInput, Prisma.ContactUncheckedUpdateManyInput>;
    where?: Prisma.ContactWhereInput;
    limit?: number;
};
export type ContactUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactUpdateManyMutationInput, Prisma.ContactUncheckedUpdateManyInput>;
    where?: Prisma.ContactWhereInput;
    limit?: number;
    include?: Prisma.ContactIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContactUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where: Prisma.ContactWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactCreateInput, Prisma.ContactUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContactUpdateInput, Prisma.ContactUncheckedUpdateInput>;
};
export type ContactDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where: Prisma.ContactWhereUniqueInput;
};
export type ContactDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactWhereInput;
    limit?: number;
};
export type Contact$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Contact$studentContactsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContactDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
};
export {};
