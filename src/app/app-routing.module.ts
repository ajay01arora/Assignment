import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { PrecautionComponent } from './precaution/precaution.component';
import { LoginComponent } from './login/login.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { NewsViewComponent } from './news/news-view/news-view.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
{path: 'dashboard', component: DashboardComponent},
{path: 'news', component: NewsComponent},
{path: 'precaution', component: PrecautionComponent},
{path: 'login', component: LoginComponent},
{path: 'add-news', component: AddNewsComponent, canActivate: [AuthGuard]},
{path: 'view-news/:id', component: NewsViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const RoutingComponents = [DashboardComponent, NewsComponent, PrecautionComponent, AddNewsComponent, NewsViewComponent];

