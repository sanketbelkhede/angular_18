import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee', // unique identifier
  standalone: true, // from angular 17, independent components, no need to register in app.module.ts
  imports: [],
  templateUrl: './add-employee.component.html', // we can use template also
  styleUrl: './add-employee.component.css' // we can use styles also
})
export class AddEmployeeComponent {

}
