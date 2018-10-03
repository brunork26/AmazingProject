import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule, MatToolbarModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule
  ],
  declarations: [
   
  ],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [

  ]
})
export class MaterialModule { }

