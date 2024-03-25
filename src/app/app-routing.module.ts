import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WardlistComponent } from './components/wardlist/wardlist.component';
import { WardCreateComponent } from './components/ward-create/ward-create.component';
import { WardEditComponent } from './components/ward-edit/ward-edit.component';
import { WarddetailsComponent } from './components/warddetails/warddetails.component';

const routes: Routes = [
  { path: "", redirectTo: "/ward", pathMatch: "full" },
  { path: "ward", component: WardlistComponent, pathMatch: "full" },
  { path: "ward/create", component: WardCreateComponent },
  { path: "ward/:id/update", component: WardEditComponent },
  { path: "warddetails/details/:id", component: WarddetailsComponent },
  { path: "ward/edit/:id", component: WardEditComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
