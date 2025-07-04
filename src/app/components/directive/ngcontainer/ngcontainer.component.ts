import {Component, inject} from '@angular/core';
import {NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ngcontainer',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgTemplateOutlet
  ],
  templateUrl: './ngcontainer.component.html',
  styleUrl: './ngcontainer.component.css'
})
export class NgcontainerComponent {

  isContainer: boolean = true;
  userList: any[] = [];
  isLoader: boolean = false;

  http = inject(HttpClient);

  getAllUsers() {
    this.isLoader = true;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any) => {
      this.userList = res;
      this.isLoader = false;
    })
  }
}
