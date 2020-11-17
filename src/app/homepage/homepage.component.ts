import { AuthService } from './../auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  checkUser() {
    this.authService.userData.subscribe((response) => console.log(response));
    console.log(this.angularFireAuth.currentUser);
  }

  logout() {
    this.authService.logout();
    console.log('logout');
  }
}
