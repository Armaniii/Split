import { Component, OnInit } from '@angular/core';
import { shareReplay, switchMap } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-group-transaction',
  templateUrl: './group-transaction.component.html',
  styleUrls: ['./group-transaction.component.scss']
})
export class GroupTransactionComponent implements OnInit {

  id: string;
  testGroups;
  docData$;
  testgroup;
  segBool = true;
  newData;
  segType;
  eachMemberOwes;
  amount;
  members;
  splitType;
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private db: DbService,
    private modal: ModalController,
    private dec: DecimalPipe
  ) {}
  docdata;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    const path = 'groups/' + this.id;
    this.docData$ = this.db.doc$(path);
    this.testgroup = this.auth.user$.pipe(
      switchMap(user =>
        this.db.collection$('bills', ref =>
          ref
          .where('createdbyuid', '==', this.id)
          .orderBy('createdAt', 'desc')
        )
      ),
      shareReplay(1)
    );
  }

  decTrans(num): any {
    return this.dec.transform(num, '1.2-2');
  }


}
