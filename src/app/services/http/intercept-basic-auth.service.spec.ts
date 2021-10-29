import { TestBed } from '@angular/core/testing';

import { InterceptBasicAuthService } from './intercept-basic-auth.service';

describe('InterceptBasicAuthService', () => {
  let service: InterceptBasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
