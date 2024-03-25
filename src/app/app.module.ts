import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import { FollowupCreateComponent } from './components/followup/followup-create/followup-create.component';
import { FollowupEditComponent } from './components/followup/followup-edit/followup-edit.component';
import { FollowupListComponent } from './components/followup/followup-list/followup-list.component';
import { FollowupDetailsComponent } from './components/followup/followup-details/followup-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WardCreateComponent } from './components/ward/ward-create/ward-create.component';
import { WardEditComponent } from './components/ward/ward-edit/ward-edit.component';
import { WarddetailsComponent } from './components/ward/warddetails/warddetails.component';
import { WardlistComponent } from './components/ward/wardlist/wardlist.component';

@NgModule({
  declarations: [
    AppComponent,
    WardCreateComponent,
    WardEditComponent,
    WarddetailsComponent,
    WardlistComponent,
    FollowupCreateComponent,
    FollowupEditComponent,
    FollowupListComponent,
    FollowupDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
