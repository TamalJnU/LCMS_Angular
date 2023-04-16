import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LostPersonsComponent } from './lost-persons/lost-persons.component';
import { UnacknowledgedBodyComponent } from './unacknowledged-body/unacknowledged-body.component';
import { SidebarComponentComponent } from '../sidebar-component/sidebar-component.component';

const routes: Routes = [
  { path : 'lost-persons', component : LostPersonsComponent },
  { path : 'unacknowledged-body', component : UnacknowledgedBodyComponent },
  { path : '', component : SidebarComponentComponent },
  { path : '**', component : SidebarComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnacknowledgedBodyModuleRoutingModule { }
