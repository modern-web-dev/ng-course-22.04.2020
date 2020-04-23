import {Book} from './book.model';
import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class BookService {
  private bookSubject = new BehaviorSubject<Book[]>(
    [
      {
        id: 1,
        author: 'Joe',
        title: 'JS in action'
      },
      {
        id: 2,
        author: 'Douglas Crockford',
        title: 'JavaScript. The Good Parts'
      }
    ]);

  readonly values$ = this.bookSubject.asObservable();

  updateBook(updatedBook: Book): void {
    const currentBooks = this.bookSubject.getValue();
    this.bookSubject.next(currentBooks.map(
      book => book.id === updatedBook.id ? updatedBook : book));
  }
}
