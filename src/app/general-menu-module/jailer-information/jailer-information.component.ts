import { Component, OnInit } from '@angular/core';
import { AjailerServiceService } from 'src/app/manage-module/add-jailer/ajailer-service.service';
import { IAddJailer } from 'src/app/manage-module/manage-module-interface';

@Component({
  selector: 'app-jailer-information',
  templateUrl: './jailer-information.component.html',
  styleUrls: ['./jailer-information.component.css']
})
export class JailerInformationComponent implements OnInit {

  jailer! : IAddJailer[];

  constructor(private jailerService : AjailerServiceService) { }

  ngOnInit(): void {
    this.jailerService.getAllJailers().subscribe({
      next:res => {
        this.jailer = res;
      },
      error:console.log
    })
  }

}
