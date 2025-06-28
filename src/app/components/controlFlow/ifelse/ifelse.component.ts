import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

  div1Visible: boolean = true;
  div2Visible: boolean = true;
  num1: string = '';
  num2: string = '';
  selectStatus: string = '';

  hideDiv1() {
    this.div1Visible = false;
  }

  showDiv1() {
    this.div1Visible = true;
  }

  toggleDiv2() {
    this.div2Visible = !this.div2Visible;
  }
}
