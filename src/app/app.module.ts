import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ChickenCreateComponent } from './chicken-create/chicken-create.component';
import { ChickensListComponent } from './chickens-list/chickens-list.component';
import { EggCreateComponent } from './egg-create/egg-create.component';
import { EggsListComponent } from './eggs-list/eggs-list.component';
import { ChickenEditComponent } from './chicken-edit/chicken-edit.component';
import { FarmsListComponent } from './farms-list/farms-list.component';
import { FarmCreateComponent } from './farm-create/farm-create.component';
import { FarmEditComponent } from './farm-edit/farm-edit.component';
import { ChickenDetailComponent } from './chicken-detail/chicken-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ChickenCreateComponent,
    ChickensListComponent,
    EggCreateComponent,
    EggsListComponent,
    ChickenEditComponent,
    FarmsListComponent,
    FarmCreateComponent,
    FarmEditComponent,
    ChickenDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
