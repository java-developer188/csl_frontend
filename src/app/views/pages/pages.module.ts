import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule,TableModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { RegisterPlayersComponent } from './register-players/register-players.component';
import { RegisterTeamsComponent } from './register-teams/register-teams.component';
import { ViewPlayersComponent } from './view-players/view-players.component';
import { AssignTeamComponent } from './assign-team/assign-team.component';
import { SearchPipe } from 'src/app/search-pipe/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterTournamentComponent } from './register-tournament/register-tournament.component';
import { RegisterSportComponent } from './register-sport/register-sport.component';
// import { RegisterTeamComponent } from './register-team/register-team.component';
// import { FooseballTeamComponent } from './Teams/fooseball-team/fooseball-team.component';
// import { CricketTeamComponent } from './teams/cricket-team/cricket-team.component';


@NgModule({
  declarations: [
    LoginComponent,
    Page404Component,
    Page500Component,
    RegisterPlayersComponent,
    RegisterTeamsComponent,
    ViewPlayersComponent,
    AssignTeamComponent,
    SearchPipe,
    RegisterTournamentComponent,
    RegisterSportComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    FontAwesomeModule,
  ]
})
export class PagesModule {
}
