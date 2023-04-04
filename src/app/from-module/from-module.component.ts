import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-from-module',
  templateUrl: './from-module.component.html',
  styleUrls: ['./from-module.component.css'],
})
export class FromModuleComponent implements OnInit {
  name: String = '';
  email: String = '';
  address: String = '';
  invalid: boolean = false;
  @Output() eventMsg = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  getFormData() {
    if (
      this.name.trim() == '' ||
      this.email.trim() == '' ||
      this.address.trim() == ''
    ) {
      this.invalid = true;
    } else {
      this.eventMsg.emit({
        name: this.name,
        email: this.email,
        addr: this.address,
      });
      this.address = '';
      this.email = '';
      this.name = '';
    }
  }
}
