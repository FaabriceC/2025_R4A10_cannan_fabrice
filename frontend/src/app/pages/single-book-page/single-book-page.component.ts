import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { BooksService } from '../../services/books/books.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-single-book-page',
  standalone: true,
  imports: [],
  templateUrl: './single-book-page.component.html',
  styleUrl: './single-book-page.component.css',
})
export class SingleBookPageComponent implements OnInit {
  book?: Book;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookService: BooksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService
      .getBook(id)
      .pipe(take(1))
      .subscribe((data) => {
        this.book = data;
      });
  }

  deleteBook(id: number) {
    this.bookService
      .deleteBook(id)
      .pipe(take(1))
      .subscribe(
        () => {
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Erreur lors de la suppression du livre:', error);
        }
      );
  }
}
