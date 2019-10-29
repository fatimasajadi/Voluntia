import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  jobs: Observable<any[]>

  constructor(db: AngularFirestore, private router: Router, route: ActivatedRoute) {
    const discipline = route.snapshot.params.discip;
    this.jobs = db.collection(
      'jobs',
      discipline ?
        ref => ref.where('discipline', '==', discipline)
        : undefined
    ).valueChanges({
      idField: 'id'
    })
  }

  ngOnInit() {
  }
  btnClick() {
    this.router.navigateByUrl('/list');
  }
  disciplineClick(x) {
    this.router.navigateByUrl(`/discipline/${x}`);
  }
  rowClick(y) {
    this.router.navigateByUrl(`/description/${y}`);

  }
}
