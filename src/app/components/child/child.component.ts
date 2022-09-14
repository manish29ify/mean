import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterContentInit, OnChanges, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  _compName = "Child"

  className = "Child Class"
  get compName(): string {
    return this._compName;
  }
  @Input("compName") set compName(val: string) {
    this._compName = val
  }
  @ContentChild("middlename") middlename: ElementRef | undefined;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child ngOnChanges", changes);
  }

  ngOnInit(): void {
    console.log("Child ngOnInit");
  }

  ngDoCheck(): void {
    console.log("Child ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log('=====ngAfterContentInit=========');
    console.log("middlename", this.middlename);
    console.log('=====ngAfterContentInit=========');
  }


  ngAfterContentChecked() {
    console.log("Child ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("Child AfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("Child AfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("Child OnDestroy");
  }

}
