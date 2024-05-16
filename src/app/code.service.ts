import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CodeService {
  code1: string = '';
  code2: string = '';
  code3: string = '';
  code4: string = '';

  getCodes(): string[] {
    return [this.code1, this.code2, this.code3, this.code4];
  }
}
