
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private http: HttpClient) {}

  /*
   *  **********change base url according to your server**************
   */

  private baseUrl = "http://localhost:8086/admin";

  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
  });

  options = { headers: this.httpHeaders };

  adminLogin(admin) {
    return this.http
      .post(
        `${this.baseUrl}/adminLogin`,
        JSON.stringify(admin),
        this.options
      )
      .pipe(catchError(this.errorHandler));
  }

  getAdminDetails(id) {
    return this.http
      .get(`${this.baseUrl}/getAdmin/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  addBus(bus): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addBusDetails`, JSON.stringify(bus),this.options).pipe(catchError(this.errorHandler));
  }

  modifyBus(bus): Observable<Object> {
    return this.http.post(`${this.baseUrl}/updateBusDetails`, JSON.stringify(bus),this.options).pipe(catchError(this.errorHandler));
  }

  removeBus(busNo): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteBusDetails/${busNo}`).pipe(catchError(this.errorHandler));
  }

  viewAllBus(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllBusDetails`).pipe(catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
