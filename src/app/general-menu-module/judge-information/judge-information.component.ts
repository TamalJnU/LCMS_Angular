import { Component, OnInit } from '@angular/core';
import { AjServiceService } from 'src/app/manage-module/add-judge/aj-service.service';
import { IAddJudge } from 'src/app/manage-module/manage-module-interface';

@Component({
  selector: 'app-judge-information',
  templateUrl: './judge-information.component.html',
  styleUrls: ['./judge-information.component.css']
})
export class JudgeInformationComponent implements OnInit {

  judge! : IAddJudge[];

  constructor(private judgeService : AjServiceService) { }

  ngOnInit(): void {
    this.judgeService.getAllJudges().subscribe({
      next:res =>{
        this.judge = res;
      },
      error:console.log
    })
  }

}
