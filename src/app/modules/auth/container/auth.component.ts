import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'auth-container',
  templateUrl: './auth.component.html',
  styleUrls: [ './auth.component.scss' ],
  providers: []
})

export class AuthContainer {

  public password: string;
  public error: string = '';
  public showError: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  public submit() {
    this.auth.login( this.password )
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['/work']),
        err => {
          this.error = 'could not authenticate';
          this.showError = true;
          setTimeout(() => {
            this.showError = false;
          }, 2500);
        }
      );
  }

}
