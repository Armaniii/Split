import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../shared/login/login.component';
import { IonicModule } from '@ionic/angular';

import { ProfileComponent } from './profile/profile.component';
import { DeviceComponent } from './device/device.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillActivityComponent } from './bill-activity/bill-activity.component';
import { GroupsComponent } from './groups/groups.component';
import { MyfriendsComponent } from './myfriends/myfriends.component';
import { CreateGroupComponent } from './groups/create-group/create-group.component';
import { GroupBalanceComponent } from './group-balance/group-balance.component';
import { GroupTransactionComponent } from './group-transaction/group-transaction.component';
import { AddFriendComponent } from './myfriends/add-friend/add-friend.component';

@NgModule({
  entryComponents: [CreateGroupComponent, AddFriendComponent],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule, ],
  declarations: [LoginComponent, ProfileComponent, DeviceComponent, BillActivityComponent, GroupsComponent, MyfriendsComponent, CreateGroupComponent, GroupBalanceComponent, GroupTransactionComponent, AddFriendComponent],
  exports: [LoginComponent, ProfileComponent, DeviceComponent, BillActivityComponent, GroupsComponent, MyfriendsComponent, CreateGroupComponent, GroupBalanceComponent, GroupTransactionComponent, AddFriendComponent]
})
export class SharedModule {}
