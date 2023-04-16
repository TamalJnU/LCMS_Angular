import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourtsReportsComponent } from './courts-reports/courts-reports.component';
import { InvestigatingOfficersReportComponent } from './investigating-officers-report/investigating-officers-report.component';
import { AdjournedCaseReportComponent } from './investigating_officers_report/adjourned-case-report/adjourned-case-report.component';
import { AssignedCaseReportComponent } from './investigating_officers_report/assigned-case-report/assigned-case-report.component';
import { SpecialSurveillanceReportComponent } from './investigating_officers_report/special-surveillance-report/special-surveillance-report.component';
import { JailsReportsComponent } from './jails-reports/jails-reports.component';
import { SpecialReportCrimeComponent } from './special-report-crime/special-report-crime.component';
import { CaseInvestigationProgressComponent } from './special_report-crime/case-investigation-progress/case-investigation-progress.component';
import { DetailsInvestigationReportComponent } from './special_report-crime/details-investigation-report/details-investigation-report.component';
import { ListOfReportsComponent } from './special_report-crime/list-of-reports/list-of-reports.component';
import { PersonsReportComponent } from './special_report-crime/persons-report/persons-report.component';
import { SpecialReportMonitoringComponent } from './special-report-monitoring/special-report-monitoring.component';
import { ConfirmedInformationVerificationComponent } from './special_report-monitoring/confirmed-information-verification/confirmed-information-verification.component';
import { DataEntryReportComponent } from './special_report-monitoring/data-entry-report/data-entry-report.component';
import { InformationVerificationComponent } from './special_report-monitoring/information-verification/information-verification.component';
import { NumberOfCasesBasedOnCourtAndUnitComponent } from './special_report-monitoring/number-of-cases-based-on-court-and-unit/number-of-cases-based-on-court-and-unit.component';
import { ReportLogComponent } from './special_report-monitoring/report-log/report-log.component';
import { UserAuditLogComponent } from './special_report-monitoring/user-audit-log/user-audit-log.component';
import { UserBasedDailyInsertedCaseNumberComponent } from './special_report-monitoring/user-based-daily-inserted-case-number/user-based-daily-inserted-case-number.component';
import { StatisticsOfCasesComponent } from './statistics-of-cases/statistics-of-cases.component';
import { ThanasReportsComponent } from './thanas-reports/thanas-reports.component';
import { SidebarComponentComponent } from '../sidebar-component/sidebar-component.component';

const routes: Routes = [
  { path : 'courts-reports', component : CourtsReportsComponent },

  { path : 'investigating-officers-report', component : InvestigatingOfficersReportComponent, children :
  [
    { path : 'adjourned-case-report', component : AdjournedCaseReportComponent },
    { path : 'assigned-case-report', component : AssignedCaseReportComponent },
    { path : 'special-surveillance-report', component : SpecialSurveillanceReportComponent }
  ] },

  { path : 'jails-reports', component : JailsReportsComponent },

  { path : 'special-report-crime', component : SpecialReportCrimeComponent, children :
  [
    { path : 'case-investigation-progress', component : CaseInvestigationProgressComponent },
    { path : 'details-investigation-report', component : DetailsInvestigationReportComponent },
    { path : 'list-of-reports', component : ListOfReportsComponent },
    { path : 'persons-report', component : PersonsReportComponent }
  ] },

  { path : 'special-report-monitoring', component : SpecialReportMonitoringComponent, children :
  [
    { path : 'confirmed-information-verification', component : ConfirmedInformationVerificationComponent },
    { path : 'data-entry-report', component : DataEntryReportComponent },
    { path : 'information-verification', component : InformationVerificationComponent },
    { path : 'number-of-cases-bases-on-court-and-unit', component : NumberOfCasesBasedOnCourtAndUnitComponent },
    { path : 'report-log', component : ReportLogComponent },
    { path : 'user-audit-log', component : UserAuditLogComponent },
    { path : 'user-based-daily-inserted-case-number', component : UserBasedDailyInsertedCaseNumberComponent }
  ] },

  { path : 'statistics-of-cases', component : StatisticsOfCasesComponent },
  { path : 'thanas-reports', component : ThanasReportsComponent },
  { path : '', component : SidebarComponentComponent },
  { path : '**', component : SidebarComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsModuleRoutingModule { }
