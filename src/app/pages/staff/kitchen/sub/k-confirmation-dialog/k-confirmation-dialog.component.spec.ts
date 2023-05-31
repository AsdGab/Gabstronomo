import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KConfirmationDialogComponent } from './k-confirmation-dialog.component';

describe('KConfirmationDialogComponent', () => {
  let component: KConfirmationDialogComponent;
  let fixture: ComponentFixture<KConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KConfirmationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
