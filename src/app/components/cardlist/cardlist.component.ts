import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { CardList } from 'src/app/models/cardlist';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardlistComponent implements OnInit {

  @Input('item') item: CardList;

  constructor() { }

  ngOnInit(): void { }

  toogle = (ev: any): void => ev.stopPropagation();

}
