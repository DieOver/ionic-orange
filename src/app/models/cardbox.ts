import { CardList } from './cardlist';

export class CardBox {
    public id: number;
    public title: string;
    public members: number;
    public devices: number;
    public active: boolean;
    public items: CardList[];
}