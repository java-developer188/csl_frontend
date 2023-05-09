import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Tournament } from 'src/app/models/tournament/tournament';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private http:HttpClient) { }

  public registerTournament(tournament : Tournament):Observable<any>{
    return this.http.post("http://localhost:8080/api/v1/tournament/create",tournament);
  }
  
}
