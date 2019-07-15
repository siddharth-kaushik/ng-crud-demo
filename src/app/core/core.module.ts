import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@material/material.module';
import { WellModule } from '@well/well.module';

import { AuthPageComponent } from './pages/auth/auth-page.component';
import { HomePageComponent } from './pages/home/home-page.component';

import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProgressComponent } from './components/progress/progress.component';
import { RegisterComponent } from './components/register/register.component';

import { ReversePipe } from '@core/pipes/reverse.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    AvatarComponent,
    AuthPageComponent,
    HomePageComponent,
    PageNotFoundComponent,
    HeroComponent,
    FooterComponent,
    ReversePipe,
    ModalComponent,
    AuthFormComponent,
    LoginComponent,
    RegisterComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    WellModule
  ],
  exports: [ProgressComponent, NavbarComponent, FooterComponent, ReversePipe],
})
export class CoreModule {}
