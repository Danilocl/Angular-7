import { Component, OnInit } from '@angular/core';
import employees from '../employee';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees_ = employees;

  constructor() { }

  ngOnInit() {
  }

}
