import {Component} from '@angular/core';
import {Book} from '../book.model';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent {
  books: Book[];
  selectedBook: Book | null = null;

  constructor() {
    this.books = [
      {
        author: 'Joe',
        title: 'JS in action'
      },
      {
        author: 'Douglas Crockford',
        title: 'JavaScript. The Good Parts'
      }
    ];
  }

  selectBook(book: Book) {
    this.selectedBook = book;
  }

  isBookSelected(book: Book): boolean {
    return this.selectedBook === book;
  }
}
