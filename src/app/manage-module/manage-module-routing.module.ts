import { AddOperatorComponent } from './add-operator/add-operator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourtComponent } from './add-court/add-court.component';
import { AddJailComponent } from './add-jail/add-jail.component';
import { AddJailerComponent } from './add-jailer/add-jailer.component';
import { AddJudgeComponent } from './add-judge/add-judge.component';
import { AddPoliceComponent } from './add-police/add-police.component';
import { AddPpComponent } from './add-pp/add-pp.component';
import { ManageSystemLogComponent } from './manage-system-log/manage-system-log.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { SettingComponent } from './setting/setting.component';
import { CommunityPoliceFormComponent } from './other-forms/community-police-form/community-police-form.component';

const routes: Routes = [
  { path : 'add-court', component : AddCourtComponent },
  { path : 'add-jail', component : AddJailComponent },
  { path : 'add-jailer', component : AddJailerComponent },
  { path : 'add-judge', component : AddJudgeComponent },
  { path : 'add-police', component : AddPoliceComponent },
  { path : 'add-pp', component : AddPpComponent },
  { path : 'add-operator', component : AddOperatorComponent },
  { path : 'manage-system-log', component : ManageSystemLogComponent },
  { path : 'send-email', component : SendEmailComponent },
  { path : 'setting', component : SettingComponent },
  { path : 'community-police-form', component : CommunityPoliceFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageModuleRoutingModule { }
