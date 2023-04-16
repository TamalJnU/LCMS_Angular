import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModuleComponent } from './home-module/home-module.component';
import { RegisterModuleComponent } from './register-module/register-module.component';
import { PersonMenuModuleComponent } from './person-menu-module/person-menu-module.component';
import { AssistanceMenuModuleComponent } from './assistance-menu-module/assistance-menu-module.component';
import { GeneralMenuModuleComponent } from './general-menu-module/general-menu-module.component';
import { ReportsModuleComponent } from './reports-module/reports-module.component';
import { SearchMenuModuleComponent } from './search-menu-module/search-menu-module.component';
import { UnacknowledgedBodyModuleComponent } from './unacknowledged-body-module/unacknowledged-body-module.component';
import { WarrentModuleComponent } from './warrent-module/warrent-module.component';

const routes: Routes = [

  {path: '', redirectTo:'/home', pathMatch:'full'},
  // { path: '', component: HomeModuleComponent, loadChildren:() =>import('./home-module/home-module.module').then(x=>x.HomeModuleModule) },
  { path: 'home', component: HomeModuleComponent, loadChildren:() =>import('./home-module/home-module.module').then(x=>x.HomeModuleModule) },
  { path: 'register', component: RegisterModuleComponent, loadChildren:() =>import('./register-module/register-module.module').then(x=>x.RegisterModuleModule) },
  { path: 'person', component: PersonMenuModuleComponent, loadChildren:() =>import('./person-menu-module/person-menu-module.module').then(x=>x.PersonMenuModuleModule) },
  { path: 'assistance', component: AssistanceMenuModuleComponent, loadChildren:() =>import('./assistance-menu-module/assistance-menu-module.module').then(x=>x.AssistanceMenuModuleModule) },
  { path: 'general', component: GeneralMenuModuleComponent, loadChildren:() =>import('./general-menu-module/general-menu-module.module').then(x=>x.GeneralMenuModuleModule) },
  { path: 'reports', component: ReportsModuleComponent, loadChildren:() =>import('./reports-module/reports-module.module').then(x=>x.ReportsModuleModule) },
  { path: 'search', component: SearchMenuModuleComponent, loadChildren:() =>import('./search-menu-module/search-menu-module.module').then(x=>x.SearchMenuModuleModule) },
  { path: 'unacknowledged-body', component: UnacknowledgedBodyModuleComponent, loadChildren:() =>import('./unacknowledged-body-module/unacknowledged-body-module.module').then(x=>x.UnacknowledgedBodyModuleModule) },
  { path: 'warrent', component: WarrentModuleComponent, loadChildren:() =>import('./warrent-module/warrent-module.module').then(x=>x.WarrentModuleModule) },
  { path: '**', component: HomeModuleComponent, loadChildren:() =>import('./home-module/home-module.module').then(x=>x.HomeModuleModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
