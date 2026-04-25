# TrickTracker — Stage & Skill Implementation Plan

## Base Idea

Programs have stages (e.g. "Beginner", "Stage 1", "Winter Stage"). Each stage has its own skill set. Skills and tricks are both `ProgramSkill` records differentiated by `type: SKILL | TRICK`.

Student-skill progress tracking (`StudentProgramSkill`) is NOT in scope here — next sprint.

---

## Decisions Made

1. **FK relationship** — `ProgramSkill.stageId → ProgramStage.id` (real FK, not string). Best practice.
2. **Description** — optional `description: String?` on both `ProgramStage` and `ProgramSkill`.
3. **Unique constraint** — `ProgramSkill` unique per `[stageId, name]` (was `[programId, name]`).
4. **Creation flow** — separate API calls after program is created, same pattern as location/schedule.

---

## Schema Changes

### `ProgramStage` — add description + skills relation
```prisma
model ProgramStage {
  id          String         @id @default(uuid())
  name        String
  description String?
  program     Program        @relation(fields: [programId], references: [id], onDelete: Cascade)
  programId   String
  skills      ProgramSkill[]

  createdAt DateTime @default(now()) @db.Timestamptz
  updatedAt DateTime @updatedAt @db.Timestamptz()

  @@unique([programId, name])
}
```

### `ProgramSkill` — add description, replace `stage: String` + `programId` with `stageId FK`
```prisma
model ProgramSkill {
  id          String       @id @default(uuid())
  name        String
  description String?
  type        SkillType
  stage       ProgramStage @relation(fields: [stageId], references: [id], onDelete: Cascade)
  stageId     String

  studentProgramSkills StudentProgramSkill[]

  createdAt DateTime @default(now()) @db.Timestamptz
  updatedAt DateTime @updatedAt @db.Timestamptz()

  @@unique([stageId, name])
}
```

**Removed from `ProgramSkill`:** `programId`, `stage: String`  
**`StudentProgramSkill`** untouched — still references `programSkillId`.

---

## Backend Implementation Order

### Step 1 — Prisma Schema
- Update `ProgramStage`: add `description`, add `skills ProgramSkill[]`
- Update `ProgramSkill`: remove `programId` + `stage: String`, add `stageId`, add `description`, change unique to `[stageId, name]`
- Run `npx prisma migrate dev`
- Run `npx prisma generate`

### Step 2 — `program-stages` module update
- **DTOs:**
  - `CreateProgramStageDto` — add `description?: string`
  - `UpdateProgramStageDto` — add `description?: string`
- **Service:** update queries to include `skills` in responses
- **Controller:** no route changes needed
- **Swagger:** update decorators

### Step 3 — `program-skills` module rewrite
- **DTOs:**
  - `AddProgramSkillsDto` — replace `programId` with `stageId`, add `description?: string`
  - `UpdateProgramSkillDto` — add `description?: string`, replace stage string with `stageId`
- **Service:** all queries use `stageId` instead of `programId`
- **Controller:** routes stay under `/program-skills`
- **Swagger:** update decorators

### Step 4 — `programs` module update
- `GET /programs/:id` response must include stages with nested skills:
  ```json
  {
    "programStages": [
      {
        "id": "...",
        "name": "Beginner",
        "description": "...",
        "skills": [
          { "id": "...", "name": "Water Familiarization", "type": "SKILL", "description": "..." }
        ]
      }
    ]
  }
  ```
- Update `findOne` Prisma include to: `programStages: { include: { skills: true } }`

---

## Frontend Implementation Order

### Step 5 — `src/api/types.ts` update
- Add `description?: string` to `ProgramStage` type
- Add `description?: string` to `ProgramSkill` type
- Change `ProgramSkill.stage` from `string` (old enum ref) to `stageId: string`
- Add `skills: ProgramSkill[]` to `ProgramStage` type
- Update `Program` type: `programStages` includes nested `skills`
- Remove `minLevel` / `maxLevel` if still present

### Step 6 — `program-skills` API file update
- `src/api/programSkills.api.ts` — update all calls to use `stageId` param

### Step 7 — Program Wizard Step 2 (Stage & Skills)
Currently wizard has: `[Step 1: Program Details] → [Step 2: Location/Schedule]`  
Target: `[Step 1: Program Details] → [Step 2: Stages & Skills] → [Step 3: Location/Schedule]`

**Step 2 UI behaviour:**
- Add stage form: name + optional description → POST `/program-stages`
- Each stage shows expandable skill list
- Add skill/trick to stage: name + type (SKILL/TRICK) + optional description → POST `/program-skills` with `stageId`
- Inline delete for both stages and skills
- Stages/skills saved immediately via API (not held in local wizard state)
- Program must already exist (created in Step 1) before Step 2 — same pattern as location/schedule

---

## Example Final Data Shape

```json
{
  "id": "...",
  "name": "Adults Swimming Program",
  "programStages": [
    {
     
     "id": "...",
      "name": "Beginner",
      "description": "Introduction to water and basic safety",
      "skills": [
        { "name": "Water Familiarization", "type": "SKILL", "description": "Getting comfortable in the water" },
        { "name": "Bubble Blowing", "type": "TRICK", "description": "Submerge face and blow bubbles" }
      ]
    },
    {
      "id": "...",
      "name": "Elementary",
      "description": "Basic strokes and kicking techniques",
      "skills": [
        { "name": "Freestyle Arms", "type": "SKILL", "description": "Alternating arm pull motion" },
        { "name": "Torpedo Glide", "type": "TRICK", "description": "Push off wall and glide" }
      ]
    }
  ]
}
```
