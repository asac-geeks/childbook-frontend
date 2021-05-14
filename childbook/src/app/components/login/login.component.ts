import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) {}
  onSubmit(data) {
    this.http.post('http://localhost:7789/authenticate', data).subscribe((result) => {
      console.warn('result', result);
    });
    console.warn(data);
  }

  ngOnInit(): void {
  }

}
