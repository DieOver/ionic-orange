import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { DetailsComponent } from './details.component';
import { DetailsComponentRoutingModule } from './details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DetailsComponentRoutingModule
  ],
  declarations: [DetailsComponent],
  providers: []
})
export class DetailsComponentModule { }
