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

@Component({
  selector: 'lib-mat-lazy-list',
  templateUrl: './mat-lazy-list.component.html',
  styleUrls: ['./mat-lazy-list.component.scss']
})
export class MatLazyListComponent implements OnInit, AfterContentInit, OnDestroy {

  @ContentChildren(LazyCardDirective) cards!: QueryList<LazyCardDirective>;

  @ContentChild('matCardLazyListScrollUp', {read: ElementRef, static: true}) button!: ElementRef<any>;

  @ViewChild('cardContainer', {static: true}) container!: ElementRef<HTMLElement>;

  @ViewChild('anchor', {static: true}) anchor!: ElementRef<HTMLElement>;

  cardsList: LazyCardDirective[] = [];
  isVisible = true;

  private currentIndex = 0;
  private dispose!: () => void;
  private observer!: IntersectionObserver;

  constructor(private host: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.observer.disconnect();
    this.dispose && this.dispose();
  }

  ngAfterContentInit(): void {
    this.cardsList = this.cards.toArray();

    // Render first elements that fits initial view port
    while (this.hasMore() && this.hasEmptySpace()) {
      this.renderCard(this.cardsList[this.currentIndex++].nativeElement);
    }


    const options = {
      root: null
    };

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.onScroll();
      }
    }, options);

    this.observer.observe(this.anchor.nativeElement);

    if (this.button) {
      this.dispose = this.renderer.listen(window, 'scroll', () => this.buttonScroll());
    }
  }


  private renderCard(elem: HTMLElement) {
    this.renderer.insertBefore(this.container.nativeElement, elem, this.anchor.nativeElement);
  }

  private buttonScroll() {
    this.isVisible = this.isFirstVisible;
  }

  public scrollUp() {
    this.container.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  private hasMore(): boolean {
    return this.currentIndex < this.cardsList.length;
  }

  private hasEmptySpace() {
    const totalHeight = this.cardsList
      .filter(item => item.nativeElement.clientHeight > 0)
      .reduce((acc, item) => acc + item.nativeElement.clientHeight + item.nativeElement.offsetTop, 0);

    return totalHeight < window.innerHeight;
  }

  get isFirstVisible(): boolean {

    if (!this.cardsList.length) {
      return false;
    }

    const { top: elemTop, bottom: elemBottom } = this.cardsList[0].nativeElement.getBoundingClientRect();

    // Only completely visible elements return true:
    const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
  }

  onScroll() {
    if (this.hasMore()) {
      this.renderCard(this.cardsList[this.currentIndex++].nativeElement);
     }
  }
}
