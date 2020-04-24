import {Component} from '@angular/core';
import {Book} from '../book.model';
import {BookService} from '../book.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent {
  books$: Observable<Book[]>;

  constructor(private readonly books: BookService) {
    this.books$ = this.books.getAll();
  }
}
