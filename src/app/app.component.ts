import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ScrolldivComponent } from './scrolldiv/scrolldiv.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  template: `
    <div id="main">
      <app-header></app-header>
      <div id="divBody">
        <app-details [selectedBooks]="selectedBooks" id="details"></app-details>
        <div id="reklama">
          <span>R</span>
          <span>E</span>
          <span>K</span>
          <span>L</span>
          <span>A</span>
          <span>M</span>
          <span>A</span>
        </div>
      </div>
      <app-scrolldiv
        [booksList]="booksList"
        (selectBooks)="selectBooks($event)"
      ></app-scrolldiv>

      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  booksList: any[] = [];
  selectedBooks: any;
  title = 'sprawdzian1';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.http
      .get<any[]>(
        'https://run.mocky.io/v3/d2802343-a2cb-4f3c-85da-525e57206045'
      )
      .subscribe((data) => {
        this.booksList = data;
        if (this.booksList.length > 0) {
          this.selectedBooks = this.booksList[0];
        }
      });
  }

  selectBooks(books: any): void {
    this.selectedBooks = books;
  }
}
