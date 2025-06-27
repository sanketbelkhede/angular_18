import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //string, number, boolean, date
  courseName: string = "Angular 18";
  stateName = "Goa";
  inputType = "checkbox";
  myClassName: string = "bg-primary";
  rollNo: number = 123;
  isIndian: boolean = true;
  currentDate: Date = new Date();

  firstName = signal("Sanket")

  constructor() {

  }

  changeCourseName() {
    this.courseName = "React JS";
  }

  changeFirstName() {
    this.firstName.set("Sachin") // for signal use .set
  }

  showAlert(message: string) {
    alert(message);
  }
}
