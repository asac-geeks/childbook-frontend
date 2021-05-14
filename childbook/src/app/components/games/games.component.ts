import { Component, OnInit } from '@angular/core';
import { GamesApiService } from 'src/app/services/games-api.service';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  itemsList:any = []
  category:string;

  constructor(private games :GamesApiService)
  {
    this.games.getGames().subscribe(data =>{
      this.itemsList = data
   })
  }

  searchedCategory(category)
  {
    this.category = category;
    //  GamesComponent.constructor(private games :GamesApiService){

    //  }
    this.games.getGamesCategory(category).subscribe(data=>{
      this.itemsList = data;
    })
  }


  ngOnInit(): void {
  }
}
