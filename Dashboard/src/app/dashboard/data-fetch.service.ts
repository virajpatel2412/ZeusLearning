import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course, DataObject } from 'src/assets/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = '../../assets/data/courses.json';
  }

  getData(): Observable<DataObject>{
    return this.http.get<DataObject>(this.url);
  }
}
