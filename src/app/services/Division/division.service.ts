import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Division } from 'src/app/models/division/division';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private http : HttpClient) { }

  public addDivision(division: Division ):Observable<any>{
    return this.http.post("http://localhost:8080/api/v1/division/create",division);
  }

  public getDivisions():Observable<any>{
    return this.http.get("http://localhost:8080/api/v1/division/get");
  }

}
