import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionCreateComponent } from './components/collection/collection-create/collection-create.component';
import { CollectionDetailsComponent } from './components/collection/collection-details/collection-details.component';
import { CollectionEditComponent } from './components/collection/collection-edit/collection-edit.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ItemCreateComponent } from './components/item/item-create/item-create.component';
import { ItemDetailComponent } from './components/item/item-detail/item-detail.component';
import { ItemEditComponent } from './components/item/item-edit/item-edit.component';
import { ItemComponent } from './components/item/item.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductComponent } from './components/product/product.component';
import { VarientCreateComponent } from './components/varient/varient-create/varient-create.component';
import { VarientDetailComponent } from './components/varient/varient-detail/varient-detail.component';
import { VarientEditComponent } from './components/varient/varient-edit/varient-edit.component';
import { VarientComponent } from './components/varient/varient.component';
import { CollectionListComponent } from './components/collection/collection-list/collection-list.component';



@NgModule({
  declarations: [
    CollectionComponent,
    ProductComponent,
    VarientComponent,
    ItemComponent,
    CollectionCreateComponent,
    CollectionEditComponent,
    CollectionDetailsComponent,
    ItemCreateComponent,
    ItemEditComponent,
    ItemDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,
    VarientCreateComponent,
    VarientEditComponent,
    VarientDetailComponent,
    CollectionListComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    TableModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    MultiSelectModule,
    ButtonModule
  ]
})
export class CollectionModule { }
