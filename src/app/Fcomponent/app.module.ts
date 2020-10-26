import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routDefinition, AppRoutingModule } from '../Frouting/routDefinition';
import { LogoComponent } from './logo/logo.component';
import { MenueComponent } from './menue/menue.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { MyServiceService } from '../Fservice/my-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NewKriterionComponent } from './new/new-kriterion/new-kriterion.component';
import { NewCategoryComponent } from './new/new-category/new-category.component';
import { KriterionComponent } from '../Fcomponent/kriterion/kriterion.component';
import { CategoriaComponent } from '../Fcomponent/categoria/categoria.component';
import { SelectedCategoiaComponent } from '../Fcomponent/selected-categoia/selected-categoia.component';
import { CategoriesService } from '../Fservice/Scategory/categories.service';
import { KriterionService } from '../Fservice/Skriteionim/kriterion.service';
import { OperatorService } from '../Fservice/Soperator/operator.service';
import { PersonService } from '../Fservice/Sperson/person.service';
import { TypeValueService } from '../Fservice/Svalues/type-value.service';
import { FormItemComponent } from './form-item/form-item.component';


import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {FileUploadModule} from 'primeng/fileupload';

import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';

import {CarouselModule} from 'primeng/carousel';
import {MenuModule} from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import {StepsModule} from 'primeng/steps';
import {MatStepperModule} from '@angular/material/stepper';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {MatInputModule} from '@angular/material/input';
import {DataScrollerModule} from 'primeng/datascroller';
import {MatButtonModule, MatCheckboxModule,MatIconModule, MatIconRegistry} from '@angular/material';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import { ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {GMapModule} from 'primeng/gmap';
import {DropdownModule} from 'primeng/dropdown';

import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/Sidenav';

import { EditItemComponent } from './edit-item/edit-item.component';
import { EditKriterionComponent } from './edit-kriterion/edit-kriterion.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatListModule } from '@angular/material/list';

import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatSelectModule } from '@angular/material/select';

import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import {  MatFormFieldModule} from '@angular/material/form-field'

import {CaptchaModule} from 'primeng/captcha';

import { ChartModule } from 'primeng/chart';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MultiSelectModule } from 'primeng/multiselect';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ListPersonComponent } from './list-person/list-person.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { DataViewModule } from 'primeng/dataview';

import { TableFoundLostComponent } from './table-found-lost/table-found-lost.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { google } from "google-maps";
import {GooglePlaceModule} from "ngx-google-places-autocomplete";
import { PageHomeComponent } from './page-home/page-home.component';
import { FootereComponent } from './footere/footere.component'

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    MenueComponent,
    LogoComponent,
    LoginComponent,
    HomeComponent,
    NewLoginComponent,
    NewCategoryComponent, 
    NewKriterionComponent,
     KriterionComponent,  
     CategoriaComponent, 
     SelectedCategoiaComponent, FormItemComponent, ListPersonComponent ,  MyDashboardComponent, TableFoundLostComponent, EditPersonComponent, EditItemComponent, EditKriterionComponent, PageHomeComponent, FootereComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( routDefinition , {enableTracing: true}),GooglePlaceModule,
    MatButtonModule, MatCheckboxModule,FormsModule,ReactiveFormsModule,TableModule,GMapModule,MultiSelectModule,MessageModule,MessagesModule,
    TabMenuModule,FieldsetModule,DropdownModule,ChartModule,KeyFilterModule,ProgressSpinnerModule,InputSwitchModule,
    BrowserModule,HttpClientModule,StepsModule,MatStepperModule,MatInputModule,MenubarModule,TooltipModule,
    ButtonModule,ToolbarModule,MenuModule,AutoCompleteModule,PanelModule,DynamicDialogModule,DialogModule,
    AppRoutingModule,CalendarModule,MatRadioModule,MatChipsModule,MatSidenavModule,MatMenuModule,MatButtonToggleModule,BrowserAnimationsModule,MatCardModule,CheckboxModule,FileUploadModule,ToastModule,DataScrollerModule,CarouselModule,MatIconModule,DataViewModule,
    MatFormFieldModule,
    MatButtonModule, MatCheckboxModule, FormsModule, ReactiveFormsModule, TableModule, GMapModule, MultiSelectModule, MessageModule, MessagesModule,
    TabMenuModule, FieldsetModule, DropdownModule, ChartModule, KeyFilterModule, ProgressSpinnerModule, InputSwitchModule,
    BrowserModule, HttpClientModule, StepsModule, MatStepperModule, MatInputModule, MenubarModule, TooltipModule,
    ButtonModule, ToolbarModule, MenuModule, AutoCompleteModule, PanelModule, DynamicDialogModule, DialogModule,
    AppRoutingModule, CalendarModule, MatRadioModule, MatChipsModule, MatSidenavModule, MatMenuModule, MatButtonToggleModule, BrowserAnimationsModule, MatCardModule, CheckboxModule, FileUploadModule, ToastModule, DataScrollerModule, CarouselModule, MatIconModule, DataViewModule
    , MatToolbarModule, MatDatepickerModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatDialogModule, MatDividerModule,
    MatExpansionModule, MatGridListModule, MatListModule, MatNativeDateModule, MatRippleModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatSelectModule,MatSliderModule,MatSlideToggleModule,MatSnackBarModule,MatSortModule,MatTableModule,MatTabsModule,MatTooltipModule,MatTreeModule,CaptchaModule,
    





  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [MyServiceService,CategoriesService,KriterionService,OperatorService,PersonService,TypeValueService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

