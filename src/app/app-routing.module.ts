import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
  //{ path: 'header', component: HeaderComponent },
  { path: 'form', component: FormComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
