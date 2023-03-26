import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/teams/teams';
import {TeamService} from '../../../services/Team/team.service';

@Component({
  selector: 'app-register-teams',
  templateUrl: './register-teams.component.html',
  styleUrls: ['./register-teams.component.scss']
})
export class RegisterTeamsComponent {
  values = ["one","two","three"];
  count = 0;
  checkProperty = false;
  isRegistered = false;

  teamObj : Team

  constructor(private teamService: TeamService, private router: Router ){
    this.teamObj=new Team();
  }

  registerTeams(){
    console.log(JSON.stringify(this.teamObj));
    this.teamService.registerTeam(this.teamObj).subscribe(res =>{
      console.log(res);
      this.isRegistered = true;
      this.router.navigate(['register-team']);
      //window.location.reload();
    });
    
  }
}
