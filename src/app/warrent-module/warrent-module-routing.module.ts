import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrestWarrentComponent } from './arrest-warrent/arrest-warrent.component';
import { BenchWarrentComponent } from './bench-warrent/bench-warrent.component';
import { CourtSommonsComponent } from './court-sommons/court-sommons.component';
import { SearchWarrentComponent } from './search-warrent/search-warrent.component';
import { WantedPersonsComponent } from './wanted-persons/wanted-persons.component';
import { WarrentsListComponent } from './warrents-list/warrents-list.component';
import { SidebarComponentComponent } from '../sidebar-component/sidebar-component.component';

const routes: Routes = [
  { path : 'arrest-warrent', component : ArrestWarrentComponent },
  { path : 'bench-warrent', component : BenchWarrentComponent },
  { path : 'court-summons', component : CourtSommonsComponent },
  { path : 'search-warrent', component : SearchWarrentComponent },
  { path : 'wanted-persons', component : WantedPersonsComponent },
  { path : 'warrents-list', component : WarrentsListComponent },
  { path : '', component : SidebarComponentComponent },
  { path : '**', component : SidebarComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarrentModuleRoutingModule { }
