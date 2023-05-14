import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonCaseEntryComponent } from './person-case-entry/person-case-entry.component';
import { BailComponent } from './bail/bail.component';
import { BailsmanComponent } from './bailsman/bailsman.component';
import { CaseInitialInvestigationAndConfirmationComponent } from './case-initial-investigation-and-confirmation/case-initial-investigation-and-confirmation.component';
import { CourtCasesEntryComponent } from './court-cases-entry/court-cases-entry.component';
import { ForwardingToCourtComponent } from './forwarding-to-court/forwarding-to-court.component';
import { ForwardingToJailComponent } from './forwarding-to-jail/forwarding-to-jail.component';
import { LostPersonEntryComponent } from './lost-person-entry/lost-person-entry.component';
import { PersonGeneralDiaryEntryComponent } from './person-general-diary-entry/person-general-diary-entry.component';
import { ReceivedOrReleasedByJailComponent } from './received-or-released-by-jail/received-or-released-by-jail.component';
import { SurveillanceOrFollowUpComponent } from './surveillance-or-follow-up/surveillance-or-follow-up.component';
import { SidebarComponentComponent } from '../sidebar-component/sidebar-component.component';
import { PersonEntryComponent } from './person-entry/person-entry.component';

const routes: Routes = [
  { path : 'person-case-entry', component : PersonCaseEntryComponent },
  { path : 'bail', component :BailComponent },
  { path : 'bailsman', component : BailsmanComponent },
  { path : 'case-initial-investigation-and-confirmation', component : CaseInitialInvestigationAndConfirmationComponent },
  { path : 'court-cases-entry', component : CourtCasesEntryComponent },
  { path : 'forwarding-to-court', component : ForwardingToCourtComponent },
  { path : 'forwarding-to-jail', component : ForwardingToJailComponent },
  { path : 'lost-person-entry', component : LostPersonEntryComponent },
  { path : 'person-entry', component : PersonEntryComponent },
  { path : 'person-general-diary-entry', component : PersonGeneralDiaryEntryComponent },
  { path : 'received-or-released-by-jail', component : ReceivedOrReleasedByJailComponent },
  { path : 'surveillance-or-follow-up', component : SurveillanceOrFollowUpComponent },
  // { path : '', component : SidebarComponentComponent },
  // { path : '**', component : SidebarComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonMenuModuleRoutingModule { }
