import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/authorization/auth.service';
import { User } from 'src/app/core/interfaces/user.interface';
import { saveCurrentUser } from 'src/app/redux/users/users.action';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private authService: AuthService, private store: Store) { }

  executeLogin(username: string, password: string) {
    console.log("LOGIN SERVICE");
    
    this.authService.doLogin(username, password).subscribe((users: User[]) => {
      if (users && users.length > 0) {
        sessionStorage.setItem("user", JSON.stringify(users[0]));
        this.store.dispatch(saveCurrentUser({user: users[0]}));
        this.router.navigateByUrl("/home");
      }else{
        alert("Login errata");
      }
    }, ()=>{
      alert("Login in errore");
    });

  }
}
