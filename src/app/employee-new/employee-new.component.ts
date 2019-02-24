import { Component, OnInit } from '@angular/core';
import { callbackify } from 'util';
import { bindCallback, from } from 'rxjs';
import employee from '../employee'
import employees from '../employee';


// Data binding
@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = "";
  salario = 0;
  
  employee = employees;

  constructor() {
    
  }

  addEmployee(event) {
    //imprimi as informações do evento
    console.log(event);
    this.employee.push({name: this.name, salario: this.salario });
    console.log(this.employee);

  }

  ngOnInit() {
  }

}
