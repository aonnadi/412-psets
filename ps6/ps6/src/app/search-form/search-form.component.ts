// new file for ps8
import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  term: string = '';

  constructor(private searchService: SearchService) {}

  search() {
    if (this.term.length >= 2) {
      this.searchService.search(this.term).subscribe((results: string[]) => {
        // Update the results in the parent component (app component)
        this.searchService.updateResults(results);
      });
    }
  }
}
