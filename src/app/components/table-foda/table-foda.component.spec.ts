import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFodaComponent } from './table-foda.component';

describe('TableFodaComponent', () => {
  let component: TableFodaComponent;
  let fixture: ComponentFixture<TableFodaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableFodaComponent]
    });
    fixture = TestBed.createComponent(TableFodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
