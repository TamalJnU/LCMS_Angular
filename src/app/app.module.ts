import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Ensure ReactiveFormsModule is imported
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { AddPoliceComponent } from './manage-module/add-police/add-police.component';
import { ManageModuleModule } from './manage-module/manage-module.module';
import { HomeModuleModule } from './home-module/home-module.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    SidebarComponentComponent,
    FooterComponentComponent,
    
    // Other component declarations...
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ManageModuleModule,
    HomeModuleModule,
     // Add ReactiveFormsModule here
    // Other module imports...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
