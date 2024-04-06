import { Component, OnInit, inject } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import Swal from "sweetalert2";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";




export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
];
@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit {
  createCollection: FormGroup;
  constructor(private fb: FormBuilder ,private firestore: AngularFirestore) {
    this.createCollection = this.fb.group({
      collectionName: new FormControl(null, [Validators.required]),
    desc: new FormControl(null),
    createdBy: new FormControl(null, [Validators.required]),
    isActive: new FormControl(null),
    })
  }
  // firestore:AngularFirestore= inject(AngularFirestore)
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {}
  onSubmit() {
    // const formData = this.myForm.value;
    if(this.createCollection.valid){
      console.log(this.createCollection.getRawValue());
      
      Swal.fire(
        'Congrats!',
        'New Collection Has Been Created','success'
      )
      this.createCollection.reset();
    }else{
      Swal.fire('Error!', 'Please Fill All Fields Correctly','error')
      console.log(this.createCollection.getRawValue());
    }
  }
  // addCollection(collection):Observable<any>{
  //   let ref = doc(this.firestore, 'collection' , collection?.uuid)

  // }
} 
