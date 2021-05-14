import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParentProfileComponent } from './components/parent-profile/parent-profile.component';
import {GamesComponent} from './components/games/games.component';
import {GameDetailComponent} from './components/game-detail/game-detail.component'

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "parentProfile", component:ParentProfileComponent},
  {path: "games", component:GamesComponent},
  {path: "games/gameDetails/:id", component:GameDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
