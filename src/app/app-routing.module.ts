import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'about/:id', component:DetailsComponent},
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent},
  // {path:'**', redirectTo:''} REDIGIRER LES LIENS INEXISTANTS SUR LA HOME
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }