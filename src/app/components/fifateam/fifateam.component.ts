import { Component, OnInit, Input } from '@angular/core';

import { Team } from '../../models/team';

import { FifaimagesService } from '../../services/fifaimages.service'




@Component({
    selector: 'app-fifateam',
    templateUrl: './fifateam.component.html',
    styleUrls: [
        './fifateam.component.less',
        '../../styles/table.less',
        '../../styles/colors.less'
    ]
})
export class FifateamComponent implements OnInit {
    @Input() team:Team;
    @Input() index:number;

    constructor(private fifaimagesService:FifaimagesService) { }

    ngOnInit(): void {

    }

    setClubLogo(name:string):string {
        return this.fifaimagesService.getClubLogo(name);
    }

    setClubWidth(name:string):number {
        if (this.fifaimagesService.equalDimensions(name)) {
            return 20; // px val
        }
        return 24; // px val
    }

    setClubHeight(name:string):number {
        if (this.fifaimagesService.equalDimensions(name)) {
            return 20; // px val
        }
        return 16; // px val
    }

    setRatingColor(rating:number) {
        return {
            'darkgreen': rating < 100 && rating >= 85,
            'green': rating < 85 && rating >= 75,
            'yellow': rating < 75 && rating >= 65,
            'orange': rating < 65 && rating >= 55,
            'red': rating < 55,
            'bigger': true,
            'badge-width': true
        }
    }
}
