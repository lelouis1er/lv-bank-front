import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  template : '<router-outlet></router-outlet>',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
