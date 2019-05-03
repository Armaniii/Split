import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.scss']
})
export class FriendFormComponent implements OnInit {

  constructor(
    private db: DbService,
    private auth: AuthService,
    public modal: ModalController,
    private fb: FormBuilder
  ) { }

  friendForm: FormGroup;

  friend;
  ngOnInit() {
    const data = {
      content: '',
      status: 'pending',
      ...this.friend
    };
    this.friendForm = this.fb.group({
      content: [
        data.content,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250)
        ]
      ],
      status: [data.status, [Validators.required]]
    });
  }

  async addFriend() {
    const uid = await this.auth.uid();
    const id = this.friend ? this.friend.id : '';
    const data = {
      uid,
      createdAt: Date.now(),
      ...this.friend,
      ...this.friendForm.value
    };

    this.db.updateAt(`friends/${id}`, data);
    this.modal.dismiss();
  }

}
