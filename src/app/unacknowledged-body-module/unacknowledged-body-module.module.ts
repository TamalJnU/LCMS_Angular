import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnacknowledgedBodyModuleRoutingModule } from './unacknowledged-body-module-routing.module';
import { UnacknowledgedBodyModuleComponent } from './unacknowledged-body-module.component';
import { UnacknowledgedBodyComponent } from './unacknowledged-body/unacknowledged-body.component';
import { LostPersonsComponent } from './lost-persons/lost-persons.component';


@NgModule({
  declarations: [
    UnacknowledgedBodyModuleComponent,
    UnacknowledgedBodyComponent,
    LostPersonsComponent
  ],
  imports: [
    CommonModule,
    UnacknowledgedBodyModuleRoutingModule
  ]
})
export class UnacknowledgedBodyModuleModule { }
