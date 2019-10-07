import { NgModule } from '@angular/core';
import { MatLazyListComponent } from './mat-lazy-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { LazyCardDirective } from './lazy-card.directive';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


const matModules = [
  MatButtonModule,
  MatCardModule
];


@NgModule({
  declarations: [MatLazyListComponent, LazyCardDirective],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    ...matModules,
  ],
  exports: [MatLazyListComponent, LazyCardDirective]
})
export class MatLazyListModule { }
