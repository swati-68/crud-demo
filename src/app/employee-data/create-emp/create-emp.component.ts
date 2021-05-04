import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../../_services/employee.service';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {

  private unsubscribe: Subscription[] = [];
  public form : FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private empService : EmployeeService) {

      this.form = this.fb.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        contact_no: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
        email: ['', [ Validators.required, Validators.email]],
      })
      
     }

  /**
   * ngOnInit
   */
  ngOnInit(): void {
   
  }


  /**
   * submit
   */
  submit() {
    console.log(this.form.value)
    this.empService.createRecord(this.form.value);
    this.router.navigate(['/']);
  }

}
