import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageModuleRoutingModule } from './manage-module-routing.module';
import { ManageModuleComponent } from './manage-module.component';
import { AddPoliceComponent } from './add-police/add-police.component';
import { AddCourtComponent } from './add-court/add-court.component';
import { AddJailerComponent } from './add-jailer/add-jailer.component';
import { AddJailComponent } from './add-jail/add-jail.component';
import { AddJudgeComponent } from './add-judge/add-judge.component';
import { AddPpComponent } from './add-pp/add-pp.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { ManageSystemLogComponent } from './manage-system-log/manage-system-log.component';
import { SettingComponent } from './setting/setting.component';
import { AddOperatorComponent } from './add-operator/add-operator.component';
import { OtherFormsComponent } from './other-forms/other-forms.component';
import { CommunityPoliceFormComponent } from './other-forms/community-police-form/community-police-form.component';


@NgModule({
  declarations: [
    ManageModuleComponent,
    AddPoliceComponent,
    AddCourtComponent,
    AddJailerComponent,
    AddJailComponent,
    AddJudgeComponent,
    AddPpComponent,
    SendEmailComponent,
    ManageSystemLogComponent,
    SettingComponent,
    AddOperatorComponent,
    OtherFormsComponent,
    CommunityPoliceFormComponent
  ],
  imports: [
    CommonModule,
    ManageModuleRoutingModule
  ]
})
export class ManageModuleModule { }
