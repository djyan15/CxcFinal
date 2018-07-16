import { ApicxcComponent } from './apicxc.component';
import { ClienteComponent } from './cliente/cliente.component';

import { LoginComponent } from '../../app/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
// import { TransaccionesComponent } from './transacciones/transacciones.component';
// import { TransaccionesListComponent } from './transacciones-list/transacciones-list.component';
import { TipoDocumentoComponent } from './tipo-documento/tipo-documento.component';
import { TipoDocumentoListComponent } from './tipo-documento-list/tipo-documento-list.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { TransaccionesListComponent } from './transacciones-list/transacciones-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';




const pagesRoutes: Routes = [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'clientes/:id', component: ClienteComponent },
      { path: 'clientes', component: ClienteListComponent },
      { path: 'tipoDocumentos/:id', component: TipoDocumentoComponent },
      { path: 'tipoDocumentos', component: TipoDocumentoListComponent },
      { path: 'transacciones/:id', component: TransaccionesComponent },
      { path: 'transacciones', component: TransaccionesListComponent},


];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
