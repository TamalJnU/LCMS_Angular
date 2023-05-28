import { Component, OnInit } from '@angular/core';
import { IAddJail } from '../manage-module-interface';
import { FormControl, FormGroup } from '@angular/forms';
import { AjailServiceService } from './ajail-service.service';

@Component({
  selector: 'app-add-jail',
  templateUrl: './add-jail.component.html',
  styleUrls: ['./add-jail.component.css']
})
export class AddJailComponent implements OnInit {

  JailList! : IAddJail[];
  addJailForm! : FormGroup;

  constructor(private ajailService : AjailServiceService) { }

  ngOnInit(): void {
    this.ajailService.getAllJails().subscribe((old : IAddJail[]) => {
      this.JailList = old;
    })

    this.addJailForm = new FormGroup({
      ajailJailId : new FormControl(),
      ajailJailName : new FormControl(''),
      ajailJailType : new FormControl(''),
      ajailJailCity : new FormControl(''),
      ajailJailSuperName : new FormControl(''),
      ajailJailSuperPoliceId : new FormControl(''),
      ajailJailEmail : new FormControl(''),
      ajailOfficePhone : new FormControl(''),
      ajailJailSuperPhone : new FormControl(''),
      ajailUserName : new FormControl(''),
      ajailPassword : new FormControl(''),
      ajailConfirmPassword : new FormControl('')
    })
  }

  submit () {
    if(this.addJailForm.value.ajailJailId !== null){
      this.ajailService.updateJail(this.addJailForm.value).subscribe(res =>{
        this.ngOnInit();
      })
    }else {
      this.ajailService.createJail(this.addJailForm.value).subscribe(res =>{
        this.ngOnInit();
      })
    }
  }

  delete (field : IAddJail) {
    this.ajailService.deleteJail(field).subscribe(res=> {
      this.ngOnInit();
    })
  }

  edit (field : IAddJail) {
    this.addJailForm = new FormGroup({
      ajailJailId : new FormControl(field.ajailJailId),
      ajailJailName : new FormControl(field.ajailJailName),
      ajailJailType : new FormControl(field.ajailJailType),
      ajailJailCity : new FormControl(field.ajailJailCity),
      ajailJailSuperName : new FormControl(field.ajailJailSuperName),
      ajailJailSuperPoliceId : new FormControl(field.ajailJailSuperPoliceId),
      ajailJailEmail : new FormControl(field.ajailJailEmail),
      ajailOfficePhone : new FormControl(field.ajailOfficePhone),
      ajailJailSuperPhone : new FormControl(field.ajailJailSuperPhone),
      ajailUserName : new FormControl(field.ajailUserName),
      ajailPassword : new FormControl(field.ajailPassword),
      ajailConfirmPassword : new FormControl(field.ajailConfirmPassword)
    })
  }

}
