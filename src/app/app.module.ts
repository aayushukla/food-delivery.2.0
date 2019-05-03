import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { EditMenuComponent } from './editmenu.component';
import { AdminModule } from 'src/admin/admin.module';
import { RestaurantModule } from 'src/resturant/restaurant.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EditMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AdminModule,
    RestaurantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
