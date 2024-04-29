import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private showMenuBars = new BehaviorSubject<boolean>(true);

  constructor() { }

  setShowMenuBars(value: boolean) {
    this.showMenuBars.next(value);
  }

  getShowMenuBars() {
    return this.showMenuBars.asObservable();
  }
}
