import { Component, OnInit } from '@angular/core';
import { IAddCourt } from '../manage-module-interface';
import { FormControl, FormGroup } from '@angular/forms';
import { AcServiceService } from './ac-service.service';

@Component({
  selector: 'app-add-court',
  templateUrl: './add-court.component.html',
  styleUrls: ['./add-court.component.css']
})
export class AddCourtComponent implements OnInit {

  courtList! : IAddCourt[];
  addCourtForm! : FormGroup;

  constructor(private acService : AcServiceService) { }

  ngOnInit(): void {
    this.acService.getData().subscribe((old : IAddCourt[]) => {
      this.courtList = old;
    })

    this.addCourtForm = new FormGroup({
      acCourtId : new FormControl(),
      acCourtType : new FormControl(''),
      acCourtCity : new FormControl(''),
      acCourtName : new FormControl(''),
      acCourtNo : new FormControl(''),
      acTribunalName : new FormControl(''),
      acChiefJustice : new FormControl(''),
      acChiefJusticeId : new FormControl(''),
      acPublicProsecutor : new FormControl(''),
      acPublicProsecutorId : new FormControl(''),
      acEmail : new FormControl(''),
      acCourtPhone : new FormControl(''),
      acUserName : new FormControl(''),
      acPassword : new FormControl(''),
      acConfirmPassword : new FormControl('')
    })
  }

  submit(){
    if(this.addCourtForm.value.acCourtId !== null){
      this.acService.updateData(this.addCourtForm.value).subscribe(res => {
        this.ngOnInit();
      })
    } else {
      this.acService.addData(this.addCourtForm.value).subscribe(res => {
        this.ngOnInit();
      })
    }
  }

  delete (field : IAddCourt) {
    this.acService.deleteData(field).subscribe(res => {
      this.ngOnInit();
    })
  }

  edit (field : IAddCourt) {
    this.addCourtForm = new FormGroup({
      acCourtId : new FormControl(field.acCourtId),
      acCourtType : new FormControl(field.acCourtType),
      acCourtCity : new FormControl(field.acCourtCity),
      acCourtName : new FormControl(field.acCourtName),
      acCourtNo : new FormControl(field.acCourtNo),
      acTribunalName : new FormControl(field.acTribunalName),
      acChiefJustice : new FormControl(field.acChiefJustice),
      acChiefJusticeId : new FormControl(field.acChiefJusticeId),
      acPublicProsecutor : new FormControl(field.acPublicProsecutor),
      acPublicProsecutorId : new FormControl(field.acPublicProsecutorId),
      acEmail : new FormControl(field.acEmail),
      acCourtPhone : new FormControl(field.acCourtPhone),
      acUserName : new FormControl(field.acUserName),
      acPassword : new FormControl(field.acPassword),
      acConfirmPassword : new FormControl(field.acConfirmPassword)
    })
  }

}
