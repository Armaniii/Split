import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupInfoPage } from './group-info.page';
import { GroupBillComponent } from './group-bill/group-bill.component';
import { GroupBillFormComponent } from './group-bill-form/group-bill-form.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: GroupInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroupInfoPage, GroupBillComponent, GroupBillFormComponent],
  entryComponents: [GroupBillFormComponent]
})
export class GroupInfoPageModule {}
