import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedCaseSearchComponent } from './advanced-case-search/advanced-case-search.component';
import { AdvancedPersonSearchComponent } from './advanced-person-search/advanced-person-search.component';
import { LostPersonSearchComponent } from './lost-person-search/lost-person-search.component';
import { SearchAccusedForwardingReportComponent } from './search-accused-forwarding-report/search-accused-forwarding-report.component';
import { SearchCaseBasedOnFollowUpComponent } from './search-case-based-on-follow-up/search-case-based-on-follow-up.component';
import { SearchCaseBasedOnInstitutionComponent } from './search-case-based-on-institution/search-case-based-on-institution.component';
import { SearchCaseBasedOnPersonsThemeComponent } from './search-case-based-on-persons-theme/search-case-based-on-persons-theme.component';
import { SearchCaseBasedOnThemeComponent } from './search-case-based-on-theme/search-case-based-on-theme.component';
import { SearchInformationWithoutCaseComponent } from './search-information-without-case/search-information-without-case.component';
import { SearchLegalWeaponsComponent } from './search-legal-weapons/search-legal-weapons.component';
import { SearchNidComponent } from './search-nid/search-nid.component';
import { SearchPersonBasedOnCaseNumberComponent } from './search-person-based-on-case-number/search-person-based-on-case-number.component';
import { SearchPersonBasedOnCasesThemeComponent } from './search-person-based-on-cases-theme/search-person-based-on-cases-theme.component';
import { SearchPersonBasedOnThemeComponent } from './search-person-based-on-theme/search-person-based-on-theme.component';
import { VehicleSearchComponent } from './vehicle-search/vehicle-search.component';
import { SidebarComponentComponent } from '../sidebar-component/sidebar-component.component';

const routes: Routes = [
  { path : 'advanced-case-search', component : AdvancedCaseSearchComponent },
  { path : 'advanced-person-search', component : AdvancedPersonSearchComponent },
  { path : 'lost-person-search', component : LostPersonSearchComponent },
  { path : 'search-accused-forwarding-report', component : SearchAccusedForwardingReportComponent },
  { path : 'search-case-based-on-follow-up', component : SearchCaseBasedOnFollowUpComponent },
  { path : 'search-case-based-on-institution', component : SearchCaseBasedOnInstitutionComponent },
  { path : 'search-case-based-on-persons-theme', component : SearchCaseBasedOnPersonsThemeComponent },
  { path : 'search-case-based-on-theme', component : SearchCaseBasedOnThemeComponent },
  { path : 'search-information-without-case', component : SearchInformationWithoutCaseComponent },
  { path : 'search-legal-weapons', component : SearchLegalWeaponsComponent },
  { path : 'search-nid', component : SearchNidComponent },
  { path : 'search-person-based-on-case-number', component : SearchPersonBasedOnCaseNumberComponent },
  { path : 'search-person-based-on-cases-theme', component : SearchPersonBasedOnCasesThemeComponent },
  { path : 'search-person-based-on-theme', component : SearchPersonBasedOnThemeComponent },
  { path : 'vehicle-search', component : VehicleSearchComponent },
  { path : '', component : SidebarComponentComponent },
  { path : '**', component : SidebarComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchMenuModuleRoutingModule { }
