import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UserRegisterComponent } from "./user-register/user-register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UserLoginComponent } from './user-login/user-login.component';
import { ErrorComponent } from './error/error.component';
import { AddBusDetailsComponent } from './add-bus-details/add-bus-details.component';
import { ViewAllBusDetailsComponent } from './view-all-bus-details/view-all-bus-details.component';
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ShowUserBookingsComponent } from './show-user-bookings/show-user-bookings.component';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { AddPassengersComponent } from './add-passengers/add-passengers.component';
import { UpdatePassengerComponent } from './update-passenger/update-passenger.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    ErrorComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    UserHomeComponent,
    ShowUserBookingsComponent,
    ViewUserDetailsComponent,
    UpdateUserDetailsComponent,
    AddBusDetailsComponent, 
    ViewAllBusDetailsComponent, UpdateBusComponent, AddPassengersComponent, UpdatePassengerComponent, PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
