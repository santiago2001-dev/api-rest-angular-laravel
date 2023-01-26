import { TestBed } from '@angular/core/testing';

import { ApiRickAndMortyService } from './api-rick-and-morty.service';

describe('ApiRickAndMortyService', () => {
  let service: ApiRickAndMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRickAndMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
