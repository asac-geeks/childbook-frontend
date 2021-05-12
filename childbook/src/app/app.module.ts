import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ParentProfileComponent } from './components/parent-profile/parent-profile.component';
import { ParentDetailsComponent } from './components/parent-details/parent-details.component';
import { ParentMapComponent } from './components/parent-map/parent-map.component';
import { ParentEditComponent } from './components/parent-edit/parent-edit.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ParentLoginComponent } from './components/parent-login/parent-login.component';
import { VerificationComponent } from './components/verification/verification.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ParentProfileComponent,
    ParentDetailsComponent,
    ParentMapComponent,
    ParentEditComponent,
     SignupComponent,
    LoginComponent,
    ParentLoginComponent,
    VerificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}