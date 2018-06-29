import { TipoDocumentoComponent } from './apicxc/tipo-documento/tipo-documento.component';
import {RouterModule, Routes } from '@angular/router';
import { ApicxcComponent } from './apicxc/apicxc.component';
import { ClienteComponent } from './apicxc/cliente/cliente.component';



const appRoutes: Routes = [


  { path: '', redirectTo: '', pathMatch: 'full' }
    // { path: 'cliente', component: ClienteComponent  },
    // {path: 'tipo', component: TipoDocumentoComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true});

