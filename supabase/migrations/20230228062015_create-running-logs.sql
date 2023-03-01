create table "public"."running_logs" (
    "runId" uuid not null,
    "userId" uuid not null,
    "date" timestamp with time zone not null,
    "goal_pace" integer,
    "actual_pace" integer not null,
    "goal_distance" real,
    "actual_distance" real not null,
    "notes" text default ''::text,
    "difficulty" smallint
);


alter table "public"."running_logs" enable row level security;

CREATE UNIQUE INDEX running_logs_pkey ON public.running_logs USING btree ("runId");

CREATE UNIQUE INDEX "running_logs_runId_key" ON public.running_logs USING btree ("runId");

alter table "public"."running_logs" add constraint "running_logs_pkey" PRIMARY KEY using index "running_logs_pkey";

alter table "public"."running_logs" add constraint "running_logs_runId_key" UNIQUE using index "running_logs_runId_key";

alter table "public"."running_logs" add constraint "running_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES auth.users(id) not valid;

alter table "public"."running_logs" validate constraint "running_logs_userId_fkey";


