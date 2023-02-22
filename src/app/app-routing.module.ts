import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationsComponent } from './certifications/certifications.component';
import { CodingstatsComponent } from './codingstats/codingstats.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkexpComponent } from './workexp/workexp.component';

const routes: Routes = [
  {path:'',component:WorkexpComponent},
  {path:'workexp', component:WorkexpComponent},
  {path:'education', component:EducationComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'skills',component:SkillsComponent},
  {path:'certifications',component:CertificationsComponent},
  {path:'codingstats',component:CodingstatsComponent},
  {path:'**',component:EducationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
