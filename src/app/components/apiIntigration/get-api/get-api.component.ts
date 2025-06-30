import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent {

  userList: any [] = [];
  customerList: any [] = [];

  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any) => {
      this.userList = res;
    })
  }

  getAllCustomers() {
    //fake API
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res:any)=>{
      this.customerList = res.data
    }, error => {
      console.log(error);
    })
  }
}
