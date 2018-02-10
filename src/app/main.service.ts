import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {
  url = 'assets/test.json';
  constructor(private http: HttpClient) {
  }

  getCodes() {
      return this.http.get(`${this.url}`);
  }

}
