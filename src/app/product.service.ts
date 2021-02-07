import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //host:string = "http://localhost:8090";
  host:string = "http://193.122.7.221:8090";
  
  constructor(private http: HttpClient) { }

  public getAllProducts(){
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', '*');
    return this.http.get(this.host + "/products",{headers: headers});
  }

  public getProductById(id){
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', '*');
    return this.http.get(this.host + "/products/" + id,{headers: headers});
  }
}
