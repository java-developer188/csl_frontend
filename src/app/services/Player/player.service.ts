import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/player/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  public registerPlayer(player:Player):Observable<any>{
    return this.http.post("http://localhost:8080/api/v1/player/create",player);
  }

  public getPlayerList():Observable<any>{
    return this.http.get("http://localhost:8080/api/v1/player/get");
  }

  public addTeam(player: Player):Observable<any>{
    return this.http.put("http://localhost:8080/api/player/update_player",player);
  }
}
