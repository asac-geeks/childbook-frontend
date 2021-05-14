import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParentProfileComponent } from './components/parent-profile/parent-profile.component';
import {GamesComponent} from './components/games/games.component';
import {GameDetailComponent} from './components/game-detail/game-detail.component'
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
  {path: "games", component:GamesComponent},
  {path: "games/gameDetails/:id", component:GameDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
