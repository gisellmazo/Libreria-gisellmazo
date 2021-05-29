import { TestBed } from '@angular/core/testing';

import { GisellmazoService } from './gisellmazo.service';

describe('GisellmazoService', () => {
  let service: GisellmazoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GisellmazoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
