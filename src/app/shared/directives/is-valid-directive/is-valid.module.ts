import { NgModule } from '@angular/core';
import { IsValidDirective } from './is-valid.directive';
import { CommonModule } from '@angular/common';

@NgModule({
 declarations: [ IsValidDirective ],
 exports: [ IsValidDirective ],
 imports: [ CommonModule ]
})
export class IsValidModule {}
