import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BodyComponent } from './shared/components/body/body.component';
import { AboutComponent } from './home/pages/about/about.component';
import { ContatoComponent } from './home/pages/contato/contato.component';
import { CardapioComponent } from './home/pages/cardapio/cardapio.component';
import { HttpClientModule } from '@angular/common/http' ;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AboutComponent,
    ContatoComponent,
    CardapioComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
