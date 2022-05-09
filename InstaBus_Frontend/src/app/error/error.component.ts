import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  error;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) =>{
      this.error = params.get('message');
    });
  }

}
