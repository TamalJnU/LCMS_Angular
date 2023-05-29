import { Component, OnInit } from '@angular/core';
import { ApserviceService } from 'src/app/manage-module/add-police/apservice.service';
import { IAddPolice } from 'src/app/manage-module/manage-module-interface';

@Component({
  selector: 'app-police-information',
  templateUrl: './police-information.component.html',
  styleUrls: ['./police-information.component.css']
})
export class PoliceInformationComponent implements OnInit{


  police!: IAddPolice[];
  constructor(private api: ApserviceService){}

  ngOnInit(): void {

    this.api.getAllPolices().subscribe({
      next:res=>{
        this.police =res;
        console.log('Police List--------');
          
      },
      error:console.log
      
    })
  }




}
