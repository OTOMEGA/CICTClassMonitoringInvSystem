import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/component/login/login.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { InventoryComponent } from './inventory/inventory.component';
const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: '', redirectTo: 'admin', pathMatch: 'full'
  },
  { path: 'inventory', component: InventoryComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: '', redirectTo: '/faculty', pathMatch: 'full' },
  { path: 'faculty', component: FacultyComponent },
  { path: 'schedule', component: ScheduleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
