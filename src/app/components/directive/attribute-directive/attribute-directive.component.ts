import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    NgClass,
    FormsModule,
    NgStyle
  ],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  div1BgColor: string = "bg-primary";
  isDiv2Active: boolean = false;
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;

  customStyle: any = {
    'color': 'white',
    'background-color': 'red',
    'width': '200px',
    'height': '200px',
    'border-radius': '20%',
  }

  studentList: any = [
    {studentId: 1, totalMarks: 23, gender: 'male', name: 'AAA', city: 'Pune', isActive: false},
    {studentId: 2, totalMarks: 33, gender: 'female', name: 'BBB', city: 'Mumbai', isActive: false},
    {studentId: 3, totalMarks: 67, gender: 'male', name: 'CCC', city: 'Jalgaon', isActive: true},
    {studentId: 4, totalMarks: 98, gender: 'female', name: 'DDD', city: 'Thane', isActive: false},
    {studentId: 5, totalMarks: 20, gender: 'male', name: 'EEE', city: 'Mumbai', isActive: false},
    {studentId: 6, totalMarks: 50, gender: 'male', name: 'FFF', city: 'Nagpur', isActive: false},
  ]

  addRedClass() {
    this.div1BgColor = "bg-danger";
  }

  addBlueClass() {
    this.div1BgColor = "bg-primary";
  }
}
