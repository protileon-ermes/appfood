import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';
import { LoadingRestaurantComponent } from './loading-restaurant/loading-restaurant.component';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersEmptyComponent } from './orders-empty/orders-empty.component';
import { OrdersLoadingComponent } from './orders-loading/orders-loading.component';



@NgModule({
  declarations: [RestaurantComponent, LoadingRestaurantComponent, EmptyScreenComponent, OrdersComponent, OrdersEmptyComponent, OrdersLoadingComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [RestaurantComponent, LoadingRestaurantComponent, EmptyScreenComponent, OrdersComponent, OrdersEmptyComponent, OrdersLoadingComponent]
})
export class ComponentsModule { }
