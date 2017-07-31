import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';
import { CategoryComponent } from './category/category.component';
import { LayoutsComponent } from './layouts/layouts.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MemberComponent,
    CategoryComponent,
    LayoutsComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
