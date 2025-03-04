import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, map, tap, throwError } from 'rxjs';
import { Book } from '../../models/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private readonly API_URL = 'http://localhost:5000';

  constructor(private readonly http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL + `/books`);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(this.API_URL + `/books/${id}`).pipe(
      catchError((err) => {
        throw new Error('Une erreur est survenue: ', err);
      })
    );
  }

  createBook(book: Book): Observable<{ id: number }> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http
      .post<{ id: number }>(this.API_URL + `/books`, book, { headers })
      .pipe(
        map((data) => ({
          id: data.id,
        })),
        tap((data) => console.log(data)),
        catchError((error) => {
          console.error('Erreur lors de la création du livre:', error);
          return throwError(
            () => new Error('Erreur lors de la création du livre')
          );
        })
      );
  }

  deleteBook(id: number): Observable<{ id: number }> {
    return this.http.delete<{ id: number }>(this.API_URL + `/books/${id}`).pipe(
      catchError((err) => {
        throw new Error('Une erreur est survenue: ', err);
      })
    );
  }
}
