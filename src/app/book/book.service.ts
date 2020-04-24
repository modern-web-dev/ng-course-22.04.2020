import {Book} from './book.model';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {delay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private readonly http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>('api/books');
  }

  saveOrUpdateBook(bookToUpdateOrSave: Book): Observable<Book> {
    if (bookToUpdateOrSave.id != null) {
      return this.http.put<Book>(`api/books/${bookToUpdateOrSave.id}`, {...bookToUpdateOrSave});
    } else {
      return this.http.post<Book>('api/books', {...bookToUpdateOrSave});
    }
  }

  getOne(id: number): Observable<Book> {
    return this.http.get<Book>(`api/books/${id}`);
  }
}
