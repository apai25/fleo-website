import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  adminpin: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  Login() {
    if(this.adminpin == "123456") {
      this.authService.login();
    } else {
      alert("pin incorrect")
    }
    
  }



}
