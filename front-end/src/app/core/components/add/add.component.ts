import { OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { reqService } from '../../services/req.service';

@Component({
  selector: 'app-addComponent',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  public form: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    occupation: new FormControl('',[Validators.required]),
    newsletter: new FormControl(true,[Validators.required])
  })

  constructor(private reqservice:reqService) { }

  public post(){
    this.reqservice.post(this.form.value).subscribe((data)=>{
      console.log(data)
    })
  }

  ngOnInit(): void {
    console.log(this.form.value)
  }

}
