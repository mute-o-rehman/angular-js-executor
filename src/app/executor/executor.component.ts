import { Component } from '@angular/core';
import { CodeService } from '../code.service';

@Component({
  selector: 'app-executor',
  templateUrl: './executor.component.html',
  styleUrls: ['./executor.component.css'],
})
export class ExecutorComponent {
  constructor(private codeService: CodeService) {}

  async executeCode() {
    const codes = this.codeService.getCodes();

    for (const code of codes) {
      if (code.trim()) {
        try {
          await this.executeWithTimeout(code, 2000);
        } catch (error) {
          console.error('Error executing code:', error);
        }
      }
    }
  }

  executeWithTimeout(code: string, timeout: number) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        try {
          new Function(code)();
          resolve();
        } catch (error) {
          reject(error);
        }
      }, timeout);
    });
  }
}
