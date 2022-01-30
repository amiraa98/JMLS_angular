import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Users:User [];
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  cols: any[];
  constructor(private authService: AuthService,private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res=>{console.log(res);
      this.Users=res});
      this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'email', header: 'Email' },
        { field: 'firstname', header: 'Prenom' },
        { field: 'lastname', header: 'Nom' },
        { field: 'birthdate', header: 'Date de naissance' },
        { field: 'cin', header: 'CIN' },
        { field: 'phonenumber', header: 'Téléphone' }
    ];
  }

  onSubmit(): void {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
