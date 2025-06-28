import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {getLocaleDayNames} from "@angular/common";

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  cities: string [] = ['Pune', 'Mumbai', 'Nagpur', 'Thane'];

  studentList: any = [
    {studentId: 1, name: 'AAA', city: 'Pune', isActive: false},
    {studentId: 2, name: 'BBB', city: 'Mumbai', isActive: false},
    {studentId: 3, name: 'CCC', city: 'Jalgaon', isActive: true},
    {studentId: 4, name: 'DDD', city: 'Thane', isActive: false},
    {studentId: 5, name: 'EEE', city: 'Mumbai', isActive: false},
    {studentId: 6, name: 'FFF', city: 'Nagpur', isActive: false},
  ]
}
