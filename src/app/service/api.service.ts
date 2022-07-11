import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  environmentName = '';
  environmentUrl = '';

  constructor(private httpClient: HttpClient) { 
    this.environmentName = environment.environmentName;
    this.environmentUrl = environment.apiUrl;
  }

  getUsers(): Observable<any> {
    console.log(environment.apiUrl);
    return this.httpClient.get(environment.apiUrl);
  }

}
