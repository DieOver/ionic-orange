import { NgModule } from '@angular/core';
import { CardboxComponent } from './cardbox/cardbox.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardlistComponent } from './cardlist/cardlist.component';

const EDE = [
    CardboxComponent,
    CardlistComponent,
]

@NgModule({
    imports: [
        CommonModule, IonicModule, FormsModule, ReactiveFormsModule
    ],
    entryComponents: EDE,
    declarations: EDE,
    exports: EDE,
})
export class ComponentsModule { }
