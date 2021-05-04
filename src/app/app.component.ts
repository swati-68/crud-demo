import { Component } from '@angular/core';
import { EmployeeService } from './_services/employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title :any;
  employees : any;
  progressbarValue : number;

  constructor(private empService: EmployeeService){
    this.empService.getData().subscribe(res => {
      this.employees = res;
      this.progressbarValue= (res.length/10)*100;
    })
  }
}
