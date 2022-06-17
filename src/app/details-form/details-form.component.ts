import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {

  formData !: FormGroup;
  

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService
    ) { }

  ngOnInit(): void {
    this.formData = this.formbuilder.group({
      name: ['', Validators.required],
      streetAddr:['', Validators.required],
      city:['', Validators.required],
      state:['', Validators.required],
      zipCode:['', Validators.required],

    })

  }

  addData(){
    console.log(this.formData.value)
    if(this.formData.valid){
      this.api.postUserData(this.formData.value)
      .subscribe({
        next:res=>{
          alert("User details stored");
          this.formData.reset();
        },
        error:()=>{
          alert("user data sending error")
        }
      })
    }

  }


}
