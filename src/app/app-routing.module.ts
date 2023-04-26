import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DistributorLoginComponent } from './distributor-login/distributor-login.component';
import { UserComponent } from './user/user.component';
import { UserDashbordComponent } from './user/user-dashbord/user-dashbord.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AgentFilesComponent } from './user/agent-files/agent-files.component';
import { ComposeComponent } from './user/compose/compose.component';
import { DistributorFilesComponent } from './user/distributor-files/distributor-files.component';
import { UserPasswordComponent } from './user/user-password/user-password.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { LeakFilesComponent } from './leak-files/leak-files.component';
import { ViewFilesComponent } from './view-files/view-files.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { PasswordComponent } from './password/password.component';
import { SendFilesComponent } from './send-files/send-files.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent},
      { path: 'user-registration', component: UserRegistrationComponent },
      { path: 'user-login', component: UserLoginComponent },
      { path: 'user', component: UserComponent },
      { path: 'distributor-login', component: DistributorLoginComponent },
    
  {
    path: 'admin-dashbord', component: AdminDashbordComponent, children: [
      { path: 'leak-files', component: LeakFilesComponent },
      { path: 'view-files', component: ViewFilesComponent },
      { path: 'view-users', component: ViewUsersComponent },
      { path: 'password', component: PasswordComponent },
      { path: 'send-files', component: SendFilesComponent }
    ]
  },
  {
    path: 'user-dasboard', component: UserDashbordComponent, children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'agentfiles', component: AgentFilesComponent },
      { path: 'compose', component: ComposeComponent },
      { path: 'distributor-files', component: DistributorFilesComponent },
      { path: 'password', component: UserPasswordComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
