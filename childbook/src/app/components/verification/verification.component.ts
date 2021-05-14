import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  onSubmit(data){
    console.warn(data);
    this.http.post('http://localhost:7789/parentverification',data).subscribe((result)=>{
      console.warn("result",result);
    })
  }

  ngOnInit(): void {
  }

}
