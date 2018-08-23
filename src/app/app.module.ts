import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { MainComponent } from './main/main.component';
import { routes } from './routes';
import { ToastrModule } from 'ngx-toastr';
import { FileUploadModule } from 'ng2-file-upload';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './commonComponent/header/header.component';
import { PlatformComponent } from './globalComponent/Platform/platform.component';
import { AboutComponent } from './globalComponent/about/about.component';
import { SolutionsComponent } from './globalComponent/solutions/solutions.component';
import { ClassfieldsComponent } from './globalComponent/classfields/classfields.component';
import { BlogComponent } from './globalComponent/blog/blog.component';
import { BrandComponent } from './globalComponent/brand/brand.component';
import { InfluencerComponent } from './globalComponent/influencer/influencer.component';
import { LoginInfluencerComponent } from './commonComponent/loginInfluencer/loginInfluencer.component';
import { ModalModule } from 'ngx-bootstrap';
import { LoginBrandComponent } from './commonComponent/loginBrand/loginBrand.component';
import { RegistrationComponent } from './commonComponent/registration/registration.component';
import { UserService } from './core/services/user.service';
import { RegistrationSuccessfullyComponent } from './commonComponent/registrationSuccessfully/registrationSuccessfully.component';
import { WebStorageModule } from 'ngx-store';
import { AuthGuard } from './core/config/auth.guard';
import { LoginHeaderComponent } from './commonComponent/loginHeader/loginHeader.component';
import { ProfileComponent } from './moduleComponent/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainComponent,
    SidenavComponent,
    HeaderComponent,
    AboutComponent,
    SolutionsComponent,
    ClassfieldsComponent,
    BlogComponent,
    BrandComponent,
    PlatformComponent,
    InfluencerComponent,
    LoginInfluencerComponent,
    LoginBrandComponent,
    RegistrationComponent,
    RegistrationSuccessfullyComponent,
    LoginHeaderComponent,
    ProfileComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot(),
    FileUploadModule,
    ModalModule.forRoot(),
    WebStorageModule,
  ],
  providers: [
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
