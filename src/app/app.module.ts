import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { ProduitsComponent } from './produits/produits.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { MagasinComponent } from './magasin/magasin.component';
import { DemandeAchatComponent } from './demande-achat/demande-achat.component';
import { VenteComponent } from './vente/vente.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    ProduitsComponent,
    DetailComponent,
    MagasinComponent,
    DemandeAchatComponent,
    VenteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
