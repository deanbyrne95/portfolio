import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/about/work/work.component';
import { EducationComponent } from './components/about/education/education.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';

@NgModule({
  declarations: [HomeComponent, WorkComponent, EducationComponent, AboutComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomeComponent, WorkComponent, EducationComponent]
})
export class CoreModule { }
