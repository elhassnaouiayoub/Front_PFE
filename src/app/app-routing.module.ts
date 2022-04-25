import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowAllComponent } from './components/show-all/show-all.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path: 'user', component: ShowAllComponent},
  {path: 'update', component: UpdateComponent},
  {path: '', redirectTo:'/user', pathMatch:'full'},
  {path: '**',redirectTo:'/user', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
