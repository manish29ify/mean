import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterContentInit, AfterViewChecked, ChangeDetectorRef, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { NameService } from '../../services/name.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, OnDestroy {
  @ViewChild(ChildComponent) child: ChildComponent | any;
  @ViewChildren("content") content: QueryList<any> | undefined
  @ViewChild("sibTitle") sibTitle: ElementRef | undefined;



  compName = 'My Child'
  myContext = { $implicit: 'World', name: 'Manish', localSk: 'Svet' };
  showChild = true;




  constructor(private nameService: NameService, private cdRef: ChangeDetectorRef, private titleService: TitleService) {
    // console.log('====================================');
    console.log(nameService.name);
    // this.nameService.getTodos().subscribe({
    //   next: (data) => console.log(data)

    // })
    // console.log('====================================');
  }

  ngOnInit(): void {
    console.log("parent ngOnInit", this.child);
  }

  ngAfterContentInit(): void {
    console.log("parent AfterContentInit", this.child);
  }

  ngAfterViewInit(): void {
    this.child.className = "changed from parent ngAfterViewInit"
    console.log("parent AfterViewInit", this.child);
    console.log("parent AfterViewInit", this.content);

    this.sibTitle?.nativeElement.addEventListener("click", () => {
      this.titleService.changeTitle("Title change from sibling")
    })

    this.cdRef.detectChanges();
  }
  ngAfterViewChecked(): void {

    // this.child.className = "changed from ngAfterViewChecked"
    // console.log("parent AfterViewChecked", this.child);
    // this.cdRef.detectChanges();
  }


  ngOnDestroy(): void {
    console.log("parent OnDestroy");
  }

}
