import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tournament } from 'src/app/models/tournament/tournament';
import { TournamentService } from 'src/app/services/Tournament/tournament.service';

@Component({
  selector: 'app-register-tournament',
  templateUrl: './register-tournament.component.html',
  styleUrls: ['./register-tournament.component.scss']
})
export class RegisterTournamentComponent {
  checkProperty = false;
  isRegistered = false;

  // teamObj : Team
  tournamentObj : Tournament

  constructor(private tournament: TournamentService, private router: Router ){
    this.tournamentObj=new Tournament();
    this.tournamentObj._status = "ACTIVE";
  }

  registerTournament(){
    console.log(JSON.stringify(this.tournamentObj));
    this.tournament.registerTournament(this.tournamentObj).subscribe(res =>{
      console.log(res);
      this.isRegistered = true;
      if(res.isError==false){
        alert("Tournament "+res.data.name+" added successfully");
      }
      else{
        alert("Error saving tournament");
      }
    });
    
  }

}
