import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = '';
  description = '';
  hoursPerWeek = null;
  discipline = '';
  location = '';
  organizationName = '';
  emailAddress = '';

  constructor(private db: AngularFirestore) {

  }

  ngOnInit() {
  }

  addJob(event) {
    event.preventDefault();

    this.db.collection('jobs').add({
      title: this.title,
      description: this.description,
      hoursPerWeek: this.hoursPerWeek,
      discipline: this.discipline,
      location: this.location,
      organizationName: this.organizationName,
      emailAddress: this.emailAddress,

    })
  }


}
