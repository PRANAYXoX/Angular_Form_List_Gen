import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.css'],
})
export class ListModuleComponent implements OnInit {
  constructor() {}
  name: String = '';
  email: String = '';
  address: String = '';
  contactArr: Array<any> = [];
  ngOnInit(): void {}
  getData($event: any) {
    this.contactArr.push($event);
  }
}
