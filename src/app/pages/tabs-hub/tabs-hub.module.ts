import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsHubPage } from './tabs-hub.page';
import {TabsHubPageRoutingModule} from './tabs-hub.router.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsHubPageRoutingModule
  ],
  declarations: [TabsHubPage]
})
export class TabsHubPageModule {}
