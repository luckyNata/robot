import { async, TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule,  HttpTestingController} from '@angular/common/http/testing';
import {MainService} from "./main.service";
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('DataService', () => {
  let service: MainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [MainService]
  });
    service = TestBed.get(MainService);
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it('should be defined', inject([MainService], (mainService: MainService) => {
    expect(mainService).toBeTruthy();
  }));
  it('check url and request method',
    async(
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
        http.get(`${service.url}`).subscribe();
        backend.expectOne({
          url: `${service.url}`,
          method: 'GET'
        });
      })
    )
  );
  it('should match url',
    async(
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
        http.get(`${service.url}`).subscribe();

          backend.match('assets/test.json');
      })
    )

  );
  it('should be a good result',
    async(
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
        http.get(`${service.url}`).subscribe(
          (codes: any) => {
                expect(codes).toEqual({ baz: '123' });
              }
        );
        backend.match('assets/test.json')
          [0].flush({ baz: '123' });
      })
    )

  );
});
