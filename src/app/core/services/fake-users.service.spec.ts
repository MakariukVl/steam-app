import { TestBed } from '@angular/core/testing';

import { FakeUsersService } from './fake-users.service';

describe('FakeUsersService', () => {
  let service: FakeUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
