import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef, OnDestroy,
  OnInit,
  QueryList, Renderer2,
  ViewChild
} from '@angular/core';
import { LazyCardDirective } from './lazy-card.directive';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';

@Component({
  selector: 'lib-mat-lazy-list',
  templateUrl: './mat-lazy-list.component.html',
  styleUrls: ['./mat-lazy-list.component.scss']
})
export class MatLazyListComponent implements OnInit, AfterContentInit, OnDestroy {

  @ContentChildren(LazyCardDirective) cards!: QueryList<LazyCardDirective>;

  @ContentChild('matCardLazyListScrollUp', {read: ElementRef, static: true}) button!: ElementRef<any>;

  @ViewChild('cardContainer', {static: true}) container!: ElementRef<HTMLElement>;

  cardsList: LazyCardDirective[] = [];

  private currentIndex = 0;
  private dispose!: () => void;

  constructor(private host: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {
    // const options = {
    //   root: this.element
    // };
    //
    // this.observer = new IntersectionObserver(([entry]) => {
    //   console.log(entry);
    // }, options);
    //
    // this.observer.observe(this.anchor.nativeElement);
  }

  ngOnDestroy(): void {
    this.dispose && this.dispose();
  }

  ngAfterContentInit(): void {
    this.cardsList = this.cards.toArray();

    // Render cards to fill the viewport
    this.renderCard(this.cardsList[0].nativeElement);
    this.renderCard(this.cardsList[1].nativeElement);

    this.currentIndex = 1;

    if (this.button) {
      this.dispose = this.renderer.listen(this.button.nativeElement, 'click', () => this.scrollUp());
    }
  }


  private renderCard(elem: HTMLElement) {
    this.renderer.appendChild(this.container.nativeElement, elem);
  }


  private scrollUp() {
    this.container.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  private hasMore(): boolean {
    return this.currentIndex < this.cardsList.length;
  }

  onScroll(event: IInfiniteScrollEvent) {

    if (!this.hasMore()) return;

    const {offsetTop, clientHeight} = this.cardsList[this.currentIndex].nativeElement;

    console.log({offsetTop, clientHeight, scroll: event.currentScrollPosition});

    // if ((offsetTop + clientHeight) <= event.currentScrollPosition) {
      this.renderCard(this.cardsList[this.currentIndex++].nativeElement);
    // }
  }
}
