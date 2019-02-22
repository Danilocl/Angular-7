import { Component, OnInit } from '@angular/core';
import { callbackify } from 'util';
import { bindCallback, from } from 'rxjs';
import { setTimeout } from 'timers';


// Data binding
@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = " Danilo Cardoso";
  employee = [];

  constructor() {
    this.name = "Testando";
  }

  addEmployee(event) {
    //imprimi as informações do evento
    console.log(event);
    this.employee.push(this.name);
    console.log(this.employee);

  }

  ngOnInit() {
  }

}
