import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-show-user-bookings",
  templateUrl: "./show-user-bookings.component.html",
  styleUrls: ["./show-user-bookings.component.css"],
})
export class ShowUserBookingsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  userId = null;
  bookings = null;
  found = false;
  notFound = false;
  passengers = null;
  user = null;

  bus = null;

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId");
    console.log(this.userId);
    if (this.userId == null) {
      this.router.navigate(["/error", "not logged in, login to continue"]);
    } else {
      this.userId = parseInt(this.userId);
      this.userService.getBookingByUser(this.userId).subscribe(
        (data) => {
          console.log(data);
          this.bookings = data;
          if (this.bookings.length > 0) {
            this.found = true;
            this.notFound = false;
          } else {
            this.found = false;
            this.notFound = true;
          }
        }, (error) => {
          this.router.navigate(["/error", "not logged in, login to continue"]);
        }
      );
      this.userService.getUser(this.userId).subscribe((data) => {
        this.user = data;
      });
    }
  }


  /* ------method to delete booking-------- */


  delete(bookingId) {
    if (confirm("are you sure you want to delete")) {
      this.passengers = null;
      this.userService.deleteBooking(bookingId, this.userId).subscribe(
        (data) => {
          console.log("deleted");
          this.userService.getBookingByUser(this.userId).subscribe(
            (data) => {
              console.log(data);
              this.bookings = data;
              if (this.bookings.length > 0) {
                this.found = true;
                this.notFound = false;
              } else {
                this.found = false;
                this.notFound = true;
              }
            },
            (error) => {
              this.router.navigate([
                "/error",
                "not logged in, login to continue",
              ]);
            }
          );
        },
        (error) => {
          this.router.navigate(["/error", "cannot delete"]);
        }
      );
    }
  }


  /* ------method to get bus detais---------- */

  getBusDetails(busNumber) {
    this.passengers = null;
    this.userService.getBusByNumber(busNumber).subscribe(
      data => {
        this.bus = data;
      }, error => {
        this.router.navigate(["/error", "no bus found or bus is deleted"]);
      }
    );
  }

  updatePassenger(passengerId) {
    this.router.navigate(["/updatePassenger", passengerId]);
  }



  getPassengers(booking) {
    this.bus = null;
    this.passengers = booking.passengers;
  }

  logout() {
    localStorage.removeItem("userId");
    this.router.navigate(["/userLogin"]);
  }
}
