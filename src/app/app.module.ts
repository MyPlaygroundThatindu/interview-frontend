import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { SalaryComponent } from './salary/salary.component';
import { FormComponent } from './form/form.component';
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from "@angular/forms";
import {EmployeeService} from "./service/employee.service";

const routes: Routes = [
  {
    path:'',
    redirectTo:'/app',
    pathMatch:'full'
  },
  {
    path:'app',
    component:HomeComponent,
  },
  {
    path:'employees',
    component:EmployeesComponent
  },
  {
    path:'salaries',
    component:SalaryComponent
  },
  {
    path:'error',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    EmployeesComponent,
    SalaryComponent,
    FormComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
