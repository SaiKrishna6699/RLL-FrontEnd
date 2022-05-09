import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.css']
})
export class ViewUserDetailsComponent implements OnInit {

  constructor(private router:Router,private userService:UserService) { }

  userId = null;
  user = null;

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId");
    if (this.userId == null){
      this.router.navigate(["/error","login to continue"]);
    }
    else {
      this.userId = parseInt(this.userId);
      this.userService.getUser(this.userId).subscribe(
        (data) => {
          this.user = data;
        },
        (error) => {
          this.router.navigate(["/error", "user not found"]);
        }
      );
    }
  }

  logout(){
    localStorage.removeItem("userId");
    this.router.navigate(["/userLogin"]);
  }
}
