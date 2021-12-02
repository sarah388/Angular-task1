import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {

  formObj:any={

    department:"",
    birthCity:"",
    contractType:"",
    ////////////////////////////
    // employeeCode: "",
    // employeeName: "",
    // birthDate: "",
    // employeeId: "",
    // jobTitle: "",
    // directManager: "",
  };
  employeesArr=[
    {
      employeeCode: "12345",
      employeeName: "Dina Badr",
      birthDate: "24/3/1997",
      birthCity: "Cairo",
      employeeId: "256789",
      department:"UI/UX Department",
      jobTitle: "UI/UX Department",
      directManager: "Hanan",
      contractType:"Full Time"
    },
    {
      employeeCode: "6952",
      employeeName: "Hanin Elhosary",
      birthDate: "12/12/1997",
      birthCity: "Cairo",
      employeeId: "5246987",
      department:"UI/UX Department",
      jobTitle: "UI/UX Department",
      directManager: "Hanan",
      contractType:"Part Time"
  

    },
    {
      employeeCode: "555525",
      employeeName: "Hager",
      birthDate: "25/11/1997",
      birthCity: "Giza",
      employeeId: "5246987",
      department:"UI/UX Department",
      jobTitle: "UI/UX Department",
      directManager: "Hanan",
      contractType:"Part Time"
    
    },
    {
      employeeCode: "12589",
      employeeName: "Mohamed",
      birthDate: "22/6/1997",
      birthCity: "Giza",
      employeeId: "5876921",
      department: "Backend Department",
      jobTitle: "Backend Department",
      directManager: "Mohamed",
      contractType:"Full Time"
    
    },
    {
      employeeCode: "12589",
      employeeName: "Sarah Ragab",
      birthDate: "22/6/1997",
      birthCity: "Giza",
      employeeId: "5876921",
      department:"Backend Department",
      jobTitle: "Backend Department",
      directManager: "Mohamed",
      contractType:"Full Time"
      

    },
    {
      employeeCode: "12345",
      employeeName: "Soha Hassan",
      birthDate: "12/11/1997",
      birthCity: "Cairo",
      employeeId: "18235",
      department:"Backend Department",
      jobTitle: "Backend Department",
      directManager: "Mohamed",
      contractType:"Part Time"

    }
  ];
  
  resultArr = [...this.employeesArr];

  handleDataSubmit() {
    let result = this.employeesArr;

    Object.keys(this.formObj).forEach((key) => {
      result = result.filter((item:any) =>
      this.formObj[key] ? item[key] === this.formObj[key] : true
      );
    });

    this.resultArr = result;
  }

  constructor() { }
   
  ngOnInit(): void {
  }


}
