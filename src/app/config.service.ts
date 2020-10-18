import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Forminfo } from './forminfo';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) {}
   
  configUrl = 'https://cs251-outlab-6.herokuapp.com/initial_values/';
  postUrl = 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/';
  getConfig() {
    // now returns an Observable of Config
    return this.http.get<Forminfo>(this.configUrl);
  }

  addinfo(info: Forminfo): Observable<Forminfo> {
    return this.http.post<Forminfo>(this.postUrl, info);
  }

}
