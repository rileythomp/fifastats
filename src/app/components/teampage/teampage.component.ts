import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Team } from '../../models/team';
import { Fifaplayer } from '../../models/fifaplayer';
import { TeamService } from '../../services/team.service';
import { FifaimagesService } from '../../services/fifaimages.service';
import { FifaplayerService } from '../../services/fifaplayer.service';

@Component({
    selector: 'app-teampage',
    templateUrl: './teampage.component.html',
    styleUrls: [
        './teampage.component.less',
        '../../styles/colors.less',
        '../../styles/table.less'
    ]
})
export class TeampageComponent implements OnInit {
    team: Team;
    players: Fifaplayer[];
    Math: Math = Math;
    pageSize: number = 10;
    offset: number = 0;
    curPage: number = 1;
    lastColSorted: string = 'overall';
    sortDir: string = 'DESC';

    constructor(
        private route: ActivatedRoute,
        private teamService: TeamService,
        private fifaimagesService: FifaimagesService,
        private playerService: FifaplayerService
    ) { }

    getPlayersFromTeam(name) {
        let query = {
            pageSize: this.pageSize,
            sortCol: this.lastColSorted,
            sortDir: this.sortDir,
            offset: this.offset,
            team_name: name.split(' ').join('').toLowerCase()
        }
        this.playerService.getPlayersFromTeam(query).subscribe(players => {
            this.players = players;
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.teamService.getTeam(params.id).subscribe(team => {
                this.team = team;

                this.getPlayersFromTeam(this.team.team_name);
            })
        });
    }

    setClubUrl(team: string): string {
        return this.fifaimagesService.getClubLogo(team);
    }

    setClubWidth(club: string): number {
        if (this.fifaimagesService.equalDimensions(club)) {
            return 35; // px val
        }
        return 41; // px val
    }

    setClubHeight(club: string): number {
        if (this.fifaimagesService.equalDimensions(club)) {
            return 35; // px val
        }
        return 27; // px val
    }

    setRatingColor(rating: number) {
        return {
            'darkgreen': rating < 100 && rating >= 85,
            'green': rating < 85 && rating >= 75,
            'yellow': rating < 75 && rating >= 65,
            'orange': rating < 65 && rating >= 55,
            'red': rating < 55,
            'team-rating-num': true
        }
    }

    paginate(dir: number): void {
        this.offset += dir * this.pageSize;
        this.curPage += dir;
        this.getPlayersFromTeam(this.team.team_name);
    }

    updatePlayers() {
        this.offset = 0;
        this.curPage = 1;
        this.getPlayersFromTeam(this.team.team_name);
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

}
