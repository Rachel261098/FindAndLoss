import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFoundLostComponent } from './table-found-lost.component';

describe('TableFoundLostComponent', () => {
  let component: TableFoundLostComponent;
  let fixture: ComponentFixture<TableFoundLostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFoundLostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFoundLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
