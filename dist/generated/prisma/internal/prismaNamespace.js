"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.ProgramSkillScalarFieldEnum = exports.StudentContactScalarFieldEnum = exports.StudentProgramScalarFieldEnum = exports.LocationScalarFieldEnum = exports.AttendanceScalarFieldEnum = exports.StudentSkillScalarFieldEnum = exports.SkillScalarFieldEnum = exports.ProgramScheduleScalarFieldEnum = exports.ProgramScalarFieldEnum = exports.ClassScalarFieldEnum = exports.InstructorScalarFieldEnum = exports.ContactScalarFieldEnum = exports.StudentScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.4.2",
    engine: "94a226be1cf2967af2541cca5529f0f7ba866919"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Student: 'Student',
    Contact: 'Contact',
    Instructor: 'Instructor',
    Class: 'Class',
    Program: 'Program',
    ProgramSchedule: 'ProgramSchedule',
    Skill: 'Skill',
    StudentSkill: 'StudentSkill',
    Attendance: 'Attendance',
    Location: 'Location',
    StudentProgram: 'StudentProgram',
    StudentContact: 'StudentContact',
    ProgramSkill: 'ProgramSkill'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    roles: 'roles',
    isActive: 'isActive',
    lastLoginAt: 'lastLoginAt',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.StudentScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    name: 'name',
    surname: 'surname',
    type: 'type',
    dob: 'dob',
    injuries: 'injuries',
    phoneNumber: 'phoneNumber',
    secondaryPhoneNumber: 'secondaryPhoneNumber',
    whatsappPhoneNumber: 'whatsappPhoneNumber',
    school: 'school',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ContactScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    name: 'name',
    surname: 'surname',
    type: 'type',
    phoneNumber: 'phoneNumber',
    secondaryPhoneNumber: 'secondaryPhoneNumber',
    whatsappPhoneNumber: 'whatsappPhoneNumber',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.InstructorScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    name: 'name',
    surname: 'surname',
    isActive: 'isActive',
    phoneNumber: 'phoneNumber',
    secondaryPhoneNumber: 'secondaryPhoneNumber',
    whatsappPhoneNumber: 'whatsappPhoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ClassScalarFieldEnum = {
    id: 'id',
    name: 'name',
    type: 'type',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProgramScalarFieldEnum = {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    price: 'price',
    Stage: 'Stage',
    gender: 'gender',
    capcaity: 'capcaity',
    requiredEquipment: 'requiredEquipment',
    instructorId: 'instructorId',
    minAge: 'minAge',
    maxAge: 'maxAge',
    minLevel: 'minLevel',
    maxLevel: 'maxLevel',
    classId: 'classId',
    locationId: 'locationId'
};
exports.ProgramScheduleScalarFieldEnum = {
    id: 'id',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    duration: 'duration',
    endTime: 'endTime',
    type: 'type',
    programId: 'programId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SkillScalarFieldEnum = {
    id: 'id',
    name: 'name',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.StudentSkillScalarFieldEnum = {
    id: 'id',
    studentId: 'studentId',
    skillId: 'skillId',
    status: 'status',
    achievedAt: 'achievedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AttendanceScalarFieldEnum = {
    id: 'id',
    attended: 'attended',
    note: 'note',
    studentProgramId: 'studentProgramId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.LocationScalarFieldEnum = {
    id: 'id',
    name: 'name',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.StudentProgramScalarFieldEnum = {
    id: 'id',
    isActive: 'isActive',
    studentId: 'studentId',
    programId: 'programId'
};
exports.StudentContactScalarFieldEnum = {
    studentId: 'studentId',
    contactId: 'contactId'
};
exports.ProgramSkillScalarFieldEnum = {
    programId: 'programId',
    skillId: 'skillId',
    stage: 'stage'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map