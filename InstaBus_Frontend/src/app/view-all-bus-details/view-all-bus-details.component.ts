import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { BusDetails } from "../model/bus.component";
import { AdminService } from "../services/admin.service";

@Component({
  selector: "app-view-all-bus-details",
  templateUrl: "./view-all-bus-details.component.html",
  styleUrls: ["./view-all-bus-details.component.css"],
})
export class ViewAllBusDetailsComponent implements OnInit {
  bus = null;
  adminId = null;
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit() {
    this.adminId = localStorage.getItem("adminId");
    if (this.adminId == null) {
      this.router.navigate(["/error", "login to continue"]);
    } else {
      this.adminService.viewAllBus().subscribe(
        (data) => {
          this.bus = data;
        },
        (error) => {
          this.router.navigate(["/error", "some error occured"]);
        }
      );
    }
  }

  removeBus(busNo) {
    if (confirm("are you sure you want to delete?")) {
      this.adminService.removeBus(busNo).subscribe(
        (data) => {
          this.adminService.viewAllBus().subscribe(
            (data) => {
              this.bus = data;
            },
            (error) => {
              this.router.navigate(["/error", "some error occured"]);
            }
          );
        },
        (error) => {
          this.router.navigate(["/error", "unable to delete"]);
        }
      );
    }
  }
  updateBus(busNo) {
    this.router.navigate(["/updateBus", busNo]);
  }
}
