import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DevelopmentComponent } from './development/development.component';
//import { AlternativMedicinComponent } from './alternativ-medicin/alternativ-medicin.component';


const routes: Routes = [
  { path:'', component: HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'header',component:FooterComponent},
  {path:'home',component:HomeComponent},
 // {path:'alternativ-medicin',component:AlternativMedicinComponent}
 {path:'contact', component:ContactComponent},
 {path:'development',component:DevelopmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
