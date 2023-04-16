import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsModuleRoutingModule } from './reports-module-routing.module';
import { ReportsModuleComponent } from './reports-module.component';
import { StatisticsOfCasesComponent } from './statistics-of-cases/statistics-of-cases.component';
import { CourtsReportsComponent } from './courts-reports/courts-reports.component';
import { JailsReportsComponent } from './jails-reports/jails-reports.component';
import { ThanasReportsComponent } from './thanas-reports/thanas-reports.component';
import { SpecialReportCrimeComponent } from './special-report-crime/special-report-crime.component';
import { PersonsReportComponent } from './special_report-crime/persons-report/persons-report.component';
import { CaseInvestigationProgressComponent } from './special_report-crime/case-investigation-progress/case-investigation-progress.component';
import { DetailsInvestigationReportComponent } from './special_report-crime/details-investigation-report/details-investigation-report.component';
import { ListOfReportsComponent } from './special_report-crime/list-of-reports/list-of-reports.component';
import { InvestigatingOfficersReportComponent } from './investigating-officers-report/investigating-officers-report.component';
import { AdjournedCaseReportComponent } from './investigating_officers_report/adjourned-case-report/adjourned-case-report.component';
import { AssignedCaseReportComponent } from './investigating_officers_report/assigned-case-report/assigned-case-report.component';
import { SpecialSurveillanceReportComponent } from './investigating_officers_report/special-surveillance-report/special-surveillance-report.component';
import { SpecialReportMonitoringComponent } from './special-report-monitoring/special-report-monitoring.component';
import { UserAuditLogComponent } from './special_report-monitoring/user-audit-log/user-audit-log.component';
import { UserBasedDailyInsertedCaseNumberComponent } from './special_report-monitoring/user-based-daily-inserted-case-number/user-based-daily-inserted-case-number.component';
import { InformationVerificationComponent } from './special_report-monitoring/information-verification/information-verification.component';
import { ConfirmedInformationVerificationComponent } from './special_report-monitoring/confirmed-information-verification/confirmed-information-verification.component';
import { NumberOfCasesBasedOnCourtAndUnitComponent } from './special_report-monitoring/number-of-cases-based-on-court-and-unit/number-of-cases-based-on-court-and-unit.component';
import { DataEntryReportComponent } from './special_report-monitoring/data-entry-report/data-entry-report.component';
import { ReportLogComponent } from './special_report-monitoring/report-log/report-log.component';


@NgModule({
  declarations: [
    ReportsModuleComponent,
    StatisticsOfCasesComponent,
    CourtsReportsComponent,
    JailsReportsComponent,
    ThanasReportsComponent,
    SpecialReportCrimeComponent,
    PersonsReportComponent,
    CaseInvestigationProgressComponent,
    DetailsInvestigationReportComponent,
    ListOfReportsComponent,
    InvestigatingOfficersReportComponent,
    AdjournedCaseReportComponent,
    AssignedCaseReportComponent,
    SpecialSurveillanceReportComponent,
    SpecialReportMonitoringComponent,
    UserAuditLogComponent,
    UserBasedDailyInsertedCaseNumberComponent,
    InformationVerificationComponent,
    ConfirmedInformationVerificationComponent,
    NumberOfCasesBasedOnCourtAndUnitComponent,
    DataEntryReportComponent,
    ReportLogComponent
  ],
  imports: [
    CommonModule,
    ReportsModuleRoutingModule
  ]
})
export class ReportsModuleModule { }
