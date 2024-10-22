import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideHttpClient() //esta nova abordagem evita a necessidade de adicionar provideHttpClient() em cada componente indivdualmente
    //coloca-se um providedIn: 'root' em cada componente para nao precisar colocá-los aqui
    ]
};
