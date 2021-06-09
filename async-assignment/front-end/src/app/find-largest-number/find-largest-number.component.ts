import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BackEndService } from '../services/back-end.service';

@Component({
  selector: 'app-find-largest-number',
  templateUrl: './find-largest-number.component.html',
  styleUrls: ['./find-largest-number.component.css']
})
export class FindLargestNumberComponent implements OnInit {
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private backendService: BackEndService,
    public router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      array: [''],
      index: [''],
    })

    
  }

  ngOnInit(): void {
  }
  submitForm() {
  
    var result=this.form.value;
    console.log(result);
    var commaArray=result.array;
  

    var finalArray = commaArray.split(',').map(function(item : any) {
        return parseInt(item, 10);
    });

    var resultObj= {
      "array" : finalArray,
      "index" : result.index
    }
    //console.log(resultObj)

  
   this.backendService.findLargestNumber(resultObj).subscribe((res) => {
      alert(res)
    })

  }

}
