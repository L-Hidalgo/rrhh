import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { planillaRoutingModule } from './planilla-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlanillaListComponent } from './planilla-list/planilla-list.component';

@NgModule({
    imports: [
        CommonModule,
        planillaRoutingModule,
        SharedModule
    ],
    declarations: [
        PlanillaListComponent
    ]
})
export class planillaModule { }
