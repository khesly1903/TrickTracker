import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Student: "Student";
    readonly Contact: "Contact";
    readonly Instructor: "Instructor";
    readonly Class: "Class";
    readonly Program: "Program";
    readonly ProgramSchedule: "ProgramSchedule";
    readonly Skill: "Skill";
    readonly StudentSkill: "StudentSkill";
    readonly Attendance: "Attendance";
    readonly Location: "Location";
    readonly StudentProgram: "StudentProgram";
    readonly StudentContact: "StudentContact";
    readonly ProgramSkill: "ProgramSkill";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly roles: "roles";
    readonly isActive: "isActive";
    readonly lastLoginAt: "lastLoginAt";
    readonly refreshToken: "refreshToken";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const StudentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly name: "name";
    readonly surname: "surname";
    readonly type: "type";
    readonly dob: "dob";
    readonly injuries: "injuries";
    readonly phoneNumber: "phoneNumber";
    readonly secondaryPhoneNumber: "secondaryPhoneNumber";
    readonly whatsappPhoneNumber: "whatsappPhoneNumber";
    readonly school: "school";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];
export declare const ContactScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly name: "name";
    readonly surname: "surname";
    readonly type: "type";
    readonly phoneNumber: "phoneNumber";
    readonly secondaryPhoneNumber: "secondaryPhoneNumber";
    readonly whatsappPhoneNumber: "whatsappPhoneNumber";
    readonly email: "email";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum];
export declare const InstructorScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly name: "name";
    readonly surname: "surname";
    readonly isActive: "isActive";
    readonly phoneNumber: "phoneNumber";
    readonly secondaryPhoneNumber: "secondaryPhoneNumber";
    readonly whatsappPhoneNumber: "whatsappPhoneNumber";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InstructorScalarFieldEnum = (typeof InstructorScalarFieldEnum)[keyof typeof InstructorScalarFieldEnum];
export declare const ClassScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly type: "type";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum];
export declare const ProgramScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly isActive: "isActive";
    readonly price: "price";
    readonly Stage: "Stage";
    readonly gender: "gender";
    readonly capcaity: "capcaity";
    readonly requiredEquipment: "requiredEquipment";
    readonly instructorId: "instructorId";
    readonly minAge: "minAge";
    readonly maxAge: "maxAge";
    readonly minLevel: "minLevel";
    readonly maxLevel: "maxLevel";
    readonly classId: "classId";
    readonly locationId: "locationId";
};
export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum];
export declare const ProgramScheduleScalarFieldEnum: {
    readonly id: "id";
    readonly dayOfWeek: "dayOfWeek";
    readonly startTime: "startTime";
    readonly duration: "duration";
    readonly endTime: "endTime";
    readonly type: "type";
    readonly programId: "programId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProgramScheduleScalarFieldEnum = (typeof ProgramScheduleScalarFieldEnum)[keyof typeof ProgramScheduleScalarFieldEnum];
export declare const SkillScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly type: "type";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum];
export declare const StudentSkillScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly skillId: "skillId";
    readonly status: "status";
    readonly achievedAt: "achievedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StudentSkillScalarFieldEnum = (typeof StudentSkillScalarFieldEnum)[keyof typeof StudentSkillScalarFieldEnum];
export declare const AttendanceScalarFieldEnum: {
    readonly id: "id";
    readonly attended: "attended";
    readonly note: "note";
    readonly studentProgramId: "studentProgramId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum];
export declare const LocationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly address: "address";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum];
export declare const StudentProgramScalarFieldEnum: {
    readonly id: "id";
    readonly isActive: "isActive";
    readonly studentId: "studentId";
    readonly programId: "programId";
};
export type StudentProgramScalarFieldEnum = (typeof StudentProgramScalarFieldEnum)[keyof typeof StudentProgramScalarFieldEnum];
export declare const StudentContactScalarFieldEnum: {
    readonly studentId: "studentId";
    readonly contactId: "contactId";
};
export type StudentContactScalarFieldEnum = (typeof StudentContactScalarFieldEnum)[keyof typeof StudentContactScalarFieldEnum];
export declare const ProgramSkillScalarFieldEnum: {
    readonly programId: "programId";
    readonly skillId: "skillId";
    readonly stage: "stage";
};
export type ProgramSkillScalarFieldEnum = (typeof ProgramSkillScalarFieldEnum)[keyof typeof ProgramSkillScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
