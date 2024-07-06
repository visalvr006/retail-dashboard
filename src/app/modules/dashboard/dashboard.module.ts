import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { ImageContainerComponent } from './image-container/image-container.component';
import { DashboardRoutes } from './dashboard-routing.module';
import { DescriptionComponent } from './description/description.component';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [DashboardContainerComponent, ImageContainerComponent, DescriptionComponent],
  imports: [
    CommonModule,
    DashboardRoutes,
    ImageModule,
    CardModule,
    SidebarModule
  ],
  exports: [DashboardContainerComponent, ImageContainerComponent]
})
export class DashboardModule { }
