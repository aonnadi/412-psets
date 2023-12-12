import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: any[] = [];
  dataAvailable: boolean = false;

  constructor(private http: HttpClient) {}

  fetchData() {
    this.http.get<any[]>('http://localhost:3000/api/data').subscribe((response) => {
      this.items = response;

      // Set dataAvailable to true to display the data
      this.dataAvailable = true;
    });
  }
}
