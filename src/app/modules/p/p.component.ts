import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-p',
  templateUrl: './p.component.html',
  styleUrls: ['./p.component.css']
})
export class PComponent {
  // data:any={id:1,name:'abci'}  // P => C

  // getDta(e:any){                // C => P
  //   console.log(e)
  // }

  // ======================================

  constructor(private shared: SharedService){}

  updateMessage(){
    this.shared.setMessage('This is sending data.')
  }
}
