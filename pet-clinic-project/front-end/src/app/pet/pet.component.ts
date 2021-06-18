import { Component, OnInit } from '@angular/core';
import pets from './data/pets.json';
import { BackEndService } from 'src/services/back-end.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, FormGroup, Validators ,FormBuilder} from "@angular/forms";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  title:string = 'Pet Clinic';

pets: any = [] ;
petById : any;

addPetForm: FormGroup;
EditPetForm: FormGroup;
  
constructor(
  public router: Router,
  public backendService: BackEndService,
  private actRoute: ActivatedRoute,
  private modalService: NgbModal,
  public fb: FormBuilder,
  private toastr: ToastrService,
) { 
  this.addPetForm = this.fb.group({
    petName: [''],
    petAuthorName: [''],
    breed: [''],
    dob: [''],
    breedAddress: ['']
  })

  this.EditPetForm=this.fb.group({
    _id:[''],
    petName: [''],
    petAuthorName: [''],
    breed: [''],
    dob: [''],
    breedAddress: ['']
  })


    this.backendService.getAllPetDetails().subscribe(res => {
      console.log(res)
      this.pets = res;
    })
 }


 addpetDetails() {
   console.log(this.addPetForm.value)
    this.backendService.addpetDetails(this.EditPetForm.value).subscribe((res) => {
      
        this.backendService.getAllPetDetails().subscribe(res => {
          // console.log(res)/
          this.pets = res;
        })
    })

}

editPetDetails(){
  console.log(this.EditPetForm.value)
  let id=this.EditPetForm.value._id;
  console.log(id);
  this.backendService.editPetDetails(id,this.addPetForm.value).subscribe((res) => {
      
    this.backendService.getAllPetDetails().subscribe(res => {
      // console.log(res)/
      this.pets = res;
    })
  })
}


 closeResult: string ="";
 open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

openEditModal(content: any, id : any) {
  this.backendService.getPetDetailsById(id).subscribe(res => {
      console.log(res[0])
      this.petById=res[0];
  })
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}




private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}



 ngOnInit() {
   
 }
 deletePet(id: any){
  this.backendService.deletePetRecord(id).subscribe({next: res => {
      if (res.status === 204) {
        this.toastr.success('Successfully Deleted')
        this.backendService.getAllPetDetails().subscribe(res => {
          console.log(res)
          this.pets = res;
        })
      } else {
        this.toastr.error('Cannot delete the record', 'Error!')
      }
    },
    error: error => {
      this.toastr.error('Cannot delete the record', 'Error!')
    }
    
  })

 }
 

}

