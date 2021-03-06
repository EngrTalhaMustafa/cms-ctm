import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { HomeComponent } from './';
import { AddIncidentComponent } from './add-incident/add-incident.component';
// import { Name3Component } from './';
// import { Name4Component } from './';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'add-incident', component: AddIncidentComponent },
  { path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

