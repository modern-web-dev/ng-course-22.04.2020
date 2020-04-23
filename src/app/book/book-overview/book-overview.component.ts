import {Component} from '@angular/core';
import {Book} from '../book.model';
import {BookService} from '../book.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss'],
  providers: [BookService]
})
export class BookOverviewComponent {
  books$: Observable<Book[]>;
  selectedBook: Book | null = null;

  constructor(books: BookService) {
    this.books$ = books.getAll();
  }

  selectBook(book: Book) {
    this.selectedBook = book;
  }

  isBookSelected(book: Book): boolean {
    return this.selectedBook === book;
  }

  applyBookChanges(updatedBook: Book) {
    // this.books = this.books.map(
    //   book => book.id === updatedBook.id ? updatedBook : book);
    this.selectedBook = updatedBook;
  }
}
