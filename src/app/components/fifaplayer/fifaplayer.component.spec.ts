import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaplayerComponent } from './fifaplayer.component';

describe('FifaplayerComponent', () => {
  let component: FifaplayerComponent;
  let fixture: ComponentFixture<FifaplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifaplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifaplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
