import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() btnText: string = "";
  @Input() btnClass: string = "";
  @Input() disabled: boolean = false;


  @Output() onBtnClick = new EventEmitter<any>();

  onClick() {
    console.log(this.disabled)
    this.onBtnClick.emit("Hello There!");
  }
}
