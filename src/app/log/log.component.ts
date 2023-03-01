import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from '../supabase.service';
import { LogEntry } from '../types';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  log$ = this.supabase.getSingleLog(this.route.snapshot.paramMap.get('id')!);

  constructor(
    private route: ActivatedRoute,
    private supabase: SupabaseService,
  ) {
  }

  ngOnInit(): void {
  }
}
