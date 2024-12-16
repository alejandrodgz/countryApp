import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl = "https://restcountries.com/v3.1"

  constructor(private http:HttpClient) { }


  searchCapital(query:string): Observable<Country[]> {
    
    const url = `${this.apiUrl}/capital/${query}`
   return this.http.get<Country[]>(url);

  }


}
