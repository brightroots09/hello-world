import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }

  public employee = []

  public errorMsg;

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employee = data, error => this.errorMsg = error)
      
  }

}
