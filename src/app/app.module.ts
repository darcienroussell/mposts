import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { SinglePostComponent } from './post-list-item/single-post/single-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
{path:'post', component: PostListItemComponent},
{path:'new', component: NewPostComponent},
{path:'post/single/:id', component: SinglePostComponent},
{path:'', redirectTo:'post', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    SinglePostComponent,
    NewPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
