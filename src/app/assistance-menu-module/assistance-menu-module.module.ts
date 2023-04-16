import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistanceMenuModuleRoutingModule } from './assistance-menu-module-routing.module';
import { AssistanceMenuModuleComponent } from './assistance-menu-module.component';
import { YourProblemsAndSolutionsComponent } from './your-problems-and-solutions/your-problems-and-solutions.component';
import { UserManualsComponent } from './user-manuals/user-manuals.component';
import { NidVerificationComponent } from './nid-verification/nid-verification.component';
import { OperatorsComponent } from './operators/operators.component';


@NgModule({
  declarations: [
    AssistanceMenuModuleComponent,
    YourProblemsAndSolutionsComponent,
    UserManualsComponent,
    NidVerificationComponent,
    OperatorsComponent
  ],
  imports: [
    CommonModule,
    AssistanceMenuModuleRoutingModule
  ]
})
export class AssistanceMenuModuleModule { }
