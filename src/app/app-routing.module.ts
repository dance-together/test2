import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { DevelopmentComponent } from './development/development.component';


const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'contact', component: ContactComponent},
  { path:'development', component: DevelopmentComponent},
  { path:'treatment', component: TreatmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
