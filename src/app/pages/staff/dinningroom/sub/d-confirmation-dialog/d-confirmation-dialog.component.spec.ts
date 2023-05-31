import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DConfirmationDialogComponent } from './d-confirmation-dialog.component';

describe('DConfirmationDialogComponent', () => {
  let component: DConfirmationDialogComponent;
  let fixture: ComponentFixture<DConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DConfirmationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
