import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { userModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class reqService {
  private env = environment.envAddress

  constructor(private http:HttpClient){}

  public get():Observable<userModel>{
    return this.http.get<userModel>(this.env)
  }

  public post(data:any):Observable<userModel>{
    console.log(data)
    return this.http.post(this.env + 'user/create',data)
  }

  public getById(id:any):Observable<userModel>{
    console.log(`${this.env}users/${id}`)
    return this.http.get(`${this.env}users/${id}`)
  }
}
