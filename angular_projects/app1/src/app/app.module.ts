import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SampleComponent } from "./sample.component";
import { Sample2Component } from "./sample2.component";
import { Sample3Component } from './sample3/sample3.component';
import { Sample4Component } from './sample4/sample4.component';

@NgModule({
  declarations: [AppComponent, SampleComponent, Sample2Component, Sample3Component, Sample4Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
