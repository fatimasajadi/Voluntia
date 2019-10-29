import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { JobComponent } from './job/job.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'list', component: ListComponent },
  { path: 'discipline/:discip', component: IndexComponent },
  { path: 'description/:descrip', component: JobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
