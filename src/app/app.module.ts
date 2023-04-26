import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserComponent } from './user/user.component';
import { DistributorLoginComponent } from './distributor-login/distributor-login.component';
import { ViewComponent } from './user/view/view.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { LeakFilesComponent } from './leak-files/leak-files.component';
import { PasswordComponent } from './password/password.component';
import { ViewFilesComponent } from './view-files/view-files.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { SendFilesComponent } from './send-files/send-files.component';
import { AgentFilesComponent } from './user/agent-files/agent-files.component';
import { ComposeComponent } from './user/compose/compose.component';
import { DistributorFilesComponent } from './user/distributor-files/distributor-files.component';
import { UserDashbordComponent } from './user/user-dashbord/user-dashbord.component';
import { UserPasswordComponent } from './user/user-password/user-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    UserComponent,
    DistributorLoginComponent,
    ViewComponent,
    ProfileComponent,
    AdminDashbordComponent,
    LeakFilesComponent,
    PasswordComponent,
    ViewFilesComponent,
    ViewUsersComponent,
    SendFilesComponent,
    AgentFilesComponent,
    ComposeComponent,
    DistributorFilesComponent,
    UserDashbordComponent,
    UserPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,ReactiveFormsModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
