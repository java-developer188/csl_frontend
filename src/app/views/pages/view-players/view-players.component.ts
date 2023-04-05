import { Component } from '@angular/core';
import { cilList, cilShieldAlt } from '@coreui/icons';
import { Player } from 'src/app/models/player/player';
import { PlayerResponseModel  } from 'src/app/models/playerResponseModel/player-response-model';
import { PlayerService } from 'src/app/services/Player/player.service';

@Component({
  selector: 'app-view-players',
  templateUrl: './view-players.component.html',
  styleUrls: ['./view-players.component.scss']
})
export class ViewPlayersComponent {
  searchText = '';
  icons = { cilList, cilShieldAlt };

  // playerObj : Array<Player> = [];
  Obj:Array<PlayerResponseModel>=[];
  totalObjects!: number
  

  constructor(private service: PlayerService){
  }

  ngOnInit(){
      this.service.getPlayerList().subscribe(res=>{
      console.log(res);
      this.Obj = res.data;
      this.totalObjects = res.totalSize;

      for(let value of this.Obj){
        if(value.isCaptain == "TRUE"){
          value.isCaptain = "Captain"
        }else if(value.isCaptain == "FALSE") {
          value.isCaptain = "Player"
        }
      }
    });
  }

  playerSingle !: any;
  
  //for view modal
  public visible = false;

  toggleModal(playerData: any) {
    this.visible = !this.visible;
    this.playerSingle=playerData;
  }

  toggleModalAgain() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
}
