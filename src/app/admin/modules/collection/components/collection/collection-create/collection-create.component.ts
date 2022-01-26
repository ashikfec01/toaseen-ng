import { Component, OnInit } from '@angular/core';
import { CollectionVM } from '../../../models/collection.VM';

@Component({
  selector: 'app-collection-create',
  templateUrl: './collection-create.component.html',
  styleUrls: ['./collection-create.component.scss']
})
export class CollectionCreateComponent implements OnInit {

  collection: CollectionVM;
  constructor() { }

  ngOnInit(): void {
  }

}
