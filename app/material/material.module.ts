import { NgModule } from '@angular/core';
import { MatInputModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatOptionModule, MatIconModule, MatGridListModule, MatButtonModule } from '@angular/Material';

const MATERIALCOMPONENTS = [
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatOptionModule,
  MatIconModule,
  MatFormFieldModule,
  MatGridListModule,
  MatButtonModule
]

@NgModule({

  imports: [ MATERIALCOMPONENTS ],
  exports: [ MATERIALCOMPONENTS ]
})
export class MaterialModule { }
