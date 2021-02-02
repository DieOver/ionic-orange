import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardboxComponent } from './cardbox.component';

describe('CardboxComponent', () => {
  let component: CardboxComponent;
  let fixture: ComponentFixture<CardboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardboxComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
