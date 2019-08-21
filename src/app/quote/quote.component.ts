import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Pride comes before a fall', 'Paul', 'Ferdinand', new Date(2019, 10, 21), 0, 0),
    new Quote(2, 'YOLO', 'Ferdinand', 'Uknown', new Date(2019, 10, 14), 0, 0),
    new Quote(3, 'The tongue has power of life and death', 'Solomon', 'Ferdinand', new Date(2019, 10, 14), 0, 0),
  ];

 

  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.daysSince);
    this.quotes.push(quote);
  }
  toggleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  completeGoal(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  // tslint:disable-next-line: no-unused-expression
  
  constructor() { }

  ngOnInit() {
  }

}
