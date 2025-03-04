import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BooksService } from '../../services/books/books.service';

@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css',
})
export class CreateBookPageComponent {
  bookForm: FormGroup;

  constructor(private booksService: BooksService) {
    this.bookForm = new FormGroup({
      author: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(255),
      ]),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(35),
      ]),
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.booksService.createBook(this.bookForm.value).subscribe({
        next: () => {
          this.bookForm.reset();
        },
        error: (error) => {
          console.error('Erreur lors de la création du livre:', error);
        },
      });
    }
  }
}
