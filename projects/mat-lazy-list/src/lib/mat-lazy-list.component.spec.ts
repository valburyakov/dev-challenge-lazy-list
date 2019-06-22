import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatLazyListComponent } from './mat-lazy-list.component';

describe('MatLazyListComponent', () => {
  let component: MatLazyListComponent;
  let fixture: ComponentFixture<MatLazyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatLazyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatLazyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
