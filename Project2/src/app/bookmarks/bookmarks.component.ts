import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarks;
  constructor() { }

  ngOnInit() {
    this.bookmarks = [
      {
      text: 'Favorite Sites'
     },
     {
       text: 'www.apple.com'
     }

    ];
  }

}
