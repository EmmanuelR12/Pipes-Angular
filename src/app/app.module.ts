import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRouterModule} from './app-router.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {VentasModule} from './ventas/ventas.module';
//PrimeNg
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
