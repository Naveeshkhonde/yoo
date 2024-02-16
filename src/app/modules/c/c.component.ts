import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {
// @Input() sendData:any; // P => C

@Output() usersData = new EventEmitter<any>()
userName:string='Send Data';
  ngOnInit(): void {
    // console.log(this.sendData)  // P => C
  }

  // onNameChange () {              // C => P
  //   this.usersData.emit(this.userName);
  // }

  // =========================================
  
  constructor(private shared: SharedService){  
    this.shared.getMessage.subscribe(e=>console.log(e))
  }
}
