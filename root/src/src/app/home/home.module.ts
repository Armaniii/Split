import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { SplitFormComponent } from '../split/split-form/split-form.component';
import { AddFriendComponent } from '../shared/myfriends/add-friend/add-friend.component';
import { CreateGroupComponent } from '../shared/groups/create-group/create-group.component';
// import { GroupsPageModule} from '../groups/groups.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage],
  entryComponents: [AddFriendComponent, CreateGroupComponent]
})
export class HomePageModule {}
