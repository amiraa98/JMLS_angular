import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../Models/Compte';
import { User } from '../Models/User';
import { CompteService } from '../_services/compte.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

interface Type{
  value:String;
  viewValue:String;
  }
  interface Devise{
  value:String;
  viewValue:String;
  }
@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  compteid:number;
  userid:number;
  Clients:User[];
  Users:User [];
  listCompte: Compte[];
  cols: any[];
  compte:Compte= new Compte;
  comptes:any[];
  devise:Devise[]=[
    {value:'DZD', viewValue:'Dinar algérien'},
    {value:'SAR', viewValue:'Riyal saoudien'},
    {value:'CAD',viewValue:'Dollar canadien'},
    {value:'DKK',viewValue:'Couronne danoise'},
    {value:'USD',viewValue:'Dollar américain'},
    {value:'GBP',viewValue:'Livre sterling'},
    {value:'JPY',viewValue:'Yen japonais'},
    {value:'MAD',viewValue:'Dirham marocain'},
    {value:'NOK',viewValue:'Couronne norvégienne'},
    {value:'SEK',viewValue:'Couronne suédoise'},
    {value:'CHF',viewValue:'Franc suisse'},
    {value:'KWD',viewValue:'Dinar koweïtien'},
    {value:'AED',viewValue:'Dirham des Émirats arabes unis'},
    {value:'EUR',viewValue:'Euro'},
    {value:'LYD',viewValue:'Dinar libyen'},
    {value:'MRU',viewValue:'Ouguiya '},
    {value:'BHD',viewValue:'Dinar bahreïni'},
    {value:'QAR',viewValue:'Riyal qatarien'},
    {value:'CNY',viewValue:'Renminbi'},
    {value:'TND',viewValue:'Dinar Tunisien'}
    ]
    types:Type[]=[
    {value: 'Courant', viewValue: 'Courant'},

    {value: 'Epargne', viewValue: 'Epargne'}
 ];
  constructor(private compteService: CompteService,private userService: UserService,private token: TokenStorageService) { }

  ngOnInit(): void {
   this.userid= this.token.getUser().id;
    this.compteService.getAllComptesById(this.userid).subscribe(res=>{console.log(res);
      this.listCompte=res}
      );
      this.cols = [
        { field: 'rib', header: 'RIB' },
        { field: 'devise', header: 'Devise' },
        { field: 'datedecreation', header: 'Date de Creation' },
        { field: 'soldeactuel', header: 'Solde Actuel' },
        { field: 'soldedisponible', header: 'Solde Disponible' }
    ];
  }


}