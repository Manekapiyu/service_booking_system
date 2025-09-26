import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing-module';
import { Client } from './client';
import { ClientDashboard } from './pages/client-dashboard/client-dashboard';


@NgModule({
  declarations: [
    Client,
    ClientDashboard
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
