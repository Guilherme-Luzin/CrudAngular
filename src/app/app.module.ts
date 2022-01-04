import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    CreateComponent,
    HomeComponent,
    DetailComponent,
    DeleteComponent,
  ],
  imports: [
    provideFirebaseApp(() => initializeApp({  })),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
