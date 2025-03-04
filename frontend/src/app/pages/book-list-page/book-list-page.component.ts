import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { RouterLink } from '@angular/router';
import { BooksService } from '../../services/books/books.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-book-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-list-page.component.html',
  styleUrl: './book-list-page.component.css',
})
export class BookListPageComponent implements OnInit {
  private readonly bookService = inject(BooksService);
  books: Book[] = [];

  ngOnInit() {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
  }

  deleteBook(id: number) {
    this.bookService
      .deleteBook(id)
      .pipe(take(1))
      .subscribe(
        () => {
          this.books = this.books.filter((book) => book.id !== id);
        },
        (error) => {
          console.error('Erreur lors de la suppression du livre:', error);
        }
      );
  }
}
