import { TestBed } from '@angular/core/testing';

import { Hardcodedauthenticationservice } from './hardcodedauthenticationservice.service';

describe('HardcodedauthenticationserviceService', () => {
  let service: Hardcodedauthenticationservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hardcodedauthenticationservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
