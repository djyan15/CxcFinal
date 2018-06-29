import { Component, OnInit } from '@angular/core';

import { ApicxcService } from '../shared/apicxc.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(public apicxcService: ApicxcService) { }

  ngOnInit() {

  }

}
