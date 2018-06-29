import { ClienteComponent } from './cliente/cliente.component';

import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
// import { TransaccionesComponent } from './transacciones/transacciones.component';
// import { TransaccionesListComponent } from './transacciones-list/transacciones-list.component';
import { TipoDocumentoComponent } from './tipo-documento/tipo-documento.component';
import { TipoDocumentoListComponent } from './tipo-documento-list/tipo-documento-list.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { TransaccionesListComponent } from './transacciones-list/transacciones-list.component';





const pagesRoutes: Routes = [

      { path: 'cliente/:id', component: ClienteComponent },
      { path: 'clientes', component: ClienteListComponent },
      { path: 'tipoDocumento', component: TipoDocumentoComponent },
      { path: 'tipoDocumentos', component: TipoDocumentoListComponent },
      { path: 'transaccione', component: TransaccionesComponent },
      { path: 'transacciones', component: TransaccionesListComponent},


];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
