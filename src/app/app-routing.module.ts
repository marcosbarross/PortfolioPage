import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import {PavilhaoCanadaComponent} from './carrosseis/pavilhao-canada/pavilhao-canada.component';
import {CarouselComponent} from './carrosseis/Republica/carousel.component';
import {CentroEconoCriativaComponent} from './carrosseis/centro-econo-criativa/centro-econo-criativa.component';

const routes: Routes = [
  
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'pavilhao-canada', component: PavilhaoCanadaComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'CentroEconoCriativa', component: CentroEconoCriativaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
