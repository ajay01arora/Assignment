import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { PrecautionComponent } from './precaution/precaution.component';
import { LoginComponent } from './login/login.component';
import { AddNewsComponent } from './add-news/add-news.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
{path: 'dashboard', component: DashboardComponent},
{path: 'news', component: NewsComponent},
{path: 'precaution', component: PrecautionComponent},
{path: 'login', component: LoginComponent},
{path: 'add-news', component: AddNewsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const RoutingComponents = [DashboardComponent, NewsComponent, PrecautionComponent, AddNewsComponent];

