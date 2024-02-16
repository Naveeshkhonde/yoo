import { Component, OnInit } from '@angular/core';
import { SettingService } from './setting.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: any = [];
yo:any=[
  {name:'abc',age:12}
]

  constructor(private _user: SettingService,private modalService: NgbModal){}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._user.getUsers().subscribe((data: []) => {
      this.userList = data;
  });
  }

  addUser() {
		const modalRef = this.modalService.open(AddUserComponent, {
			size: "lg",
			windowClass: "modal-holder",
			centered: true,
			backdrop: "static",
			keyboard: false,
		});
		modalRef.componentInstance.data = this.yo;

		modalRef.result.then((result) => {
			this.getData();
		});
	}

}
