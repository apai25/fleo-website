import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: any = null
  user: Observable<firebase.User>
  
  availableEmails: string[] = ["iepicfellowkun@gmail.com", "abhisrin@gmail.com"]

  constructor(public afAuth: AngularFireAuth, public router: Router) { 
    this.afAuth.authState.subscribe(data => this.authState = data)
    this.user = afAuth.authState;
  }

  get authenticated(): boolean {
    return this.authState !== null
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
 }

  async login() {

  this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
    this.router.navigateByUrl('/blog')
    localStorage.setItem("loggedin", "yes")
    }
  ).catch(err =>{
    console.log(err)
    alert(err);
  })}

  logout() {
    console.log("logged out")
    this.afAuth.signOut()
  }


}
