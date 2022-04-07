import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user';


@Component({
  selector: 'app-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  user= new User();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private route: Router ,private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

  this.authService.register(username, email, password).subscribe(
    (data) =>{
        console.log("email sent !");
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.route.navigate(['/login']); 
      }
    );
  }
}
