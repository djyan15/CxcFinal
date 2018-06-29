import { Component, OnInit } from '@angular/core';

import {ApicxcService} from './shared/apicxc.service';
@Component({
  selector: 'app-apicxc',
  templateUrl: './apicxc.component.html',
  styleUrls: ['./apicxc.component.css'],
  providers: [ApicxcService]
})
export class ApicxcComponent implements OnInit {

  constructor(public apicxcService: ApicxcService) { }

  ngOnInit() {
  }

}
