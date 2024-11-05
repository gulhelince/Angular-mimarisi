import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { ProductSpecComponent } from './components/product-spec/product-spec.component';

const routes: Routes = [
  //default route ayarlamak
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"home/:id",component:HomeComponent}, //router parametresi tanımlandı
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},

  //Child Routes
  //child route altında child route tanımlamma
  {path:"products",component:ProductComponent,
    children:[
      {path:"detail/:id",component:ProductDetailComponent,
        children:[
          {path:"",redirectTo:"overview",pathMatch:"full"},//default olarak çağrılır
          {path:"overview",component:ProductOverviewComponent},
          {path:"spec",component:ProductSpecComponent}
        ]
      }
    ]
  },


  //hiç bir path'e uygun olmayan istek geldiğinde 
  {path:"**", component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
