import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { RouterModule  } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withViewTransitions({
        skipInitialTransition:true,
        onViewTransitionCreated(transitionInfo){
          console.log({
            transitionInfo
          })
        }
      })
    ),

    importProvidersFrom(
      HttpClientModule
    )

  ]
};
