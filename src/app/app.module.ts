import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MaterialModule } from './/material.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { InventoryModule } from './inventory/inventory.module'
import { ManagerModule } from './manager/manager.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { PosModule } from './pos/pos.module'
import { UserModule } from './user/user.module'

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ManagerModule,
    InventoryModule,
    PosModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
