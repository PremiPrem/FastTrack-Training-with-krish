import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackEndService } from '../services/back-end.service';

@Component({
  selector: 'app-find-word-occurance',
  templateUrl: './find-word-occurance.component.html',
  styleUrls: ['./find-word-occurance.component.css']
})
export class FindWordOccuranceComponent implements OnInit {
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private backendService: BackEndService,
    public router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      sentence: [''],
  
    })

  
  }
  ngOnInit(): void {
  }
  submitForm() {
    this.backendService.findWordOccurance(this.form.value).subscribe((res) => {
      alert(res)
    })

  }

}
