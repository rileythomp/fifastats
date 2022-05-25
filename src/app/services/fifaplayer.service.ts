import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Fifaplayer } from '../models/fifaplayer';

const httpOptions = {
    headers: new HttpHeaders( {
        'Content-type': 'application-json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class FifaplayerService {
    host:string = 'http://localhost:3000';

    playersPath:string = '/players';
    playersQuery:string = '?limit=';

    playerPath:string = '/player';

    teamPlayersPath:string = '/players/team'


    constructor(private http:HttpClient) { }

    getPlayers(queryParams:any):Observable<Fifaplayer[]> {
        this.playersQuery = '?limit=' + queryParams.pageSize;
        for (let key in queryParams) {
            if (queryParams.hasOwnProperty(key)) {
                this.playersQuery += '&' + key + '=' + queryParams[key];
            }
        }
        return this.http.get<Fifaplayer[]>(this.host + this.playersPath + this.playersQuery);
    }

    getPlayer(id:number):Observable<Fifaplayer> {
        return this.http.get<Fifaplayer>(this.host + this.playerPath + '/' + id);
    }

    getPlayersFromTeam(queryParams:any):Observable<Fifaplayer[]> {
        this.playersQuery = '?limit=' + queryParams.pageSize;
        for (let key in queryParams) {
            if (queryParams.hasOwnProperty(key)) {
                this.playersQuery += '&' + key + '=' + queryParams[key];
            }
        }
        return this.http.get<Fifaplayer[]>(this.host + this.teamPlayersPath + this.playersQuery);
    }
}