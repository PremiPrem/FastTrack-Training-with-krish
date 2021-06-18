import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private http: HttpClient, public router: Router){ }
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
    // Get All Pets
  getAllPetDetails(): Observable<any> {
    let api = `http://localhost:3000/api/allPetsList`;
    return this.http.get(api, { headers: this.headers })
       
  }

    // Edit Pet Details
    editPetDetails(id : any, pet:any): Observable<any> {
      let api = `http://localhost:3000/api/`+id+`/update`;
      return this.http.patch(api, pet, { headers: this.headers })
         
    }

  // User profile
 deletePetRecord(id: any): Observable<any> {
  let api = `http://localhost:3000/api/`+id;
    return this.http.delete(api, { headers: this.headers })
      
  }

 // Add pet details details
  addpetDetails(pets: any): Observable<Object> {
    let endpoint = `http://localhost:3000/api`
    let api = `${endpoint}/addPets`;
    return this.http.post(api, pets )
  }

  //petById
   // Get All Pets
   getPetDetailsById(id : any): Observable<any> {
    let api = `http://localhost:3000/api/petById/`+id;
    return this.http.get(api, { headers: this.headers })
       
  }

 

 }
