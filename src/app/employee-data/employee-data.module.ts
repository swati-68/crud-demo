import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeDataRoutingModule } from './employee-data-routing.module';
import { EmployeeDataComponent } from './employee-data.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';

// Material Component
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    EmployeeDataComponent,
    CreateEmpComponent,
    ViewEmpComponent,
    UpdateEmpComponent
  ],
  imports: [
    CommonModule,
    EmployeeDataRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ]
})
export class EmployeeDataModule { }
