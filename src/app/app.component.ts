import { Component } from '@angular/core';
import { RouteWatcherService } from './route-watcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showHeaderFooter: boolean = true;

  constructor(private routeWatcherService: RouteWatcherService) {
    routeWatcherService.showHeaderFooter.subscribe((show) => {
      this.showHeaderFooter = show;
    });
  }
}
