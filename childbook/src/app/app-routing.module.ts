import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParentProfileComponent } from './components/parent-profile/parent-profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ParentLoginComponent } from './components/parent-login/parent-login.component';
import { VerificationComponent } from './components/verification/verification.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'parentProfile', component: ParentProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'parentlogin', component: ParentLoginComponent },
  { path: 'verification', component: VerificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
