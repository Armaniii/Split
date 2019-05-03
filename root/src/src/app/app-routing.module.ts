import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialGuard } from './guards/tutorial.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [TutorialGuard]
  },
  {
    path: 'todo',
    loadChildren: './todo/todo.module#TodoPageModule',
    canActivate: [AuthGuard, TutorialGuard]
  },
  {
    path: 'tutorial',
    loadChildren: './tutorial/tutorial.module#TutorialPageModule'
  },
  { path: 'fcm', loadChildren: './fcm/fcm.module#FcmPageModule',
  canActivate: [AuthGuard, TutorialGuard] },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule',
    canActivate: [AuthGuard, TutorialGuard] },
  { path: 'friends', loadChildren: './friends/friends.module#FriendsPageModule',
  canActivate: [AuthGuard, TutorialGuard] },
  { path: 'myfriends', loadChildren: './myfriends/myfriends.module#MyfriendsPageModule',
  canActivate: [AuthGuard, TutorialGuard] },
  { path: 'split', loadChildren: './split/split.module#SplitPageModule',
  canActivate: [AuthGuard, TutorialGuard] },
  { path: 'groups', loadChildren: './groups/groups.module#GroupsPageModule',
  canActivate: [AuthGuard, TutorialGuard] },
  { path: 'bill', loadChildren: './split/bill/bill.module#BillPageModule',
  canActivate: [AuthGuard, TutorialGuard] },
  { path: 'group-info', loadChildren: './group-info/group-info.module#GroupInfoPageModule',
  canActivate: [AuthGuard, TutorialGuard] },
  { path: 'convert', loadChildren: './convert/convert.module#ConvertPageModule',
  canActivate: [AuthGuard, TutorialGuard] },
  { path: 'group-bill', loadChildren: './split/group/group.module#GroupPageModule',
  canActivate: [AuthGuard, TutorialGuard] },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
