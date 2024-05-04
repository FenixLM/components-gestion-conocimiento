import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazFodaComponent } from './interfaz-foda.component';

describe('InterfazFodaComponent', () => {
  let component: InterfazFodaComponent;
  let fixture: ComponentFixture<InterfazFodaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfazFodaComponent]
    });
    fixture = TestBed.createComponent(InterfazFodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
