# ChallengeFinal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

- Create lazy list component which will render mat-cards from ng-content
- Initially render only cards which are fit current viewport
- On scroll down add to html new cards to html
- Show button which scrolls to then beginning of the list

## Usage
```html
<lib-mat-lazy-list>
  <button mat-button #matCardLazyListScrollUp>Go Up</button>

  <mat-card libLazyCard>
    <!-- Card 1 -->
  </mat-card>
  
  <mat-card libLazyCard>
    <!-- Card 2 -->
  </mat-card>
    
    ...
    
  <mat-card libLazyCard>
   <!-- Card N -->
  </mat-card>
 </lib-mat-lazy-list>
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Publish library

Run `npm run publish` to build the library and then publish to npm

