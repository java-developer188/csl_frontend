import { Component } from '@angular/core';
import { Player } from 'src/app/models/player/player';
import { Team } from 'src/app/models/teams/teams';
import { PlayerService } from 'src/app/services/Player/player.service';
import { TeamService } from 'src/app/services/Team/team.service';
import {TeamResponseModel} from 'src/app/models/teamResponseModel/team-response-model';
import { PlayerResponseModel } from 'src/app/models/playerResponseModel/player-response-model';
import { Division } from 'src/app/models/division/division';
import { PlayerSkills } from 'src/app/models/player_skills/playerskills';

@Component({
  selector: 'app-assign-team',
  templateUrl: './assign-team.component.html',
  styleUrls: ['./assign-team.component.scss']
})

export class AssignTeamComponent {
  searchText = '';
  teamObj: Array<TeamResponseModel> = [];
  selectedTeam !: Team;
  allPlayersObj: Array<PlayerResponseModel> = [];
  Obj:Array<PlayerResponseModel>=[];
  selectedPlayer !: PlayerResponseModel;
  singlePlayer !: Player
  totalObjects!: number
  onlyOneCheckbox = true;
  //new approach
  playersObj: Array<Player> = [];
  playerSelected !: Player
  setTeamCaptObj = new Set<number>();
  isCapt !: boolean
  
  constructor( private teamService : TeamService, private service: PlayerService){
    this.selectedTeam=new Team();
    this.singlePlayer=new Player();
    //this.playerSelected=new Player();
    //this.selectedPlayer=new PlayerResponseModel();
  }

  ngOnInit(){
    this.teamService.getTeamList().subscribe(res=>{
      this.teamObj = res.data;
      console.log(this.teamObj);
      //this.AllPlayers();
      //new appraoch
      this.playerResponseModelIntoPlayer();
    });
    //this.AllPlayers();
  }

  /* -------------------------- Calling Get Player API --------------------------------- */
  /* ---------- The response model is transformed into the player object --------------- */
  public playerResponseModelIntoPlayer(){
    /*-------- it will have all the players which have no team assigned ---------------- */
    this.playersObj=[];
    this.service.getPlayerList().subscribe(res=>{
      /*------------ saving player's repsonse model in a player Obj --------------------- */
      for(let value of res.data){
        let aPlayer = new Player();
        aPlayer.id=value.id;
        aPlayer.firstName=value.firstName;
        aPlayer.lastName=value.lastName;
        aPlayer.age=value.age;
        if(value.isCaptain == "TRUE")
          aPlayer.isCaptain="Captain";
        else if(value.isCaptain == "FALSE")
          aPlayer.isCaptain="Player";
        aPlayer.status=value.status;
        aPlayer.playerSkills=new PlayerSkills();
        aPlayer.playerSkills.skill=value.skill;
        aPlayer.team=new Team();
        aPlayer.team._name=value.teamName;
        aPlayer.division=new Division();
        aPlayer.division.divisionName=value.divisionName;
        /* --------- saving the players in player Obj which have no team assigned -------- */
        if(value.teamName == null)
          this.playersObj.push(aPlayer);

        /* --------------------- saving teams with captains in a hashset ------------------ */
        this.getTeamsWithCaptains(value);
      }
    })  
  }



  /*------ it will be triggered whenever the selected item is changed (selected team) ------ */
  myFunc(selTeam : Team){
    console.log("selected Team id"+selTeam._id);
    for(let value of this.teamObj){
      if(value.id == selTeam._id){
        selTeam._name = value.name;
      }
    }
    console.log("after for")
    this.teamsAndCaptain();
  }

  //for view modal
  public visible = false;
  public selectedPlayerIndex = 0;

  /* ------------------------ When Assign Team button is clicked -------------------------- */
  toggleModal(player: Player) {
    /* ------- Show the Modal -------- */
    this.visible = !this.visible;
    console.log(JSON.stringify(player));
    /* ------ Creating an object for a single player ------- */
    /* -- that is being selected to be added to the team -- */
    this.playerSelected=new Player();
    this.playerSelected = player;
  }

  /*--------------------- On Clicking Assign button ------------------------------------ */
  toggleModalAgain(myPlayer : Player) {
    console.log("selectedTeam"+this.selectedTeam._id)
    //new approach
    myPlayer = new Player();
    myPlayer.id=this.playerSelected.id;
    if(this.isCapt){
      myPlayer.isCaptain="TRUE"
      this.onlyOneCheckbox=false;
    }
    myPlayer.team=new Team();
    myPlayer.team._id=this.selectedTeam._id;
    console.log(JSON.stringify(myPlayer));
    this.service.addTeam(myPlayer).subscribe(res =>{
      console.log(res);
      //this.playerResponseModelIntoPlayer();
    });
    this.isCapt=false;
    this.visible = !this.visible; //for modal

  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  toggleModalAgain_close(){
    this.visible = !this.visible;
  }

  /* ------------ saving team ids which have captain in the hash set */
  public getTeamsWithCaptains(value : any) {
      if(value.isCaptain == "TRUE" && value.teamName != null){
        for(let team of this.teamObj){
          if(value.teamName == team.name){
            this.setTeamCaptObj.add(team.id);
          }
        }
      }
  } 

  /* ---------- Checking if the selected Team has captain or not  ---------- */
  /* ---------- If the selected Team is in the hashset (hashset has all the teams with captain)  ---------- */
  /* ---------- then uncheck the captain checkbox  ---------- */
  /* ---------- Initially the captain checkbox is checked ---------- */
  public teamsAndCaptain(){
    this.onlyOneCheckbox=true;
      for(let value of this.setTeamCaptObj){
        console.log(value);
        if(value == this.selectedTeam._id){
          this.onlyOneCheckbox = false;
          break;
        }
      }

  }

  // public changeCheckbox(data : any){
  //   this.onlyOneCheckbox=true;
  //     for(let value of this.getTeamsWithCaptains(data)){
  //       console.log(value);
  //       if(value == this.selectedTeam._id){
  //         this.onlyOneCheckbox = false;
  //       }
  //     }
  // }
  
    // AllPlayers(){
  //   this.service.getPlayerList().subscribe(res=>{
  //    this.allPlayersObj = res.data;
  //     // this.totalObjects = res.totalSize;
  //     for(let value of res.data){
  //       if(value.teamName == null){
  //         this.Obj.push(value);
  //         if(value.isCaptain == "TRUE"){
  //           value.isCaptain = "Captain"
  //         }else if(value.isCaptain == "FALSE") {
  //           value.isCaptain = "Player"
  //         }
  //       }  
  //     }
  //     console.log(this.Obj);
  //     //for make captain checkbox
  //     //this.changeCheckbox();
  //     // for(let value of this.getTeamsWithCaptains){
  //     //   console.log(value);
  //     // }
  //   });
  // }

}
