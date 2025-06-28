import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  isDiv1Visible = true;
  isDiv2Visible = true;

  num1 = "";
  num2 = "";
  isActive = false;
  selectedState = "India";
  cities: string [] = ['Pune', 'Mumbai', 'Nagpur', 'Thane'];

  studentList: any = [
    {studentId: 1, name: 'AAA', city: 'Pune', isActive: false},
    {studentId: 2, name: 'BBB', city: 'Mumbai', isActive: false},
    {studentId: 3, name: 'CCC', city: 'Jalgaon', isActive: true},
    {studentId: 4, name: 'DDD', city: 'Thane', isActive: false},
    {studentId: 5, name: 'EEE', city: 'Mumbai', isActive: false},
    {studentId: 6, name: 'FFF', city: 'Nagpur', isActive: false},
  ]

  constructor(private router: Router) {
  }

  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }

  navigateToAttribute() {
    this.router.navigateByUrl('/attribute-directive')
  }
}
