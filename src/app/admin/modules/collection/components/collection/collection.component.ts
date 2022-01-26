import { Component, OnInit } from '@angular/core';
import { CollectionVM, DiscountVM, ItemsVM, ProductVM, VarientVM } from '../../models/collection.VM';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  collections: CollectionVM[]
  products: ProductVM[];
  varients: VarientVM[];
  items: ItemsVM[];
  discounts: DiscountVM[];
  totalRecords: number;
  loading: boolean = true;

  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {

    this.collectionService.products$.subscribe({
      next: res => {
        this.products = res.map(d => {
          const data = new ProductVM();
          data.init(d);
          return data;
        });
        console.log(this.products);
      }
    });
    this.collectionService.varients$.subscribe({
      next: res => {
        this.varients = res.map(d => {
          const data = new VarientVM();
          data.init(d);
          return data;
        });
        console.log(this.varients);
      }
    });
    this.collectionService.items$.subscribe({
      next: res => {
        this.items = res.map(d => {
          const data = new ItemsVM();
          data.init(d);
          return data;
        });
        console.log(this.items);
      }
    });
    this.collectionService.discounts$.subscribe({
      next: res => {
        this.discounts = res.map(d => {
          const data = new DiscountVM();
          data.init(d);
          return data;
        });
        console.log(this.discounts);
      }
    })
  }

  loadCollections(event) {
    this.collectionService.collections$.subscribe({
      next: (res) => {
        this.collections = res.collection.map(d => {
          const data = new CollectionVM();
          data.init(d);
          return data;
        });
        this.totalRecords = res.count;
        this.loading = false;
        console.log(this.collections);
      }
    });
  }

}
