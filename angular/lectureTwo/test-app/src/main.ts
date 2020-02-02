// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));




import { of } from 'rxjs';
import { map } from 'rxjs/operators';


const a= Promise.resolve(1).then(x => x + 1)  //kato stigne do tuk avtomatichno shte zaraboti
const b=of(1).pipe(map(x => x + 1))   //Observable
//a tova zakachame go  i nishto trqbva da izpolzvame subscribe za6toto observabalite sa marzelivi

setTimeout(
  ()=>{
    console.log(a)
    a.then(console.log);
  },6000)

  setTimeout(
    ()=>{
      console.log(b)
      b.subscribe(console.log);  //lazy evaluation
    },6000)
