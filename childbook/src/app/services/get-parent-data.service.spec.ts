import { TestBed } from '@angular/core/testing';

import { GetParentDataService } from './get-parent-data.service';

describe('GetParentDataService', () => {
  let service: GetParentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetParentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
