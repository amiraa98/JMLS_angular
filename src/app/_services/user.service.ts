import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User }from 'src/app/Models/User';

const API_URL = 'http://localhost:9000/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  UpdateThisUserURL="http://localhost:9000/updateuser"
  RetrieveUserInfo="http://localhost:9000/userinfo/"
  RetrieveUsers="http://localhost:9000/getusers"
  RetrieveClients="http://localhost:9000/getclients"
  UpdatePassword="http://localhost:9000/pwupdate/"
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getUserInfo(username:String):Observable<User>{
    return this.http.get<User>(this.RetrieveUserInfo+username);}
  
  updateUser(user:User): Observable<any> {
     return this.http.put(this.UpdateThisUserURL,user);
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.RetrieveUsers);}

  getClients():Observable<User[]>{
    return this.http.get<User[]>(this.RetrieveClients);}

  updatePassword(username:String,password:String):Observable<any>{
    return this.http.put(this.UpdatePassword,username+"/"+password);
  }
}
