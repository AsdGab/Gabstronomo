import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOrderCardComponent } from './d-order-card.component';

describe('DOrderCardComponent', () => {
  let component: DOrderCardComponent;
  let fixture: ComponentFixture<DOrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DOrderCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
