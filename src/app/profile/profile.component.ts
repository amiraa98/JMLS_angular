import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../Models/User';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

interface Residence {
  value:String;
  viewValue:String;
}

interface EtatCivile{
  value:String;
  viewValue:String;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  currentUser: String;
  user:User;
  constructor(private token: TokenStorageService, private userService:UserService) { }

  residence:Residence[]=
  [
    {value:'Tunisien_Resident',viewValue:'Tunisien_Resident'},
    {value:'Tunisien_Non_Resident',viewValue:'Tunisien_Non_Resident'},
    {value:'Etranger_Resident',viewValue:'Etranger_Resident'},
    {value:'Etranger_Non_Resident',viewValue:'Etranger_Non_Resident'}
  ]

  etat:EtatCivile[]=
  [
    {value:'Marié',viewValue:'Marié'},
    {value:'Divorcé',viewValue:'Divorcé'},
    {value:'Veuf',viewValue:'Veuf'},
    {value:'Celibataire',viewValue:'Celibataire'},
  ]

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.userService.getUserInfo(this.token.getUser().username).subscribe(res=>{console.log(res);
      this.user=res}
      );
  }

  updateUser(){
    this.userService.updateUser(this.token.getUser()).subscribe(res=>{console.log(res);
    });
  }

}
