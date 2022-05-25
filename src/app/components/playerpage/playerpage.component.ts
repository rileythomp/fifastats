import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Fifaplayer } from '../../models/fifaplayer';
import { FifaplayerService } from '../../services/fifaplayer.service';
import { FifaimagesService } from '../../services/fifaimages.service';

@Component({
    selector: 'app-playerpage',
    templateUrl: './playerpage.component.html',
    styleUrls: [
        './playerpage.component.less',
        '../../styles/colors.less'
    ]
})
export class PlayerpageComponent implements OnInit {
  player:Fifaplayer;
  Math:Math = Math;

    constructor(
        private route:ActivatedRoute,
        private playerService:FifaplayerService,
        private fifaimagesService:FifaimagesService
    ) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.playerService.getPlayer(params.id).subscribe(player => {
                let player_keys = Object.keys(player);
                let attacking_keys = player_keys.filter(key => key.includes('attacking'));
                let mentality_keys = player_keys.filter(key => key.includes('mentality'));
                let skill_keys = player_keys.filter(key => key.includes('skill')).slice(1); // don't count skill_moves (star rating)
                let movement_keys = player_keys.filter(key => key.includes('movement'));
                let power_keys = player_keys.filter(key => key.includes('power'));
                let def_keys = player_keys.filter(key => key.includes('defending'));
                let gk_keys = player_keys.filter(key => key.includes('goalkeeping'));
                let gk_skill_keys = player_keys.filter(key => key.includes('gk'));

                this.player = player;

                this.player.gk_skills = this.getRatingsArray(gk_skill_keys);
                this.player.attacking_ratings = this.getRatingsArray(attacking_keys);
                this.player.mentality_ratings = this.getRatingsArray(mentality_keys);
                this.player.skill_ratings = this.getRatingsArray(skill_keys);
                this.player.movement_ratings = this.getRatingsArray(movement_keys);
                this.player.power_ratings = this.getRatingsArray(power_keys);
                this.player.def_ratings = this.getRatingsArray(def_keys);
                this.player.gk_ratings = this.getRatingsArray(gk_keys);
            })
        });
    }

    getRatingsArray(keys:string[]):any[] {
        let ratings = [];
        keys.forEach(key => {
            ratings.push({
                key: this.formatAttrName(key),
                value: this.player[key]
            });
        })
        return ratings;
    }

    formatAttrName(attr:string):string {
        let name = attr.substr(attr.indexOf('_') + 1).replace('_', ' ')
        return name.charAt(0).toUpperCase() + name.slice(1);

    }

    setRatingColor(rating:number) {
        return {
            'darkgreen': rating <= 99 && rating > 80,
            'green': rating <= 80 && rating > 70,
            'yellow': rating <= 70 && rating > 60,
            'orange': rating <= 60 && rating > 50,
            'red': rating <= 50,
            'bigger': true,
            'badge-width': true
        }
    }

    formatDate(date:Date):string {

        let d:string = date.toString().substr(0, date.toString().indexOf('T'));

        let parts:string[] = d.split('-');

        const numToMonthMap = {
            '01': 'January',
            '02': 'February',
            '03': 'March',
            '04': 'April',
            '05': 'May',
            '06': 'June',
            '07': 'July',
            '08': 'August',
            '09': 'September',
            '10': 'October',
            '11': 'November',
            '12': 'December',
        }

        return numToMonthMap[parts[1]] + ' ' + parseInt(parts[2], 10) + ', ' + parts[0];
    }

    setFlagUrl(country:string):string {
        return this.fifaimagesService.getFlagUrl(country);
    }

    setClubUrl(club:string):string {
        return this.fifaimagesService.getClubLogo(club);
    }

    setClubWidth(club:string):number {
        if (this.fifaimagesService.equalDimensions(club)) {
            return 35; // px val
        }
        return 41; // px val
    }

    setClubHeight(club:string):number {
        if (this.fifaimagesService.equalDimensions(club)) {
            return 35; // px val
        }
        return 27; // px val
    }

    starArray(stars:number):number[] {
        return new Array(stars);
    }

    calculateAge(dob:Date):number {
        return Math.floor((Date.now() - new Date(dob).getTime())/31557600000);
    }

    setPlayerHeadshot(id:number):string {
        return 'https://www.fifaindex.com/static/FIFA20/images/players/5/' + id + '.png';
    }
}
