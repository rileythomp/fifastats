import { Component, OnInit, Input } from '@angular/core';

import { Fifaplayer } from '../../models/fifaplayer';

import { FifaimagesService } from '../../services/fifaimages.service';

@Component({
  selector: 'app-fifaplayer',
  templateUrl: './fifaplayer.component.html',
  styleUrls: [
    './fifaplayer.component.less',
    '../../styles/table.less',
    '../../styles/colors.less'
  ]
})
export class FifaplayerComponent implements OnInit {
  @Input() player:Fifaplayer;
  @Input() index:number;

  constructor(private fifaimagesService:FifaimagesService) { }

  ngOnInit(): void {
  }

  setRowColor() {
    return {
      'grey-row': this.index%2 == 0
    }
  }

  setRatingColor(rating:number) {
    return {
        'darkgreen': rating <= 99 && rating > 80,
        'green': rating <= 80 && rating > 70,
        'yellow': rating <= 70 && rating > 60,
        'orange': rating <= 60 && rating > 50,
        'red': rating <= 50 && rating
    }
  }

  setFlagUrl(country:string):string {
      return this.fifaimagesService.getFlagUrl(country);
  }
}

