import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableRoutingModule } from './table-routing.module';
import { CardComponent } from './card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    TableComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class TableModule { }
