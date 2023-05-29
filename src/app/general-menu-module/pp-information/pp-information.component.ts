import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/manage-module/add-pp/app-service.service';
import { IAddPp } from 'src/app/manage-module/manage-module-interface';

@Component({
  selector: 'app-pp-information',
  templateUrl: './pp-information.component.html',
  styleUrls: ['./pp-information.component.css']
})
export class PpInformationComponent implements OnInit {

  pp! : IAddPp[];

  constructor(private ppService : AppServiceService) { }

  ngOnInit(): void {
    this.ppService.getAllPps().subscribe({
      next:res => {
        this.pp = res;
        console.log('PP List---------');
      },
      error: console.log
    })
  }

}
