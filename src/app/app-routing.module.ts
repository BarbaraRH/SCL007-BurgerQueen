import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './components/order/order.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';

const routes: Routes = [{ path: 'order', component: OrderComponent },
{ path: 'kitchen', component: KitchenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
