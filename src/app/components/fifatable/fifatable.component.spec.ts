import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifatableComponent } from './fifatable.component';

describe('FifatableComponent', () => {
  let component: FifatableComponent;
  let fixture: ComponentFixture<FifatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
