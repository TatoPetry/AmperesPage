import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthModel } from '../interfaces/authmodel';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { switchMap } from 'rxjs/operators';
import { User } from '../interfaces/User';



@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  user: Observable<User | null> = null;

constructor(
  private afa: AngularFireAuth,
  private afs: AngularFirestore,
  private router: Router
  ) {
}

  ngOnInit(): void {
    this.user = this.afa.authState
     .pipe(
      switchMap(
         user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
         } else {
            return of(null);
        }
    }
  ));
}

  isLogged() {
    if (!!this.afa.auth.currentUser) {
      return true;
    } else {
      return false;
    }
  }

  getUser() {
   return this.afa.auth.currentUser;
  }

  emailLogin(authModel: AuthModel) {
    return this.afa.auth
      .signInWithEmailAndPassword(authModel.email, authModel.password)
      .then(credential => {
        return this.updateUserData(credential.user);
    })
      .catch(error => console.log(error));
  }


  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'nameless user',
      photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ'
    };
    return userRef.set(data);
  }

  signOut() {
    this.afa.auth.signOut().then(() => {
      this.router.navigate(['/home']);
     });
  }




}
