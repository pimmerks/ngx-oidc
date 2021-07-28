import { TestBed } from '@angular/core/testing';

import { NgxOidcService } from './ngx-oidc.service';

describe('NgxOidcService', () => {
  let service: NgxOidcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxOidcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
