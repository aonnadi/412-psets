// checked file for ps8

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from './search.service'; // Import your search service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: any[] = [];
  dataAvailable: boolean = false;
  searchResults: string[] = [];

  constructor(private http: HttpClient, private searchService: SearchService) {
  }

  fetchData() {
    this.http.get<any[]>('http://localhost:3000/api/data').subscribe((response) => {
      this.items = response;

      // Set dataAvailable to true to display the data
      this.dataAvailable = true;
    });
  }

  updateResults(results: string[]) {
    this.searchResults = results;
  }
}
