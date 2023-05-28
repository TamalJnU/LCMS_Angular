import { Component, OnInit } from '@angular/core';
import { IAddOperator, IAddPp } from '../manage-module-interface';
import { FormControl, FormGroup } from '@angular/forms';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-add-pp',
  templateUrl: './add-pp.component.html',
  styleUrls: ['./add-pp.component.css']
})
export class AddPpComponent implements OnInit {

  ppList! : IAddPp[];
  addPpForm! : FormGroup;

  constructor(private appService : AppServiceService) { }

  ngOnInit(): void {
    this.appService.getAllPps().subscribe((old : IAddPp[]) => {
      this.ppList = old;
    })

    this.addPpForm = new FormGroup({
      appPpId : new FormControl(),
      appFirstName : new FormControl(''),
      appLastName : new FormControl(''),
      appFatherName : new FormControl(''),
      appMotherName : new FormControl(''),
      appGender : new FormControl(''),
      appDoB : new FormControl(''),
      appCourtId : new FormControl(''),
      appCourtType :new FormControl(''),
      appCourtCity :new FormControl(''),
      appCourtName :new FormControl(''),
      appCourtNo :new FormControl(''),
      appTribunalName :new FormControl(''),
      appChiefJustice :new FormControl(''),
      appChiefJusticeId :new FormControl(''),
      appPlacementDate :new FormControl(''),
      appEmail :new FormControl(''),
      appOfficePhone :new FormControl(''),
      appPersonalPhone :new FormControl(''),
      appPresentAddress :new FormControl(''),
      appPermanentAddress :new FormControl(''),
      appUserName :new FormControl(''),
      appPassword :new FormControl(''),
      appConfirmPassword :new FormControl('')
    })
  }

  submit () {
    if(this.addPpForm.value.appPpId !== null){
      this.appService.updatePp(this.addPpForm.value).subscribe(res =>{
        this.ngOnInit();
      })
    }else {
      this.appService.createPp(this.addPpForm.value).subscribe(res =>{
        this.ngOnInit();
      })
    }
  }

  delete (field : IAddPp) {
    this.appService.deletePp(field).subscribe(res=> {
      this.ngOnInit();
    })
  }

  edit (field : IAddPp) {
    this.addPpForm = new FormGroup({
      appPpId : new FormControl(field.appPpId),
      appFirstName : new FormControl(field.appFirstName),
      appLastName : new FormControl(field.appLastName),
      appFatherName : new FormControl(field.appFatherName),
      appMotherName : new FormControl(field.appMotherName),
      appGender : new FormControl(field.appGender),
      appDoB : new FormControl(field.appDoB),
      appCourtId : new FormControl(field.appCourtId),
      appCourtType :new FormControl(field.appCourtType),
      appCourtCity :new FormControl(field.appCourtCity),
      appCourtName :new FormControl(field.appCourtName),
      appCourtNo :new FormControl(field.appCourtNo),
      appTribunalName :new FormControl(field.appTribunalName),
      appChiefJustice :new FormControl(field.appChiefJustice),
      appChiefJusticeId :new FormControl(field.appChiefJusticeId),
      appPlacementDate :new FormControl(field.appPlacementDate),
      appEmail :new FormControl(field.appEmail),
      appOfficePhone :new FormControl(field.appOfficePhone),
      appPersonalPhone :new FormControl(field.appPersonalPhone),
      appPresentAddress :new FormControl(field.appPresentAddress),
      appPermanentAddress :new FormControl(field.appPermanentAddress),
      appUserName :new FormControl(field.appUserName),
      appPassword :new FormControl(field.appPassword),
      appConfirmPassword :new FormControl(field.appConfirmPassword)
    })
  }

}
