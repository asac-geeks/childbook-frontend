import { Component, OnInit } from '@angular/core';
import {GamesApiService} from '../../services/games-api.service'
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
   gameDetails:any;
  constructor(private route: ActivatedRoute, private game:GamesApiService) {
  }

  ngOnInit(): void {
    this.getGameDetails();
  }

  getGameDetails(){
    const id = +this.route.snapshot.paramMap.get('id');
     this.game.getOneGame(id).subscribe(data =>{
      this.gameDetails = data
      console.warn(data)
     });
  }

}
