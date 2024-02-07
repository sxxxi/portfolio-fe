import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { adminRoutes } from './pages/admin/admin-routing.module';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { errorRoutes } from './pages/error/error-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideRouter(adminRoutes), 
    provideRouter(errorRoutes), 
    provideClientHydration(),
    importProvidersFrom(HttpClientModule)
  ]
};

