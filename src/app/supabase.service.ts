import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
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
}
