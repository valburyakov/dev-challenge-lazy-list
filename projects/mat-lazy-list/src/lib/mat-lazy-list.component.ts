import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild
} from '@angular/core';
import { CardTemplateDirective } from './card-template.directive';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'lib-mat-lazy-list',
  templateUrl: './mat-lazy-list.component.html',
  styleUrls: ['./mat-lazy-list.component.scss']
})
export class MatLazyListComponent implements OnInit, AfterContentInit {

  @Input() itemSize!: number;

  @ViewChild(CdkVirtualScrollViewport, {static: true}) viewport!: CdkVirtualScrollViewport;

  @ContentChildren(CardTemplateDirective) cards!: QueryList<CardTemplateDirective>;

  @ContentChild('matCardLazyListScrollUp', {read: ElementRef, static: true}) button!: ElementRef<any>;

  cardsList: CardTemplateDirective[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.cardsList = this.cards.toArray();
    if (this.button) {
      this.button.nativeElement.addEventListener('click', () => this.scrollUp());
    }
  }

  get hasOffsetToScroll() {
    return this.viewport && this.viewport.getRenderedRange().start > 0;
  }

  private scrollUp() {
    this.viewport.scrollToIndex(0, 'smooth');
  }
}
