import { TestBed } from '@angular/core/testing';

import { SignatairesService } from './signataires.service';

describe('SignatairesService', () => {
  let service: SignatairesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignatairesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
