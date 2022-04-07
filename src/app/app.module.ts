import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthForgotPasswordComponent } from './auth-forgot-password/auth-forgot-password.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {authInterceptorProviders} from './helpers/auth.interceptor';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    SettingsComponent,
    LoginComponent,
    AuthRegisterComponent,
    AuthForgotPasswordComponent,
    ForbiddenComponent,
    NotificationsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
      // * MATERIAL IMPORTS
      MatSidenavModule,
      MatMenuModule,
      MatIconModule,
      MatDividerModule,
      MatListModule,
      MatToolbarModule,
      MatTooltipModule,
  ],
  providers: [
    authInterceptorProviders,
     AuthGuard,
     AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
