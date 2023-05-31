import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KDashboardComponent } from './k-dashboard.component';

describe('KDashboardComponent', () => {
  let component: KDashboardComponent;
  let fixture: ComponentFixture<KDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
