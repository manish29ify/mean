import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PreloadingStrategyService } from './services/preloading-strategy.service';

import { TemplateComponent } from './pages/template/template.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: "", component: TemplateComponent, canActivate: [AuthGuard], children: [
      { path: "", component: HomeComponent },
      { path: "product", loadChildren: () => import("./modules/product/product.module").then(m => m.ProductModule) }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadingStrategyService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
