import {Component} from '@angular/core';
import {Book} from '../book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  readonly book: Book;

  constructor() {
    this.book = {
      author: 'Joe',
      title: 'JS in action'
    };
  }
}
