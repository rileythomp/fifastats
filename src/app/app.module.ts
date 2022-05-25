import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { FifatableComponent } from './components/fifatable/fifatable.component';
import { FifaplayerComponent } from './components/fifaplayer/fifaplayer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerpageComponent } from './components/playerpage/playerpage.component';
import { Error404Component } from './components/error404/error404.component';
import { TeamsComponent } from './components/teams/teams.component';
import { FifateamComponent } from './components/fifateam/fifateam.component';
import { TeampageComponent } from './components/teampage/teampage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FifatableComponent,
    FifaplayerComponent,
    PlayerpageComponent,
    Error404Component,
    TeamsComponent,
    FifateamComponent,
    TeampageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
