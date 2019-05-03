import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { switchMap, shareReplay } from 'rxjs/operators';
import { DbService } from '../../services/db.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-bill-activity',
  templateUrl: './bill-activity.component.html',
  styleUrls: ['./bill-activity.component.scss']
})
export class BillActivityComponent implements OnInit {
  testgroup;

  constructor(
    private auth: AuthService,
    private db: DbService,
    private dec: DecimalPipe
  ) { }

  ngOnInit() {
    this.testgroup = this.auth.user$.pipe(
      switchMap(user =>
        this.db.collection$('bills', ref =>
          ref
            .where('membersuids', 'array-contains', user.uid)
            .orderBy('createdAt', 'desc')
            .limit(6)
        )
      ),
      shareReplay(1)
    );
  }

  decTrans(num): any {
    return this.dec.transform(num, '1.2-2');
  }

}
