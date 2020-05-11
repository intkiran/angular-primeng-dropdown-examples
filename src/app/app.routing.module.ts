import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BasicDropdownComponent } from './basic-dropdown/basic-dropdown.component';





@NgModule({

  imports: [
    RouterModule.forRoot([
      { path: 'basic', component: BasicDropdownComponent },
      { path: 'other', component: BasicDropdownComponent },
      { path: 'position', component: BasicDropdownComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}