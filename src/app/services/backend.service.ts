import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() {

  }

  private loginApi = 'localhost:8080/api/login';



}
