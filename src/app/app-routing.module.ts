import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { PComponent } from './modules/p/p.component';
import { FormDataComponent } from './components/form-data/form-data.component';

const routes: Routes = [
  // { path: '', component: UserComponent},  //API
  // {path:'',component:PComponent} // Comm
    { path:'', component: FormDataComponent} //Form
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
