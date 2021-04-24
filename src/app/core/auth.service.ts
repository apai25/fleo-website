import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore'

import { Users } from './users'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: any = null
  user: Observable<firebase.User>
  usersCollection: AngularFirestoreCollection<Users>
  

  constructor(public afAuth: AngularFireAuth, public router: Router,private afs: AngularFirestore) { 
    this.afAuth.authState.subscribe(data => this.authState = data)
    this.user = afAuth.authState;
    this.usersCollection = this.afs.collection('users');
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
 //gotta move to email sign in
  async login(data: Users) {
  this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
    this.router.navigateByUrl('/blog')
    this.usersCollection.add(data) //specify userid as document id in firebase
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
