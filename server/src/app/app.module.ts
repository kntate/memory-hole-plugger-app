import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { TalkingPointComponent } from './talking-point/talking-point.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'articles/:articleId', component: ArticleDetailsComponent },
      { path: 'talking-point', component: TalkingPointComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ArticleDetailsComponent,
    TalkingPointComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/