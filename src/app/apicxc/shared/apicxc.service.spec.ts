import { TestBed, inject } from '@angular/core/testing';

import { ApicxcService } from './apicxc.service';

describe('ApicxcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApicxcService]
    });
  });

  it('should be created', inject([ApicxcService], (service: ApicxcService) => {
    expect(service).toBeTruthy();
  }));
});
