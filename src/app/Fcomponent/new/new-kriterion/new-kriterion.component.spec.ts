import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKriterionComponent } from './new-kriterion.component';

describe('NewKriterionComponent', () => {
  let component: NewKriterionComponent;
  let fixture: ComponentFixture<NewKriterionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewKriterionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewKriterionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
