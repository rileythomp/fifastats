import { TestBed } from '@angular/core/testing';

import { FifaplayerService } from './fifaplayer.service';

describe('FifaplayerService', () => {
  let service: FifaplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FifaplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
