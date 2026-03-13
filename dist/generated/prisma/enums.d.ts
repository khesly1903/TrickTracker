export declare const StudentType: {
    readonly CHILD: "CHILD";
    readonly ADULT: "ADULT";
};
export type StudentType = (typeof StudentType)[keyof typeof StudentType];
export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly OWNER: "OWNER";
    readonly INSTRUCTOR: "INSTRUCTOR";
    readonly PARENT: "PARENT";
    readonly STUDENT: "STUDENT";
    readonly VISITOR: "VISITOR";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const ClassTypes: {
    readonly PRIVATE: "PRIVATE";
    readonly GROUP: "GROUP";
    readonly MAKEUP: "MAKEUP";
    readonly WORKSHOP: "WORKSHOP";
    readonly EVENT: "EVENT";
};
export type ClassTypes = (typeof ClassTypes)[keyof typeof ClassTypes];
export declare const ContactTypes: {
    readonly PARENT: "PARENT";
    readonly GUARDIAN: "GUARDIAN";
    readonly EMERGENCY: "EMERGENCY";
};
export type ContactTypes = (typeof ContactTypes)[keyof typeof ContactTypes];
export declare const ProgramLevels: {
    readonly BEGINNER: "BEGINNER";
    readonly INTERMEDIATE: "INTERMEDIATE";
    readonly TODDLER: "TODDLER";
    readonly ALL_LEVELS: "ALL_LEVELS";
};
export type ProgramLevels = (typeof ProgramLevels)[keyof typeof ProgramLevels];
export declare const SkillType: {
    readonly SKILL: "SKILL";
    readonly TRICK: "TRICK";
};
export type SkillType = (typeof SkillType)[keyof typeof SkillType];
export declare const SkillStatus: {
    readonly NOT_STARTED: "NOT_STARTED";
    readonly LEARNING: "LEARNING";
    readonly WITH_HELP: "WITH_HELP";
    readonly MASTERED: "MASTERED";
};
export type SkillStatus = (typeof SkillStatus)[keyof typeof SkillStatus];
export declare const Gender: {
    readonly BOYS: "BOYS";
    readonly GIRLS: "GIRLS";
    readonly ALL_GENDER: "ALL_GENDER";
};
export type Gender = (typeof Gender)[keyof typeof Gender];
export declare const DayOfWeek: {
    readonly MONDAY: "MONDAY";
    readonly TUESDAY: "TUESDAY";
    readonly WEDNESDAY: "WEDNESDAY";
    readonly THURSDAY: "THURSDAY";
    readonly FRIDAY: "FRIDAY";
    readonly SATURDAY: "SATURDAY";
    readonly SUNDAY: "SUNDAY";
};
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];
export declare const ScheduleType: {
    readonly CLASS: "CLASS";
    readonly HOLIDAY: "HOLIDAY";
    readonly CANCELLED: "CANCELLED";
    readonly MAKEUP: "MAKEUP";
};
export type ScheduleType = (typeof ScheduleType)[keyof typeof ScheduleType];
export declare const Stage: {
    readonly BEGINNER: "BEGINNER";
    readonly LOREM1: "LOREM1";
    readonly INTERMEDIATE: "INTERMEDIATE";
    readonly LOREM2: "LOREM2";
    readonly ADVANCED: "ADVANCED";
};
export type Stage = (typeof Stage)[keyof typeof Stage];
