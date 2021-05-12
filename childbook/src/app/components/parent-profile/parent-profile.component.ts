import { Component, OnInit } from '@angular/core';
import { GetParentDataService } from 'src/app/services/get-parent-data.service';

@Component({
  selector: 'app-parent-profile',
  templateUrl: './parent-profile.component.html',
  styleUrls: ['./parent-profile.component.css']
})
export class ParentProfileComponent implements OnInit {

  constructor(private getParent: GetParentDataService) { }

  ngOnInit(): void {
    this.getParent.getParentData()
    .subscribe(data => {
      console.log(data);
    });
  }

}
