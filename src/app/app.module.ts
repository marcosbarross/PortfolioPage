import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { ProjectsComponent } from './projects/projects.component';
import { CarouselComponent } from './carrosseis/Republica/carousel.component'
import { CarouselModule } from '@coreui/angular';
import { PavilhaoCanadaComponent } from './carrosseis/pavilhao-canada/pavilhao-canada.component';
import { CentroEconoCriativaComponent } from './carrosseis/centro-econo-criativa/centro-econo-criativa.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    ProjectModalComponent,
    ProjectsComponent,
    CarouselComponent,
    PavilhaoCanadaComponent,
    CentroEconoCriativaComponent,
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }