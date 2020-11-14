import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../models/produit';
import { ProduitsComponent } from '../produits/produits.component';
import { ServprodService } from '../services/servprod.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  val1:string="";
  val2:string;
  val3:string;
  val4:string;
  val5:string;


  p: Produit= null; 
  myP: Produit={
  "id":0,
            "nomProduit":"",
            "Categorie":"",
            "prixAchat":null,
            "prixVente":null,
            "marge":null,
            "quantite":null,
            "img":"" };
            visiblenomProduit:boolean=false;
            visibleCategorie:boolean=false;
            visibleprixAchat:boolean=false;
            visibleprixVente:boolean=false;
            visiblequantite:boolean=false;
            test:"test";

            
  constructor(private prod:ServprodService,private _Activatedroute:ActivatedRoute, private router:Router) { }
items:any[];
  ngOnInit(): void {
      if(this.prod.actualProd!=null){
        this.prod.actualProd;
      }else{
        this.initialiser();
        }
      this.items = [
        {
          id: 1,
          text: 'nomProduit'
         
        },
        {
          id: 2,
          text: 'Categorie'
    
        },
        {
          id: 3,
          text: 'prixAchat'
  
        },
        {
          id: 4,
          text: 'prixVente'
        },
        {
          id: 5,
          text: 'quantite'
        }
      ]
      }
      initialiser(){
        this.prod.getProduct(this._Activatedroute.snapshot.paramMap.get("id") ).subscribe(
          (produit)=>this.p=produit
        )
      }
    afficher(text){
      switch (text) {
        case "nomProduit": return this.p.nomProduit;
              break;
        case "Categorie": return this.p.Categorie;
              break;
       case "prixAchat": return this.p.prixAchat;
              break;
       case "prixVente": return this.p.prixVente;
              break;
     case "quantite": return this.p.quantite;
              break;
    }
  }
      show(name){
        switch (name) {
          case "nomProduit": this.visiblenomProduit=!this.visiblenomProduit;
                break;
          case "Categorie": this.visibleCategorie=!this.visibleCategorie;
                break;
         case "prixAchat": this.visibleprixAchat=!this.visibleprixAchat;
                break;
         case "prixVente": this.visibleprixVente=!this.visibleprixVente;
                break;
       case "quantite": this.visiblequantite=!this.visiblequantite;
                break;
  }

      }
      






      modifier(name){
        switch (name) {
          case "nomProduit":
              console.log("nom Produit:"+this.val1)
                this.p.nomProduit=this.myP.nomProduit;
                this.prod.editItem("nomProduit",this.p.id,this.p.nomProduit)
                .subscribe((produit)=>produit=this.p);
                this.visiblenomProduit=!this.visiblenomProduit;
                break;
          case "Categorie":
                this.p.Categorie=this.myP.Categorie;
                this.prod.editItem("Categorie",this.p.id,this.p.Categorie)
                .subscribe((produit)=>produit=this.p);
                this.visibleCategorie=!this.visibleCategorie;
                break;
         case "prixAchat":  
                this.p.prixAchat=this.myP.prixAchat;
                this.prod.editItem("prixAchat",this.p.id,this.p.prixAchat)
                .subscribe((produit)=>produit=this.p);
                this.p.marge=this.p.prixVente-this.p.prixAchat;
                this.prod.editItem("marge",this.p.id,this.p.marge)
                .subscribe((produit)=>produit=this.p);
                this.visibleprixAchat=!this.visibleprixAchat;
                break;
         case "prixVente":  
                this.p.prixVente=this.myP.prixVente;
                this.prod.editItem("prixVente",this.p.id,this.p.prixVente)
                .subscribe((produit)=>produit=this.p);
                this.p.marge=this.p.prixVente-this.p.prixAchat;
                this.prod.editItem("marge",this.p.id,this.p.marge)
                .subscribe((produit)=>produit=this.p);
                this.visibleprixVente=!this.visibleprixVente;
                break;
       case "quantite":  
      
                this.p.quantite=this.myP.quantite;
                this.prod.editItem("quantite",this.p.id,this.p.quantite)
                .subscribe((produit)=>produit=this.p);
                this.visiblequantite=!this.visiblequantite;
                break;
       case "img":  
                this.p.img=this.myP.img;
                this.prod.editItem("img",this.p.id,this.p.img)
                .subscribe((produit)=>produit=this.p);
                break;
  }
/* affiche(idProduits){ console.log(this.produits)}; */
      }
      supprimerProduit(id){
         console.log(`Le produit ${id} est supprimer `);
        this.prod.deleteProduct(id).subscribe(()=>{
          this.router.navigate(['../produit/']);
          return console.log(`Le produit ${id} est supprimer `);
       })
      }
}