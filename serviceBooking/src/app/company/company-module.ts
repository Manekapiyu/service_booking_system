import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing-module';
import { Company } from './company';
import { CompanyDashboard } from './pages/company-dashboard/company-dashboard';


@NgModule({
  declarations: [
    Company,
    CompanyDashboard
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
