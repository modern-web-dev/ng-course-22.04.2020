import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Book} from '../book.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {BookService} from '../book.service';

@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<Book> {
  constructor(private readonly books: BookService,
              private readonly router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Book> {
    if (route.paramMap.has('id')) {
      const idAsString = route.paramMap.get('id');
      const id = +idAsString;
      if (!isNaN(id)) {
        return this.books.getOne(id);
      }
    }
    this.router.navigate(['/book']);
  }
}
