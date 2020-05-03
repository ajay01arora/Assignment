import { TestBed, inject } from '@angular/core/testing';

import { CasesDataService } from './cases-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse ,HttpResponse } from '@angular/common/http';
import { async } from 'q';

describe('Cases Data Service', () => {


  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let caseDataService: CasesDataService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CasesDataService]




    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    caseDataService = TestBed.inject(CasesDataService);
  });



  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });


  /// CaseDataService method tests begin ///


  describe('#get the case data', () => {
    let expectedCode: any = "";
 
    beforeEach(() => {
      caseDataService = TestBed.inject(CasesDataService);
      expectedCode = "AS";
    });





      it('should return expected State code (called once)',async () => {

        caseDataService.getStateDetails().subscribe(
          data=> {
            expect(data["Assam"].statecode).toEqual(expectedCode),
             fail
          }
          );



          const req = httpTestingController.expectOne(caseDataService.apiUrl);
          expect(req.request.method).toEqual('GET');
    
          // Respond with the mock State data
          req.flush({Assam:{ statecode: "AS"}});

      });

  });



  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });






});



  // let service: CasesDataService;
  // jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [HttpClientTestingModule],
  //     providers:[CasesDataService]
  //   });
  //   service = TestBed.inject(CasesDataService);
  // });