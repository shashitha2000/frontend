import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ar-viewer',
  templateUrl: './ar-viewer.component.html',
  styleUrls: ['./ar-viewer.component.css']
})
export class ArViewerComponent {
  public triggerObservable: Subject<void> = new Subject<void>();

  constructor() {}

  ngOnInit() {}

  capture() {
    this.triggerObservable.next();
  }
}
