import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AsyncPipe, CommonModule, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule, JsonPipe, CommonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  studentObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    isAcceptTerms: false
  }

  formValue: any;

  onSubmit() {
    this.formValue = this.studentObj
  }

  resetForm() {
    this.studentObj = {
      firstName: '',
      lastName: '',
      userName: '',
      city: '',
      state: '',
      zipCode: '',
      isAcceptTerms: false
    }
  }
}
