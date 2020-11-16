import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eventApp';

  constructor(private db: AngularFireDatabase) {}

  createItem() {
    const itemRef = this.db.list('events');
    itemRef.push({ name: 'new name2!' });
  }
}
