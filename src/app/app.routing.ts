import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import {HomepageComponent} from './components/homepage/homepage.component'
import {AboutComponent} from './components/about/about.component';
import {LoginComponent} from './components/login/login.component'
import {PostsModule} from './components/post/posts.module'

const routes: Routes =[
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage',             component: HomepageComponent },
    { path: 'about',             component: AboutComponent }, 
    { path: 'login',             component: LoginComponent },
    { path: 'home',             component: ComponentsComponent },
    { path: 'blog', loadChildren:  './components/post/posts.module#PostsModule'},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false 
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
