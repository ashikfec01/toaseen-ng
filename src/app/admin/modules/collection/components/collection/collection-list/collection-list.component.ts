import { Component, OnInit } from '@angular/core';
import { CollectionVM } from '../../../models/collection.VM';
import { CollectionService } from '../../../services/collection.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit {

  collections: CollectionVM[]
  // products: ProductVM[];
  // varients: VarientVM[];
  // items: ItemsVM[];
  // discounts: DiscountVM[];
  totalRecords: number;
  loading: boolean = true;
  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
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
