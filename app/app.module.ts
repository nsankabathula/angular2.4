import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TestComponet }  from './test.component';
import {RandomService} from './service/random.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,TestComponet ],
  bootstrap:    [ AppComponent ],
  providers: [RandomService]
  
})
export class AppModule { }
