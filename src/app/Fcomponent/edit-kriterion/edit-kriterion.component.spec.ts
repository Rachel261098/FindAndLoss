import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKriterionComponent } from './edit-kriterion.component';

describe('EditKriterionComponent', () => {
  let component: EditKriterionComponent;
  let fixture: ComponentFixture<EditKriterionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKriterionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKriterionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
