import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ServprodService {
actualProd:Produit=null;
urlJson:string="http://localhost:3000/produit/";
  constructor(private http:HttpClient) { 
  }
  findAll(){return this.http.get<Produit[]>(this.urlJson);}
  affectProduit(p:Produit){
    this.actualProd=p;
  }
  editItem(name,id,val){
  //  return this.http.put("http://localhost:3000/produit/"+`${p.id}`,p);
    switch (name) {
      case "nomProduit":
        return this.http.patch(this.urlJson+`${id}`,{nomProduit: val});
          break;
      case "Categorie": //code block statement2;
      return this.http.patch(this.urlJson+`${id}`,{Categorie: val});
          break;
   case "prixAchat": //code block statement2;
   return this.http.patch(this.urlJson+`${id}`,{prixAchat: val});
          break;
  case "marge": //code block statement2;
  return this.http.patch(this.urlJson+`${id}`,{marge: val});
          break;
          case "prixVente": //code block statement2;
          return this.http.patch(this.urlJson+`${id}`,{prixVente: val});
              break;
       case "quantite": //code block statement2;
       return this.http.patch(this.urlJson+`${id}`,{quantite: val});
              break;
      case "img": //code block statement2;
      return this.http.patch(this.urlJson+`${id}`,{img: val});
              break;
   
          }      
  }
  getProduct(id){
    return this.http.get<Produit>(this.urlJson+`${id}`); 
  }
  deleteProduct(id){
    console.log('here');
    return this.http.delete(this.urlJson+`${id}`);
  }
  
}
