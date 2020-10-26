import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCategoiaComponent } from './selected-categoia.component';

describe('SelectedCategoiaComponent', () => {
  let component: SelectedCategoiaComponent;
  let fixture: ComponentFixture<SelectedCategoiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedCategoiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedCategoiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
