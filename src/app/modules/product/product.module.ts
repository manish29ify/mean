import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { ProductRoutingModule } from './product-routing.module';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    TabsModule.forRoot(),
    ModalModule.forChild(),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductModule { }
