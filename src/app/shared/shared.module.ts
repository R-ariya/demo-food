import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
  ],
  entryComponents: [

  ],
  providers: [
  ]
})
export class SharedModule { }
