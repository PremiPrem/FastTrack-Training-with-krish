import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-fibanocci',
  templateUrl: './fibanocci.component.html',
  styleUrls: ['./fibanocci.component.css']
})
export class FibanocciComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder , private http: HttpClient) {
    this.form = this.fb.group({
      insertNumber: [''],
      // avatar: [null]
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    let res = this.form.value
    // console.log(this.form.value)
    // console.log(a.insertNumber)
    let number=res.insertNumber
    

   let fib = [0,1];

   if(number == 1){
     alert(number + " index of the fibanocci series is 0")

   }else if (number <=3){
         alert(number + " index of the fibanocci series is 1")  
    }
      else {
        for (let i = 2; i <number; i++) {
          fib[i] = fib[i - 1] + fib[i - 2];
      }
      alert(number + " index of the fibanocci series is "+ fib[number-1])
      }
  
  

  //   for(var i = 1; i <= 100; i++) {
  //     fib[i+1] =fib[i] + fib[i - 1]; 
  //   //fib[i] = fib[i - 1] + fib[i - 2]; 
  //   fib.push(fib[i]);
    
  // }
        
    
  //     if(fib.includes(number)){
  //         alert("Number " + number + " is in the fibanacci Series!!!! in the index of "+ fib.indexOf(number));
  //         // console.log("Number" , number , "is in the fibanacci Series!!!! " , "in the index of ",i-3);
  //         // console.log("fibocci number ", nums, "in the index of ",i-3);//1,2,
  //     }else{
  //         alert("Number " + number + " is not in the fibanacci Series!!!! ")
  //         // console.log("Number" , number , "is not in the fibanacci Series!!!! ");
  //     }
    



  }

}
