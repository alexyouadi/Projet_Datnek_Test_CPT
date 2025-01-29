import { EventState, InMemoryDataService } from '@datnek-app/events';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyModule } from '@ngx-formly/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';







export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '');
} 




export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), importProvidersFrom(
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsModule.forRoot([ /** Les états ici EventState */ EventState ]),BrowserModule,
    ReactiveFormsModule,FormsModule,
    FormlyModule.forRoot({
      types: [

      
      ],
    }),
    FormlyBootstrapModule,
    BrowserAnimationsModule, // Pour les animations
    ToastrModule.forRoot() // Configuration de base,


,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
    NgMultiSelectDropDownModule.forRoot(),

    HttpClientModule,
    
    



  )





  ],
};
