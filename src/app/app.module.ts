import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { DirDirective } from './directives/dir.directive';
import { MypipePipe } from './pipes/mypipe.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './api.interceptor';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ChildComponent } from './components/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TemplateComponent } from './pages/template/template.component';
import { SiblingComponent } from './components/sibling/sibling.component';




@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    DirDirective,
    MypipePipe,
    NotfoundComponent,
    ChildComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TemplateComponent,
    SiblingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
