import { TestBed } from '@angular/core/testing';

import { FifaimagesService } from './fifaimages.service';

describe('FifaimagesService', () => {
  let service: FifaimagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FifaimagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
