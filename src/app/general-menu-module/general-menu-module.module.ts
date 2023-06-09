import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralMenuModuleRoutingModule } from './general-menu-module-routing.module';
import { GeneralMenuModuleComponent } from './general-menu-module.component';
import { LcmsStatisticsComponent } from './lcms-statistics/lcms-statistics.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SystemInformationComponent } from './system-information/system-information.component';
import { PoliceInformationComponent } from './police-information/police-information.component';
import { CourtInformationComponent } from './court-information/court-information.component';
import { JailInformationComponent } from './jail-information/jail-information.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { JailerInformationComponent } from './jailer-information/jailer-information.component';
import { PpInformationComponent } from './pp-information/pp-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JudgeInformationComponent } from './judge-information/judge-information.component';


@NgModule({
  declarations: [
    GeneralMenuModuleComponent,
    LcmsStatisticsComponent,
    ChangePasswordComponent,
    SystemInformationComponent,
    PoliceInformationComponent,
    CourtInformationComponent,
    JailInformationComponent,
    NoticeBoardComponent,
    JailerInformationComponent,
    PpInformationComponent,
    JudgeInformationComponent
  ],
  imports: [
    CommonModule,
    GeneralMenuModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GeneralMenuModuleModule { }
