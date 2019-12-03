import { AppRoutingModule } from './app-routing.module';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * @author Simon Meier
 * Entry Point of the application
 * -> redirection to the main component
 */

export class AppComponent {

  constructor(
    private router: Router,
  ) {}

  title = 'Gewerblichen Schule Backnang';
  introduction = 'Beim Klick auf den Button werden Sie auf die Hauptseite der Anwendung weitergeleitet';

  login() {

  }
}
