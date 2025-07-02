import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-event.component.html',
  styleUrl: './lifecycle-event.component.css'
})
export class LifecycleEventComponent implements OnInit,
  DoCheck, AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked, OnDestroy, OnChanges {

  firstName: string;

  // Used to initialize variables
  constructor() {
    console.log("constructor");
    this.firstName = "";
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }

}
