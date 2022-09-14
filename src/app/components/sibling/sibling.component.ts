import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {
  title = "sibling works"
  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.titleSubject.subscribe(title => this.title = title)
  }

  changeTitle(title: string) {
    this.title = title
  }
}
