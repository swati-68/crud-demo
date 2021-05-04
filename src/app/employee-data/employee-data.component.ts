import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  public employees : any;

 constructor(private empService : EmployeeService) {}

 ngOnInit() {
  this.empService.getData().subscribe(res => {
    this.employees = res;
  })
 }

 deleteRecord(index :any) {
  this.empService.delete(index);
 }

}
