import { Component, OnInit } from '@angular/core';
import { SplitService } from '../services/split.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.page.html',
  styleUrls: ['./convert.page.scss'],
})
export class ConvertPage implements OnInit {
  currency: any;
  fromCurrency: any;
  currencyData: any;
  amount: number;
  convertedAmount: any = 0;
  filteredCurrencies = [];
  constructor(  private splitservice: SplitService) {
    this.currencyData = [
      { text: 'USD', value: 'USD'},
      { text: 'PHP', value: 'PHP'},
      { text: 'EUR', value: 'EUR'},
      { text: 'JPY', value: 'JPY'},
      { text: 'GBP', value: 'GBP'},
      { text: 'MXN', value: 'MXN'},
      { text: 'KRW', value: 'KRW'},
      { text: 'INR', value: 'INR'},
      { text: 'HKD', value: 'HKD'},


    ];
    this.currency = { text: 'USD', value: 'USD'};
  }

  ngOnInit() {
  }


  convertCurrency(amount: number, fromCurrency: string, targetCurrency: string) {
    let converted: any  = 0;
    const input = fromCurrency + '_' + targetCurrency;
    this.splitservice.convert(amount, fromCurrency, targetCurrency)
    .subscribe((data: any) => {
      converted = data[input] * amount;
      this.convertedAmount = this.splitservice.decTrans(converted);

      console.log(this.convertedAmount);

      },
      err => {
        console.log('Error occured with converting.');

      });
  }
  searchuser(searchbar) {
    this.filteredCurrencies = this.currencyData;
    const q = searchbar.target.value;
    if (q.trim() === '') {
      return;
    }

    this.filteredCurrencies = this.currencyData.filter((v) => {
      if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    });
  }

}
