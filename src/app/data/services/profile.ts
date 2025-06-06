import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Profile {
  http = inject(HttpClient)
  constructor() { }

  baseApiUrl = 'https://icherniakov.ru/yt-course/'

  getTestAccounts() {
    return this.http.get(`${this.baseApiUrl}account/test_accounts`)
  }
}
