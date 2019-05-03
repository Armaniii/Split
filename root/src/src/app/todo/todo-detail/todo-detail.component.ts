import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../../services/db.service';
import { BehaviorSubject } from 'rxjs';
import { switchMap, map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { query } from '@angular/core/src/render3/query';
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todo$;
  todos;
  filtered;
  content;

  filter = new BehaviorSubject(null);
  constructor(private route: ActivatedRoute,
   private db: DbService, public modal: ModalController,
    public auth: AuthService, private database: AngularFirestore) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.todo$ = this.db.doc$(`todos/${id}`);
    const path = '/todos/' + id;
    this.todos = this.auth.user$.pipe(
      switchMap(user =>
        this.db.collection$('bills', ref =>
          ref
            .where('uid', '==', user.uid)
            .orderBy('createdAt', 'desc')
            .limit(25)
        )
      ),
      shareReplay(1)
    );
    this.getContent(id);
    console.log(this.todos);
  }

  getContent(id) {
      const userId = this.auth.getUserData().uid;
      const path = 'todos/' + id;
      const promise = new Promise((resolve, reject) => {
        this.database.collection('/todos').ref.get().then((q_snap) =>
        q_snap.forEach((doc) => this.check_id(doc, id)));
        resolve(this.content);
      });
      return promise;
  }

  check_id(doc, id2) {
    if (doc.id === id2) {
      return this.content = doc.data().content;
    } else {
      return;
    }
  }
}
