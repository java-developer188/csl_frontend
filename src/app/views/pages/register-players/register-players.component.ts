import { Component } from '@angular/core';
import {Player} from '../../../models/player/player';
import { Router } from '@angular/router';
import {PlayerService} from '../../../services/Player/player.service';
import {DivisionService} from '../../../services/Division/division.service'
import { Division } from 'src/app/models/division/division';

@Component({
  selector: 'app-register-players',
  templateUrl: './register-players.component.html',
  styleUrls: ['./register-players.component.scss']
})
export class RegisterPlayersComponent {
  your_property = false;
  playerObj : Player
  Obj : Array<Division> = [];
  selectedDivision !: Division
 
  isSelectedDiv !: boolean;

  constructor(private router: Router , private service: PlayerService, private serviceDivision: DivisionService){ //dependency injection -- using service in constructor - private variable makes it accessibe thorugh out the class
    this.playerObj = new Player();
    this.playerObj.isCaptain="0";
    this.playerObj.status="1";
    this.selectedDivision = new Division();
    this.isSelectedDiv = false;
    ///console.log(this.isSelectedDiv);
    
  }

  ngOnInit(){
    this.serviceDivision.getDivisions().subscribe((divisions)=>{
      console.log(divisions);
      this.Obj = divisions.data;
    
    });
  }

  myFunction(div : Division){
    console.log("Hello");
    console.log(div.id);
    if(div.id==-1){
      this.toggleModal();
    }
  }

  registerPlayer(){ 
    this.playerObj.division = this.selectedDivision;
    console.log(JSON.stringify(this.playerObj));
    this.service.registerPlayer(this.playerObj).subscribe(res=>{
      console.log(res);
      if(res.isError==false){
        alert("Player "+res.data.firstName+" "+res.data.lastName+ " added successfully");
      }
      else{
        alert("Error saving player");
      }
      
    });   
  }
  playerSingle !: any;

  //for view modal
  public visible = false;

  toggleModal() {
    this.visible = !this.visible; 
  }

  toggleModalAgain() {
    this.visible = !this.visible;
  }

  toggleModalAgainAndSubmitDivision(division: Division){
    this.visible = !this.visible;
    this.isSelectedDiv = true;
    console.log(this.isSelectedDiv+"newest division selected");
    console.log(division);
    this.serviceDivision.addDivision(division).subscribe(res=>{
    console.log(res);
   
      // if(res.isError==false){
      //   alert("Player "+res.data.firstName+" "+res.data.lastName+ " added successfully");
      // }
      // else{
      //   alert("Error saving player");
      // }
      this.ngOnInit();
    }); 

  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

}
