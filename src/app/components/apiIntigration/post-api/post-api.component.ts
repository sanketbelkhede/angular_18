import {Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {iterator} from "rxjs/internal/symbol/iterator";
import {DepartmentService} from "../../../service/department.service";
import {AlertComponent} from "../../../reusableComponent/alert/alert.component";
import {MyButtonComponent} from "../../../reusableComponent/my-button/my-button.component";

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [
    FormsModule,
    AlertComponent,
    MyButtonComponent
  ],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostAPIComponent {

  departmentList: any [] = [
    {departmentId: 1, departmentName: 'Mech ', departmentLogo: 'mechPhoto'},
    {departmentId: 2, departmentName: 'CSE', departmentLogo: 'CSEphoto'},
    {departmentId: 3, departmentName: 'ECE', departmentLogo: 'ECEphoto'},
    {departmentId: 4, departmentName: 'EEE', departmentLogo: 'EEEphoto'}
  ];

  departmentObj:any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  };


  http = inject(HttpClient);
  departmentService = inject(DepartmentService);

  constructor() {
    //Just calling a service
    const result = this.departmentService.addTwoNo(1,2);
  }

  reset() {
    this.departmentObj = {
      "departmentId": "",
      "departmentName": "",
      "departmentLogo": ""
    }
  }

  // onSave() {
    // this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.departmentObj).subscribe((res:any)=>{
    //   if(res.result) {
    //     alert("Department added successfully.");
    //   }else {
    //     alert(res.message);
    //   }
    //
    // })
    // this.departmentObj.departmentId = "0";
    // this.departmentList.push(this.departmentObj);
    // alert("Added Successfully!");
    // this.reset();
  //
  // }

  // By Using Service
  onSave() {
    // this.departmentService.saveNewDepartment(this.departmentObj).subscribe((res:any)=>{
    //     if(res.result) {
    //       alert("Department added successfully.");
    //     }else {
    //       alert(res.message);
    //     }
    // })
    this.departmentObj.departmentId = "0";
    this.departmentList.push(this.departmentObj);
    alert("Added Successfully!");
    this.reset();

  }

  onEdit(data: any) {
    this.departmentObj = data;
  }

  onDelete(index: number) {
    const isDelete = confirm("Are you sure you want to delete?");
    if (isDelete) {
      //based on index
      this.departmentList.splice(index,1);

      //based on Id when using API
      // this.departmentList.forEach((department,idx) => {
      //   if(department.departmentId === index) {
      //     this.departmentList.splice(idx,1);
      //   }
      // });

      // this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id).subscribe((res:any)=>{
      //   if(res.result) {
      //     alert("Department Updated successfully.");
      //   }else {
      //     alert(res.message);
      //   }
      //
      // })
    }

  }

  onUpdate() {
    // this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.departmentObj).subscribe((res:any)=>{
    //   if(res.result) {
    //     alert("Department Updated successfully.");
    //   }else {
    //     alert(res.message);
    //   }
    //
    // })
    this.reset();
  }

  getData(data:any) {
    alert(data);
  }

}
