import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandeAchatComponent } from './demande-achat/demande-achat.component';
import { DetailComponent } from './detail/detail.component';
import { MagasinComponent } from './magasin/magasin.component';
import { ProduitsComponent } from './produits/produits.component';
import { VenteComponent } from './vente/vente.component';

const routes: Routes = [
    {path:'produit', component:ProduitsComponent},
    {path:'magasin', component:MagasinComponent},
    {path:'demandeAchat', component:DemandeAchatComponent},
    {path:'vente', component:VenteComponent},
    {path:'detail/:id', component:DetailComponent}

    
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }