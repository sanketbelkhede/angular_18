import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AlertComponent} from "../../../reusableComponent/alert/alert.component";

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [
    AlertComponent
  ],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent implements AfterViewInit{

  @ViewChild('txtName') textBox?:ElementRef;
  @ViewChild(AlertComponent) alertComponent?:AlertComponent;

  ngAfterViewInit() {
    const value = this.textBox?.nativeElement.value;
    const alertMode = this.alertComponent?.alertMode
  }
}
