import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  id! : number;
  //policeData! : IAddPolice;
  constructor(private api: ApserviceService, private router : Router){}

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
    this.api.getPolice(field).subscribe(res=> {
      //this.ngOnInit();
      this.router.navigateByUrl('/manage/add-police');
    })
  }


  edit(id:number){
    this.router.navigateByUrl('/manage/add-police/'+id);
  }

    

  // editPoliceInfo(id : number) {
  //   this.api.editPoliceById(id).subscribe((data) => {
  //     this.policeData = data;
  //     console.log(data);

  //   })
  // }




}
