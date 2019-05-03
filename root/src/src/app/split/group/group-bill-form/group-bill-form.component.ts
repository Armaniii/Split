import { Component, OnInit } from '@angular/core';
import { SplitService } from '../../../services/split.service';
import { DbService } from '../../../services/db.service';
import { AuthService } from '../../../services/auth.service';
import { ModalController, AlertController, NavParams, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-bill-form',
  templateUrl: './group-bill-form.component.html',
  styleUrls: ['./group-bill-form.component.scss']
})
export class GroupBillFormComponent implements OnInit {

  constructor(
    private splitservice: SplitService,
    private db: DbService,
    private auth: AuthService,
    private modal: ModalController,
    private afs: AngularFirestore,
    private alertController: AlertController,
    private navParams: NavParams,
    public navCtrl: NavController,
    private router: Router
  ) { }
  item;
  unequal;
  percentage;
  shares;
  adjustment;
  place;
  members = this.navParams.get('checkedMembers');
  amount = this.navParams.get('amount');
  indOwe = (this.amount / this.members.length);
  disIndOwe = this.splitservice.decTrans(this.indOwe);
  membersAmount = [];
  finalSplitValues = [];
  unequalAmount;
  splitType;
  remaining = 0;
  public percentVisible = false;
  public unequalVisible = false;
  public sharesVisible = false;
  public adjustmentVisible = false;
  public equalVisible = false;

  public errorPercVisible = false;
  public errorunEqualVisible = false;
  public errorAdjVisible = false;
  public errorSharesVisible = false;
  public isenabled = false;
  public isRemaining = false;
  public perRemaining = false;





  ngOnInit() {
   console.log(this.members);
  }

  updateEqual() {
    this.equalVisible = true;
  }

  public onButtonClick(item?: any) {
    console.log(item);
    if ( item === 'equally') {
      this.remaining = 0;
      this.percentVisible = false;
      this.errorunEqualVisible = false;
      this.sharesVisible = false;
      this.adjustmentVisible = false;
      this.equalVisible = true;

      this.unequalVisible = false;
      this.isenabled = true;
      this.isRemaining = false;
      this.perRemaining = false;

    }

    if ( item === 'by percentages') {
      this.remaining = 0;
      this.percentVisible = true;
      this.errorunEqualVisible = false;
      this.sharesVisible = false;
      this.adjustmentVisible = false;
      this.perRemaining = true;
      this.unequalVisible = false;
      this.isRemaining = false;

    }

    if ( item === 'unequally' ) {
      this.remaining = 0;
      this.percentVisible = false;
      this.unequalVisible = true;
      this.errorunEqualVisible = true;
      this.sharesVisible = false;
      this.adjustmentVisible = false;
      this.errorPercVisible = false;
      this.isRemaining = true;
      this.perRemaining = false;

    }
    if ( item === 'by adjustment') {
      this.remaining = 0;
      this.percentVisible = false;
      this.errorunEqualVisible = false;
      this.sharesVisible = false;
      this.adjustmentVisible = true;
      this.isRemaining = true;
      this.unequalVisible = false;
      this.unequalVisible = false;
      this.perRemaining = false;
      this.errorPercVisible = false;

    }
    if ( item === 'by shares') {
      this.remaining = 0;
      this.percentVisible = false;
      this.errorunEqualVisible = false;
      this.sharesVisible = true;
      this.adjustmentVisible = false;
      this.isRemaining = false;
      this.unequalVisible = false;
      this.perRemaining = false;
      this.errorPercVisible = false;


    }
  }

  getSum(total, num) {
    return total + Math.round(num);
  }

  checkValidPercentage(check?: any) {
    this.perRemaining = true;
    this.isRemaining = false;
    let sum = 0;
    sum = this.membersAmount.reduce(this.getSum, 0);
    this.remaining = 100 - sum;
    if ( sum > 100) {
      this.errorPercVisible = true;
      this.isenabled = false;

    } else if ( sum < 100) {
      this.errorPercVisible = true;
      this.isenabled = false;

    } else {
      this.errorPercVisible = false;
      this.isenabled = true;
      this.isRemaining = false;
    }
  }

