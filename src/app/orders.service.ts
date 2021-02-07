import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  //host:string = "http://localhost:8070";
  host:string = "http://193.122.7.221:8090";
  constructor(private http: HttpClient) { }

  public getOrderByUser(id){
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', '*');
    return this.http.get(this.host + "/orders/user/" + id,{headers: headers});
  }

  public getOrderBy(id){
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', '*');
    return this.http.get(this.host + "/orders/" + id,{headers: headers});
  }

  public saveOrder(user: number, total:number, products:number[] ){
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', '*');

    const body = { 
      user : user,
      total : total,
      products: products
    };

    return this.http.post(this.host + "/orders" ,body, {headers: headers});
  }
}
