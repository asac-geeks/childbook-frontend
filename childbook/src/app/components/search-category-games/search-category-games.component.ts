import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-search-category-games',
  templateUrl: './search-category-games.component.html',
  styleUrls: ['./search-category-games.component.css']
})
export class SearchCategoryGamesComponent implements OnInit {
   @Output()
   category: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  searchedCategory(value){
    // console.warn(value.category)
    this.category.emit(value.category);
  }

  ngOnInit(): void {
  }

}
