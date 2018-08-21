import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { PlatformComponent } from './globalComponent/Platform/Platform.component';
import { AboutComponent } from './globalComponent/about/about.component';
import { SolutionsComponent } from './globalComponent/solutions/solutions.component';
import { ClassfieldsComponent } from './globalComponent/classfields/classfields.component';
import { BlogComponent } from './globalComponent/blog/blog.component';
import { BrandComponent } from './globalComponent/brand/brand.component';
import { InfluencerComponent } from './globalComponent/influencer/influencer.component';
import { LoginBrandComponent } from './commonComponent/loginBrand/loginBrand.component';
import { LoginInfluencerComponent } from './commonComponent/loginInfluencer/loginInfluencer.component';
import { RegistrationComponent } from './commonComponent/registration/registration.component';



const mainRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, },
  { path: 'platform', component: PlatformComponent, },
  { path: 'about', component: AboutComponent, },
  { path: 'solutions', component: SolutionsComponent, },
  { path: 'classfields', component: ClassfieldsComponent, },
  { path: 'blog', component: BlogComponent, },
  { path: 'brand', component: BrandComponent, },
  { path: 'influencer', component: InfluencerComponent, },
  { path: 'loginBrand', component: LoginBrandComponent, },
  { path: 'loginInfluencer', component: LoginInfluencerComponent, },
  { path: 'registration', component: RegistrationComponent, }
];


export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: MainComponent, children: mainRoutes },
 
];
