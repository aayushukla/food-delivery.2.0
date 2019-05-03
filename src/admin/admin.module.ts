
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { adminRoutes } from './admin.routes';
import { AdminComponent } from './admin.component';
import { RestaurantModule } from 'src/resturant/restaurant.module';

@NgModule({
    declarations: [AdminComponent],
    imports: [BrowserModule,
        RouterModule.forChild(adminRoutes),
        HttpClientModule],
    providers: [],
    exports: [AdminComponent,
        RouterModule]
})
export class AdminModule {

}