import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private http: HttpClient) {}
  onSubmit(data) {
    this.http.post('http://localhost:7789/signup', data).subscribe((result) => {
      console.warn('result', result);
    });
    console.warn(data);
  }

  ngOnInit(): void {}
}
