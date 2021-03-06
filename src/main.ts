import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

declare var $ : any;

if (environment.production) {
  enableProdMode();
}

class AppComponentModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


