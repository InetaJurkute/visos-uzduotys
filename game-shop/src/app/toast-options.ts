import {Injectable} from '@angular/core';

@Injectable()
export class ToastrShopOptions {
  positionClass: string = 'toast-bottom-right';
  maxShown: number = 3;
  newestOnTop: boolean = false;
  animate: string = 'fade';

  // override-able properties
  toastLife: number = 5000;
  enableHTML: boolean = false;
  dismiss: string = 'auto'; //'auto' | 'click' | 'controlled'
  messageClass: string = 'toast-message';
  titleClass: string = 'toast-title';
  showCloseButton: boolean = false;

  constructor() {}

}
