import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPropList() {
    return this.http.get('http://localhost:4300/fetchAll');
  }

  searchProperties(stext) {
    return this.http.get('http://localhost:4300/search/' + stext);
  }
  searchbyId(id) {
    return this.http.get('http://localhost:4300/fetch/' + id);
  }

}
