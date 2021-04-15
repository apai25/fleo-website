import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthService } from 'app/core/auth.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test : Date = new Date();

    constructor(public location: Location, public authService: AuthService) { }

    ngOnInit() {}

    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if(titlee.charAt(0) === '#'){
            titlee = titlee.slice( 1 );
        }
          if( titlee === '/') {
              return true;
          }
          else {
              return false;
          }
        
      }

      isLoggedIn() {
        const x = localStorage.getItem("loggedin")
        if (x) {
            return true;
        } else {
            return false;
        }
    }


    logout() {
        this.authService.logout();
        localStorage.removeItem("loggedin")
    }
}
