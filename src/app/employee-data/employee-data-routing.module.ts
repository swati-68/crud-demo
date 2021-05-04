
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { EmployeeDataComponent } from './employee-data.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EmployeeDataComponent
      },
      {
        path: 'create',
        component: CreateEmpComponent
      },
      {
        path: 'update/:id',
        component: UpdateEmpComponent
      },
      {
        path: 'view/:id',
        component: ViewEmpComponent
      },
    ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDataRoutingModule { }
