import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  currentPath: any;

  constructor(private router: Router ) {
  }

  ngOnInit() {
    this.router.events.subscribe( ( event: Event) => {
      if (event instanceof NavigationEnd ) {
        this.currentPath = event.url;
      }
    });
  }
}
