import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './pages/people-list/people-list.component';

const routes: Routes = [
  { path:'people', component: PeopleListComponent },
  { path: '', pathMatch: 'full', redirectTo: '/people' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
