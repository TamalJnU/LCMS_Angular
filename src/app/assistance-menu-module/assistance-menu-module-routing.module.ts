import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NidVerificationComponent } from './nid-verification/nid-verification.component';
import { OperatorsComponent } from './operators/operators.component';
import { SidebarComponentComponent } from '../sidebar-component/sidebar-component.component';
import { YourProblemsAndSolutionsComponent } from './your-problems-and-solutions/your-problems-and-solutions.component';

const routes: Routes = [
  { path : 'nid-verification', component : NidVerificationComponent },
  { path : 'operators', component : OperatorsComponent },
  { path : 'user-manuals', component : NidVerificationComponent },
  { path : 'your-problems-and-solutions', component : YourProblemsAndSolutionsComponent },
  { path : '', component : SidebarComponentComponent },
  { path : '**', component : SidebarComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistanceMenuModuleRoutingModule { }
