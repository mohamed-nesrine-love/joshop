import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../models/produit';
import { ServprodService } from '../services/servprod.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
@Input() produits:Produit[]=[];
prod: Produit=null;
  constructor(private produitService:ServprodService) { }
  ngOnInit() {this.getProduit();
  }
  getProduit(){this.produitService.findAll().subscribe(produits=>this.produits=produits)};
  
affectProduit(p:Produit){
  this.produitService.affectProduit(p);
}

}
