import { Component, OnInit } from '@angular/core';
import { AcServiceService } from 'src/app/manage-module/add-court/ac-service.service';
import { IAddCourt } from 'src/app/manage-module/manage-module-interface';

@Component({
  selector: 'app-court-information',
  templateUrl: './court-information.component.html',
  styleUrls: ['./court-information.component.css']
})
export class CourtInformationComponent implements OnInit {

  court! : IAddCourt[];

  constructor(private courtService : AcServiceService) { }

  ngOnInit(): void {
    this.courtService.getAllCourts().subscribe({
      next:res => {
        this.court = res;
      },
      error:console.log
    })
  }

}
