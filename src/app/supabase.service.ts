import { Injectable, SimpleChange } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { Database } from './schema';
import { LogEntry } from './types';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient<Database>(environment.supabaseUrl, environment.supabaseKey)
  }


  async signInWithOAuth() {
    const { data, error } = await this.supabase.auth.signInWithOAuth({
      'provider': 'google'
    })

    if (data) {
      return data
    } else {
      console.error(error)
      return null
    }
  }

  async getUser() {
    const { data, error } = await this.supabase.auth.getUser();
    if (!error) {
      return data.user;
    } else {
      console.error(error);
      return null;
    }
  }

  async signout() {
    const { error } = await this.supabase.auth.signOut()
  }

  async getCurrentUserLogs() {
    const user = await this.getUser();
    const { data, error } = await this.supabase.from('running_logs').select().eq('userId', user?.id);
    if (!error) {
      return data as LogEntry[];
    } else {
      console.error(error);
      return null
    }
  }
}
