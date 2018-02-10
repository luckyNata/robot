// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { OneComponent } from './one.component';
// import {MainService} from "../main.service";
// import {HttpClientTestingModule,  HttpTestingController} from '@angular/common/http/testing';
//
// describe('OneComponent', () => {
//   let component: OneComponent;
//   let fixture: ComponentFixture<OneComponent>;
//
//   beforeEach(() => TestBed.configureTestingModule({
//     imports: [HttpClientTestingModule],
//     providers: [MainService]
//   }));
//
//   it('should create', () => {
//     const mainService = TestBed.get(MainService);
//     const http = TestBed.get(HttpTestingController);
//     // fake response
//     const expectedCodes = [{name: 'Cédric'}];
//
//     mainService.getCodes().subscribe((codes: any) => {
//         expect(codes[0].name).toEqual('one');
//       // expect(component).toBeTruthy();
//     });
//   });
// });
