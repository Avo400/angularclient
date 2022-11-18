import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonUser3FormComponent } from './mon-user3-form/mon-user3-form.component';
import { MonUser3ListComponent } from './mon-user3-list/mon-user3-list.component';

const routes: Routes = [
  { path: 'users', component: MonUser3ListComponent },
  { path: 'adduser', component: MonUser3FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
