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

  constructor(private readonly books: BookService) {
    this.books$ = this.books.values$;
  }

  selectBook(book: Book) {
    this.selectedBook = book;
  }

  isBookSelected(book: Book): boolean {
    return this.selectedBook === book;
  }

  applyBookChanges(updatedBook: Book) {
    this.books.updateBook(updatedBook);
    this.selectedBook = updatedBook;
  }
}
