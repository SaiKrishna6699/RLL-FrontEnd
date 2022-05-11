
import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BusDetails } from "../model/bus.component";
import { AdminService } from "../services/admin.service";

@Component({
  selector: "app-add-bus-details",
  templateUrl: "./add-bus-details.component.html",
  styleUrls: ["./add-bus-details.component.css"],
})
export class AddBusDetailsComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  adminId = null;
  adminDetails = null;
  
    /*
    * --------form for bus details---------
    *
    * 
    * */



  busForm = this.formBuilder.group({
    departureBusstop: [null, Validators.required],
    arrivalBusstop: [null, Validators.required],
    departureDate: [null, [Validators.required,this.departureDateValidator]],
    arrivalDate: [null, [Validators.required]],
    availableSeats: [null,[Validators.required,Validators.max(100),Validators.min(0)]],
    arrivalTime: [null, Validators.required],
    departureTime: [null, Validators.required],
    busVendor: [null, Validators.required],
    cost: [null, [Validators.required,Validators.min(1),Validators.max(10000)]],
  },{validators:this.arrivalDateValidator});

  ngOnInit(): void {
    this.adminId = localStorage.getItem("adminId");
    if (this.adminId == null){
      this.router.navigate(["/error","admin not logged in login to continue"]);
    }
    this.adminId = parseInt(this.adminId);
    this.adminService.getAdminDetails(this.adminId).subscribe(
      (data) => {
        this.adminDetails = data;
      },
    );
  }

  logout(){
    localStorage.removeItem("adminId");
    this.router.navigate(["/adminLogin"]);
  }


  /* --------validator method for departure date----
  */


  departureDateValidator(control: AbstractControl) {
    const inputDate = new Date(control.value);
    const currentDate = new Date();
    if (inputDate < currentDate) {
      return { dateError: true };
    }
    return null;
  }



  /* ----validator method for arrival date---------- */

  arrivalDateValidator(control: AbstractControl){
    const depDate = control.get('departureDate');
    const arrDate = control.get('arrivalDate');
    if( depDate && arrDate && new Date(depDate.value) > new Date(arrDate.value)){
      return {arrivalDateError : true};
    }
    else {
      return null;
    }
  }


  onSubmit() {
    this.adminService.addBus(this.busForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/adminHome"]);
      },
      error => {
        this.router.navigate(["/error","error occured unable to add"]);
      }
    );
  }

  gotoList() {
    this.router.navigate(["/allBussDetails"]);
  }
}
