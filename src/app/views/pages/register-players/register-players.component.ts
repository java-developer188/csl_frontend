import { Component } from '@angular/core';
import {Player} from '../../../models/player/player';
import { Router } from '@angular/router';
import {PlayerService} from '../../../services/Player/player.service';

@Component({
  selector: 'app-register-players',
  templateUrl: './register-players.component.html',
  styleUrls: ['./register-players.component.scss']
})
export class RegisterPlayersComponent {
  your_property = false;
  playerObj : Player

  constructor(private router: Router , private service: PlayerService){ //dependency injection -- using service in constructor - private variable makes it accessibe thorugh out the class
    this.playerObj = new Player();
  }

  registerPlayer(){ 
    console.log(JSON.stringify(this.playerObj));
    
    this.service.registerPlayer(this.playerObj).subscribe(res=>{
      alert('Player '+res.firstName+" "+res.lastName+ " added successfully");
    });
      //this.router.navigate(['register-players']);
  }

}
