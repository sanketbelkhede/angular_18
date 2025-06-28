import { Component } from '@angular/core';
import {AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {interval, map, Observable} from "rxjs";

import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import {NaPipe} from "../../pipes/na.pipe";

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    JsonPipe,
    AsyncPipe,
    NaPipe
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName: string = 'Angular';
  sentense: string = 'this is a demo session';
  currentDate: Date = new Date();

  student: any = {
    name: 'Chetan',
    city: 'Pune',
    empId: 123,
    state: null,
  }

  currentTime: Observable<Date> = new Observable<Date>;

  // constructor() {
  //     this.currentTime = interval(1000).pipe(map(() => new Date()))
  // }

  // interval does not work in SSR
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // client-only code like setInterval, canvas, video, etc.
      this.currentTime = interval(1000).pipe(map(()=> new Date()))
    }
  }
}
