import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private angularFireAuth: AngularFireAuth) {}

  ngOnInit(): void {}

  checkUser() {
    console.log(this.angularFireAuth.currentUser);
  }
}
