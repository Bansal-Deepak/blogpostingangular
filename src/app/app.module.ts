import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { Routes, RouterModule } from '@angular/router';
import {BlogService} from './blog.service';
import {BlogHttpService} from './blog-http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [RouterModule.forRoot([
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'blog/:blogId',component:BlogViewComponent},
    {path:'create',component:BlogCreateComponent},
    {path:'edit/:blogId',component:BlogEditComponent},
    {path:'**',component:NotFoundComponent},
    {path:'about',component:AboutComponent}
    

  ]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
