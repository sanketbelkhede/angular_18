import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-layout',
  standalone: true,
    imports: [
        RouterLink,
        RouterOutlet
    ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  router = inject(Router);
  platformId = inject(PLATFORM_ID);
  loggedUserData: any;
  loggedUserName: any;

  constructor() {



  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const loggedData = localStorage.getItem('loggedUser');
      if(loggedData != null) {
        this.loggedUserData = JSON.parse(loggedData);
      }
    }
  }

  logoff(){
    localStorage.removeItem("loggedUser");
    this.router.navigateByUrl('login');
  }
}
