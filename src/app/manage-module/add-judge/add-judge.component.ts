import { Component, OnInit } from '@angular/core';
import { IAddJudge } from '../manage-module-interface';
import { FormControl, FormGroup } from '@angular/forms';
import { AjServiceService } from './aj-service.service';

@Component({
  selector: 'app-add-judge',
  templateUrl: './add-judge.component.html',
  styleUrls: ['./add-judge.component.css']
})
export class AddJudgeComponent implements OnInit {

  judgeList! : IAddJudge[];
  addJudgeForm! : FormGroup;

  constructor(private ajService : AjServiceService) { }

  ngOnInit(): void {
    this.ajService.getAllJudges().subscribe((old : IAddJudge[]) => {
      this.judgeList = old;
    })

    this.addJudgeForm = new FormGroup({
      ajJudgeId : new FormControl(),
      ajFirstName : new FormControl(''),
      ajLastName : new FormControl(''),
      ajFatherName : new FormControl(''),
      ajMotherName : new FormControl(''),
      ajGender : new FormControl(''),
      ajDoB : new FormControl(''),
      ajCourtId : new FormControl(''),
      ajCourtType : new FormControl(''),
      ajCourtCity : new FormControl(''),
      ajCourtName : new FormControl(''),
      ajCourtNo : new FormControl(''),
      ajTribunalName : new FormControl(''),
      ajChiefJustice : new FormControl(''),
      ajChiefJusticeId : new FormControl(''),
      ajPlacementDate : new FormControl(''),
      ajEmail : new FormControl(''),
      ajOfficePhone : new FormControl(''),
      ajPersonalPhone : new FormControl(''),
      ajPresentAddress : new FormControl(''),
      ajPermanentAddress : new FormControl(''),
      ajUserName : new FormControl(''),
      ajPassword : new FormControl(''),
      ajConfirmPassword : new FormControl('')
    })
  }

  submit () {
    if(this.addJudgeForm.value.ajJudgeId !== null){
      this.ajService.updateJudge(this.addJudgeForm.value).subscribe(res =>{
        this.ngOnInit();
      })
    }else {
      this.ajService.createJudge(this.addJudgeForm.value).subscribe(res =>{
        this.ngOnInit();
      })
    }
  }

  delete (field : IAddJudge) {
    this.ajService.deleteJudge(field).subscribe(res=> {
      this.ngOnInit();
    })
  }

  edit (field : IAddJudge) {
    this.addJudgeForm = new FormGroup({
      ajJudgeId : new FormControl(field.ajJudgeId),
      ajFirstName : new FormControl(field.ajFirstName),
      ajLastName : new FormControl(field.ajLastName),
      ajFatherName : new FormControl(field.ajFatherName),
      ajMotherName : new FormControl(field.ajMotherName),
      ajGender : new FormControl(field.ajGender),
      ajDoB : new FormControl(field.ajDoB),
      ajCourtId : new FormControl(field.ajCourtId),
      ajCourtType : new FormControl(field.ajCourtType),
      ajCourtCity : new FormControl(field.ajCourtCity),
      ajCourtName : new FormControl(field.ajCourtName),
      ajCourtNo : new FormControl(field.ajCourtNo),
      ajTribunalName : new FormControl(field.ajTribunalName),
      ajChiefJustice : new FormControl(field.ajChiefJustice),
      ajChiefJusticeId : new FormControl(field.ajChiefJusticeId),
      ajPlacementDate : new FormControl(field.ajPlacementDate),
      ajEmail : new FormControl(field.ajEmail),
      ajOfficePhone : new FormControl(field.ajOfficePhone),
      ajPersonalPhone : new FormControl(field.ajPersonalPhone),
      ajPresentAddress : new FormControl(field.ajPresentAddress),
      ajPermanentAddress : new FormControl(field.ajPermanentAddress),
      ajUserName : new FormControl(field.ajUserName),
      ajPassword : new FormControl(field.ajPassword),
      ajConfirmPassword : new FormControl(field.ajConfirmPassword)
    })
  }

}
