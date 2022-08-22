import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "./core/components/add/add.component";
import { listComponent } from "./core/components/list/list.component";


const routes: Routes = [
  {
    path: 'app-listComponent', component: listComponent
  },
  {
    path:'app-addComponent', component: AddComponent
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
