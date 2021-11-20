import { Injectable } from '@angular/core';
import { EntrpsAddress } from 'app/core/models/test-share-models/entrps-address';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressListService {
  public athrzAreaAdres$ = new BehaviorSubject<EntrpsAddress[]>([]);
  constructor() { }
}
