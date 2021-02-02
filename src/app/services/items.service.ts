import { Injectable } from '@angular/core';
import { CardBox } from '../models/cardbox';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private static items: CardBox[] = [];
  get Items() { return ItemsService.items; }
  set Items(items) { ItemsService.items = items; }

  constructor() {
    this.Items = [
      {
        id: 1,
        title: 'Living Room',
        members: 3,
        devices: 4,
        active: true,
        items: [
          {
            id: 1,
            icon: 'icon-map2',
            name: 'Lamp',
            desc: '65% Brightness',
            active: true
          }, {
            id: 2,
            icon: 'icon-display',
            name: 'TV',
            desc: '37% Volume',
            active: false
          }, {
            id: 3,
            icon: 'icon-ic_energy',
            name: 'Air Conditioner',
            desc: '24˚C Temperature',
            active: true
          }, {
            id: 1,
            icon: 'icon-map2',
            name: 'Lamp',
            desc: '65% Brightness',
            active: true
          }, {
            id: 2,
            icon: 'icon-display',
            name: 'TV',
            desc: '37% Volume',
            active: false
          }, {
            id: 3,
            icon: 'icon-ic_energy',
            name: 'Air Conditioner',
            desc: '24˚C Temperature',
            active: true
          }, {
            id: 1,
            icon: 'icon-map2',
            name: 'Lamp',
            desc: '65% Brightness',
            active: true
          }, {
            id: 2,
            icon: 'icon-display',
            name: 'TV',
            desc: '37% Volume',
            active: false
          }, {
            id: 3,
            icon: 'icon-ic_energy',
            name: 'Air Conditioner',
            desc: '24˚C Temperature',
            active: true
          }
        ]
      },
      {
        id: 2,
        title: 'Bed Room',
        members: 3,
        devices: 5,
        active: true,
        items: [
          {
            id: 1,
            icon: 'icon-map2',
            name: 'Lamp',
            desc: '65% Brightness',
            active: true
          }, {
            id: 2,
            icon: 'icon-display',
            name: 'TV',
            desc: '37% Volume',
            active: false
          }, {
            id: 3,
            icon: 'icon-ic_energy',
            name: 'Air Conditioner',
            desc: '24˚C Temperature',
            active: true
          }
        ]
      },
      {
        id: 3,
        title: 'Guest Room',
        members: 2,
        devices: 3,
        active: true,
        items: [
          {
            id: 1,
            icon: 'icon-map2',
            name: 'Lamp',
            desc: '65% Brightness',
            active: true
          }, {
            id: 2,
            icon: 'icon-display',
            name: 'TV',
            desc: '37% Volume',
            active: false
          }, {
            id: 3,
            icon: 'icon-ic_energy',
            name: 'Air Conditioner',
            desc: '24˚C Temperature',
            active: true
          }
        ]
      },
      {
        id: 4,
        title: 'Kitchen',
        members: 2,
        devices: 4,
        active: true,
        items: [
          {
            id: 1,
            icon: 'icon-map2',
            name: 'Lamp',
            desc: '65% Brightness',
            active: true
          }, {
            id: 2,
            icon: 'icon-display',
            name: 'TV',
            desc: '37% Volume',
            active: false
          }, {
            id: 3,
            icon: 'icon-ic_energy',
            name: 'Air Conditioner',
            desc: '24˚C Temperature',
            active: true
          }
        ]
      },
      {
        id: 5,
        title: 'Kids Room',
        members: 1,
        devices: 4,
        active: true,
        items: [
          {
            id: 1,
            icon: 'icon-map2',
            name: 'Lamp',
            desc: '65% Brightness',
            active: true
          }, {
            id: 2,
            icon: 'icon-display',
            name: 'TV',
            desc: '37% Volume',
            active: false
          }, {
            id: 3,
            icon: 'icon-ic_energy',
            name: 'Air Conditioner',
            desc: '24˚C Temperature',
            active: true
          }
        ]
      },
      {
        id: 6,
        title: 'Balcony Room',
        members: 4,
        devices: 2,
        active: true,
        items: [
          {
            id: 1,
            icon: 'icon-map2',
            name: 'Lamp',
            desc: '65% Brightness',
            active: true
          }, {
            id: 2,
            icon: 'icon-display',
            name: 'TV',
            desc: '37% Volume',
            active: false
          }, {
            id: 3,
            icon: 'icon-ic_energy',
            name: 'Air Conditioner',
            desc: '24˚C Temperature',
            active: true
          }
        ]
      }
    ];
  }

  public findItem = (id: number): CardBox => this.Items.find((item) => item.id === id);

}
