import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { ExecutorComponent } from './executor/executor.component';
import { CodeService } from './code.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, CodeEditorComponent, ExecutorComponent, HeaderComponent],
  imports: [BrowserModule, FormsModule],
  providers: [CodeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
