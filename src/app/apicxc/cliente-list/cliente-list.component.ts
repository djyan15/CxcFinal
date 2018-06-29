import { Component, OnInit } from '@angular/core';

import { ApicxcService } from '../shared/apicxc.service';
@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(public apicxcService: ApicxcService) { }

  ngOnInit() {

  }

}
