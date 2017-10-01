import { TestBed, inject } from '@angular/core/testing';

import { DatafeedsService } from './datafeeds.service';

describe('DatafeedsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatafeedsService]
    });
  });

  it('should ...', inject([DatafeedsService], (service: DatafeedsService) => {
    expect(service).toBeTruthy();
  }));
});
