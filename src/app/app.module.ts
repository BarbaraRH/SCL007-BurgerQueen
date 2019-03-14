import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { OrderButtonsComponent } from './order-buttons/order-buttons.component';

import { FirestoreSettingsToken } from '@angular/fire/firestore';

import { ConnectionService } from './services/connection.service';
import { ListComponent } from './components/list/list.component';
import { AddOrderComponent } from './components/add-order/add-order.component'

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OrderButtonsComponent,
    ListComponent,
    AddOrderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }, ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
