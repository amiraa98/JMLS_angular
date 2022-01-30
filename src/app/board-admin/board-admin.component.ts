import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { CompteService } from '../_services/compte.service';
import { Compte } from '../Models/Compte';
import { User } from '../Models/User';

interface Type{
  value:String;
  viewValue:String;
  }
  interface Devise{
  value:String;
  viewValue:String;
  }

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

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
  constructor(private compteService: CompteService,private userService: UserService) { }

  ngOnInit(): void {

this.compteService.getAllComptes().subscribe(res=>{console.log(res);
    this.listCompte=res}
    );
    this.userService.getUsers().subscribe(res=>{console.log(res);
      this.Users=res});
      this.cols = [
        { field: 'idcompte', header: 'Id' },
        { field: 'rib', header: 'RIB' },
        { field: 'soldeactuel', header: 'Solde Actuel' },
        { field: 'soldedisponible', header: 'Solde Disponible' },
        { field: 'devise', header: 'Devise' },
        { field: 'datedecreation', header: 'Date de Creation' },
        { field: 'type', header: 'Type' },
        { field: 'etat', header: 'Etat' },
        { field: 'interet', header: 'Interet' }
    ];
  }

  addCompte(){
    this.compteService.addCompte(this.compte).subscribe(res=>{console.log(res);
    });
  }

  deleteCompte(id:number){
    this.compteService.deleteCompteById(id).subscribe(()=>this.compteService.getAllComptes().subscribe(res=>{this.listCompte=res}));
  }

  assign(compteid:number,userid:number){
    this.compteService.assign(compteid,userid).subscribe(res=>{console.log(res);}
    );
  }

}
