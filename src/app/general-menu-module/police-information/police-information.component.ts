import { Component, OnInit } from '@angular/core';
import { AddPoliceComponent } from 'src/app/manage-module/add-police/add-police.component';
import { ApserviceService } from 'src/app/manage-module/add-police/apservice.service';
import { IAddPolice } from 'src/app/manage-module/manage-module-interface';

@Component({
  selector: 'app-police-information',
  templateUrl: './police-information.component.html',
  styleUrls: ['./police-information.component.css']
})
export class PoliceInformationComponent implements OnInit{


  police!: IAddPolice[];
  //policeData! : IAddPolice;
  constructor(private api: ApserviceService, private com : AddPoliceComponent){}

  ngOnInit(): void {

    this.api.getAllPolices().subscribe({
      next:res=>{
        this.police =res;
        console.log('Police List--------');

      },
      error:console.log
    })
  }

  viewPolice(field : IAddPolice) {
    this.com.view(field);
  }

  // editPoliceInfo(id : number) {
  //   this.api.editPoliceById(id).subscribe((data) => {
  //     this.policeData = data;
  //     console.log(data);

  //   })
  // }




}
