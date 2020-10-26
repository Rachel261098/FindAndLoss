import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KriterionComponent } from './kriterion.component';

describe('KriterionComponent', () => {
  let component: KriterionComponent;
  let fixture: ComponentFixture<KriterionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KriterionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KriterionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
