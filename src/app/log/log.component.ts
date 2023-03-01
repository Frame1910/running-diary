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
  runId: string | null

  log$: Promise<any> | null = null

  constructor(
    private route: ActivatedRoute,
    private supabase: SupabaseService,
  ) {
    this.runId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.log$ = this.supabase.getSingleLog(this.runId!);
  }
}
