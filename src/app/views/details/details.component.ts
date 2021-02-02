import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItemsService } from 'src/app/services/items.service';
import { CardBox } from 'src/app/models/cardbox';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  public item: CardBox = new CardBox();

  constructor(
    private readonly navCtrl: NavController,
    private readonly router: ActivatedRoute,
    public itemsService: ItemsService,
  ) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.item = this.itemsService.findItem(parseInt(id));
  }

  back = (): Promise<boolean> => this.navCtrl.navigateBack('/home');
}
