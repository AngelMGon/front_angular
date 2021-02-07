import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //host:string = "http://localhost:8080";
  host:string = "http://193.122.61.226:8080";
  constructor(
    private http: HttpClient
  ) { }

  public getUserByEmail(email){
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', '*');
    return this.http.get(this.host + "/users/" + email,{headers: headers});
  }

  public saveUser(name, email, address){
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', '*');
    return this.http.post(this.host + "/users?name=" + name + "&email=" + email + "&address="+ address,{headers: headers});
  }
}
