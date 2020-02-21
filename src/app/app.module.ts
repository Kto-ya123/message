import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
