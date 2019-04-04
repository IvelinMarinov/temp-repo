import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Furniture } from '../models/Furniture';
import { Observable } from 'rxjs';

const CreateUrl = 'http://localhost:5000/furniture/create';
const GetAllUrl = 'http://localhost:5000/furniture/all';
const GetByIdUrl = 'http://localhost:5000/furniture/details/';
const GetForUserUrl = 'http://localhost:5000/furniture/user';
const DeleteUrl = 'http://localhost:5000/furniture/delete/';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(private http: HttpClient) { }

  createFurniture(data): Observable<any> {
    return this.http.post(CreateUrl, data);
  }

  getAll(): Observable<Array<Furniture>> {
    return this.http.get<Array<Furniture>>(GetAllUrl);
  }

  getById(id: string): Observable<Furniture> {
    return this.http.get<Furniture>(GetByIdUrl + id); 
  }

  getForUser(): Observable<Array<Furniture>> {
    return this.http.get<Array<Furniture>>(GetForUserUrl);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(DeleteUrl + id);
  }
}
