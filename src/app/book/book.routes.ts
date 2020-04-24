import {BookOverviewComponent} from './book-overview/book-overview.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookResolver} from './book-details/book.resolver';

export const bookRoutes = [
  {
    path: 'books',
    component: BookOverviewComponent
  },
  {
    path: 'book',
    component: BookDetailsComponent
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent,
    resolve: {
      book: BookResolver
    }
  }
];
