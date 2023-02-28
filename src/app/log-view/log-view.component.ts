import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateLogDialogComponent } from '../create-log-dialog/create-log-dialog.component';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-log-view',
  templateUrl: './log-view.component.html',
  styleUrls: ['./log-view.component.scss']
})
export class LogViewComponent {

  constructor(
    private supabase: SupabaseService,
    private matDialog: MatDialog,
  ) { }

  logs$ = this.supabase.getCurrentUserLogs();

  addNewLog() {
    const ref = this.matDialog.open(CreateLogDialogComponent)

    ref.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult)
    })
  }
}
