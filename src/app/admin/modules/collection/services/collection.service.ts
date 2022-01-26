import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { Pages } from 'src/app/models/apiResponse.model';
import { environment } from 'src/environments/environment';
import { CollectionInterface, DiscountInterface, ItemsInterface, ProductInterface, VarientInterface } from '../models/collection.interface';

const APP_API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http: HttpClient) { }
  // getAllCollection(): Observable<any[]> {
  //   return this.http.get<any[]>(`${APP_API_URL}/collections`);
  // }
  collections$: Observable<Pages<CollectionInterface[]>> = this.http.get<Pages<CollectionInterface[]>>(`${APP_API_URL}/collections?page=1`).pipe(share());
  products$: Observable<ProductInterface[]> = this.http.get<ProductInterface[]>(`${APP_API_URL}/products`).pipe(share());
  varients$: Observable<VarientInterface[]> = this.http.get<VarientInterface[]>(`${APP_API_URL}/varients`).pipe(share());
  items$: Observable<ItemsInterface[]> = this.http.get<ItemsInterface[]>(`${APP_API_URL}/items`).pipe(share());
  discounts$: Observable<DiscountInterface[]> = this.http.get<DiscountInterface[]>(`${APP_API_URL}/discounts`).pipe(share());
}
