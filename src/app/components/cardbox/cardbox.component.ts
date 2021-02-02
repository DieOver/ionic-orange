import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { CardBox } from 'src/app/models/cardbox';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cardbox',
  templateUrl: './cardbox.component.html',
  styleUrls: ['./cardbox.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardboxComponent implements OnInit {

  @Input('item') item: CardBox;

  constructor(
    private readonly navCtrl: NavController,
  ) { }

  ngOnInit(): void { }

  goToDetails = (): void => {
    this.navCtrl.navigateForward(`/details/${this.item.id}`);
  }

  toogle = (ev: any): void => ev.stopPropagation();

}
