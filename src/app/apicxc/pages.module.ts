import { FormsModule } from '@angular/forms';


import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';
// import {ClienteComponent} from '../apicxc/cliente/cliente.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ApicxcService } from './shared/apicxc.service';
import { TipoDocumentoComponent } from './tipo-documento/tipo-documento.component';
import { TipoDocumentoListComponent } from './tipo-documento-list/tipo-documento-list.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { TransaccionesListComponent } from './transacciones-list/transacciones-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
      ClienteComponent,
      ClienteListComponent,
      TipoDocumentoComponent,
      TipoDocumentoListComponent,
      TransaccionesComponent,
      TransaccionesListComponent,
      DashboardComponent

    //  ModalUploadComponent,

  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    PAGES_ROUTES,
    CommonModule,
    FormsModule
  ],
  providers: [ApicxcService]
})
export class PagesModule {}
