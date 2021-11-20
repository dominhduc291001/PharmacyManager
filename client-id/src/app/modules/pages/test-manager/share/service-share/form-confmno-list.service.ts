import { Injectable } from '@angular/core';
import { formConfmNo } from 'app/core/interfaces/test-process-status-detail';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormConfmNoListService {
  public formConfmNoT$ = new BehaviorSubject<formConfmNo[]>([]);
  constructor() { }
}
