import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingService } from '../user/setting.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Input() data:any;
  edit:any ={userId:1,name:'asd'}
  constructor(public modal: NgbActiveModal,
    private _user: SettingService){ }

  ngOnInit(): void {
  this.editData();

  this.removeUser();
  }

  addData(){
    this._user.addUser(this.data).subscribe((data: []) => {
      console.log(data)
  });
  }

  editData(){
    this._user.updateUser(this.edit).subscribe((data: []) => {
      console.log(data)
  });
  }
  
  removeUser(){
    this._user.removeUser(this.edit.userId).subscribe((data: []) => {
      console.log(data)
  });
  }
}
