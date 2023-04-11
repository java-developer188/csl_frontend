import { Component } from '@angular/core';
import { Player } from 'src/app/models/player/player';
import { Team } from 'src/app/models/teams/teams';
import { PlayerService } from 'src/app/services/Player/player.service';
import { TeamService } from 'src/app/services/Team/team.service';
import {TeamResponseModel} from 'src/app/models/teamResponseModel/team-response-model';
import { PlayerResponseModel } from 'src/app/models/playerResponseModel/player-response-model';

@Component({
  selector: 'app-assign-team',
  templateUrl: './assign-team.component.html',
  styleUrls: ['./assign-team.component.scss']
})

export class AssignTeamComponent {
  values = ["one","two","three"];
  searchText = '';
  playerObj : Array<PlayerResponseModel> = [];
  teamObj: Array<TeamResponseModel> = [];
  selectedTeam : Team;
  selectedPlayer !: Player;
  
  constructor( private teamService : TeamService, private service: PlayerService){
    this.selectedTeam=new Team();
    // this.Team1 = new Team();
    // this.Team1.id=1;
    // this.Team1.name="Karachi Kings"
    // this.Team1 = new Team().setID(1).setName("Karachi Kings");
    // this.teamObj.push(this.Team1);
  }

  ngOnInit(){
    this.teamService.getTeamList().subscribe(res=>{
      this.teamObj = res.data;
      console.log(this.teamObj);
    });
      this.service.getPlayerList().subscribe(res=>{
        for(let playerObject of res.data){
          if(playerObject.teamName == null){
            this.playerObj = playerObject;
          }
        }
        console.log(this.playerObj);
    });
     
  }

  myFunc(selTeam : Team){
    console.log(selTeam);
  }

  
  //for view modal
  public visible = false;

  toggleModal(player: Player) {
    this.visible = !this.visible;
    console.log(player);
    this.selectedPlayer=player;
    console.log(this.selectedPlayer)
  }

  toggleModalAgain(myPlayer : Player) {
    console.log("selectedTeam"+this.selectedTeam._name)

    if(myPlayer.team == null){
      myPlayer.team = new Team();
      myPlayer.team=this.selectedTeam;
    }
    console.log(myPlayer);
    this.service.addTeam(myPlayer).subscribe(res =>{
    console.log(res);
    });
    console.log(myPlayer);
    this.visible = !this.visible; //for modal
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  toggleModalAgain_close(){
    this.visible = !this.visible;
  }
  
}
