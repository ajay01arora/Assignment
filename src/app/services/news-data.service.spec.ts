import { TestBed } from '@angular/core/testing';
import { NewsDataService } from './news-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NewsDataService', () => {
  let service: NewsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(NewsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
