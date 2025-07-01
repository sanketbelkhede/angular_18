import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {DepartmentService} from "../../../service/department.service";
import {AlertComponent} from "../../../reusableComponent/alert/alert.component";
import {MyButtonComponent} from "../../../reusableComponent/my-button/my-button.component";

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [
    AlertComponent,
    MyButtonComponent
  ],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent {

  userList: any [] = [];
  customerList: any [] = [];

  constructor(private http: HttpClient, private departmentService: DepartmentService) {
  }

  // getAllUsers() {
  //   this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any) => {
  //     this.userList = res;
  //   })
  // }

  // By Using Service
  getAllUsers() {
    this.departmentService.getAllUsers().subscribe((res:any) => {
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
