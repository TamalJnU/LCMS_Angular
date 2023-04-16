import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThanaRegisterComponent } from './thana-register/thana-register.component';
import { CourtRegisterComponent } from './court-register/court-register.component';
import { JailRegisterComponent } from './jail-register/jail-register.component';
import { JailerRegisterComponent } from './jailer-register/jailer-register.component';
import { JudgeRegisterComponent } from './judge-register/judge-register.component';
import { OthersRegisterComponent } from './others-register/others-register.component';
import { ArrestWarrentComponent } from '../warrent-module/arrest-warrent/arrest-warrent.component';
import { ChildAbuseAndTortureComponent } from './others_register/child-abuse-and-torture/child-abuse-and-torture.component';
import { ChildRelatedInformationComponent } from './others_register/child-related-information/child-related-information.component';
import { CommunityPolicingOfficerComponent } from './others_register/community-policing-officer/community-policing-officer.component';
import { CourtVerdictRegisterComponent } from './others_register/court-verdict-register/court-verdict-register.component';
import { GunLicenseComponent } from './others_register/gun-license/gun-license.component';
import { InformationEntryWithoutCaseComponent } from './others_register/information-entry-without-case/information-entry-without-case.component';
import { JailCustodyRegisterComponent } from './others_register/jail-custody-register/jail-custody-register.component';
import { RapeAndWomenRelatedCasesComponent } from './others_register/rape-and-women-related-cases/rape-and-women-related-cases.component';
import { ReceivedInquirySlipComponent } from './others_register/received-inquiry-slip/received-inquiry-slip.component';
import { SmugglingRelatedCaseMenuComponent } from './others_register/smuggling-related-case-menu/smuggling-related-case-menu.component';
import { StuffLostAndFoundComponent } from './others_register/stuff-lost-and-found/stuff-lost-and-found.component';
import { TraffickingRelatedCaseMenuComponent } from './others_register/trafficking-related-case-menu/trafficking-related-case-menu.component';
import { PoliceRegisterComponent } from './police-register/police-register.component';
import { PublicProsecutorRegisterComponent } from './public-prosecutor-register/public-prosecutor-register.component';
import { SidebarComponentComponent } from '../sidebar-component/sidebar-component.component';

const routes: Routes = [
  { path: 'thana-register', component: ThanaRegisterComponent},
  { path: 'court-register', component: CourtRegisterComponent},
  { path: 'jail-register', component: JailRegisterComponent},
  { path: 'jailer-register', component: JailerRegisterComponent},
  { path: 'judge-register', component: JudgeRegisterComponent},
  { path : '', component : ThanaRegisterComponent },

  { path: 'others-register', component: OthersRegisterComponent, children :
  [
    { path: 'arrest-warrent-register', component: ArrestWarrentComponent},
    { path: 'child-abuse-and-torture', component: ChildAbuseAndTortureComponent},
    { path: 'child-related-information', component: ChildRelatedInformationComponent},
    { path: 'community-policing-officer', component: CommunityPolicingOfficerComponent},
    { path: 'court-verdict-register', component: CourtVerdictRegisterComponent},
    { path: 'gun-license', component: GunLicenseComponent},
    { path: 'information-entry-without-case', component: InformationEntryWithoutCaseComponent},
    { path: 'jail-custody-register', component: JailCustodyRegisterComponent},
    { path: 'rape-and-women-related-cases', component: RapeAndWomenRelatedCasesComponent},
    { path: 'received-inquiry-slip', component: ReceivedInquirySlipComponent},
    { path: 'smuggling-related-case-menu', component: SmugglingRelatedCaseMenuComponent},
    { path: 'stuff-lost-and-found', component: StuffLostAndFoundComponent},
    { path: 'trafficking-related-case-menu', component: TraffickingRelatedCaseMenuComponent},
  ]
 },

  { path: 'police-register', component: PoliceRegisterComponent},
  { path: 'public-prosecutor-register', component: PublicProsecutorRegisterComponent},
  { path : '**', component : SidebarComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterModuleRoutingModule { }
