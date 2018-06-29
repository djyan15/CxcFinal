import { Injectable } from '@angular/core';

import {Cliente} from './cliente.model';

@Injectable()
export class ApicxcService {

  selectedCliente: Cliente;
  constructor() { }

}
