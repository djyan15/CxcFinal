import { LoginService } from './login/login.service';
import { PAGES_ROUTES } from './apicxc/pages.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {RouterModule} from '@angular/router';
import {PagesModule} from './apicxc/pages.module';

import { AppComponent } from './app.component';
import { ApicxcComponent } from './apicxc/apicxc.component';
import { APP_ROUTES } from './app.routes';
import { ClienteComponent } from './apicxc/cliente/cliente.component';
import { LoginComponent } from '../app/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ApicxcComponent, LoginComponent, HeaderComponent, SidebarComponent],
  imports: [
    APP_ROUTES,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // PagesModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}


