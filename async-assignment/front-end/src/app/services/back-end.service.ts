import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private http: HttpClient, public router: Router){ }
    
    // Find-anagram
  findAnagram(text: any): Observable<any> {
    let api = `http://localhost:3000/api/find-anagram`;
    return this.http.post(api, text , {responseType: 'text'})
      
  }

  //Find-word-Occurance
  findWordOccurance(text: any): Observable<any> {
    let api = `http://localhost:3000/api/find-word-occurance`;
    return this.http.post(api, text , {responseType: 'text'})
      
  }

  findLargestNumber(number: any): Observable<any> {
    let api = `http://localhost:3000/api/find-largest-number`;
    return this.http.post(api, number , {responseType: 'text'})
      
  }

 }
