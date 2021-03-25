import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {

  private REST_API_SERVER = 'http://localhost:8080/api/comparisons/'

  constructor(
    private httpClient: HttpClient
  ) {

  }

  public getAll() {
    return this.httpClient.get(this.REST_API_SERVER + 'all')
  }
}
