import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SplitService {

  constructor(private http: HttpClient,
    private dec: DecimalPipe) { }

  split(numOfPeople: number, amount: number) {
    const number = (amount / numOfPeople);
    return this.decTrans(number);
  }

  decTrans(num): any {
    return this.dec.transform(num, '1.2-2');
  }

  convert(amount: number, fromCurrency: string, targetCurrency: string) {

    const input = fromCurrency + '_' + targetCurrency;

    const convertAPI = 'https://free.currencyconverterapi.com/api/v6/convert?q=' + input + '&compact=ultra';
    return this.http.get<any>(convertAPI);

  }
}
