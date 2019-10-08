import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatLazyListComponent } from './mat-lazy-list.component';
import { LazyCardDirective } from './lazy-card.directive';


const matModules = [
  MatButtonModule,
  MatCardModule
];


@NgModule({
  declarations: [MatLazyListComponent, LazyCardDirective],
  imports: [
    CommonModule,
    ...matModules,
  ],
  exports: [MatLazyListComponent, LazyCardDirective]
})
export class MatLazyListModule { }
