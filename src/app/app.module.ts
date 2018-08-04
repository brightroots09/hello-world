import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

import { HttpClientModule } from '@angular/common/http'

import { EmployeeService } from "./employee.service"

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DirectivesComponent,
    EmployeeComponent,
    EmployeeDetailsComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
