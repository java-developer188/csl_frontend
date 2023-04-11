import { Component } from '@angular/core';
import { Player } from 'src/app/models/player/player';
import { Team } from 'src/app/models/teams/teams';
import { PlayerService } from 'src/app/services/Player/player.service';
import { TeamService } from 'src/app/services/Team/team.service';
import {TeamResponseModel} from 'src/app/models/teamResponseModel/team-response-model';
import { PlayerResponseModel } from 'src/app/models/playerResponseModel/player-response-model';
import { Division } from 'src/app/models/division/division';

@Component({
  selector: 'app-assign-team',
  templateUrl: './assign-team.component.html',
  styleUrls: ['./assign-team.component.scss']
})

export class AssignTeamComponent {
  searchText = '';
  teamObj: Array<TeamResponseModel> = [];
  selectedTeam : Team;
  Obj:Array<PlayerResponseModel>=[];
  selectedPlayer !: PlayerResponseModel;
  singlePlayer !: Player
  totalObjects!: number
  
  constructor( private teamService : TeamService, private service: PlayerService){
    this.selectedTeam=new Team();
    this.singlePlayer=new Player();
    this.AllPlayers();
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

    //this.AllPlayers();
  }

  AllPlayers(){
    this.service.getPlayerList().subscribe(res=>{
      //console.log(res);
     // this.Obj = res.data;
      // this.totalObjects = res.totalSize;

      for(let value of res.data){
        if(value.teamName == null){
          this.Obj.push(value);
          if(value.isCaptain == "TRUE"){
            value.isCaptain = "Captain"
          }else if(value.isCaptain == "FALSE") {
            value.isCaptain = "Player"
          }
        }
        
      }
      console.log(this.Obj);
    });
  }

  myFunc(selTeam : Team){
    console.log(selTeam._id);
    for(let value of this.teamObj){
      if(value.id == selTeam._id){
        selTeam._name = value.name;
      }
    }
  }

  
  //for view modal
  public visible = false;
  public selectedPlayerIndex = 0;

  toggleModal(player: PlayerResponseModel,playerIndex: number) {
    this.visible = !this.visible;
    for(let value of this.Obj){
      if(player.id == value.id){
        this.singlePlayer.id=value.id;
        this.singlePlayer.team = new Team();
        this.singlePlayer.team._id = this.selectedTeam._id;
        console.log("playerIndex"+playerIndex);
        this.selectedPlayerIndex=playerIndex;
      }
    }
    this.selectedPlayer=player;
    console.log(player);
    console.log("selected player: "+this.singlePlayer.team);
    console.log(JSON.stringify(this.singlePlayer));
    //console.log("selectedTeam"+this.selectedTeam)
    
    // console.log(this.selectedPlayer)
  }

  toggleModalAgain(myPlayer : PlayerResponseModel) {
    console.log("selectedTeam"+this.selectedTeam._id)
    console.log(JSON.stringify(this.singlePlayer));

    this.service.addTeam(this.singlePlayer).subscribe(res =>{
      console.log(res);
      console.log("hi");
    });
    delete this.Obj[this.selectedPlayerIndex];
    this.visible = !this.visible; //for modal
    console.log(myPlayer);
   
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  toggleModalAgain_close(){
    this.visible = !this.visible;
  }
  
}
