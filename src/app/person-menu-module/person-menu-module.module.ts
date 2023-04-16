import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonMenuModuleRoutingModule } from './person-menu-module-routing.module';
import { PersonMenuModuleComponent } from './person-menu-module.component';
import { PersonCaseEntryComponent } from './person-case-entry/person-case-entry.component';
import { PersonGeneralDiaryEntryComponent } from './person-general-diary-entry/person-general-diary-entry.component';
import { CaseInitialInvestigationAndConfirmationComponent } from './case-initial-investigation-and-confirmation/case-initial-investigation-and-confirmation.component';
import { LostPersonEntryComponent } from './lost-person-entry/lost-person-entry.component';
import { CourtCasesEntryComponent } from './court-cases-entry/court-cases-entry.component';
import { BailComponent } from './bail/bail.component';
import { BailsmanComponent } from './bailsman/bailsman.component';
import { ForwardingToCourtComponent } from './forwarding-to-court/forwarding-to-court.component';
import { ForwardingToJailComponent } from './forwarding-to-jail/forwarding-to-jail.component';
import { ReceivedOrReleasedByJailComponent } from './received-or-released-by-jail/received-or-released-by-jail.component';
import { SurveillanceOrFollowUpComponent } from './surveillance-or-follow-up/surveillance-or-follow-up.component';


@NgModule({
  declarations: [
    PersonMenuModuleComponent,
    PersonCaseEntryComponent,
    PersonGeneralDiaryEntryComponent,
    CaseInitialInvestigationAndConfirmationComponent,
    LostPersonEntryComponent,
    CourtCasesEntryComponent,
    BailComponent,
    BailsmanComponent,
    ForwardingToCourtComponent,
    ForwardingToJailComponent,
    ReceivedOrReleasedByJailComponent,
    SurveillanceOrFollowUpComponent
  ],
  imports: [
    CommonModule,
    PersonMenuModuleRoutingModule
  ]
})
export class PersonMenuModuleModule { }
