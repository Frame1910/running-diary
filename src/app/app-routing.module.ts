import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LogViewComponent } from './log-view/log-view.component';
import { LogComponent } from './log/log.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'logs', pathMatch: 'full' },
  {
    path: 'logs', component: LogViewComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard]
  },
  { path: 'log/:id', component: LogComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
