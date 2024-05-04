import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrincipalComponent } from './view-principal.component';

describe('ViewPrincipalComponent', () => {
  let component: ViewPrincipalComponent;
  let fixture: ComponentFixture<ViewPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPrincipalComponent]
    });
    fixture = TestBed.createComponent(ViewPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
