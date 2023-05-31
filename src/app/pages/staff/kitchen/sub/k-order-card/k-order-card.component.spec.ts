import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KOrderCardComponent } from './k-order-card.component';

describe('KOrderCardComponent', () => {
  let component: KOrderCardComponent;
  let fixture: ComponentFixture<KOrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KOrderCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
