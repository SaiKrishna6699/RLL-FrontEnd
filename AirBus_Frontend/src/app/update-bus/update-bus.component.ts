import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { AdminService } from "../services/admin.service";

@Component({
  selector: "app-update-bus",
  templateUrl: "./update-bus.component.html",
  styleUrls: ["./update-bus.component.css"],
})
export class UpdateBusComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService
  ) { }

  adminId = null;
  adminDetails = null;
  busNumber = null;


  busForm = this.formBuilder.group(
    {
      departureBusstop: [null, Validators.required],
      arrivalBusstop: [null, Validators.required],
      departureDate: [null, [Validators.required, this.departureDateValidator]],
      arrivalDate: [null, [Validators.required]],
      availableSeats: [
        null,
        [Validators.required, Validators.max(100), Validators.min(0)],
      ],
      arrivalTime: [null, Validators.required],
      departureTime: [null, Validators.required],
      busVendor: [null, Validators.required],
      cost: [
        null,
        [Validators.required, Validators.min(1), Validators.max(10000)],
      ],
    },
    { validators: this.arrivalDateValidator }
  );

  ngOnInit(): void {
    this.adminId = localStorage.getItem("adminId");
    if (this.adminId == null) {
      this.router.navigate(["/error", "admin not logged in login to continue"]);
    } else {
      this.adminId = parseInt(this.adminId);
      this.adminService.getAdminDetails(this.adminId).subscribe(
        (data) => {
          this.adminDetails = data;
        }
      ),
      this.route.paramMap.subscribe((param: ParamMap) => {
        this.busNumber = parseInt(param.get('busNumber'));
      });
    }
  }

  logout() {
    localStorage.removeItem("adminId");
    this.router.navigate(["/adminLogin"]);
  }

  departureDateValidator(control: AbstractControl) {
    const inputDate = new Date(control.value);
    const currentDate = new Date();
    if (inputDate < currentDate) {
      return { dateError: true };
    }
    return null;
  }

  arrivalDateValidator(control: AbstractControl) {
    const depDate = control.get("departureDate");
    const arrDate = control.get("arrivalDate");
    if (
      depDate &&
      arrDate &&
      new Date(depDate.value) > new Date(arrDate.value)
    ) {
      return { arrivalDateError: true };
    } else {
      return null;
    }
  }

  onSubmit() {
    let data = this.busForm.value;
    if (this.busNumber != NaN) {
      data.busNumber = this.busNumber;
    }
    this.adminService.modifyBus(data).subscribe(
      data => {
        this.router.navigate(["/adminHome"]);
      }, error => {
        this.router.navigate(["/error", "unable to update"]);
      }
    );
  }
}
