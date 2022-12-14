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
      },

      error:(err)=>{
        this.error = true
      }
    })
  }

  public updateCard(){

    const data = {
      id: this.lists?.id,
      name: this.form.value.name,
      occupation:this.form.value.occupation,
      newsletter:this.form.value.newsletter,
    }

    this.service.updateCard(data).subscribe({
        next: (data)=>{
          this.status = true
          console.log(data)
        },

        error:(err)=>{
          this.error = true
          console.log(err)
        }

      }
    )
  }
}
