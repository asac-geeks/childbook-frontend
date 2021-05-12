import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import childModel from '../Models/childModel';
import { Observable } from 'rxjs';
import parentModel from '../Models/parentModel';



@Injectable({
  providedIn: 'root'
})
export class GetParentDataService {
  
  constructor(private http: HttpClient) { }

  getParentData(){
    let token ="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyTmFtZTEgUGFyZW50IiwiZXhwIjoxNjIwODYyODM0LCJpYXQiOjE2MjA4MjY4MzR9.55c5CD1tmY_9gzREWlBuDA2p84BA7_vHoviF7fIPTFI";
    console.log(token);
    if(token){
      const requestOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
          Authorization: `Bearer ${token}`
        })
      };
      return this.http.get('http://localhost:8090/');
    } 
  }
}
