import { Component, OnInit } from '@angular/core';

/* Services */
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'work-container',
  templateUrl: './work.component.html',
  styleUrls: [ './work.component.scss' ],
  providers: []
})

export class WorkContainer implements OnInit {

  public loggedIn: boolean = true;

  constructor(private auth: AuthService) {
    console.log(this.auth.loggedIn, 'this.auth')
  }

  ngOnInit() {
    this.loggedIn = this.auth.loggedIn;
  }

}
