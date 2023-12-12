// new file for ps8
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'YOUR_BACKEND_API_URL'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    // Modify this method to make the HTTP request to your backend API
    return this.http.get(`${this.apiUrl}/search?query=${query}`);
  }
}
