import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { User } from '../shared/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // isLoggedIn = false;
  //  isLoginFailed = false;
  
  //  roles: string[] = [];
  // user = new User();
  // erreur=0;
  // constructor(private authService : AuthService,private router: Router,private tokenStorage:TokenStorageService) { }
  // ngOnInit(): void {
  //   if (this.tokenStorage.getToken()) {
  //         this.isLoggedIn = true;
  //       this.roles = this.tokenStorage.getUser().roles;
  //       }
  // }
  // reloadPage(): void {
  //   window.location.reload();
  //  }

  // onSubmit() {
     
    
      
  //     if (this.tokenStorage.getToken()) {
  //       this.authService.login(this.user.email,this.user.password);
  //           this.isLoggedIn = true;
  //           this.roles = this.tokenStorage.getUser().roles;
  //           this.router.navigate(['/']);
  //           console.log(this.erreur);
  //     } 
  //     else{
  //       this.erreur = 1;
  //       this.reloadPage();
       
  //     }
    
  //     }
  
 

    
  user= new User();
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router : Router) { }


  onSubmit(): void {
   

    this.authService.login(this.user).
        subscribe((data)=> { let jwToken = data.headers.get('Authorization');console.log(jwToken);
      
      }
    );
      
      // if(!this.isLoggedIn) {
      //   this.isLoginFailed = true;
      //   console.log('fail !!!!!!!!!!!!!!!!!!');
      // }
  }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      console.log(this.isLoggedIn);
      this.router.navigate(['/dashboard']);
      this.roles = this.tokenStorage.getUser().roles;
    }else{
      this.reloadPage();
    }
    
  }
  
  reloadPage(): void {
    window.location.reload();
  }
}
