import { IAddPolice } from './../manage-module-interface';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApserviceService } from './apservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-police',
  templateUrl: './add-police.component.html',
  styleUrls: ['./add-police.component.css']
})
export class AddPoliceComponent implements OnInit {

  policeList: IAddPolice[] = [];
  addPoliceForm! : FormGroup;
  id !: number;

  constructor(private apService : ApserviceService, private rout: Router) { }

  ngOnInit() : void {
    this.apService.getAllPolices().subscribe((old : IAddPolice[]) => {
      this.policeList = old;
    })

    this.addPoliceForm = new FormGroup({
      apPoliceId : new FormControl(),
      apFirstName : new FormControl(''),
      apLastName : new FormControl(''),
      apFatherName : new FormControl(''),
      apMotherName : new FormControl(''),
      apGender : new FormControl(''),
      apDoB : new FormControl(''),
      apDepartmentId : new FormControl(''),
      apDepartmentType : new FormControl(''),
      apDistrictName : new FormControl(''),
      apThanaName : new FormControl(''),
      apBatch : new FormControl(''),
      apRank : new FormControl(''),
      apPlacementDate : new FormControl(''),
      apWeaponSerial : new FormControl(''),
      apPresentAddress : new FormControl(''),
      apPermanentAddress : new FormControl(''),
      apEmail : new FormControl(''),
      apOfficePhone : new FormControl(''),
      apPersonalPhone : new FormControl(''),
      apUserName : new FormControl(''),
      apPassword : new FormControl(''),
      apConfirmPassword : new FormControl('')
    })
  }

  submit () {
    if(this.addPoliceForm.value.apPoliceId !== null){
      this.apService.updatePolice(this.addPoliceForm.value).subscribe(res =>{
        // this.ngOnInit();
        this.rout.navigateByUrl('/general/police-information');
      })
    }else {
      this.apService.createPolice(this.addPoliceForm.value).subscribe(res =>{
        alert("saved")
        this.rout.navigateByUrl('/general/police-information');

      },(error)=>{
        alert(error+"sssss")
      })
    }
  }

  delete (field : IAddPolice) {
    this.apService.deletePolice(field).subscribe(res=> {
      this.ngOnInit();
    })
  }

  view (field : IAddPolice) {
    this.apService.getPolice(field).subscribe(res=> {
      //this.ngOnInit();
      this.rout.navigateByUrl('/manage/add-police');
    })
  }

  edit (field : IAddPolice) {
    this.addPoliceForm = new FormGroup({
      apPoliceId : new FormControl(field.apPoliceId),
      apFirstName : new FormControl(field.apFirstName),
      apLastName : new FormControl(field.apLastName),
      apFatherName : new FormControl(field.apFatherName),
      apMotherName : new FormControl(field.apMotherName),
      apGender : new FormControl(field.apGender),
      apDoB : new FormControl(field.apDoB),
      apDepartmentId : new FormControl(field.apDepartmentId),
      apDepartmentType : new FormControl(field.apDepartmentType),
      apDistrictName : new FormControl(field.apDistrictName),
      apThanaName : new FormControl(field.apThanaName),
      apBatch : new FormControl(field.apBatch),
      apRank : new FormControl(field.apRank),
      apPlacementDate : new FormControl(field.apPlacementDate),
      apWeaponSerial : new FormControl(field.apWeaponSerial),
      apPresentAddress : new FormControl(field.apPresentAddress),
      apPermanentAddress : new FormControl(field.apPermanentAddress),
      apEmail : new FormControl(field.apEmail),
      apOfficePhone : new FormControl(field.apOfficePhone),
      apPersonalPhone : new FormControl(field.apPersonalPhone),
      apUserName : new FormControl(field.apUserName),
      apPassword : new FormControl(field.apPassword),
      apConfirmPassword : new FormControl(field.apConfirmPassword)
    })
  }

  // editPolice(id: number) {

  // }

}
