import { reqService } from './../../services/req.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userModel } from '../../models/user.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  status:boolean = false;
  error:boolean = false;
  lists?:userModel;

  public form: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    occupation: new FormControl('',[Validators.required]),
    newsletter: new FormControl(true,[Validators.required]),
  })

  constructor(private service:reqService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const cardId = this.router.snapshot.paramMap.get('id')
    this.getId(cardId)
    console.log(this.lists)
  }

  public getId(id:any){
    this.service.getById(id).subscribe({
      next: (data:any)=>{
        this.lists = data

        this.form.patchValue(
          {
            name:this.lists?.name,
            occupation:this.lists?.occupation,
            newsletter:this.lists?.newsletter,
          })
      }
    })
  }

  public updateCard(){
    const data = this.form.value

    this.service.updateCard(this.form.value).subscribe({
      next: (data)=>{
        console.log(data)
      }
    })
  }
}
