import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {RouterModule} from '@angular/router';
import {PagesModule} from './apicxc/pages.module';

import { AppComponent } from './app.component';
import { ApicxcComponent } from './apicxc/apicxc.component';
import { APP_ROUTES } from './app.routes';
import { ClienteComponent } from './apicxc/cliente/cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    ApicxcComponent
  ],
  imports: [
    APP_ROUTES,
    BrowserModule,
    FormsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


