import { Database } from "./schema";

export type LogEntry = Database['public']['Tables']['running_logs']['Row']
