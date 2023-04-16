import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchMenuModuleRoutingModule } from './search-menu-module-routing.module';
import { SearchMenuModuleComponent } from './search-menu-module.component';
import { SearchPersonBasedOnThemeComponent } from './search-person-based-on-theme/search-person-based-on-theme.component';
import { SearchPersonBasedOnCasesThemeComponent } from './search-person-based-on-cases-theme/search-person-based-on-cases-theme.component';
import { SearchCaseBasedOnThemeComponent } from './search-case-based-on-theme/search-case-based-on-theme.component';
import { SearchCaseBasedOnPersonsThemeComponent } from './search-case-based-on-persons-theme/search-case-based-on-persons-theme.component';
import { SearchAccusedForwardingReportComponent } from './search-accused-forwarding-report/search-accused-forwarding-report.component';
import { SearchPersonBasedOnCaseNumberComponent } from './search-person-based-on-case-number/search-person-based-on-case-number.component';
import { AdvancedPersonSearchComponent } from './advanced-person-search/advanced-person-search.component';
import { AdvancedCaseSearchComponent } from './advanced-case-search/advanced-case-search.component';
import { VehicleSearchComponent } from './vehicle-search/vehicle-search.component';
import { LostPersonSearchComponent } from './lost-person-search/lost-person-search.component';
import { SearchCaseBasedOnFollowUpComponent } from './search-case-based-on-follow-up/search-case-based-on-follow-up.component';
import { SearchLegalWeaponsComponent } from './search-legal-weapons/search-legal-weapons.component';
import { SearchCaseBasedOnInstitutionComponent } from './search-case-based-on-institution/search-case-based-on-institution.component';
import { SearchInformationWithoutCaseComponent } from './search-information-without-case/search-information-without-case.component';
import { SearchNidComponent } from './search-nid/search-nid.component';


@NgModule({
  declarations: [
    SearchMenuModuleComponent,
    SearchPersonBasedOnThemeComponent,
    SearchPersonBasedOnCasesThemeComponent,
    SearchCaseBasedOnThemeComponent,
    SearchCaseBasedOnPersonsThemeComponent,
    SearchAccusedForwardingReportComponent,
    SearchPersonBasedOnCaseNumberComponent,
    AdvancedPersonSearchComponent,
    AdvancedCaseSearchComponent,
    VehicleSearchComponent,
    LostPersonSearchComponent,
    SearchCaseBasedOnFollowUpComponent,
    SearchLegalWeaponsComponent,
    SearchCaseBasedOnInstitutionComponent,
    SearchInformationWithoutCaseComponent,
    SearchNidComponent
  ],
  imports: [
    CommonModule,
    SearchMenuModuleRoutingModule
  ]
})
export class SearchMenuModuleModule { }
