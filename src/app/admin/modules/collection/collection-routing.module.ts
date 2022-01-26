import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionCreateComponent } from './components/collection/collection-create/collection-create.component';
import { CollectionDetailsComponent } from './components/collection/collection-details/collection-details.component';
import { CollectionEditComponent } from './components/collection/collection-edit/collection-edit.component';
import { CollectionListComponent } from './components/collection/collection-list/collection-list.component';
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

const routes: Routes = [
  { path: 'list', component: CollectionListComponent },
  { path: 'create', component: CollectionCreateComponent },
  { path: 'edit/:id', component: CollectionEditComponent },
  { path: 'detail/:id', component: CollectionDetailsComponent },

  { path: 'product', component: ProductComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/edit/:id', component: ProductEditComponent },
  { path: 'product/detail/:id', component: ProductDetailComponent },

  {
    path: 'varient',
    component: VarientComponent,
    children: [
      { path: 'create', component: VarientCreateComponent },
      { path: 'edit/:id', component: VarientEditComponent },
      { path: 'detail/:id', component: VarientDetailComponent },
    ]
  },
  {
    path: 'item',
    component: ItemComponent,
    children: [
      { path: 'create', component: ItemCreateComponent },
      { path: 'edit/:id', component: ItemEditComponent },
      { path: 'detail/:id', component: ItemDetailComponent }
    ]
  },
  {
    path: '',
    redirectTo: 'list',
    component: CollectionListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
