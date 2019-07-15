import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthPageComponent } from '@core/pages/auth/auth-page.component';
import { HomePageComponent } from '@core/pages/home/home-page.component';

import { PageNotFoundComponent } from '@core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'auth', component: AuthPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
