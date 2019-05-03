import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SplitPage } from './split.page';
import { SplitFormComponent } from './split-form/split-form.component';
import { SplitInfoComponent } from './split-info/split-info.component';


const routes: Routes = [
  {
    path: '',
    component: SplitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [SplitPage, SplitFormComponent, SplitInfoComponent],
  entryComponents: [SplitFormComponent, SplitInfoComponent]
})
export class SplitPageModule {}
