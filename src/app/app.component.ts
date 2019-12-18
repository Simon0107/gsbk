import { AppRoutingModule } from './app-routing.module';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './entities/user';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * @author Simon Meier
 * Entry Point of the application
 */
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private backend: BackendService,
  ) {}

  @Input() inputUsr: string;
  @Input() inputPw: string;
  public viewState: string;

  usr: string ="sme";
  pw: string ="123";

  title = 'Gewerblichen Schule Backnang';
  introduction = 'Beim Klick auf den Button werden Sie auf die Hauptseite der Anwendung weitergeleitet';

  ngOnInit() {
    this.viewState = 'login';
  }

  login() {
    if(this.inputPw && this.inputUsr) {
      this.backend.login(this.inputPw, this.inputUsr);
      this.viewState = 'dashboard';
      this.router.navigate(['/dashboard']);
    }
  }
}
