import { Component, OnInit } from '@angular/core';

import { FifaplayerService } from '../../services/fifaplayer.service';

import { Fifaplayer } from '../../models/fifaplayer';


@Component({
    selector: 'app-fifatable',
    templateUrl: './fifatable.component.html',
    styleUrls: ['./fifatable.component.less', '../../styles/table.less']
})
export class FifatableComponent implements OnInit {
    players:Fifaplayer[];
    lastColSorted:string = 'overall';
    sortDir:string = 'DESC';
    offset:number = 0;
    curPage:number;
    pageSize:number = 15;
    totalPlayers:number = 31871;
    searchType:string = 'long_name';
    searchTerm:string = '';
    ovrUpper:number = 99;
    ovrLower:number = 0;
    pacUpper:number = 99;
    pacLower:number = 0;
    shoUpper:number = 99;
    shoLower:number = 0;
    pasUpper:number = 99;
    pasLower:number = 0;
    driUpper:number = 99;
    driLower:number = 0;
    defUpper:number = 99;
    defLower:number = 0;

    constructor(private playerService:FifaplayerService) { }

    getPlayers() {
        let query = {
            pageSize: this.pageSize,
            sortCol: this.lastColSorted,
            sortDir: this.sortDir,
            offset: this.offset,
            searchType: this.searchType,
            searchTerm: this.searchTerm,
            ovrUpper: this.ovrUpper,
            ovrLower: this.ovrLower,
            pacUpper: this.pacUpper,
            pacLower: this.pacLower,
            shoUpper: this.shoUpper,
            shoLower: this.shoLower,
            pasUpper: this.pasUpper,
            pasLower: this.pasLower,
            driUpper: this.driUpper,
            driLower: this.driLower,
            defUpper: this.defUpper,
            defLower: this.defLower
        }
        this.playerService.getPlayers(query).subscribe(players => {
            this.players = players;
        });
    }

    updatePlayers() {
        this.offset = 0;
        this.curPage = 1;
        this.getPlayers();
    }

    ngOnInit(): void {
        this.updatePlayers();
    }

    sortOnColumn(ev, column:string):void {
        if (column == this.lastColSorted) {
            this.sortDir = (this.sortDir == 'ASC' ? 'DESC' : 'ASC');
        }
        this.lastColSorted = column;

        let arrows = Array.from(document.getElementsByClassName('arrow-span') as HTMLCollectionOf<HTMLElement>)
        arrows.forEach(arrow => arrow.style.display = 'none');
        ev.target.getElementsByClassName('arrow-span')[0].style.display = 'inline';

        this.updatePlayers();
    }

    paginate(dir:number):void {
        this.offset += dir*this.pageSize;
        this.curPage += dir;
        this.getPlayers();
    }
}
