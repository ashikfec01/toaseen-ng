import { Component, OnInit } from '@angular/core';
import { CollectionVM, DiscountVM, ProductVM } from '../../../models/collection.VM';
import { CollectionService } from '../../../services/collection.service';

@Component({
  selector: 'app-collection-create',
  templateUrl: './collection-create.component.html',
  styleUrls: ['./collection-create.component.scss']
})
export class CollectionCreateComponent implements OnInit {

  collection: CollectionVM = new CollectionVM();
  products: ProductVM[];
  discount: DiscountVM[];
  selectedProducts;
  selectedDiscount;
  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.collectionService.products$.subscribe(res => {
      this.products = res.map(d => {
        const data = new ProductVM()
        data.init(d);
        return data;
      });
    });
    this.collectionService.discounts$.subscribe(res => {
      this.discount = res.map(d => {
        const data = new DiscountVM()
        data.init(d);
        return data;
      })
    })
  }

  getProduct() {
    console.log("this.selectedProducts", this.selectedProducts);
  }
  getDiscount() {
    console.log("this.discount", this.selectedDiscount);

  }

}
