import { Component, OnInit } from '@angular/core';
import { IAddOperator } from '../manage-module-interface';
import { FormControl, FormGroup } from '@angular/forms';
import { AoServiceService } from './ao-service.service';

@Component({
  selector: 'app-add-operator',
  templateUrl: './add-operator.component.html',
  styleUrls: ['./add-operator.component.css']
})
export class AddOperatorComponent implements OnInit {

  operatorList! : IAddOperator[];
  addOperatorForm! : FormGroup;

  constructor (private aoService : AoServiceService) { }

  ngOnInit(): void {
    this.aoService.getData().subscribe((old : IAddOperator[]) => {
      this.operatorList = old;
    })

    this.addOperatorForm = new FormGroup({
      aoOperatorId : new FormControl(),
      aoOperatorOf : new FormControl(''),
      aoBpCourtId : new FormControl(''),
      aoFirstName : new FormControl(''),
      aoLastName : new FormControl(''),
      aoFatherName : new FormControl(''),
      aoMotherName : new FormControl(''),
      aoGender : new FormControl(''),
      aoDoB : new FormControl(''),
      aoDepartmentId :new FormControl(''),
      aoDepartmentType :new FormControl(''),
      aoDistrictName :new FormControl(''),
      aoThanaName :new FormControl(''),
      aoBatch :new FormControl(''),
      aoRank :new FormControl(''),
      aoPlacementDate :new FormControl(''),
      aoWeaponSerial :new FormControl(''),
      aoPresentAddress :new FormControl(''),
      aoPermanentAddress :new FormControl(''),
      aoEmail :new FormControl(''),
      aoOfficePhone :new FormControl(''),
      aoPersonalPhone :new FormControl(''),
      aoUserName :new FormControl(''),
      aoPassword :new FormControl(''),
      aoConfirmPassword :new FormControl('')
    })
  }

  submit () {
    if(this.addOperatorForm.value.aoOperatorId !== null){
      this.aoService.updateData(this.addOperatorForm.value).subscribe(res =>{
        this.ngOnInit();
      })
    }else {
      this.aoService.addData(this.addOperatorForm.value).subscribe(res =>{
        this.ngOnInit();
      })
    }
  }

  delete (field : IAddOperator) {
    this.aoService.deleteData(field).subscribe(res=> {
      this.ngOnInit();
    })
  }

  edit(field : IAddOperator) {
    this.addOperatorForm = new FormGroup({
      aoOperatorId : new FormControl(field.aoOperatorId),
      aoOperatorOf : new FormControl(field.aoOperatorOf),
      aoBpCourtId : new FormControl(field.aoBpCourtId),
      aoFirstName : new FormControl(field.aoFirstName),
      aoLastName : new FormControl(field.aoLastName),
      aoFatherName : new FormControl(field.aoFatherName),
      aoMotherName : new FormControl(field.aoMotherName),
      aoGender : new FormControl(field.aoGender),
      aoDoB : new FormControl(field.aoDoB),
      aoDepartmentId :new FormControl(field.aoDepartmentId),
      aoDepartmentType :new FormControl(field.aoDepartmentType),
      aoDistrictName :new FormControl(field.aoDistrictName),
      aoThanaName :new FormControl(field.aoThanaName),
      aoBatch :new FormControl(field.aoBatch),
      aoRank :new FormControl(field.aoRank),
      aoPlacementDate :new FormControl(field.aoPlacementDate),
      aoWeaponSerial :new FormControl(field.aoWeaponSerial),
      aoPresentAddress :new FormControl(field.aoPresentAddress),
      aoPermanentAddress :new FormControl(field.aoPermanentAddress),
      aoEmail :new FormControl(field.aoEmail),
      aoOfficePhone :new FormControl(field.aoOfficePhone),
      aoPersonalPhone :new FormControl(field.aoPersonalPhone),
      aoUserName :new FormControl(field.aoUserName),
      aoPassword :new FormControl(field.aoPassword),
      aoConfirmPassword :new FormControl(field.aoConfirmPassword)
    })
  }

}
