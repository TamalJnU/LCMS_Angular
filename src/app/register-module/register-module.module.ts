import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterModuleRoutingModule } from './register-module-routing.module';
import { RegisterModuleComponent } from './register-module.component';
import { ThanaRegisterComponent } from './thana-register/thana-register.component';
import { CourtRegisterComponent } from './court-register/court-register.component';
import { PoliceRegisterComponent } from './police-register/police-register.component';
import { JudgeRegisterComponent } from './judge-register/judge-register.component';
import { PublicProsecutorRegisterComponent } from './public-prosecutor-register/public-prosecutor-register.component';
import { JailRegisterComponent } from './jail-register/jail-register.component';
import { JailerRegisterComponent } from './jailer-register/jailer-register.component';
import { OthersRegisterComponent } from './others-register/others-register.component';
import { GunLicenseComponent } from './others_register/gun-license/gun-license.component';
import { ReceivedInquirySlipComponent } from './others_register/received-inquiry-slip/received-inquiry-slip.component';
import { StuffLostAndFoundComponent } from './others_register/stuff-lost-and-found/stuff-lost-and-found.component';
import { ArrestWarrentRegisterComponent } from './others_register/arrest-warrent-register/arrest-warrent-register.component';
import { CourtVerdictRegisterComponent } from './others_register/court-verdict-register/court-verdict-register.component';
import { JailCustodyRegisterComponent } from './others_register/jail-custody-register/jail-custody-register.component';
import { CommunityPolicingOfficerComponent } from './others_register/community-policing-officer/community-policing-officer.component';
import { SmugglingRelatedCaseMenuComponent } from './others_register/smuggling-related-case-menu/smuggling-related-case-menu.component';
import { TraffickingRelatedCaseMenuComponent } from './others_register/trafficking-related-case-menu/trafficking-related-case-menu.component';
import { InformationEntryWithoutCaseComponent } from './others_register/information-entry-without-case/information-entry-without-case.component';
import { ChildAbuseAndTortureComponent } from './others_register/child-abuse-and-torture/child-abuse-and-torture.component';
import { ChildRelatedInformationComponent } from './others_register/child-related-information/child-related-information.component';
import { RapeAndWomenRelatedCasesComponent } from './others_register/rape-and-women-related-cases/rape-and-women-related-cases.component';
import { BenchWarrentRegisterComponent } from './others_register/bench-warrent-register/bench-warrent-register.component';
import { SearchWarrentRegisterComponent } from './others_register/search-warrent-register/search-warrent-register.component';
import { CourtSummonsRegisterComponent } from './others_register/court-summons-register/court-summons-register.component';
import { WantedPersonsRegisterComponent } from './others_register/wanted-persons-register/wanted-persons-register.component';


@NgModule({
  declarations: [
    RegisterModuleComponent,
    ThanaRegisterComponent,
    CourtRegisterComponent,
    PoliceRegisterComponent,
    JudgeRegisterComponent,
    PublicProsecutorRegisterComponent,
    JailRegisterComponent,
    JailerRegisterComponent,
    OthersRegisterComponent,
    GunLicenseComponent,
    ReceivedInquirySlipComponent,
    StuffLostAndFoundComponent,
    ArrestWarrentRegisterComponent,
    CourtVerdictRegisterComponent,
    JailCustodyRegisterComponent,
    CommunityPolicingOfficerComponent,
    SmugglingRelatedCaseMenuComponent,
    TraffickingRelatedCaseMenuComponent,
    InformationEntryWithoutCaseComponent,
    ChildAbuseAndTortureComponent,
    ChildRelatedInformationComponent,
    RapeAndWomenRelatedCasesComponent,
    BenchWarrentRegisterComponent,
    SearchWarrentRegisterComponent,
    CourtSummonsRegisterComponent,
    WantedPersonsRegisterComponent,
  ],
  imports: [
    CommonModule,
    RegisterModuleRoutingModule
  ]
})
export class RegisterModuleModule { }
