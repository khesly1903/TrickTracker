import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProgramScheduleModel = runtime.Types.Result.DefaultSelection<Prisma.$ProgramSchedulePayload>;
export type AggregateProgramSchedule = {
    _count: ProgramScheduleCountAggregateOutputType | null;
    _avg: ProgramScheduleAvgAggregateOutputType | null;
    _sum: ProgramScheduleSumAggregateOutputType | null;
    _min: ProgramScheduleMinAggregateOutputType | null;
    _max: ProgramScheduleMaxAggregateOutputType | null;
};
export type ProgramScheduleAvgAggregateOutputType = {
    duration: number | null;
};
export type ProgramScheduleSumAggregateOutputType = {
    duration: number | null;
};
export type ProgramScheduleMinAggregateOutputType = {
    id: string | null;
    dayOfWeek: $Enums.DayOfWeek | null;
    startTime: Date | null;
    duration: number | null;
    endTime: Date | null;
    type: $Enums.ScheduleType | null;
    programId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProgramScheduleMaxAggregateOutputType = {
    id: string | null;
    dayOfWeek: $Enums.DayOfWeek | null;
    startTime: Date | null;
    duration: number | null;
    endTime: Date | null;
    type: $Enums.ScheduleType | null;
    programId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProgramScheduleCountAggregateOutputType = {
    id: number;
    dayOfWeek: number;
    startTime: number;
    duration: number;
    endTime: number;
    type: number;
    programId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProgramScheduleAvgAggregateInputType = {
    duration?: true;
};
export type ProgramScheduleSumAggregateInputType = {
    duration?: true;
};
export type ProgramScheduleMinAggregateInputType = {
    id?: true;
    dayOfWeek?: true;
    startTime?: true;
    duration?: true;
    endTime?: true;
    type?: true;
    programId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProgramScheduleMaxAggregateInputType = {
    id?: true;
    dayOfWeek?: true;
    startTime?: true;
    duration?: true;
    endTime?: true;
    type?: true;
    programId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProgramScheduleCountAggregateInputType = {
    id?: true;
    dayOfWeek?: true;
    startTime?: true;
    duration?: true;
    endTime?: true;
    type?: true;
    programId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProgramScheduleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramScheduleWhereInput;
    orderBy?: Prisma.ProgramScheduleOrderByWithRelationInput | Prisma.ProgramScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ProgramScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProgramScheduleCountAggregateInputType;
    _avg?: ProgramScheduleAvgAggregateInputType;
    _sum?: ProgramScheduleSumAggregateInputType;
    _min?: ProgramScheduleMinAggregateInputType;
    _max?: ProgramScheduleMaxAggregateInputType;
};
export type GetProgramScheduleAggregateType<T extends ProgramScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateProgramSchedule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProgramSchedule[P]> : Prisma.GetScalarType<T[P], AggregateProgramSchedule[P]>;
};
export type ProgramScheduleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramScheduleWhereInput;
    orderBy?: Prisma.ProgramScheduleOrderByWithAggregationInput | Prisma.ProgramScheduleOrderByWithAggregationInput[];
    by: Prisma.ProgramScheduleScalarFieldEnum[] | Prisma.ProgramScheduleScalarFieldEnum;
    having?: Prisma.ProgramScheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProgramScheduleCountAggregateInputType | true;
    _avg?: ProgramScheduleAvgAggregateInputType;
    _sum?: ProgramScheduleSumAggregateInputType;
    _min?: ProgramScheduleMinAggregateInputType;
    _max?: ProgramScheduleMaxAggregateInputType;
};
export type ProgramScheduleGroupByOutputType = {
    id: string;
    dayOfWeek: $Enums.DayOfWeek;
    startTime: Date;
    duration: number;
    endTime: Date | null;
    type: $Enums.ScheduleType;
    programId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ProgramScheduleCountAggregateOutputType | null;
    _avg: ProgramScheduleAvgAggregateOutputType | null;
    _sum: ProgramScheduleSumAggregateOutputType | null;
    _min: ProgramScheduleMinAggregateOutputType | null;
    _max: ProgramScheduleMaxAggregateOutputType | null;
};
type GetProgramScheduleGroupByPayload<T extends ProgramScheduleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProgramScheduleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProgramScheduleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProgramScheduleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProgramScheduleGroupByOutputType[P]>;
}>>;
export type ProgramScheduleWhereInput = {
    AND?: Prisma.ProgramScheduleWhereInput | Prisma.ProgramScheduleWhereInput[];
    OR?: Prisma.ProgramScheduleWhereInput[];
    NOT?: Prisma.ProgramScheduleWhereInput | Prisma.ProgramScheduleWhereInput[];
    id?: Prisma.StringFilter<"ProgramSchedule"> | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFilter<"ProgramSchedule"> | $Enums.DayOfWeek;
    startTime?: Prisma.DateTimeFilter<"ProgramSchedule"> | Date | string;
    duration?: Prisma.IntFilter<"ProgramSchedule"> | number;
    endTime?: Prisma.DateTimeNullableFilter<"ProgramSchedule"> | Date | string | null;
    type?: Prisma.EnumScheduleTypeFilter<"ProgramSchedule"> | $Enums.ScheduleType;
    programId?: Prisma.StringFilter<"ProgramSchedule"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProgramSchedule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProgramSchedule"> | Date | string;
    program?: Prisma.XOR<Prisma.ProgramScalarRelationFilter, Prisma.ProgramWhereInput>;
};
export type ProgramScheduleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    endTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    programId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    program?: Prisma.ProgramOrderByWithRelationInput;
};
export type ProgramScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProgramScheduleWhereInput | Prisma.ProgramScheduleWhereInput[];
    OR?: Prisma.ProgramScheduleWhereInput[];
    NOT?: Prisma.ProgramScheduleWhereInput | Prisma.ProgramScheduleWhereInput[];
    dayOfWeek?: Prisma.EnumDayOfWeekFilter<"ProgramSchedule"> | $Enums.DayOfWeek;
    startTime?: Prisma.DateTimeFilter<"ProgramSchedule"> | Date | string;
    duration?: Prisma.IntFilter<"ProgramSchedule"> | number;
    endTime?: Prisma.DateTimeNullableFilter<"ProgramSchedule"> | Date | string | null;
    type?: Prisma.EnumScheduleTypeFilter<"ProgramSchedule"> | $Enums.ScheduleType;
    programId?: Prisma.StringFilter<"ProgramSchedule"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProgramSchedule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProgramSchedule"> | Date | string;
    program?: Prisma.XOR<Prisma.ProgramScalarRelationFilter, Prisma.ProgramWhereInput>;
}, "id">;
export type ProgramScheduleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    endTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    programId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProgramScheduleCountOrderByAggregateInput;
    _avg?: Prisma.ProgramScheduleAvgOrderByAggregateInput;
    _max?: Prisma.ProgramScheduleMaxOrderByAggregateInput;
    _min?: Prisma.ProgramScheduleMinOrderByAggregateInput;
    _sum?: Prisma.ProgramScheduleSumOrderByAggregateInput;
};
export type ProgramScheduleScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProgramScheduleScalarWhereWithAggregatesInput | Prisma.ProgramScheduleScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProgramScheduleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProgramScheduleScalarWhereWithAggregatesInput | Prisma.ProgramScheduleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProgramSchedule"> | string;
    dayOfWeek?: Prisma.EnumDayOfWeekWithAggregatesFilter<"ProgramSchedule"> | $Enums.DayOfWeek;
    startTime?: Prisma.DateTimeWithAggregatesFilter<"ProgramSchedule"> | Date | string;
    duration?: Prisma.IntWithAggregatesFilter<"ProgramSchedule"> | number;
    endTime?: Prisma.DateTimeNullableWithAggregatesFilter<"ProgramSchedule"> | Date | string | null;
    type?: Prisma.EnumScheduleTypeWithAggregatesFilter<"ProgramSchedule"> | $Enums.ScheduleType;
    programId?: Prisma.StringWithAggregatesFilter<"ProgramSchedule"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProgramSchedule"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ProgramSchedule"> | Date | string;
};
export type ProgramScheduleCreateInput = {
    id?: string;
    dayOfWeek: $Enums.DayOfWeek;
    startTime: Date | string;
    duration: number;
    endTime?: Date | string | null;
    type: $Enums.ScheduleType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    program: Prisma.ProgramCreateNestedOneWithoutProgramSchedulesInput;
};
export type ProgramScheduleUncheckedCreateInput = {
    id?: string;
    dayOfWeek: $Enums.DayOfWeek;
    startTime: Date | string;
    duration: number;
    endTime?: Date | string | null;
    type: $Enums.ScheduleType;
    programId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProgramScheduleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumScheduleTypeFieldUpdateOperationsInput | $Enums.ScheduleType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    program?: Prisma.ProgramUpdateOneRequiredWithoutProgramSchedulesNestedInput;
};
export type ProgramScheduleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumScheduleTypeFieldUpdateOperationsInput | $Enums.ScheduleType;
    programId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgramScheduleCreateManyInput = {
    id?: string;
    dayOfWeek: $Enums.DayOfWeek;
    startTime: Date | string;
    duration: number;
    endTime?: Date | string | null;
    type: $Enums.ScheduleType;
    programId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProgramScheduleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumScheduleTypeFieldUpdateOperationsInput | $Enums.ScheduleType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgramScheduleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumScheduleTypeFieldUpdateOperationsInput | $Enums.ScheduleType;
    programId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgramScheduleListRelationFilter = {
    every?: Prisma.ProgramScheduleWhereInput;
    some?: Prisma.ProgramScheduleWhereInput;
    none?: Prisma.ProgramScheduleWhereInput;
};
export type ProgramScheduleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProgramScheduleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    programId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProgramScheduleAvgOrderByAggregateInput = {
    duration?: Prisma.SortOrder;
};
export type ProgramScheduleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    programId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProgramScheduleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    programId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProgramScheduleSumOrderByAggregateInput = {
    duration?: Prisma.SortOrder;
};
export type ProgramScheduleCreateNestedManyWithoutProgramInput = {
    create?: Prisma.XOR<Prisma.ProgramScheduleCreateWithoutProgramInput, Prisma.ProgramScheduleUncheckedCreateWithoutProgramInput> | Prisma.ProgramScheduleCreateWithoutProgramInput[] | Prisma.ProgramScheduleUncheckedCreateWithoutProgramInput[];
    connectOrCreate?: Prisma.ProgramScheduleCreateOrConnectWithoutProgramInput | Prisma.ProgramScheduleCreateOrConnectWithoutProgramInput[];
    createMany?: Prisma.ProgramScheduleCreateManyProgramInputEnvelope;
    connect?: Prisma.ProgramScheduleWhereUniqueInput | Prisma.ProgramScheduleWhereUniqueInput[];
};
export type ProgramScheduleUncheckedCreateNestedManyWithoutProgramInput = {
    create?: Prisma.XOR<Prisma.ProgramScheduleCreateWithoutProgramInput, Prisma.ProgramScheduleUncheckedCreateWithoutProgramInput> | Prisma.ProgramScheduleCreateWithoutProgramInput[] | Prisma.ProgramScheduleUncheckedCreateWithoutProgramInput[];
    connectOrCreate?: Prisma.ProgramScheduleCreateOrConnectWithoutProgramInput | Prisma.ProgramScheduleCreateOrConnectWithoutProgramInput[];
    createMany?: Prisma.ProgramScheduleCreateManyProgramInputEnvelope;
    connect?: Prisma.ProgramScheduleWhereUniqueInput | Prisma.ProgramScheduleWhereUniqueInput[];
};
export type ProgramScheduleUpdateManyWithoutProgramNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramScheduleCreateWithoutProgramInput, Prisma.ProgramScheduleUncheckedCreateWithoutProgramInput> | Prisma.ProgramScheduleCreateWithoutProgramInput[] | Prisma.ProgramScheduleUncheckedCreateWithoutProgramInput[];
    connectOrCreate?: Prisma.ProgramScheduleCreateOrConnectWithoutProgramInput | Prisma.ProgramScheduleCreateOrConnectWithoutProgramInput[];
    upsert?: Prisma.ProgramScheduleUpsertWithWhereUniqueWithoutProgramInput | Prisma.ProgramScheduleUpsertWithWhereUniqueWithoutProgramInput[];
    createMany?: Prisma.ProgramScheduleCreateManyProgramInputEnvelope;
    set?: Prisma.ProgramScheduleWhereUniqueInput | Prisma.ProgramScheduleWhereUniqueInput[];
    disconnect?: Prisma.ProgramScheduleWhereUniqueInput | Prisma.ProgramScheduleWhereUniqueInput[];
    delete?: Prisma.ProgramScheduleWhereUniqueInput | Prisma.ProgramScheduleWhereUniqueInput[];
    connect?: Prisma.ProgramScheduleWhereUniqueInput | Prisma.ProgramScheduleWhereUniqueInput[];
    update?: Prisma.ProgramScheduleUpdateWithWhereUniqueWithoutProgramInput | Prisma.ProgramScheduleUpdateWithWhereUniqueWithoutProgramInput[];
    updateMany?: Prisma.ProgramScheduleUpdateManyWithWhereWithoutProgramInput | Prisma.ProgramScheduleUpdateManyWithWhereWithoutProgramInput[];
    deleteMany?: Prisma.ProgramScheduleScalarWhereInput | Prisma.ProgramScheduleScalarWhereInput[];
};
export type ProgramScheduleUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramScheduleCreateWithoutProgramInput, Prisma.ProgramScheduleUncheckedCreateWithoutProgramInput> | Prisma.ProgramScheduleCreateWithoutProgramInput[] | Prisma.ProgramScheduleUncheckedCreateWithoutProgramInput[];
    connectOrCreate?: Prisma.ProgramScheduleCreateOrConnectWithoutProgramInput | Prisma.ProgramScheduleCreateOrConnectWithoutProgramInput[];
    upsert?: Prisma.ProgramScheduleUpsertWithWhereUniqueWithoutProgramInput | Prisma.ProgramScheduleUpsertWithWhereUniqueWithoutProgramInput[];
    createMany?: Prisma.ProgramScheduleCreateManyProgramInputEnvelope;
    set?: Prisma.ProgramScheduleWhereUniqueInput | Prisma.ProgramScheduleWhereUniqueInput[];
    disconnect?: Prisma.ProgramScheduleWhereUniqueInput | Prisma.ProgramScheduleWhereUniqueInput[];
    delete?: Prisma.ProgramScheduleWhereUniqueInput | Prisma.ProgramScheduleWhereUniqueInput[];
    connect?: Prisma.ProgramScheduleWhereUniqueInput | Prisma.ProgramScheduleWhereUniqueInput[];
    update?: Prisma.ProgramScheduleUpdateWithWhereUniqueWithoutProgramInput | Prisma.ProgramScheduleUpdateWithWhereUniqueWithoutProgramInput[];
    updateMany?: Prisma.ProgramScheduleUpdateManyWithWhereWithoutProgramInput | Prisma.ProgramScheduleUpdateManyWithWhereWithoutProgramInput[];
    deleteMany?: Prisma.ProgramScheduleScalarWhereInput | Prisma.ProgramScheduleScalarWhereInput[];
};
export type EnumDayOfWeekFieldUpdateOperationsInput = {
    set?: $Enums.DayOfWeek;
};
export type EnumScheduleTypeFieldUpdateOperationsInput = {
    set?: $Enums.ScheduleType;
};
export type ProgramScheduleCreateWithoutProgramInput = {
    id?: string;
    dayOfWeek: $Enums.DayOfWeek;
    startTime: Date | string;
    duration: number;
    endTime?: Date | string | null;
    type: $Enums.ScheduleType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProgramScheduleUncheckedCreateWithoutProgramInput = {
    id?: string;
    dayOfWeek: $Enums.DayOfWeek;
    startTime: Date | string;
    duration: number;
    endTime?: Date | string | null;
    type: $Enums.ScheduleType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProgramScheduleCreateOrConnectWithoutProgramInput = {
    where: Prisma.ProgramScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgramScheduleCreateWithoutProgramInput, Prisma.ProgramScheduleUncheckedCreateWithoutProgramInput>;
};
export type ProgramScheduleCreateManyProgramInputEnvelope = {
    data: Prisma.ProgramScheduleCreateManyProgramInput | Prisma.ProgramScheduleCreateManyProgramInput[];
    skipDuplicates?: boolean;
};
export type ProgramScheduleUpsertWithWhereUniqueWithoutProgramInput = {
    where: Prisma.ProgramScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProgramScheduleUpdateWithoutProgramInput, Prisma.ProgramScheduleUncheckedUpdateWithoutProgramInput>;
    create: Prisma.XOR<Prisma.ProgramScheduleCreateWithoutProgramInput, Prisma.ProgramScheduleUncheckedCreateWithoutProgramInput>;
};
export type ProgramScheduleUpdateWithWhereUniqueWithoutProgramInput = {
    where: Prisma.ProgramScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProgramScheduleUpdateWithoutProgramInput, Prisma.ProgramScheduleUncheckedUpdateWithoutProgramInput>;
};
export type ProgramScheduleUpdateManyWithWhereWithoutProgramInput = {
    where: Prisma.ProgramScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.ProgramScheduleUpdateManyMutationInput, Prisma.ProgramScheduleUncheckedUpdateManyWithoutProgramInput>;
};
export type ProgramScheduleScalarWhereInput = {
    AND?: Prisma.ProgramScheduleScalarWhereInput | Prisma.ProgramScheduleScalarWhereInput[];
    OR?: Prisma.ProgramScheduleScalarWhereInput[];
    NOT?: Prisma.ProgramScheduleScalarWhereInput | Prisma.ProgramScheduleScalarWhereInput[];
    id?: Prisma.StringFilter<"ProgramSchedule"> | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFilter<"ProgramSchedule"> | $Enums.DayOfWeek;
    startTime?: Prisma.DateTimeFilter<"ProgramSchedule"> | Date | string;
    duration?: Prisma.IntFilter<"ProgramSchedule"> | number;
    endTime?: Prisma.DateTimeNullableFilter<"ProgramSchedule"> | Date | string | null;
    type?: Prisma.EnumScheduleTypeFilter<"ProgramSchedule"> | $Enums.ScheduleType;
    programId?: Prisma.StringFilter<"ProgramSchedule"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProgramSchedule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProgramSchedule"> | Date | string;
};
export type ProgramScheduleCreateManyProgramInput = {
    id?: string;
    dayOfWeek: $Enums.DayOfWeek;
    startTime: Date | string;
    duration: number;
    endTime?: Date | string | null;
    type: $Enums.ScheduleType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProgramScheduleUpdateWithoutProgramInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumScheduleTypeFieldUpdateOperationsInput | $Enums.ScheduleType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgramScheduleUncheckedUpdateWithoutProgramInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumScheduleTypeFieldUpdateOperationsInput | $Enums.ScheduleType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgramScheduleUncheckedUpdateManyWithoutProgramInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    endTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.EnumScheduleTypeFieldUpdateOperationsInput | $Enums.ScheduleType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgramScheduleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dayOfWeek?: boolean;
    startTime?: boolean;
    duration?: boolean;
    endTime?: boolean;
    type?: boolean;
    programId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["programSchedule"]>;
export type ProgramScheduleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dayOfWeek?: boolean;
    startTime?: boolean;
    duration?: boolean;
    endTime?: boolean;
    type?: boolean;
    programId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["programSchedule"]>;
export type ProgramScheduleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dayOfWeek?: boolean;
    startTime?: boolean;
    duration?: boolean;
    endTime?: boolean;
    type?: boolean;
    programId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["programSchedule"]>;
export type ProgramScheduleSelectScalar = {
    id?: boolean;
    dayOfWeek?: boolean;
    startTime?: boolean;
    duration?: boolean;
    endTime?: boolean;
    type?: boolean;
    programId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProgramScheduleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "dayOfWeek" | "startTime" | "duration" | "endTime" | "type" | "programId" | "createdAt" | "updatedAt", ExtArgs["result"]["programSchedule"]>;
export type ProgramScheduleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
};
export type ProgramScheduleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
};
export type ProgramScheduleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
};
export type $ProgramSchedulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProgramSchedule";
    objects: {
        program: Prisma.$ProgramPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        dayOfWeek: $Enums.DayOfWeek;
        startTime: Date;
        duration: number;
        endTime: Date | null;
        type: $Enums.ScheduleType;
        programId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["programSchedule"]>;
    composites: {};
};
export type ProgramScheduleGetPayload<S extends boolean | null | undefined | ProgramScheduleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProgramSchedulePayload, S>;
export type ProgramScheduleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProgramScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProgramScheduleCountAggregateInputType | true;
};
export interface ProgramScheduleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProgramSchedule'];
        meta: {
            name: 'ProgramSchedule';
        };
    };
    findUnique<T extends ProgramScheduleFindUniqueArgs>(args: Prisma.SelectSubset<T, ProgramScheduleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProgramScheduleClient<runtime.Types.Result.GetResult<Prisma.$ProgramSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProgramScheduleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProgramScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgramScheduleClient<runtime.Types.Result.GetResult<Prisma.$ProgramSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProgramScheduleFindFirstArgs>(args?: Prisma.SelectSubset<T, ProgramScheduleFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProgramScheduleClient<runtime.Types.Result.GetResult<Prisma.$ProgramSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProgramScheduleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProgramScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgramScheduleClient<runtime.Types.Result.GetResult<Prisma.$ProgramSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProgramScheduleFindManyArgs>(args?: Prisma.SelectSubset<T, ProgramScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProgramScheduleCreateArgs>(args: Prisma.SelectSubset<T, ProgramScheduleCreateArgs<ExtArgs>>): Prisma.Prisma__ProgramScheduleClient<runtime.Types.Result.GetResult<Prisma.$ProgramSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProgramScheduleCreateManyArgs>(args?: Prisma.SelectSubset<T, ProgramScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProgramScheduleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProgramScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProgramScheduleDeleteArgs>(args: Prisma.SelectSubset<T, ProgramScheduleDeleteArgs<ExtArgs>>): Prisma.Prisma__ProgramScheduleClient<runtime.Types.Result.GetResult<Prisma.$ProgramSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProgramScheduleUpdateArgs>(args: Prisma.SelectSubset<T, ProgramScheduleUpdateArgs<ExtArgs>>): Prisma.Prisma__ProgramScheduleClient<runtime.Types.Result.GetResult<Prisma.$ProgramSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProgramScheduleDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProgramScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProgramScheduleUpdateManyArgs>(args: Prisma.SelectSubset<T, ProgramScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProgramScheduleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProgramScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProgramScheduleUpsertArgs>(args: Prisma.SelectSubset<T, ProgramScheduleUpsertArgs<ExtArgs>>): Prisma.Prisma__ProgramScheduleClient<runtime.Types.Result.GetResult<Prisma.$ProgramSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProgramScheduleCountArgs>(args?: Prisma.Subset<T, ProgramScheduleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProgramScheduleCountAggregateOutputType> : number>;
    aggregate<T extends ProgramScheduleAggregateArgs>(args: Prisma.Subset<T, ProgramScheduleAggregateArgs>): Prisma.PrismaPromise<GetProgramScheduleAggregateType<T>>;
    groupBy<T extends ProgramScheduleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProgramScheduleGroupByArgs['orderBy'];
    } : {
        orderBy?: ProgramScheduleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProgramScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProgramScheduleFieldRefs;
}
export interface Prisma__ProgramScheduleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    program<T extends Prisma.ProgramDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProgramDefaultArgs<ExtArgs>>): Prisma.Prisma__ProgramClient<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProgramScheduleFieldRefs {
    readonly id: Prisma.FieldRef<"ProgramSchedule", 'String'>;
    readonly dayOfWeek: Prisma.FieldRef<"ProgramSchedule", 'DayOfWeek'>;
    readonly startTime: Prisma.FieldRef<"ProgramSchedule", 'DateTime'>;
    readonly duration: Prisma.FieldRef<"ProgramSchedule", 'Int'>;
    readonly endTime: Prisma.FieldRef<"ProgramSchedule", 'DateTime'>;
    readonly type: Prisma.FieldRef<"ProgramSchedule", 'ScheduleType'>;
    readonly programId: Prisma.FieldRef<"ProgramSchedule", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ProgramSchedule", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ProgramSchedule", 'DateTime'>;
}
export type ProgramScheduleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ProgramScheduleOmit<ExtArgs> | null;
    include?: Prisma.ProgramScheduleInclude<ExtArgs> | null;
    where: Prisma.ProgramScheduleWhereUniqueInput;
};
export type ProgramScheduleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ProgramScheduleOmit<ExtArgs> | null;
    include?: Prisma.ProgramScheduleInclude<ExtArgs> | null;
    where: Prisma.ProgramScheduleWhereUniqueInput;
};
export type ProgramScheduleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ProgramScheduleOmit<ExtArgs> | null;
    include?: Prisma.ProgramScheduleInclude<ExtArgs> | null;
    where?: Prisma.ProgramScheduleWhereInput;
    orderBy?: Prisma.ProgramScheduleOrderByWithRelationInput | Prisma.ProgramScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ProgramScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramScheduleScalarFieldEnum | Prisma.ProgramScheduleScalarFieldEnum[];
};
export type ProgramScheduleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ProgramScheduleOmit<ExtArgs> | null;
    include?: Prisma.ProgramScheduleInclude<ExtArgs> | null;
    where?: Prisma.ProgramScheduleWhereInput;
    orderBy?: Prisma.ProgramScheduleOrderByWithRelationInput | Prisma.ProgramScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ProgramScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramScheduleScalarFieldEnum | Prisma.ProgramScheduleScalarFieldEnum[];
};
export type ProgramScheduleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ProgramScheduleOmit<ExtArgs> | null;
    include?: Prisma.ProgramScheduleInclude<ExtArgs> | null;
    where?: Prisma.ProgramScheduleWhereInput;
    orderBy?: Prisma.ProgramScheduleOrderByWithRelationInput | Prisma.ProgramScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ProgramScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramScheduleScalarFieldEnum | Prisma.ProgramScheduleScalarFieldEnum[];
};
export type ProgramScheduleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ProgramScheduleOmit<ExtArgs> | null;
    include?: Prisma.ProgramScheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgramScheduleCreateInput, Prisma.ProgramScheduleUncheckedCreateInput>;
};
export type ProgramScheduleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProgramScheduleCreateManyInput | Prisma.ProgramScheduleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProgramScheduleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramScheduleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProgramScheduleOmit<ExtArgs> | null;
    data: Prisma.ProgramScheduleCreateManyInput | Prisma.ProgramScheduleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProgramScheduleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProgramScheduleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ProgramScheduleOmit<ExtArgs> | null;
    include?: Prisma.ProgramScheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgramScheduleUpdateInput, Prisma.ProgramScheduleUncheckedUpdateInput>;
    where: Prisma.ProgramScheduleWhereUniqueInput;
};
export type ProgramScheduleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProgramScheduleUpdateManyMutationInput, Prisma.ProgramScheduleUncheckedUpdateManyInput>;
    where?: Prisma.ProgramScheduleWhereInput;
    limit?: number;
};
export type ProgramScheduleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramScheduleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProgramScheduleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgramScheduleUpdateManyMutationInput, Prisma.ProgramScheduleUncheckedUpdateManyInput>;
    where?: Prisma.ProgramScheduleWhereInput;
    limit?: number;
    include?: Prisma.ProgramScheduleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProgramScheduleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ProgramScheduleOmit<ExtArgs> | null;
    include?: Prisma.ProgramScheduleInclude<ExtArgs> | null;
    where: Prisma.ProgramScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgramScheduleCreateInput, Prisma.ProgramScheduleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProgramScheduleUpdateInput, Prisma.ProgramScheduleUncheckedUpdateInput>;
};
export type ProgramScheduleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ProgramScheduleOmit<ExtArgs> | null;
    include?: Prisma.ProgramScheduleInclude<ExtArgs> | null;
    where: Prisma.ProgramScheduleWhereUniqueInput;
};
export type ProgramScheduleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramScheduleWhereInput;
    limit?: number;
};
export type ProgramScheduleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ProgramScheduleOmit<ExtArgs> | null;
    include?: Prisma.ProgramScheduleInclude<ExtArgs> | null;
};
export {};
