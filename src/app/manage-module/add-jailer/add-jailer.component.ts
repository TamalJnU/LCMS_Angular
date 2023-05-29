import { Component, OnInit } from '@angular/core';
import { IAddJailer } from '../manage-module-interface';
import { AjailerServiceService } from './ajailer-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-jailer',
  templateUrl: './add-jailer.component.html',
  styleUrls: ['./add-jailer.component.css']
})
export class AddJailerComponent implements OnInit {

  jailerList! : IAddJailer[];
  addJailerForm!:FormGroup;

  constructor (private ajailerService : AjailerServiceService) { }

  ngOnInit(): void {
    this.ajailerService.getAllJailers().subscribe((old : IAddJailer[]) => {
      this.jailerList = old;
    })

    this.addJailerForm = new FormGroup({
      ajailerJailerId:new FormControl(),
      ajailerFirstName:new FormControl(''),
      ajailerLastName:new FormControl(''),
      ajailerFatherName:new FormControl(''),
      ajailerMotherName:new FormControl(''),
      ajailerGender:new FormControl(''),
      ajailerDoB:new FormControl(''),
      ajailerJailId:new FormControl(''),
      ajailerPoliceId:new FormControl(''),
      ajailerJailType:new FormControl(''),
      ajailerJailCity:new FormControl(''),
      ajailerJailName:new FormControl(''),
      ajailerPlacementDate:new FormControl(''),
      ajailerEmail:new FormControl(''),
      ajailerOfficePhone:new FormControl(''),
      ajailerPersonalPhone:new FormControl(''),
      ajailerPresentAddress:new FormControl(''),
      ajailerPermanentAddress:new FormControl(''),
      ajailerUserName:new FormControl(''),
      ajailerPassword:new FormControl(''),
      ajailerConfirmPassword:new FormControl('')
    });
  }

  submit () {
    if(this.addJailerForm.value.ajailerJailerId !== null){         //  || this.addJailerForm.value.apPoliceId != undefined

      console.log('--------update');
      
      this.ajailerService.updateJailer(this.addJailerForm.value).subscribe(res =>{
        this.ngOnInit();
      })
    }else {
      console.log('--------create');

      this.ajailerService.createJailer(this.addJailerForm.value).subscribe(res =>{
        this.ngOnInit();
      })
    }
  }

  delete (field : IAddJailer) {
    this.ajailerService.deleteJailer(field).subscribe(res=> {
      this.ngOnInit();
    })
  }

  view (field : IAddJailer) {
    this.ajailerService.getJailer(field).subscribe(res=> {
      this.ngOnInit();
    })
  }

  edit (field : IAddJailer) {
    this.addJailerForm = new FormGroup({
      ajailerJailerId : new FormControl(field.ajailerJailerId),
      ajailerFirstName : new FormControl(field.ajailerFirstName),
      ajailerLastName : new FormControl(field.ajailerLastName),
      ajailerFatherName : new FormControl(field.ajailerFatherName),
      ajailerMotherName : new FormControl(field.ajailerMotherName),
      ajailerGender : new FormControl(field.ajailerGender),
      ajailerDoB : new FormControl(field.ajailerDoB),
      ajailerJailId : new FormControl(field.ajailerJailId),
      ajailerPoliceId : new FormControl(field.ajailerPoliceId),
      ajailerJailType : new FormControl(field.ajailerJailType),
      ajailerJailCity : new FormControl(field.ajailerJailCity),
      ajailerJailName : new FormControl(field.ajailerJailName),
      ajailerPlacementDate : new FormControl(field.ajailerPlacementDate),
      ajailerEmail : new FormControl(field.ajailerEmail),
      ajailerOfficePhone : new FormControl(field.ajailerOfficePhone),
      ajailerPersonalPhone : new FormControl(field.ajailerPersonalPhone),
      ajailerPresentAddress : new FormControl(field.ajailerPresentAddress),
      ajailerPermanentAddress : new FormControl(field.ajailerPermanentAddress),
      ajailerUserName : new FormControl(field.ajailerUserName),
      ajailerPassword : new FormControl(field.ajailerPassword),
      ajailerConfirmPassword : new FormControl(field.ajailerConfirmPassword)
    })
  }

}
