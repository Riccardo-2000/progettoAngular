import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistratiRoutingModule } from './registrati-routing.module';
import { RegistratiComponent } from './registrati.component';


@NgModule({
  declarations: [RegistratiComponent],
  imports: [
    CommonModule,
    RegistratiRoutingModule
  ]
})
export class RegistratiModule { }
