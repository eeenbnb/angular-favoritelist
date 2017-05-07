import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HumanInfoComponent } from './component/humanInfo/humaninfo.component'
import { LoadingComponent } from './component/loading/loading.component'

@NgModule({
  declarations: [
    AppComponent,
    HumanInfoComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
