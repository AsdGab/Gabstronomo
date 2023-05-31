import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDrawerComponent } from './m-drawer.component';

describe('MDrawerComponent', () => {
  let component: MDrawerComponent;
  let fixture: ComponentFixture<MDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
