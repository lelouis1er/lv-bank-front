import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  /**
       * set session storage item
       * @param key
       * @param value
       */
  setItem(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  /**
  * get session storage item
  * @param key
  */
  getItem(key: string): any {
    var value = sessionStorage.getItem(key) != null ? sessionStorage.getItem(key) + '' : '';
    return JSON.parse(value);
  }

  /**
  * remove session storage item
  * @param key
  */
  removeItem(key: string) {
    sessionStorage.removeItem(key);
  }

  /**
  * remove all session storage items
  */
  clear() {
    sessionStorage.clear();
  }
}
