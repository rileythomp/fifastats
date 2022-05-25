import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FifatableComponent } from './components/fifatable/fifatable.component';
import { AboutComponent } from './components/about/about.component';
import { PlayerpageComponent } from './components/playerpage/playerpage.component';
import { Error404Component } from './components/error404/error404.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeampageComponent } from './components/teampage/teampage.component';

const routes: Routes = [
  {
    path: 'players',
    component: FifatableComponent
  },
  {
    path: '',
    component: FifatableComponent
  },
  {
    path: 'player/:id',
    component: PlayerpageComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'team/:id',
    component: TeampageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
