import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Compte} from 'src/app/Models/Compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  RetrieveAllComptesURL="http://localhost:9000/retrieve-all-comptes";
  RetrieveAllUserComptesURL="http://localhost:9000/retrieveuseraccounts/";
  AddCompteURL="http://localhost:9000/add-compte"
  DeleteCompteURL="http://localhost:9000/delete-compte/"
  Assign="http://localhost:9000/assigncompte/"
  constructor(private CompteHttp : HttpClient) { }

  getAllComptes():Observable<Compte[]>{
    return this.CompteHttp.get<Compte[]>(this.RetrieveAllComptesURL);}

  addCompte(compte : Compte){
    return this.CompteHttp.post<Compte>(this.AddCompteURL, compte )
  }

  deleteCompteById(id:number){
    return this.CompteHttp.delete(this.DeleteCompteURL+id);
  }
  
  getAllComptesById(id:number):Observable<Compte[]>{
    return this.CompteHttp.get<Compte[]>(this.RetrieveAllUserComptesURL+id);}

  assign(compteid:number,userid:number){
    return this.CompteHttp.put<Compte>(this.Assign+compteid+"/"+userid,null);
  }
}