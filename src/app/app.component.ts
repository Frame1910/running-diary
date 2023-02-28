import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'running-diary';

  constructor(
    public supabase: SupabaseService,
  ) { }

  ngOnInit(): void {

  }
}
