import {Component, inject, PLATFORM_ID} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj: any = {
    userName: '',
    password: ''
  }

  router = inject(Router);
  http = inject(HttpClient);
  platformId = inject(PLATFORM_ID);
//
// {
//   "userId": 972318,
//   "emailId": "sanketbelkhede01@gmail.com",
//   "fullName": "Sanket Belkhede",
//   "password": "S@nketbelkhede01"
// }

  onLogin() {
    if(this.userObj.password == 'admin' && this.userObj.userName == 'admin'){
      alert("Login successfully");
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem("loggedUser", JSON.stringify(this.userObj));
        localStorage.setItem("loggedUserName", this.userObj.userName);
      }
      this.router.navigateByUrl('add-emp');
    }else{
      alert("Login failed");
    }

    // this.http.post('https://projectapi.gerasim.in/api/UserApp/Login', this.userObj).subscribe((res:any)=>{
    //   if(res.result) {
    //     alert("Login successfully");
    //     localStorage.setItem("loggedUser",JSON.stringify(res.result));
    //     this.router.navigateByUrl('add-emp');
    //   } else {
    //     alert(res.message);
    //   }
    // })
  }
}
