import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FoodComponent } from './food.component';
import { FoodRoutingModule } from './food-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FoodService} from './food.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule,FoodRoutingModule, Ng2SmartTableModule, FormsModule],
  declarations: [FoodComponent],
  providers: [FoodService]
})
export class FoodModule { }
