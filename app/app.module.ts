import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//angular material
import { MatInputModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatOptionModule, MatIconModule } from '@angular/Material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatOptionModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule

   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