  checkValidUnequal(check?: any) {
    const totAmount = this.amount;
    this.isRemaining = true;
    let sum = 0;
    sum = this.membersAmount.reduce(this.getSum, 0);
    this.remaining = this.amount - sum;
    if ( sum > totAmount) {
      this.errorunEqualVisible = true;
      this.isenabled = false;

    } else if ( sum < totAmount) {
      this.errorunEqualVisible = true;
      this.isenabled = false;

    } else {
      this.errorunEqualVisible = false;
      this.isenabled = true;
      this.isRemaining = false;
    }
  }

  checkValidShares(check?: any) {
    this.isRemaining = true;
    const maxShares = this.members.length;
    let sum = 0;
    sum = this.membersAmount.reduce(this.getSum, 0);
    this.remaining = this.amount - sum;
    if (sum > maxShares) {
      this.isenabled = true;
    } else if ( sum < maxShares) {
      // this.errorSharesVisible = false;
      this.isenabled = true;
    } else {
      this.isenabled = false;
    }
  }
checkValidAdjustment(check?: any) {
  this.isRemaining = true;
      const max = this.amount;
      let sum = 0;
      sum = this.membersAmount.reduce(this.getSum, 0);
      this.remaining = this.amount - sum;
      if ( sum > max) {
        this.errorAdjVisible = true;
        this.isenabled = false;
        this.isRemaining = true;
      } else {
        this.errorAdjVisible = false;
        this.isenabled = true;
      }
  }
submitInfo() {
  if ( this.equalVisible === true) {
    const newArray = [];
    // this.disIndOwe = this.splitservice.decTrans(this.indOwe);
    console.log(this.members.length);
    for ( let i = 0; i < this.members.length; i++)  {
      newArray.push(this.indOwe);
    }
    const data = newArray;
    this.splitType = 'Equally';
    const splitType = this.splitType;
    this.modal.dismiss({data, splitType});
  }
  // submitting percent
  if ( this.percentVisible === true) {
    for ( let k = 0; k < this.membersAmount.length; k++) {
     const curVal = this.amount * (this.membersAmount[k] * 0.01);
     this.finalSplitValues.push(this.splitservice.decTrans(curVal));
    }
    const data = this.finalSplitValues;
    this.splitType = 'By Percentage';
    const splitType = this.splitType;

    this.modal.dismiss({data, splitType});
  } else if ( this.unequalVisible === true) {// submit equal
      const data = this.membersAmount;
      this.splitType = 'Unequally';
      const splitType = this.splitType;
      this.modal.dismiss({data, splitType});
   }

   // submitting shares
  if ( this.sharesVisible === true) {
    const sum = this.membersAmount.reduce(this.getSum, 0);
    const indOwe = this.amount / this.membersAmount.length;
    const totAmount = this.amount;
    for (let i = 0; i < this.membersAmount.length; i++) {
      const curVal = (this.membersAmount[i] / sum) * totAmount;
      this.finalSplitValues.push(this.splitservice.decTrans(curVal));
    }

    const data = this.finalSplitValues;
    this.splitType = 'By Shares';
    const splitType = this.splitType;

    this.modal.dismiss({data, splitType});
  }

  // submitting adjustment
 if (this.adjustmentVisible === true) {
  // How much each individual owes equally
  const numMembers = this.membersAmount.length;
  console.log(numMembers);
  const indAmount = this.amount / numMembers;
  const tempArray = [];
  for (let k = 0; k < numMembers; k++) {
    tempArray.push(indAmount);
  }
  console.log(tempArray);
  for (let i = 0; i < numMembers; i++) {
    const split2 = this.membersAmount[i] / numMembers;
    const temp = tempArray[i] - (this.splitservice.decTrans(split2));
    console.log('actual temp" + temp');
    console.log('members amount ' + this.membersAmount[i]);
    tempArray[i] = temp + this.membersAmount[i];
    console.log('first: ' + tempArray[i]);

    for (let j = 0; j < numMembers; j++) {
      if (j !== i) {
        const split = this.membersAmount[i] / numMembers;
        console.log('inner' + 'i = ' + i + ' j = ' + j);
        tempArray[j] = tempArray[j] - (this.splitservice.decTrans(split));
        console.log('temp: ' + tempArray[i]);
      }
    }
  }
  for (let l = 0; l < tempArray.length; l++) {
    tempArray[l] = this.splitservice.decTrans(tempArray[l]);
  }
  const data = tempArray;
  this.splitType = 'By Adjustment';
  const splitType = this.splitType;

  this.modal.dismiss({data, splitType});
 }
}

pushPage() {
  this.modal.dismiss();
  // this.router.navigate(['']);
}

}
