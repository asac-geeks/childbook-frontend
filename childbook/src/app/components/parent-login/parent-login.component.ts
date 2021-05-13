import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-login',
  templateUrl: './parent-login.component.html',
  styleUrls: ['./parent-login.component.css'],
})
export class ParentLoginComponent implements OnInit {
  constructor(private http: HttpClient) {}
  onSubmit(data) {
    this.http.post('http://localhost:7789/loginAsParent', data).subscribe((result) => {
      console.warn('result', result);
    });
    console.warn(data);
  }

  ngOnInit(): void {}
}
