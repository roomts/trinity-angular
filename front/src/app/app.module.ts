import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';

import { PostDetailsComponent } from './post-details/post-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';


const appRoutes: Routes = [

  {path: '', component: PostListComponent},
  {path: 'post-details/:id', component: PostDetailsComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule,
    EditorModule,
    InputTextModule,
    PanelModule,
    DialogModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers:  [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  text: string;
 }
