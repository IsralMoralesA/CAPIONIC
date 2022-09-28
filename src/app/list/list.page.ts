import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  radio: string;
  list: string[] = ["Pokemon", "Megan", "The legend", "Pac-man", "Super mario"];
  columns: string[] = ["Col 1", "Col 2", "Col 3", "Col 4"];

  constructor() { }

  ngOnInit() {
  }

}
