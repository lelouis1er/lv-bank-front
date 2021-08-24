import { TestBed } from '@angular/core/testing';

import { TabMembreBenefService } from './tab-membre-benef.service';

describe('TabMembreBenefService', () => {
  let service: TabMembreBenefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabMembreBenefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
