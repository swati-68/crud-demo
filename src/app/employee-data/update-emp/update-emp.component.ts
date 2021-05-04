import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../../_services/employee.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {

  private unsubscribe: Subscription[] = [];
  public form : FormGroup;
  id:any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private empService : EmployeeService) {

      this.form = this.fb.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        contact_no: ['', Validators.required],
        email: ['', [ Validators.required, Validators.email]],
      })
      
     }

  /**
   * ngOnInit
   */
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.id = params["id"]
      if(this.id){
        this.empService.getData().subscribe(res =>{
          this.form.setValue({
            name :res[this.id].name,
            address : res[this.id].address,
            contact_no : res[this.id].contact_no,
            email : res[this.id].email
          })
        })
      }
    })
  }

  /**
   * submit
   */
  submit() {
  this.empService.update(this.id,this.form.value);
  this.router.navigate(['/'])
  }

}
