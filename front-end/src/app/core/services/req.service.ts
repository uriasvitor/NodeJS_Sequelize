import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class reqService {
  private env = environment.envAddress

  constructor(private http:HttpClient){}

}
