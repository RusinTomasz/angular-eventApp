import { AuthService } from './../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  authUser$ = this.authService.userData;

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {}
}
