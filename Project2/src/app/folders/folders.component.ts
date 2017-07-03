import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css',
              '../../../node_modules/font-awesome/css/font-awesome.min.css']
})
export class FoldersComponent implements OnInit {
  folders;
  bookmarks;
  name;
  icon = "fa fa-link"
  constructor() { }

  ngOnInit() {
    this.folders = [
      {
        name: 'Favorites',
        icon: 'fa fa-star',
        bookmarks: ["Bookmark1", "Bookmark2", "Bookmark3"]
      }
    ];
  }

  addFolder() {
    this.folders.push({
      name: this.name,
      icon: this.icon,
      bookmarks: this.bookmarks
    })
  }

  clickedTheScreen(e) {
    console.log(e);
  }

}
