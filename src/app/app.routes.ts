import { Routes } from '@angular/router';
import {AddEmployeeComponent} from "./components/add-employee/add-employee.component";
import {DataBindingComponent} from "./components/data-binding/data-binding.component";
import {StructuralDirectiveComponent} from "./components/directive/structural-directive/structural-directive.component";
import {AttributeDirectiveComponent} from "./components/directive/attribute-directive/attribute-directive.component";
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";

export const routes: Routes = [
  {
    path: 'add-emp',
    component: AddEmployeeComponent
  },
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'emp-list',
    component: EmployeeListComponent
  },
  {
    path: 'structural-directive',
    component: StructuralDirectiveComponent
  },
  {
    path: 'attribute-directive',
    component: AttributeDirectiveComponent
  }
];
