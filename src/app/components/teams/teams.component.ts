import { Component, OnInit } from '@angular/core';

import { TeamService } from '../../services/team.service';

import { Team } from '../../models/team';

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: [
        './teams.component.less',
        '../../styles/table.less'
    ]
})
export class TeamsComponent implements OnInit {
    teams:Team[];
    curPage:number;
    offset:number = 0;
    pageSize:number = 15;
    sortDir:string = 'DESC';
    lastColSorted:string = 'overall';
    searchTerm:string = '';
    ovrUpper:number = 99;
    ovrLower:number = 0;
    attUpper:number = 99;
    attLower:number = 0;
    midUpper:number = 99;
    midLower:number = 0;
    defUpper:number = 99;
    defLower:number = 0;

    constructor(private teamService:TeamService) { }

    getTeams():void {
        let query = {
            sortCol: this.lastColSorted,
            sortDir: this.sortDir,
            pageSize: this.pageSize,
            offset: this.offset,
            searchTerm: this.searchTerm,
            ovrUpper: this.ovrUpper,
            ovrLower: this.ovrLower,
            attUpper: this.attUpper,
            attLower: this.attLower,
            midUpper: this.midUpper,
            midLower: this.midLower,
            defUpper: this.defUpper,
            defLower: this.defLower,
        }
        this.teamService.getTeams(query).subscribe(teams => {
            this.teams = teams;
        });
    }

    ngOnInit(): void {
        this.updateTeams();
    }

    updateTeams() {
        this.curPage = 1;
        this.offset = 0;
        this.getTeams();
    }

    sortOnColumn(ev:any, column:string):void {
        if (column == this.lastColSorted) {
            this.sortDir = (this.sortDir == 'ASC' ? 'DESC' : 'ASC');
        }
        this.lastColSorted = column;

        let arrows = Array.from(document.getElementsByClassName('arrow-span') as HTMLCollectionOf<HTMLElement>)
        arrows.forEach(arrow => arrow.style.display = 'none');
        ev.target.getElementsByClassName('arrow-span')[0].style.display = 'inline';

        this.updateTeams();
    }

    paginate(dir:number):void {
        this.offset += dir*this.pageSize;
        this.curPage += dir;
        this.getTeams();
    }
}
