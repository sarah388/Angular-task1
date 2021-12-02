import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table-employee',
  templateUrl: './table-employee.component.html',
  styleUrls: ['./table-employee.component.css']
})
export class TableEmployeeComponent implements OnInit {
  @Input() inputId=[{

    department:"",
    birthCity:"",
    contractType:"",
    employeeCode: "",
    employeeName: "",
    birthDate: "",
    employeeId: "",
    jobTitle: "",
    directManager: "",
  }];

  constructor() { }
 

  ngOnInit(): void {
    console.log(this.inputId)
  }

}
