import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileCard} from './common-ui/profile-card/profile-card';
import {Profile} from './data/services/profile';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProfileCard,
    JsonPipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title: string = 'tik-talk';

  profileService: Profile = inject(Profile)
  profiles: Object = []

  constructor() {
    this.profileService.getTestAccounts().subscribe(val =>  {
     this.profiles = val
    })
  }
}
