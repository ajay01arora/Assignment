import { TestBed ,inject} from '@angular/core/testing';

import { CasesDataService } from './cases-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';

describe('CasesDataService', () => {
  let service: CasesDataService;
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[CasesDataService]
    });
    service = TestBed.inject(CasesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
