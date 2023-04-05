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
  checkProperty = false;
  isRegistered = false;

  teamObj : Team

  constructor(private teamService: TeamService, private router: Router ){
    this.teamObj=new Team();
    this.teamObj.setStatus("ACTIVE");
  }

  registerTeams(){
    console.log(JSON.stringify(this.teamObj));
    this.teamService.registerTeam(this.teamObj).subscribe(res =>{
      console.log(res);
      this.isRegistered = true;
      if(res.isError==false){
        alert("Team "+res.data.name+" added successfully");
      }
      else{
        alert("Error saving team");
      }
    });
    
  }
}
