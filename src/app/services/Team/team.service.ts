import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Team } from 'src/app/models/teams/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpClient) { }

  public registerTeam(team: Team):Observable<any>{
    return this.http.post("http://localhost:8080/api/v1/team/create",team);
  }

  public getTeamList():Observable<any>{
    return this.http.get("http://localhost:8080/api/v1/team/get");
  }
}
