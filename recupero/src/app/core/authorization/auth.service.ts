import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCommunicationService } from '../http/http-communication.service';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpCommunications: HttpCommunicationService) { }

  //LOGIN - HttpCommunicationService
  doLogin(username: string, password: string): Observable<User[]>{
    console.log("Do login auth service");
    return this.httpCommunications.retrieveGetCall<User[]>("users",{username, password});
  }

  //SIGNUP - HttpCommunicationService
  doSignUp(user: User): Observable<User>{
    console.log("Do signup auth service");
    return this.httpCommunications.retrievePostCall<User>("users",user);
  }
}
