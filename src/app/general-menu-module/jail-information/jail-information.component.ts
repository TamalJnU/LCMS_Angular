import { Component, OnInit } from '@angular/core';
import { AjailServiceService } from 'src/app/manage-module/add-jail/ajail-service.service';
import { IAddJail } from 'src/app/manage-module/manage-module-interface';

@Component({
  selector: 'app-jail-information',
  templateUrl: './jail-information.component.html',
  styleUrls: ['./jail-information.component.css']
})
export class JailInformationComponent implements OnInit {

  jail! : IAddJail[];

  constructor(private jailService : AjailServiceService) { }

  ngOnInit(): void {
    this.jailService.getAllJails().subscribe({
      next:res => {
        this.jail = res;
      },
      error:console.log
    })
  }

}
