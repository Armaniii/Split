import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupsPage } from './groups.page';
import { GroupFormComponent } from './group-form/group-form.component';
import { GroupInfoComponent } from './group-info/group-info.component';

const routes: Routes = [
  {
    path: '',
    component: GroupsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroupsPage, GroupFormComponent, GroupInfoComponent],
  exports: [GroupsPage, GroupFormComponent],
  entryComponents: [GroupFormComponent, GroupInfoComponent]
})
export class GroupsPageModule {}
