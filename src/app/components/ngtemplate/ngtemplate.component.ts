import {Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css'
})
export class NgtemplateComponent {
  isUserLoggedIn: boolean = false;
  loggedInUserName: string = "Sanket";

  show() {
    this.isUserLoggedIn = true;
  }

  hide(){
    this.isUserLoggedIn = false;
  }

  @ViewChild('dynamicTemp') dynaTemplate: TemplateRef<any> | undefined;
  @ViewChild('dynamicContainer', {read: ViewContainerRef}) dynaContainer: ViewContainerRef | undefined;
  loadTemplate() {
    if(this.dynaTemplate) {
      this.dynaContainer?.createEmbeddedView(this.dynaTemplate);
    }
  }
}
