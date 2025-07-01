import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  saveNewDepartment(data:any) {
    return this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", data);
  }

  //any function can be there
  addTwoNo(num1: number, num2: number) {
    return num1 + num2;
  }
}
