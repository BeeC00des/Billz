import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  faCard= faAddressCard;
  formData !: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService
    ) { }

  ngOnInit(): void {
    this.formData = this.formbuilder.group({
      cardName: ['', Validators.required],
      cardNos: ['', Validators.required],
      expiry:['', Validators.required],
      cvv:['', Validators.required],
      streetAddr:['', Validators.required],
      city:['', Validators.required],
      state:['', Validators.required],
      zipCode:['', Validators.required],

    })

  }

  addData(){
    console.log(this.formData.value)
    if(this.formData.valid){
      this.api.postPayData(this.formData.value)
      .subscribe({
        next:res=>{
          alert("payment details stored");
          this.formData.reset();
        },
        error:()=>{
          alert("payment data sending error")
        }
      })
    }

  }

}
