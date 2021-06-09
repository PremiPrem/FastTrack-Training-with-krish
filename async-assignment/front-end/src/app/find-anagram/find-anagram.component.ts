import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackEndService } from '../services/back-end.service';

@Component({
  selector: 'app-find-anagram',
  templateUrl: './find-anagram.component.html',
  styleUrls: ['./find-anagram.component.css']
})
export class FindAnagramComponent implements OnInit {
  
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private backendService: BackEndService,
    public router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      firstText: [''],
      secondText: [''],
    })
  }

  ngOnInit(): void {
    
  }
  submitForm() {
    this.backendService.findAnagram(this.form.value).subscribe((res) => {
      alert(res)
    })

  }

}
