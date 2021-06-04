import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-find-word-count',
  templateUrl: './find-word-count.component.html',
  styleUrls: ['./find-word-count.component.css']
})
export class FindWordCountComponent implements OnInit {
  form: FormGroup;

  public show:boolean = false;

  words: any[] = []


  constructor(public fb: FormBuilder , private http: HttpClient) {
    this.form = this.fb.group({
      insertText: [''],
    })
  }

  ngOnInit(): void {
   

  }

  submitForm() {
    let resultFromForm = this.form.value;
    let textInput =resultFromForm.insertText;

   
      var R =  /(\w|\s)*\w(?=")|\w+/g;
      var output = textInput.match(R);
      
    
      function extractWords(data: any[]){
        var words: any[]=[];
          data.forEach(element => {
            element=element.toLowerCase()

              if (!words.includes(element)) {
                  
                if (element.indexOf('a') > -1 || element.indexOf('e') > -1  || element.indexOf('i') > -1 || element.indexOf('o') > -1 || element.indexOf('u') > -1)
                {
                  
                  words.push(element)
                }                  
              }
          });
          
          var SortedWords=words.sort();
          return SortedWords;
        
      }
      
      this.words=extractWords(output);

      this.show = !this.show;
      
  }

}
