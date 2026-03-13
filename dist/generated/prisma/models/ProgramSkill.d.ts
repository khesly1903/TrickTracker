import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProgramSkillModel = runtime.Types.Result.DefaultSelection<Prisma.$ProgramSkillPayload>;
export type AggregateProgramSkill = {
    _count: ProgramSkillCountAggregateOutputType | null;
    _min: ProgramSkillMinAggregateOutputType | null;
    _max: ProgramSkillMaxAggregateOutputType | null;
};
export type ProgramSkillMinAggregateOutputType = {
    programId: string | null;
    skillId: string | null;
    stage: $Enums.Stage | null;
};
export type ProgramSkillMaxAggregateOutputType = {
    programId: string | null;
    skillId: string | null;
    stage: $Enums.Stage | null;
};
export type ProgramSkillCountAggregateOutputType = {
    programId: number;
    skillId: number;
    stage: number;
    _all: number;
};
export type ProgramSkillMinAggregateInputType = {
    programId?: true;
    skillId?: true;
    stage?: true;
};
export type ProgramSkillMaxAggregateInputType = {
    programId?: true;
    skillId?: true;
    stage?: true;
};
export type ProgramSkillCountAggregateInputType = {
    programId?: true;
    skillId?: true;
    stage?: true;
    _all?: true;
};
export type ProgramSkillAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramSkillWhereInput;
    orderBy?: Prisma.ProgramSkillOrderByWithRelationInput | Prisma.ProgramSkillOrderByWithRelationInput[];
    cursor?: Prisma.ProgramSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProgramSkillCountAggregateInputType;
    _min?: ProgramSkillMinAggregateInputType;
    _max?: ProgramSkillMaxAggregateInputType;
};
export type GetProgramSkillAggregateType<T extends ProgramSkillAggregateArgs> = {
    [P in keyof T & keyof AggregateProgramSkill]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProgramSkill[P]> : Prisma.GetScalarType<T[P], AggregateProgramSkill[P]>;
};
export type ProgramSkillGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramSkillWhereInput;
    orderBy?: Prisma.ProgramSkillOrderByWithAggregationInput | Prisma.ProgramSkillOrderByWithAggregationInput[];
    by: Prisma.ProgramSkillScalarFieldEnum[] | Prisma.ProgramSkillScalarFieldEnum;
    having?: Prisma.ProgramSkillScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProgramSkillCountAggregateInputType | true;
    _min?: ProgramSkillMinAggregateInputType;
    _max?: ProgramSkillMaxAggregateInputType;
};
export type ProgramSkillGroupByOutputType = {
    programId: string;
    skillId: string;
    stage: $Enums.Stage;
    _count: ProgramSkillCountAggregateOutputType | null;
    _min: ProgramSkillMinAggregateOutputType | null;
    _max: ProgramSkillMaxAggregateOutputType | null;
};
type GetProgramSkillGroupByPayload<T extends ProgramSkillGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProgramSkillGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProgramSkillGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProgramSkillGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProgramSkillGroupByOutputType[P]>;
}>>;
export type ProgramSkillWhereInput = {
    AND?: Prisma.ProgramSkillWhereInput | Prisma.ProgramSkillWhereInput[];
    OR?: Prisma.ProgramSkillWhereInput[];
    NOT?: Prisma.ProgramSkillWhereInput | Prisma.ProgramSkillWhereInput[];
    programId?: Prisma.StringFilter<"ProgramSkill"> | string;
    skillId?: Prisma.StringFilter<"ProgramSkill"> | string;
    stage?: Prisma.EnumStageFilter<"ProgramSkill"> | $Enums.Stage;
    program?: Prisma.XOR<Prisma.ProgramScalarRelationFilter, Prisma.ProgramWhereInput>;
    skill?: Prisma.XOR<Prisma.SkillScalarRelationFilter, Prisma.SkillWhereInput>;
};
export type ProgramSkillOrderByWithRelationInput = {
    programId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    stage?: Prisma.SortOrder;
    program?: Prisma.ProgramOrderByWithRelationInput;
    skill?: Prisma.SkillOrderByWithRelationInput;
};
export type ProgramSkillWhereUniqueInput = Prisma.AtLeast<{
    programId_skillId?: Prisma.ProgramSkillProgramIdSkillIdCompoundUniqueInput;
    AND?: Prisma.ProgramSkillWhereInput | Prisma.ProgramSkillWhereInput[];
    OR?: Prisma.ProgramSkillWhereInput[];
    NOT?: Prisma.ProgramSkillWhereInput | Prisma.ProgramSkillWhereInput[];
    programId?: Prisma.StringFilter<"ProgramSkill"> | string;
    skillId?: Prisma.StringFilter<"ProgramSkill"> | string;
    stage?: Prisma.EnumStageFilter<"ProgramSkill"> | $Enums.Stage;
    program?: Prisma.XOR<Prisma.ProgramScalarRelationFilter, Prisma.ProgramWhereInput>;
    skill?: Prisma.XOR<Prisma.SkillScalarRelationFilter, Prisma.SkillWhereInput>;
}, "programId_skillId">;
export type ProgramSkillOrderByWithAggregationInput = {
    programId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    stage?: Prisma.SortOrder;
    _count?: Prisma.ProgramSkillCountOrderByAggregateInput;
    _max?: Prisma.ProgramSkillMaxOrderByAggregateInput;
    _min?: Prisma.ProgramSkillMinOrderByAggregateInput;
};
export type ProgramSkillScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProgramSkillScalarWhereWithAggregatesInput | Prisma.ProgramSkillScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProgramSkillScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProgramSkillScalarWhereWithAggregatesInput | Prisma.ProgramSkillScalarWhereWithAggregatesInput[];
    programId?: Prisma.StringWithAggregatesFilter<"ProgramSkill"> | string;
    skillId?: Prisma.StringWithAggregatesFilter<"ProgramSkill"> | string;
    stage?: Prisma.EnumStageWithAggregatesFilter<"ProgramSkill"> | $Enums.Stage;
};
export type ProgramSkillCreateInput = {
    stage: $Enums.Stage;
    program: Prisma.ProgramCreateNestedOneWithoutProgramSkillsInput;
    skill: Prisma.SkillCreateNestedOneWithoutProgramSkillsInput;
};
export type ProgramSkillUncheckedCreateInput = {
    programId: string;
    skillId: string;
    stage: $Enums.Stage;
};
export type ProgramSkillUpdateInput = {
    stage?: Prisma.EnumStageFieldUpdateOperationsInput | $Enums.Stage;
    program?: Prisma.ProgramUpdateOneRequiredWithoutProgramSkillsNestedInput;
    skill?: Prisma.SkillUpdateOneRequiredWithoutProgramSkillsNestedInput;
};
export type ProgramSkillUncheckedUpdateInput = {
    programId?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.EnumStageFieldUpdateOperationsInput | $Enums.Stage;
};
export type ProgramSkillCreateManyInput = {
    programId: string;
    skillId: string;
    stage: $Enums.Stage;
};
export type ProgramSkillUpdateManyMutationInput = {
    stage?: Prisma.EnumStageFieldUpdateOperationsInput | $Enums.Stage;
};
export type ProgramSkillUncheckedUpdateManyInput = {
    programId?: Prisma.StringFieldUpdateOperationsInput | string;
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.EnumStageFieldUpdateOperationsInput | $Enums.Stage;
};
export type ProgramSkillListRelationFilter = {
    every?: Prisma.ProgramSkillWhereInput;
    some?: Prisma.ProgramSkillWhereInput;
    none?: Prisma.ProgramSkillWhereInput;
};
export type ProgramSkillOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProgramSkillProgramIdSkillIdCompoundUniqueInput = {
    programId: string;
    skillId: string;
};
export type ProgramSkillCountOrderByAggregateInput = {
    programId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    stage?: Prisma.SortOrder;
};
export type ProgramSkillMaxOrderByAggregateInput = {
    programId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    stage?: Prisma.SortOrder;
};
export type ProgramSkillMinOrderByAggregateInput = {
    programId?: Prisma.SortOrder;
    skillId?: Prisma.SortOrder;
    stage?: Prisma.SortOrder;
};
export type ProgramSkillCreateNestedManyWithoutProgramInput = {
    create?: Prisma.XOR<Prisma.ProgramSkillCreateWithoutProgramInput, Prisma.ProgramSkillUncheckedCreateWithoutProgramInput> | Prisma.ProgramSkillCreateWithoutProgramInput[] | Prisma.ProgramSkillUncheckedCreateWithoutProgramInput[];
    connectOrCreate?: Prisma.ProgramSkillCreateOrConnectWithoutProgramInput | Prisma.ProgramSkillCreateOrConnectWithoutProgramInput[];
    createMany?: Prisma.ProgramSkillCreateManyProgramInputEnvelope;
    connect?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
};
export type ProgramSkillUncheckedCreateNestedManyWithoutProgramInput = {
    create?: Prisma.XOR<Prisma.ProgramSkillCreateWithoutProgramInput, Prisma.ProgramSkillUncheckedCreateWithoutProgramInput> | Prisma.ProgramSkillCreateWithoutProgramInput[] | Prisma.ProgramSkillUncheckedCreateWithoutProgramInput[];
    connectOrCreate?: Prisma.ProgramSkillCreateOrConnectWithoutProgramInput | Prisma.ProgramSkillCreateOrConnectWithoutProgramInput[];
    createMany?: Prisma.ProgramSkillCreateManyProgramInputEnvelope;
    connect?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
};
export type ProgramSkillUpdateManyWithoutProgramNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramSkillCreateWithoutProgramInput, Prisma.ProgramSkillUncheckedCreateWithoutProgramInput> | Prisma.ProgramSkillCreateWithoutProgramInput[] | Prisma.ProgramSkillUncheckedCreateWithoutProgramInput[];
    connectOrCreate?: Prisma.ProgramSkillCreateOrConnectWithoutProgramInput | Prisma.ProgramSkillCreateOrConnectWithoutProgramInput[];
    upsert?: Prisma.ProgramSkillUpsertWithWhereUniqueWithoutProgramInput | Prisma.ProgramSkillUpsertWithWhereUniqueWithoutProgramInput[];
    createMany?: Prisma.ProgramSkillCreateManyProgramInputEnvelope;
    set?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
    disconnect?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
    delete?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
    connect?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
    update?: Prisma.ProgramSkillUpdateWithWhereUniqueWithoutProgramInput | Prisma.ProgramSkillUpdateWithWhereUniqueWithoutProgramInput[];
    updateMany?: Prisma.ProgramSkillUpdateManyWithWhereWithoutProgramInput | Prisma.ProgramSkillUpdateManyWithWhereWithoutProgramInput[];
    deleteMany?: Prisma.ProgramSkillScalarWhereInput | Prisma.ProgramSkillScalarWhereInput[];
};
export type ProgramSkillUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramSkillCreateWithoutProgramInput, Prisma.ProgramSkillUncheckedCreateWithoutProgramInput> | Prisma.ProgramSkillCreateWithoutProgramInput[] | Prisma.ProgramSkillUncheckedCreateWithoutProgramInput[];
    connectOrCreate?: Prisma.ProgramSkillCreateOrConnectWithoutProgramInput | Prisma.ProgramSkillCreateOrConnectWithoutProgramInput[];
    upsert?: Prisma.ProgramSkillUpsertWithWhereUniqueWithoutProgramInput | Prisma.ProgramSkillUpsertWithWhereUniqueWithoutProgramInput[];
    createMany?: Prisma.ProgramSkillCreateManyProgramInputEnvelope;
    set?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
    disconnect?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
    delete?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
    connect?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
    update?: Prisma.ProgramSkillUpdateWithWhereUniqueWithoutProgramInput | Prisma.ProgramSkillUpdateWithWhereUniqueWithoutProgramInput[];
    updateMany?: Prisma.ProgramSkillUpdateManyWithWhereWithoutProgramInput | Prisma.ProgramSkillUpdateManyWithWhereWithoutProgramInput[];
    deleteMany?: Prisma.ProgramSkillScalarWhereInput | Prisma.ProgramSkillScalarWhereInput[];
};
export type ProgramSkillCreateNestedManyWithoutSkillInput = {
    create?: Prisma.XOR<Prisma.ProgramSkillCreateWithoutSkillInput, Prisma.ProgramSkillUncheckedCreateWithoutSkillInput> | Prisma.ProgramSkillCreateWithoutSkillInput[] | Prisma.ProgramSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.ProgramSkillCreateOrConnectWithoutSkillInput | Prisma.ProgramSkillCreateOrConnectWithoutSkillInput[];
    createMany?: Prisma.ProgramSkillCreateManySkillInputEnvelope;
    connect?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
};
export type ProgramSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: Prisma.XOR<Prisma.ProgramSkillCreateWithoutSkillInput, Prisma.ProgramSkillUncheckedCreateWithoutSkillInput> | Prisma.ProgramSkillCreateWithoutSkillInput[] | Prisma.ProgramSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.ProgramSkillCreateOrConnectWithoutSkillInput | Prisma.ProgramSkillCreateOrConnectWithoutSkillInput[];
    createMany?: Prisma.ProgramSkillCreateManySkillInputEnvelope;
    connect?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
};
export type ProgramSkillUpdateManyWithoutSkillNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramSkillCreateWithoutSkillInput, Prisma.ProgramSkillUncheckedCreateWithoutSkillInput> | Prisma.ProgramSkillCreateWithoutSkillInput[] | Prisma.ProgramSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.ProgramSkillCreateOrConnectWithoutSkillInput | Prisma.ProgramSkillCreateOrConnectWithoutSkillInput[];
    upsert?: Prisma.ProgramSkillUpsertWithWhereUniqueWithoutSkillInput | Prisma.ProgramSkillUpsertWithWhereUniqueWithoutSkillInput[];
    createMany?: Prisma.ProgramSkillCreateManySkillInputEnvelope;
    set?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
    disconnect?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
    delete?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
    connect?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
    update?: Prisma.ProgramSkillUpdateWithWhereUniqueWithoutSkillInput | Prisma.ProgramSkillUpdateWithWhereUniqueWithoutSkillInput[];
    updateMany?: Prisma.ProgramSkillUpdateManyWithWhereWithoutSkillInput | Prisma.ProgramSkillUpdateManyWithWhereWithoutSkillInput[];
    deleteMany?: Prisma.ProgramSkillScalarWhereInput | Prisma.ProgramSkillScalarWhereInput[];
};
export type ProgramSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramSkillCreateWithoutSkillInput, Prisma.ProgramSkillUncheckedCreateWithoutSkillInput> | Prisma.ProgramSkillCreateWithoutSkillInput[] | Prisma.ProgramSkillUncheckedCreateWithoutSkillInput[];
    connectOrCreate?: Prisma.ProgramSkillCreateOrConnectWithoutSkillInput | Prisma.ProgramSkillCreateOrConnectWithoutSkillInput[];
    upsert?: Prisma.ProgramSkillUpsertWithWhereUniqueWithoutSkillInput | Prisma.ProgramSkillUpsertWithWhereUniqueWithoutSkillInput[];
    createMany?: Prisma.ProgramSkillCreateManySkillInputEnvelope;
    set?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
    disconnect?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
    delete?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
    connect?: Prisma.ProgramSkillWhereUniqueInput | Prisma.ProgramSkillWhereUniqueInput[];
    update?: Prisma.ProgramSkillUpdateWithWhereUniqueWithoutSkillInput | Prisma.ProgramSkillUpdateWithWhereUniqueWithoutSkillInput[];
    updateMany?: Prisma.ProgramSkillUpdateManyWithWhereWithoutSkillInput | Prisma.ProgramSkillUpdateManyWithWhereWithoutSkillInput[];
    deleteMany?: Prisma.ProgramSkillScalarWhereInput | Prisma.ProgramSkillScalarWhereInput[];
};
export type EnumStageFieldUpdateOperationsInput = {
    set?: $Enums.Stage;
};
export type ProgramSkillCreateWithoutProgramInput = {
    stage: $Enums.Stage;
    skill: Prisma.SkillCreateNestedOneWithoutProgramSkillsInput;
};
export type ProgramSkillUncheckedCreateWithoutProgramInput = {
    skillId: string;
    stage: $Enums.Stage;
};
export type ProgramSkillCreateOrConnectWithoutProgramInput = {
    where: Prisma.ProgramSkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgramSkillCreateWithoutProgramInput, Prisma.ProgramSkillUncheckedCreateWithoutProgramInput>;
};
export type ProgramSkillCreateManyProgramInputEnvelope = {
    data: Prisma.ProgramSkillCreateManyProgramInput | Prisma.ProgramSkillCreateManyProgramInput[];
    skipDuplicates?: boolean;
};
export type ProgramSkillUpsertWithWhereUniqueWithoutProgramInput = {
    where: Prisma.ProgramSkillWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProgramSkillUpdateWithoutProgramInput, Prisma.ProgramSkillUncheckedUpdateWithoutProgramInput>;
    create: Prisma.XOR<Prisma.ProgramSkillCreateWithoutProgramInput, Prisma.ProgramSkillUncheckedCreateWithoutProgramInput>;
};
export type ProgramSkillUpdateWithWhereUniqueWithoutProgramInput = {
    where: Prisma.ProgramSkillWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProgramSkillUpdateWithoutProgramInput, Prisma.ProgramSkillUncheckedUpdateWithoutProgramInput>;
};
export type ProgramSkillUpdateManyWithWhereWithoutProgramInput = {
    where: Prisma.ProgramSkillScalarWhereInput;
    data: Prisma.XOR<Prisma.ProgramSkillUpdateManyMutationInput, Prisma.ProgramSkillUncheckedUpdateManyWithoutProgramInput>;
};
export type ProgramSkillScalarWhereInput = {
    AND?: Prisma.ProgramSkillScalarWhereInput | Prisma.ProgramSkillScalarWhereInput[];
    OR?: Prisma.ProgramSkillScalarWhereInput[];
    NOT?: Prisma.ProgramSkillScalarWhereInput | Prisma.ProgramSkillScalarWhereInput[];
    programId?: Prisma.StringFilter<"ProgramSkill"> | string;
    skillId?: Prisma.StringFilter<"ProgramSkill"> | string;
    stage?: Prisma.EnumStageFilter<"ProgramSkill"> | $Enums.Stage;
};
export type ProgramSkillCreateWithoutSkillInput = {
    stage: $Enums.Stage;
    program: Prisma.ProgramCreateNestedOneWithoutProgramSkillsInput;
};
export type ProgramSkillUncheckedCreateWithoutSkillInput = {
    programId: string;
    stage: $Enums.Stage;
};
export type ProgramSkillCreateOrConnectWithoutSkillInput = {
    where: Prisma.ProgramSkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgramSkillCreateWithoutSkillInput, Prisma.ProgramSkillUncheckedCreateWithoutSkillInput>;
};
export type ProgramSkillCreateManySkillInputEnvelope = {
    data: Prisma.ProgramSkillCreateManySkillInput | Prisma.ProgramSkillCreateManySkillInput[];
    skipDuplicates?: boolean;
};
export type ProgramSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: Prisma.ProgramSkillWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProgramSkillUpdateWithoutSkillInput, Prisma.ProgramSkillUncheckedUpdateWithoutSkillInput>;
    create: Prisma.XOR<Prisma.ProgramSkillCreateWithoutSkillInput, Prisma.ProgramSkillUncheckedCreateWithoutSkillInput>;
};
export type ProgramSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: Prisma.ProgramSkillWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProgramSkillUpdateWithoutSkillInput, Prisma.ProgramSkillUncheckedUpdateWithoutSkillInput>;
};
export type ProgramSkillUpdateManyWithWhereWithoutSkillInput = {
    where: Prisma.ProgramSkillScalarWhereInput;
    data: Prisma.XOR<Prisma.ProgramSkillUpdateManyMutationInput, Prisma.ProgramSkillUncheckedUpdateManyWithoutSkillInput>;
};
export type ProgramSkillCreateManyProgramInput = {
    skillId: string;
    stage: $Enums.Stage;
};
export type ProgramSkillUpdateWithoutProgramInput = {
    stage?: Prisma.EnumStageFieldUpdateOperationsInput | $Enums.Stage;
    skill?: Prisma.SkillUpdateOneRequiredWithoutProgramSkillsNestedInput;
};
export type ProgramSkillUncheckedUpdateWithoutProgramInput = {
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.EnumStageFieldUpdateOperationsInput | $Enums.Stage;
};
export type ProgramSkillUncheckedUpdateManyWithoutProgramInput = {
    skillId?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.EnumStageFieldUpdateOperationsInput | $Enums.Stage;
};
export type ProgramSkillCreateManySkillInput = {
    programId: string;
    stage: $Enums.Stage;
};
export type ProgramSkillUpdateWithoutSkillInput = {
    stage?: Prisma.EnumStageFieldUpdateOperationsInput | $Enums.Stage;
    program?: Prisma.ProgramUpdateOneRequiredWithoutProgramSkillsNestedInput;
};
export type ProgramSkillUncheckedUpdateWithoutSkillInput = {
    programId?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.EnumStageFieldUpdateOperationsInput | $Enums.Stage;
};
export type ProgramSkillUncheckedUpdateManyWithoutSkillInput = {
    programId?: Prisma.StringFieldUpdateOperationsInput | string;
    stage?: Prisma.EnumStageFieldUpdateOperationsInput | $Enums.Stage;
};
export type ProgramSkillSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    programId?: boolean;
    skillId?: boolean;
    stage?: boolean;
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["programSkill"]>;
export type ProgramSkillSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    programId?: boolean;
    skillId?: boolean;
    stage?: boolean;
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["programSkill"]>;
export type ProgramSkillSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    programId?: boolean;
    skillId?: boolean;
    stage?: boolean;
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["programSkill"]>;
export type ProgramSkillSelectScalar = {
    programId?: boolean;
    skillId?: boolean;
    stage?: boolean;
};
export type ProgramSkillOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"programId" | "skillId" | "stage", ExtArgs["result"]["programSkill"]>;
export type ProgramSkillInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type ProgramSkillIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type ProgramSkillIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    program?: boolean | Prisma.ProgramDefaultArgs<ExtArgs>;
    skill?: boolean | Prisma.SkillDefaultArgs<ExtArgs>;
};
export type $ProgramSkillPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProgramSkill";
    objects: {
        program: Prisma.$ProgramPayload<ExtArgs>;
        skill: Prisma.$SkillPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        programId: string;
        skillId: string;
        stage: $Enums.Stage;
    }, ExtArgs["result"]["programSkill"]>;
    composites: {};
};
export type ProgramSkillGetPayload<S extends boolean | null | undefined | ProgramSkillDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProgramSkillPayload, S>;
export type ProgramSkillCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProgramSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProgramSkillCountAggregateInputType | true;
};
export interface ProgramSkillDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProgramSkill'];
        meta: {
            name: 'ProgramSkill';
        };
    };
    findUnique<T extends ProgramSkillFindUniqueArgs>(args: Prisma.SelectSubset<T, ProgramSkillFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProgramSkillClient<runtime.Types.Result.GetResult<Prisma.$ProgramSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProgramSkillFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProgramSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgramSkillClient<runtime.Types.Result.GetResult<Prisma.$ProgramSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProgramSkillFindFirstArgs>(args?: Prisma.SelectSubset<T, ProgramSkillFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProgramSkillClient<runtime.Types.Result.GetResult<Prisma.$ProgramSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProgramSkillFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProgramSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgramSkillClient<runtime.Types.Result.GetResult<Prisma.$ProgramSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProgramSkillFindManyArgs>(args?: Prisma.SelectSubset<T, ProgramSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProgramSkillCreateArgs>(args: Prisma.SelectSubset<T, ProgramSkillCreateArgs<ExtArgs>>): Prisma.Prisma__ProgramSkillClient<runtime.Types.Result.GetResult<Prisma.$ProgramSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProgramSkillCreateManyArgs>(args?: Prisma.SelectSubset<T, ProgramSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProgramSkillCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProgramSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProgramSkillDeleteArgs>(args: Prisma.SelectSubset<T, ProgramSkillDeleteArgs<ExtArgs>>): Prisma.Prisma__ProgramSkillClient<runtime.Types.Result.GetResult<Prisma.$ProgramSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProgramSkillUpdateArgs>(args: Prisma.SelectSubset<T, ProgramSkillUpdateArgs<ExtArgs>>): Prisma.Prisma__ProgramSkillClient<runtime.Types.Result.GetResult<Prisma.$ProgramSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProgramSkillDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProgramSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProgramSkillUpdateManyArgs>(args: Prisma.SelectSubset<T, ProgramSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProgramSkillUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProgramSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProgramSkillUpsertArgs>(args: Prisma.SelectSubset<T, ProgramSkillUpsertArgs<ExtArgs>>): Prisma.Prisma__ProgramSkillClient<runtime.Types.Result.GetResult<Prisma.$ProgramSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProgramSkillCountArgs>(args?: Prisma.Subset<T, ProgramSkillCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProgramSkillCountAggregateOutputType> : number>;
    aggregate<T extends ProgramSkillAggregateArgs>(args: Prisma.Subset<T, ProgramSkillAggregateArgs>): Prisma.PrismaPromise<GetProgramSkillAggregateType<T>>;
    groupBy<T extends ProgramSkillGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProgramSkillGroupByArgs['orderBy'];
    } : {
        orderBy?: ProgramSkillGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProgramSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProgramSkillFieldRefs;
}
export interface Prisma__ProgramSkillClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    program<T extends Prisma.ProgramDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProgramDefaultArgs<ExtArgs>>): Prisma.Prisma__ProgramClient<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    skill<T extends Prisma.SkillDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SkillDefaultArgs<ExtArgs>>): Prisma.Prisma__SkillClient<runtime.Types.Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProgramSkillFieldRefs {
    readonly programId: Prisma.FieldRef<"ProgramSkill", 'String'>;
    readonly skillId: Prisma.FieldRef<"ProgramSkill", 'String'>;
    readonly stage: Prisma.FieldRef<"ProgramSkill", 'Stage'>;
}
export type ProgramSkillFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProgramSkillOmit<ExtArgs> | null;
    include?: Prisma.ProgramSkillInclude<ExtArgs> | null;
    where: Prisma.ProgramSkillWhereUniqueInput;
};
export type ProgramSkillFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProgramSkillOmit<ExtArgs> | null;
    include?: Prisma.ProgramSkillInclude<ExtArgs> | null;
    where: Prisma.ProgramSkillWhereUniqueInput;
};
export type ProgramSkillFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProgramSkillOmit<ExtArgs> | null;
    include?: Prisma.ProgramSkillInclude<ExtArgs> | null;
    where?: Prisma.ProgramSkillWhereInput;
    orderBy?: Prisma.ProgramSkillOrderByWithRelationInput | Prisma.ProgramSkillOrderByWithRelationInput[];
    cursor?: Prisma.ProgramSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramSkillScalarFieldEnum | Prisma.ProgramSkillScalarFieldEnum[];
};
export type ProgramSkillFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProgramSkillOmit<ExtArgs> | null;
    include?: Prisma.ProgramSkillInclude<ExtArgs> | null;
    where?: Prisma.ProgramSkillWhereInput;
    orderBy?: Prisma.ProgramSkillOrderByWithRelationInput | Prisma.ProgramSkillOrderByWithRelationInput[];
    cursor?: Prisma.ProgramSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramSkillScalarFieldEnum | Prisma.ProgramSkillScalarFieldEnum[];
};
export type ProgramSkillFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProgramSkillOmit<ExtArgs> | null;
    include?: Prisma.ProgramSkillInclude<ExtArgs> | null;
    where?: Prisma.ProgramSkillWhereInput;
    orderBy?: Prisma.ProgramSkillOrderByWithRelationInput | Prisma.ProgramSkillOrderByWithRelationInput[];
    cursor?: Prisma.ProgramSkillWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramSkillScalarFieldEnum | Prisma.ProgramSkillScalarFieldEnum[];
};
export type ProgramSkillCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProgramSkillOmit<ExtArgs> | null;
    include?: Prisma.ProgramSkillInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgramSkillCreateInput, Prisma.ProgramSkillUncheckedCreateInput>;
};
export type ProgramSkillCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProgramSkillCreateManyInput | Prisma.ProgramSkillCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProgramSkillCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSkillSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProgramSkillOmit<ExtArgs> | null;
    data: Prisma.ProgramSkillCreateManyInput | Prisma.ProgramSkillCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProgramSkillIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProgramSkillUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProgramSkillOmit<ExtArgs> | null;
    include?: Prisma.ProgramSkillInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgramSkillUpdateInput, Prisma.ProgramSkillUncheckedUpdateInput>;
    where: Prisma.ProgramSkillWhereUniqueInput;
};
export type ProgramSkillUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProgramSkillUpdateManyMutationInput, Prisma.ProgramSkillUncheckedUpdateManyInput>;
    where?: Prisma.ProgramSkillWhereInput;
    limit?: number;
};
export type ProgramSkillUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSkillSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProgramSkillOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgramSkillUpdateManyMutationInput, Prisma.ProgramSkillUncheckedUpdateManyInput>;
    where?: Prisma.ProgramSkillWhereInput;
    limit?: number;
    include?: Prisma.ProgramSkillIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProgramSkillUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProgramSkillOmit<ExtArgs> | null;
    include?: Prisma.ProgramSkillInclude<ExtArgs> | null;
    where: Prisma.ProgramSkillWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgramSkillCreateInput, Prisma.ProgramSkillUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProgramSkillUpdateInput, Prisma.ProgramSkillUncheckedUpdateInput>;
};
export type ProgramSkillDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProgramSkillOmit<ExtArgs> | null;
    include?: Prisma.ProgramSkillInclude<ExtArgs> | null;
    where: Prisma.ProgramSkillWhereUniqueInput;
};
export type ProgramSkillDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramSkillWhereInput;
    limit?: number;
};
export type ProgramSkillDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSkillSelect<ExtArgs> | null;
    omit?: Prisma.ProgramSkillOmit<ExtArgs> | null;
    include?: Prisma.ProgramSkillInclude<ExtArgs> | null;
};
export {};
