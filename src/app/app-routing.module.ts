import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AlternativMedicinComponent} from './alternativ-medicin/alternativ-medicin.component'
import { MassageComponent } from './massage/massage.component';
import { MedialComponent } from './medial/medial.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'header',component:FooterComponent},
  {path:'home',component:HomeComponent},
  {path:'alternativ-medicin', component:AlternativMedicinComponent},
  {path:'massage',component:MassageComponent},
  {path:'medial',component:MedialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
