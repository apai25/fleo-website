import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  adminpin: string;
  nickname: string;
  admin: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  Login() {
    if(this.adminpin == "123456") {
      var postData = {
        nickname: "",
        admin: true
      }
      this.authService.login(postData);
    } else {
      alert("pin incorrect")
    }
    
  }



}
