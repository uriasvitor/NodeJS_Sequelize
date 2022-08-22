import { reqService } from './../../services/req.service';
import { Component, OnInit } from "@angular/core";
import { userModel } from '../../models/user.model';

@Component({
  selector:'app-listComponent',
  templateUrl:'./list.component.html',
  styleUrls:['./list.component.css']
})
export class listComponent implements OnInit {

  list?:userModel[];

  constructor(private reqservice:reqService){}

  ngOnInit(): void {
    this.getAll()
  }

  public getAll(){
    this.reqservice.get().subscribe((data:any)=>{
      console.log(data)
      this.list = data;
    })
  }
}
