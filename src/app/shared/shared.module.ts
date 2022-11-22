import { NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  exports: [
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule
  ]
})
export class SharedModule { }
