import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ParentProfileComponent } from './components/parent-profile/parent-profile.component';
import {HttpClientModule} from "@angular/common/http";
import { GameItemComponent } from './components/game-item/game-item.component';
import {GamesComponent}from './components/games/games.component';
import { SearchCategoryGamesComponent } from './components/search-category-games/search-category-games.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ParentProfileComponent,
    GamesComponent,
    GameItemComponent,
    SearchCategoryGamesComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
