import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catalog } from '../model/Catalog';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private apiUrl = 'http://localhost:8081/catalog/';

  constructor(private http: HttpClient) { }

  getCatalogById(id: string): Observable<Catalog> {
    const URL = `${this.apiUrl}/${id}`;
    return this.http.get<Catalog>(URL);
  }
}
