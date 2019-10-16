import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor(private http: HttpClient) { }

  getValue(): string {
    return 'hej';
  }
}
