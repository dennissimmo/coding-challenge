import { Component } from '@angular/core';
import { environment } from '@env/environment';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jobs';
  isVisible = environment.isTesting;

  constructor(
      private afs: AngularFirestore
  ) {
      this.afs.collection('test').snapshotChanges().subscribe(
          data => console.log(data.map(x => x.payload.doc.data()))
      );
  }
}
