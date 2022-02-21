import { TestBed } from '@angular/core/testing';

import { FakeGamesService } from './fake-games.service';

describe('FakeGamesService', () => {
  let service: FakeGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
