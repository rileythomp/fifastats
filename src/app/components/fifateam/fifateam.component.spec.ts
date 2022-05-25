import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifateamComponent } from './fifateam.component';

describe('FifateamComponent', () => {
  let component: FifateamComponent;
  let fixture: ComponentFixture<FifateamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifateamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifateamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
