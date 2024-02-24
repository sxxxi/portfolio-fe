import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage = sessionStorage

  constructor() { }

  save(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  get(key: string): string | null {
    return this.storage.getItem(key);
  }
}


