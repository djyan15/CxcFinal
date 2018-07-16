import { AppComponent } from './app.component';
import { TipoDocumentoComponent } from './apicxc/tipo-documento/tipo-documento.component';
import {RouterModule, Routes } from '@angular/router';
import { ApicxcComponent } from './apicxc/apicxc.component';
import { ClienteComponent } from './apicxc/cliente/cliente.component';
import { LoginComponent } from '../app/login/login.component';




const appRoutes: Routes = [

  { path: 'login', component: LoginComponent},
  {
    path: '',
    component: ApicxcComponent,
    loadChildren: './apicxc/pages.module#PagesModule'
  },
  {
    path: '**',
    component: AppComponent,
  }


    // { path: 'cliente', component: ClienteComponent  },
    // {path: 'tipo', component: TipoDocumentoComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true});

