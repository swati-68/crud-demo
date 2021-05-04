import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  index : any;
  employee :any;

  constructor(private empService:EmployeeService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.index = params["id"]
      if(this.index){
        this.empService.getData().subscribe(res =>{
         this.employee=res[this.index]
        })
      }
    })
  }

}
