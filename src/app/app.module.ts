import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule , RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistrictListComponent } from './district-list/district-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard} from './guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataInMemoryService } from './data-in-memory.service';
import { Router } from '@angular/router';
import { NewsViewComponent } from './news-view/news-view.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    DistrictListComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(DataInMemoryService, {dataEncapsulation:false}),
    FormsModule,    
    ReactiveFormsModule
  ],
  
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
