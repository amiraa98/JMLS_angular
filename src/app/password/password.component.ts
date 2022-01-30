import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  username: string;
  User:User;
  currentUser: any;
  user: User;
  
  constructor(private token: TokenStorageService, private userService:UserService) { 
    
  }

    ngOnInit(): void {
      this.isLoggedIn = !!this.token.getToken();
      this.currentUser = this.token.getUser();
      this.userService.getUserInfo(this.token.getUser().username).subscribe(res=>{console.log(res);
      this.user=res}
      );
      if (this.isLoggedIn) {
        const user = this.token.getUser();
        this.roles = user.roles;
        this.userService.getUserInfo(this.token.getUser().username).subscribe(res=>{console.log(res);
          this.User=res}
          );
        this.username = user.username;
      }
    }
  
    logout(): void {
      this.token.signOut();
      window.location.reload();
    }

    updatepassword(name:String,pw:String){
      this.userService.updatePassword(name,pw).subscribe(res=>{console.log(res);}
      );
    }

}