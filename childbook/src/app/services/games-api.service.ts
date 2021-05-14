import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamesApiService {

  constructor(private http : HttpClient) { }

  getGames(){
    const url = "http://localhost:3000/games";
    return this.http.get<any[]>(url);
  }

  getOneGame(id:number){
    const url = "http://localhost:3000/games/"+ id;
    return this.http.get<any>(url);
  }

  getGamesCategory(category: string){
    const url = "http://localhost:3000/games/category/"+category;
    return this.http.get<any[]>(url);
  }

}
