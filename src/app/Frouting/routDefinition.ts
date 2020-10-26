import { HomeComponent } from "../Fcomponent/home/home.component";
import { ItemDetailComponent } from "../Fcomponent/item-detail/item-detail.component";
import { LoginComponent } from "../Fcomponent/login/login.component";
import { NewLoginComponent } from "../Fcomponent/new-login/new-login.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NewKriterionComponent } from '../Fcomponent/new/new-kriterion/new-kriterion.component';
import { MyDashboardComponent } from '../Fcomponent/my-dashboard/my-dashboard.component';
import { TableFoundLostComponent } from '../Fcomponent/table-found-lost/table-found-lost.component';
import { EditPersonComponent } from '../Fcomponent/edit-person/edit-person.component';
import { EditItemComponent } from '../Fcomponent/edit-item/edit-item.component';
import { FormItemComponent } from '../Fcomponent/form-item/form-item.component';
import { PageHomeComponent } from '../Fcomponent/page-home/page-home.component';

export const routDefinition =
[
    
    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'search/:type',
        component: ItemDetailComponent
    },
       
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'newLogin',
        component: NewLoginComponent
    },

    {
        path: 'MyDashboard',
        component: MyDashboardComponent
    },
    {
        path: 'tableLF/:LorF',
        component: TableFoundLostComponent
    },
    {
        path: 'EditUser',
        component: EditPersonComponent
    },
    {
        path: 'EditItem/:itemId',
        component: EditItemComponent
    },
    {
        path: 'form/:item',
        component: FormItemComponent
    },
    {
        path: 'firstHome',
        component: PageHomeComponent
    },
    
    
]

@NgModule({
    imports: [RouterModule.forRoot(routDefinition)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }