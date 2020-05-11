import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BasicDropdownComponent } from './basic-dropdown/basic-dropdown.component';
import { OptionlabelComponent } from './optionlabel/optionlabel.component';





@NgModule({

  imports: [
    RouterModule.forRoot([
      { path: 'basic', component: BasicDropdownComponent },
      { path: 'customlabel', component: OptionlabelComponent },
      { path: 'position', component: BasicDropdownComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}