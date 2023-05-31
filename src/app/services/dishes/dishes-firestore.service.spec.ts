import { TestBed } from '@angular/core/testing';

import { DishesFirestoreService } from './dishes-firestore.service';

describe('DishesFirestoreService', () => {
  let service: DishesFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishesFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
