alter table "public"."running_logs" add column "name" text;

alter table "public"."running_logs" add column "time" numeric;

create policy "Enable insert for authenticated users only"
on "public"."running_logs"
as permissive
for all
to authenticated
using (true)
with check (true);



