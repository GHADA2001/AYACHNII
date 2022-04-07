import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { Role } from '../shared/role';
const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public loggedUser:string| undefined;
  public isloggedIn: Boolean = false;
  public roles:Role[]=[] ;

  users: any;
    constructor(private router: Router, private http: HttpClient) { } 

    logout() { 
      this.isloggedIn= false; 
      this.loggedUser = undefined; 
      this.roles = []; 
      localStorage.removeItem('loggedUser'); 
      localStorage.setItem('isloggedIn',String(this.isloggedIn)); 
      this.router.navigate(['/login']); 
    } 
    /*signIn(user :User): Observable<any>{
      this.loggedUser = user.username;
      this.isloggedIn = true;
      console.log(this.isloggedIn);
       this.roles = user.roles;
        localStorage.setItem('loggedUser',this.loggedUser);
         localStorage.setItem('isloggedIn',String(this.isloggedIn)); 
      return this.login(user.username,user.password);
      }*/
    isAdmin():Boolean{ 
      let admin: Boolean = false;
       if (!this.roles) //this.roles== undefiened
        return false; 
        this.roles.forEach((curRole) => { if(curRole.role == 'ADMIN') {
           admin = true; 
           } });
         return admin; 
    }
   
   login(user:User): Observable<any> {
    return this.http.post(AUTH_API + 'login', user ,{observe:'response'} );
   }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {username, email, password }, httpOptions);
  }
}