import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
myForm:any =FormGroup;

constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      items: this.fb.array([])
    })
  }


  addItem() {
    const item = this.fb.group({
      // Define your form controls here
    });
  
    // Add the new form group to the FormArray
    this.items.push(item);
  }
  
  // Helper method to get the 'items' FormArray
  get items() {
    return this.myForm.get('items') as FormArray;
  }
}
