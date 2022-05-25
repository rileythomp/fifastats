import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Team } from '../models/team';

const httpOptions = {
  headers: new HttpHeaders( {
      'Content-type': 'application-json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
    host:string = 'http://localhost:3000';

    teamsPath:string = '/teams';
    teamsQuery:string = '?limit=';

    teamPath:string = '/team'


    constructor(private http:HttpClient) { }

    getTeams(query):Observable<Team[]> {
        this.teamsQuery = '?limit=' + query.pageSize;
        for (let key in query) {
            if (query.hasOwnProperty(key)) {
                this.teamsQuery += '&' + key + '=' + query[key];
            }
        }
        return this.http.get<Team[]>(this.host + this.teamsPath + this.teamsQuery);
    }

    getTeam(id:number):Observable<Team> {
        return this.http.get<Team>(this.host + this.teamPath + '/' + id);
    }
}
