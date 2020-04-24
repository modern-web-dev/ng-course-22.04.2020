import {Book} from './book.model';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private idSeq = 1;

  private bookSubject = new BehaviorSubject<Book[]>(
    [
      {
        id: this.idSeq++,
        author: 'Joe',
        title: 'JS in action'
      },
      {
        id: this.idSeq++,
        author: 'Douglas Crockford',
        title: 'JavaScript. The Good Parts'
      }
    ]);

  readonly values$ = this.bookSubject.asObservable();

  saveOrUpdateBook(bookToUpdateOrSave: Book): void {
    const currentBooks = this.bookSubject.getValue();
    let updatedBooks;
    if (bookToUpdateOrSave.id != null) {
      updatedBooks = currentBooks.map(
        book => book.id === bookToUpdateOrSave.id ? bookToUpdateOrSave : book);
    } else {
      const newBook = {...bookToUpdateOrSave, id: this.idSeq++};
      updatedBooks = [...currentBooks, newBook];
    }

    this.bookSubject.next(updatedBooks);
  }

  getOne(id: number): Observable<Book> {
    const currentBooks = this.bookSubject.getValue();
    const foundBook = currentBooks.find(book => book.id === id);
    return foundBook ? of(foundBook).pipe(delay(3000)) : throwError(`Book with id ${id} not found`);
  }
}
