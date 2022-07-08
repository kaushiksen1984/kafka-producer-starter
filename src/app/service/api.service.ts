import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { CountryDetails } from 'src/app/model/country-details.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { 

  }

  useAPIurl = "https://jsonplaceholder.typicode.com/todos";
  countryAPIurl = "https://countriesnow.space/api/v0.1/countries/capital"

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.useAPIurl);
  }

  getCountryDetails(): Observable<CountryDetails[]> {
    return this.httpClient.get<CountryDetails[]>(this.countryAPIurl);
  }

}
