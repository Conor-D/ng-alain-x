import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Injectable({
  providedIn: 'root'
})
export class LaneService {

  constructor(
    private http: _HttpClient
  ) { }

  getLanes() {
    return this.http.get('/lanes');
  }
}
