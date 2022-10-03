import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { userModel } from '../../models/user.model';
import { reqService } from '../../services/req.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  card?:userModel;
  lists?:userModel;
  constructor(private route: ActivatedRoute, private router: Router, private service: reqService) { }

  ngOnInit(): void {
    const cardId = this.route.snapshot.paramMap.get('id')
    this.service.getById(cardId);
    this.getId(cardId)
  }

  getId(id:any){
    this.service.getById(id).subscribe((data)=>{
      this.lists = data
      console.log(this.lists)
    })
  }

}
