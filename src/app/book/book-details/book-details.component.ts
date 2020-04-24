import {Component} from '@angular/core';
import {Book} from '../book.model';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, pluck, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  book$: Observable<Book>;
  currentBookId: number;

  constructor(private readonly books: BookService,
              private readonly router: Router,
              route: ActivatedRoute) {
    this.book$ = route.data
      .pipe(
        pluck('book'),
        map(book => book || {author: '', title: ''}),
        tap(book => this.currentBookId = book.id)
      );
  }

  save(event: Event) {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const authorElement = formElement.querySelector<HTMLInputElement>('#author');
    const titleElement = formElement.querySelector<HTMLInputElement>('#title');

    this.books.saveOrUpdateBook({
      id: this.currentBookId,
      author: authorElement.value,
      title: titleElement.value
    });

    this.router.navigate(['/books']);
  }
}
