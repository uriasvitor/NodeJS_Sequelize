import { Observable, switchMap } from 'rxjs';
import { reqService } from './../../services/req.service';
import { Component, OnInit } from "@angular/core";
import { userModel } from '../../models/user.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector:'app-listComponent',
  templateUrl:'./list.component.html',
  styleUrls:['./list.component.css']
})
export class listComponent implements OnInit {

  list?:userModel[];
  card?: Observable<userModel>;
  error:boolean = false;
  selectedId?:number;

  constructor(private reqservice:reqService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getAll()
    this.card = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));

        return this.reqservice.get();
      })
    )
  }

  public getAll(){
    this.reqservice.get().subscribe({
      next: (data:any)=>{
        this.list = data;
      },

      error:(error)=>{
        this.error = true
        console.log('ERROR',error)
      }
    })
  }
}
