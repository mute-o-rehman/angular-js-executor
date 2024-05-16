import { Component } from '@angular/core';
import { CodeService } from '../code.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css'],
})
export class CodeEditorComponent {
  constructor(public codeService: CodeService) {}
}
