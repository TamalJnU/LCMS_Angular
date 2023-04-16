import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarrentModuleRoutingModule } from './warrent-module-routing.module';
import { WarrentModuleComponent } from './warrent-module.component';
import { WarrentsListComponent } from './warrents-list/warrents-list.component';
import { ArrestWarrentComponent } from './arrest-warrent/arrest-warrent.component';
import { BenchWarrentComponent } from './bench-warrent/bench-warrent.component';
import { SearchWarrentComponent } from './search-warrent/search-warrent.component';
import { CourtSommonsComponent } from './court-sommons/court-sommons.component';
import { WantedPersonsComponent } from './wanted-persons/wanted-persons.component';


@NgModule({
  declarations: [
    WarrentModuleComponent,
    WarrentsListComponent,
    ArrestWarrentComponent,
    BenchWarrentComponent,
    SearchWarrentComponent,
    CourtSommonsComponent,
    WantedPersonsComponent
  ],
  imports: [
    CommonModule,
    WarrentModuleRoutingModule
  ]
})
export class WarrentModuleModule { }
