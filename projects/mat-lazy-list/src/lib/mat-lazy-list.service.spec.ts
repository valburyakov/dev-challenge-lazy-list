import { TestBed } from '@angular/core/testing';

import { MatLazyListService } from './mat-lazy-list.service';

describe('MatLazyListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatLazyListService = TestBed.get(MatLazyListService);
    expect(service).toBeTruthy();
  });
});
