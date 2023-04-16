import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';

const routes: Routes = [
    //{ path: '', component: SideComponent, loadChildren:() =>import('./SideComponent/HomeModuleModule').then(x=>x.PublicModule) },
  // { path: 'nav', component: NavComponent},
  { path: '', component: DashComponent},
  { path: 'dashboard', component: DashComponent},
  { path: '**', component: DashComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
