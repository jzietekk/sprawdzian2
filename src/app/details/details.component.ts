import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  template: `
    <div class="details">
      <div *ngIf="selectedBooks">
        <h3>Auhor: {{ selectedBooks.author }}</h3>
        <h3>Year of publication: {{ selectedBooks.year_of_publish }}</h3>
        <h3>Opis:</h3>
        <p>{{ selectedBooks.description }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() selectedBooks: any;
}
