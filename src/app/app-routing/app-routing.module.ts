import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from '../components/user-form/user-form.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { UserListComponent } from '../components/user-list/user-list.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { AdminComponent } from '../components/admin/admin.component';

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'admin', component: AdminComponent,
    children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', component: UserListComponent},
      {path: 'users/new', component: UserFormComponent}
    ]
  },
  {path: "**", component: PageNotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
