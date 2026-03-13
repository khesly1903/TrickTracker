import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type EnumStudentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentType | Prisma.EnumStudentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.StudentType[] | Prisma.ListEnumStudentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StudentType[] | Prisma.ListEnumStudentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStudentTypeFilter<$PrismaModel> | $Enums.StudentType;
};
export type EnumStudentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentType | Prisma.EnumStudentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.StudentType[] | Prisma.ListEnumStudentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StudentType[] | Prisma.ListEnumStudentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStudentTypeWithAggregatesFilter<$PrismaModel> | $Enums.StudentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStudentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStudentTypeFilter<$PrismaModel>;
};
export type EnumContactTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactTypes | Prisma.EnumContactTypesFieldRefInput<$PrismaModel>;
    in?: $Enums.ContactTypes[] | Prisma.ListEnumContactTypesFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ContactTypes[] | Prisma.ListEnumContactTypesFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumContactTypesFilter<$PrismaModel> | $Enums.ContactTypes;
};
export type EnumContactTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactTypes | Prisma.EnumContactTypesFieldRefInput<$PrismaModel>;
    in?: $Enums.ContactTypes[] | Prisma.ListEnumContactTypesFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ContactTypes[] | Prisma.ListEnumContactTypesFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumContactTypesWithAggregatesFilter<$PrismaModel> | $Enums.ContactTypes;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumContactTypesFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumContactTypesFilter<$PrismaModel>;
};
export type EnumClassTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassTypes | Prisma.EnumClassTypesFieldRefInput<$PrismaModel>;
    in?: $Enums.ClassTypes[] | Prisma.ListEnumClassTypesFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClassTypes[] | Prisma.ListEnumClassTypesFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClassTypesFilter<$PrismaModel> | $Enums.ClassTypes;
};
export type EnumClassTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassTypes | Prisma.EnumClassTypesFieldRefInput<$PrismaModel>;
    in?: $Enums.ClassTypes[] | Prisma.ListEnumClassTypesFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClassTypes[] | Prisma.ListEnumClassTypesFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClassTypesWithAggregatesFilter<$PrismaModel> | $Enums.ClassTypes;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClassTypesFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClassTypesFilter<$PrismaModel>;
};
export type FloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type EnumProgramLevelsFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramLevels | Prisma.EnumProgramLevelsFieldRefInput<$PrismaModel>;
    in?: $Enums.ProgramLevels[] | Prisma.ListEnumProgramLevelsFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProgramLevels[] | Prisma.ListEnumProgramLevelsFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProgramLevelsFilter<$PrismaModel> | $Enums.ProgramLevels;
};
export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGenderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGenderFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type EnumProgramLevelsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramLevels | Prisma.EnumProgramLevelsFieldRefInput<$PrismaModel>;
    in?: $Enums.ProgramLevels[] | Prisma.ListEnumProgramLevelsFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProgramLevels[] | Prisma.ListEnumProgramLevelsFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProgramLevelsWithAggregatesFilter<$PrismaModel> | $Enums.ProgramLevels;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumProgramLevelsFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumProgramLevelsFilter<$PrismaModel>;
};
export type EnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | Prisma.EnumDayOfWeekFieldRefInput<$PrismaModel>;
    in?: $Enums.DayOfWeek[] | Prisma.ListEnumDayOfWeekFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DayOfWeek[] | Prisma.ListEnumDayOfWeekFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek;
};
export type EnumScheduleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleType | Prisma.EnumScheduleTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ScheduleType[] | Prisma.ListEnumScheduleTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ScheduleType[] | Prisma.ListEnumScheduleTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumScheduleTypeFilter<$PrismaModel> | $Enums.ScheduleType;
};
export type EnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | Prisma.EnumDayOfWeekFieldRefInput<$PrismaModel>;
    in?: $Enums.DayOfWeek[] | Prisma.ListEnumDayOfWeekFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DayOfWeek[] | Prisma.ListEnumDayOfWeekFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDayOfWeekFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDayOfWeekFilter<$PrismaModel>;
};
export type EnumScheduleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleType | Prisma.EnumScheduleTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ScheduleType[] | Prisma.ListEnumScheduleTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ScheduleType[] | Prisma.ListEnumScheduleTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumScheduleTypeWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumScheduleTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumScheduleTypeFilter<$PrismaModel>;
};
export type EnumSkillTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillType | Prisma.EnumSkillTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.SkillType[] | Prisma.ListEnumSkillTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SkillType[] | Prisma.ListEnumSkillTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSkillTypeFilter<$PrismaModel> | $Enums.SkillType;
};
export type EnumSkillTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillType | Prisma.EnumSkillTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.SkillType[] | Prisma.ListEnumSkillTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SkillType[] | Prisma.ListEnumSkillTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSkillTypeWithAggregatesFilter<$PrismaModel> | $Enums.SkillType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSkillTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSkillTypeFilter<$PrismaModel>;
};
export type EnumSkillStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillStatus | Prisma.EnumSkillStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SkillStatus[] | Prisma.ListEnumSkillStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SkillStatus[] | Prisma.ListEnumSkillStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSkillStatusFilter<$PrismaModel> | $Enums.SkillStatus;
};
export type EnumSkillStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillStatus | Prisma.EnumSkillStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SkillStatus[] | Prisma.ListEnumSkillStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SkillStatus[] | Prisma.ListEnumSkillStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSkillStatusWithAggregatesFilter<$PrismaModel> | $Enums.SkillStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSkillStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSkillStatusFilter<$PrismaModel>;
};
export type EnumStageFilter<$PrismaModel = never> = {
    equals?: $Enums.Stage | Prisma.EnumStageFieldRefInput<$PrismaModel>;
    in?: $Enums.Stage[] | Prisma.ListEnumStageFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Stage[] | Prisma.ListEnumStageFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStageFilter<$PrismaModel> | $Enums.Stage;
};
export type EnumStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Stage | Prisma.EnumStageFieldRefInput<$PrismaModel>;
    in?: $Enums.Stage[] | Prisma.ListEnumStageFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Stage[] | Prisma.ListEnumStageFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStageWithAggregatesFilter<$PrismaModel> | $Enums.Stage;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStageFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStageFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumStudentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentType | Prisma.EnumStudentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.StudentType[] | Prisma.ListEnumStudentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StudentType[] | Prisma.ListEnumStudentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStudentTypeFilter<$PrismaModel> | $Enums.StudentType;
};
export type NestedEnumStudentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentType | Prisma.EnumStudentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.StudentType[] | Prisma.ListEnumStudentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StudentType[] | Prisma.ListEnumStudentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStudentTypeWithAggregatesFilter<$PrismaModel> | $Enums.StudentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStudentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStudentTypeFilter<$PrismaModel>;
};
export type NestedEnumContactTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactTypes | Prisma.EnumContactTypesFieldRefInput<$PrismaModel>;
    in?: $Enums.ContactTypes[] | Prisma.ListEnumContactTypesFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ContactTypes[] | Prisma.ListEnumContactTypesFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumContactTypesFilter<$PrismaModel> | $Enums.ContactTypes;
};
export type NestedEnumContactTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactTypes | Prisma.EnumContactTypesFieldRefInput<$PrismaModel>;
    in?: $Enums.ContactTypes[] | Prisma.ListEnumContactTypesFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ContactTypes[] | Prisma.ListEnumContactTypesFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumContactTypesWithAggregatesFilter<$PrismaModel> | $Enums.ContactTypes;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumContactTypesFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumContactTypesFilter<$PrismaModel>;
};
export type NestedEnumClassTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassTypes | Prisma.EnumClassTypesFieldRefInput<$PrismaModel>;
    in?: $Enums.ClassTypes[] | Prisma.ListEnumClassTypesFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClassTypes[] | Prisma.ListEnumClassTypesFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClassTypesFilter<$PrismaModel> | $Enums.ClassTypes;
};
export type NestedEnumClassTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassTypes | Prisma.EnumClassTypesFieldRefInput<$PrismaModel>;
    in?: $Enums.ClassTypes[] | Prisma.ListEnumClassTypesFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ClassTypes[] | Prisma.ListEnumClassTypesFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumClassTypesWithAggregatesFilter<$PrismaModel> | $Enums.ClassTypes;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumClassTypesFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumClassTypesFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender;
};
export type NestedEnumProgramLevelsFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramLevels | Prisma.EnumProgramLevelsFieldRefInput<$PrismaModel>;
    in?: $Enums.ProgramLevels[] | Prisma.ListEnumProgramLevelsFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProgramLevels[] | Prisma.ListEnumProgramLevelsFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProgramLevelsFilter<$PrismaModel> | $Enums.ProgramLevels;
};
export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGenderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGenderFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedEnumProgramLevelsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramLevels | Prisma.EnumProgramLevelsFieldRefInput<$PrismaModel>;
    in?: $Enums.ProgramLevels[] | Prisma.ListEnumProgramLevelsFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProgramLevels[] | Prisma.ListEnumProgramLevelsFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProgramLevelsWithAggregatesFilter<$PrismaModel> | $Enums.ProgramLevels;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumProgramLevelsFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumProgramLevelsFilter<$PrismaModel>;
};
export type NestedEnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | Prisma.EnumDayOfWeekFieldRefInput<$PrismaModel>;
    in?: $Enums.DayOfWeek[] | Prisma.ListEnumDayOfWeekFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DayOfWeek[] | Prisma.ListEnumDayOfWeekFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek;
};
export type NestedEnumScheduleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleType | Prisma.EnumScheduleTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ScheduleType[] | Prisma.ListEnumScheduleTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ScheduleType[] | Prisma.ListEnumScheduleTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumScheduleTypeFilter<$PrismaModel> | $Enums.ScheduleType;
};
export type NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | Prisma.EnumDayOfWeekFieldRefInput<$PrismaModel>;
    in?: $Enums.DayOfWeek[] | Prisma.ListEnumDayOfWeekFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DayOfWeek[] | Prisma.ListEnumDayOfWeekFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDayOfWeekFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDayOfWeekFilter<$PrismaModel>;
};
export type NestedEnumScheduleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleType | Prisma.EnumScheduleTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ScheduleType[] | Prisma.ListEnumScheduleTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ScheduleType[] | Prisma.ListEnumScheduleTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumScheduleTypeWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumScheduleTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumScheduleTypeFilter<$PrismaModel>;
};
export type NestedEnumSkillTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillType | Prisma.EnumSkillTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.SkillType[] | Prisma.ListEnumSkillTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SkillType[] | Prisma.ListEnumSkillTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSkillTypeFilter<$PrismaModel> | $Enums.SkillType;
};
export type NestedEnumSkillTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillType | Prisma.EnumSkillTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.SkillType[] | Prisma.ListEnumSkillTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SkillType[] | Prisma.ListEnumSkillTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSkillTypeWithAggregatesFilter<$PrismaModel> | $Enums.SkillType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSkillTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSkillTypeFilter<$PrismaModel>;
};
export type NestedEnumSkillStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillStatus | Prisma.EnumSkillStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SkillStatus[] | Prisma.ListEnumSkillStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SkillStatus[] | Prisma.ListEnumSkillStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSkillStatusFilter<$PrismaModel> | $Enums.SkillStatus;
};
export type NestedEnumSkillStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillStatus | Prisma.EnumSkillStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SkillStatus[] | Prisma.ListEnumSkillStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SkillStatus[] | Prisma.ListEnumSkillStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSkillStatusWithAggregatesFilter<$PrismaModel> | $Enums.SkillStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSkillStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSkillStatusFilter<$PrismaModel>;
};
export type NestedEnumStageFilter<$PrismaModel = never> = {
    equals?: $Enums.Stage | Prisma.EnumStageFieldRefInput<$PrismaModel>;
    in?: $Enums.Stage[] | Prisma.ListEnumStageFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Stage[] | Prisma.ListEnumStageFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStageFilter<$PrismaModel> | $Enums.Stage;
};
export type NestedEnumStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Stage | Prisma.EnumStageFieldRefInput<$PrismaModel>;
    in?: $Enums.Stage[] | Prisma.ListEnumStageFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Stage[] | Prisma.ListEnumStageFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStageWithAggregatesFilter<$PrismaModel> | $Enums.Stage;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStageFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStageFilter<$PrismaModel>;
};
