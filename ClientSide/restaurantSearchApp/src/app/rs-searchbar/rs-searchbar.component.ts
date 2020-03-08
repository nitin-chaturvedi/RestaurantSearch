import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rs-searchbar',
  templateUrl: './rs-searchbar.component.html',
  styleUrls: ['./rs-searchbar.component.scss']
})
export class RsSearchbarComponent implements OnInit {


  @Output()
  searchClicked: EventEmitter<any> = new EventEmitter();

  searchVal

  constructor() { }

  ngOnInit() {
  }

  searchBtnClicked() {
    this.searchClicked.emit(this.searchVal);
  }

}
