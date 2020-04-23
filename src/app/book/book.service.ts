import {Book} from './book.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class BookService {
  private books = [
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
  ];

  getAll(): Observable<Book[]> {
    return new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next([...this.books]);
        subscriber.complete();
      }, 2000);
    });
  }
}
