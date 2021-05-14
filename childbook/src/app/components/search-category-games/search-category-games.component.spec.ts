import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCategoryGamesComponent } from './search-category-games.component';

describe('SearchCategoryGamesComponent', () => {
  let component: SearchCategoryGamesComponent;
  let fixture: ComponentFixture<SearchCategoryGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCategoryGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCategoryGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
