import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scrolldiv',
  template: `
    <div class="scrolldiv">
      <ul>
        <li *ngFor="let books of booksList" (click)="selectBooks.emit(books)">
          {{ books.author }}<br />
          ({{ books.year_of_publish }})
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./scrolldiv.component.css'],
})
export class ScrolldivComponent {
  @Input() booksList: any[];
  @Output() selectBooks: EventEmitter<any> = new EventEmitter();
}
