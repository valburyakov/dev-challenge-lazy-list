import { NgModule } from '@angular/core';
import { MatLazyListComponent } from './mat-lazy-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { CardTemplateDirective } from './card-template.directive';


const matModules = [
  MatButtonModule,
  MatCardModule,
  ScrollingModule
];


@NgModule({
  declarations: [MatLazyListComponent, CardTemplateDirective],
  imports: [
    CommonModule,
    ...matModules,
  ],
  entryComponents: [MatCard],
  exports: [MatLazyListComponent, CardTemplateDirective]
})
export class MatLazyListModule { }
