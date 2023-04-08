import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { AccountcreateComponent } from './home/accountcreate/accountcreate.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'faculty',
    component: FacultyComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    InventoryComponent,
    FacultyComponent,
    ScheduleComponent,
    HomeComponent,
    AccountcreateComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule // <--- import RouterModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }