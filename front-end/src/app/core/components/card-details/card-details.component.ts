import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { userModel } from '../../models/user.model';
import { reqService } from '../../services/req.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  card?:userModel;
  lists?:userModel;
  status:boolean = false;
  display:any;

  constructor(private route: ActivatedRoute, private router: Router, private service: reqService) { }

  public form: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    occupation: new FormControl('',[Validators.required]),
    newsletter: new FormControl(true,[Validators.required])
  })

  ngOnInit(): void {
    const cardId = this.route.snapshot.paramMap.get('id')
    this.service.getById(cardId);
    this.getId(cardId)
  }

  public getId(id:any){
    this.service.getById(id).subscribe({
      next: (data:any)=>{
        this.lists = data
        console.log(this.lists)
      }
    })
  }
  public updateCard(){
    this.service.updateCard(this.form.value).subscribe((data)=>{
      console.log(data)
    })
  }

  public deleteCard(id:any){
    this.service.deleteById(id).subscribe({
      next: (data:any)=>{
        this.status = true;
        this.timer(10);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }


  timer(seconds:any) {
    const timer = setInterval(() => {
      seconds--;
      this.display = seconds

      if(seconds < 1){
        clearInterval(timer)
        this.router.navigate(['/app-listComponent'])
      }
    }, 1000);
  }
}
