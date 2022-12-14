import { CardDetailsComponent } from './core/components/card-details/card-details.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddComponent } from "./core/components/add/add.component";
import { listComponent } from "./core/components/list/list.component";
import { EditComponent } from './core/components/edit/edit.component';


const routes: Routes = [
  {
    path: 'app-listComponent', component: listComponent
  },

  {
    path:'app-addComponent', component: AddComponent
  },

  {
    path:'card-details/:id', component: CardDetailsComponent
  },

  {
    path:'app-edit/:id', component: EditComponent
  },

  {
    path:'**', component: AddComponent
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
