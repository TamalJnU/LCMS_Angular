import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CourtInformationComponent } from './court-information/court-information.component';
import { JailInformationComponent } from './jail-information/jail-information.component';
import { LcmsStatisticsComponent } from './lcms-statistics/lcms-statistics.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { PoliceInformationComponent } from './police-information/police-information.component';
import { SystemInformationComponent } from './system-information/system-information.component';
import { SidebarComponentComponent } from '../sidebar-component/sidebar-component.component';
import { JailerInformationComponent } from './jailer-information/jailer-information.component';
import { PpInformationComponent } from './pp-information/pp-information.component';

const routes: Routes = [
  { path : 'change-password', component : ChangePasswordComponent },
  { path : 'court-information', component : CourtInformationComponent },
  { path : 'jail-information', component : JailInformationComponent },
  { path : 'jailer-information', component : JailerInformationComponent },
  { path : 'lcms-statistics', component : LcmsStatisticsComponent },
  { path : 'notice-board', component : NoticeBoardComponent },
  { path : 'police-information', component : PoliceInformationComponent },
  { path : 'pp-information', component : PpInformationComponent },
  { path : 'system-information', component : SystemInformationComponent },
  { path : '', component : SidebarComponentComponent },
  { path : '**', component : SidebarComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralMenuModuleRoutingModule { }
