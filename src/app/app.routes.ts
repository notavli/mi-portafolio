import { Routes } from '@angular/router';
import { HeroComponent } from './component/hero/hero.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { SobremiComponent } from './component/sobremi/sobremi.component';
import { TecnoComponent } from './component/tecno/tecno.component';
import { ExpereciaComponent } from './component/experecia/experecia.component';
import { ContactoComponent } from './component/contacto/contacto.component';
export const routes: Routes = [
    
        {
        path: '',
        redirectTo: 'hero',
        pathMatch: 'full'
    },
     {
         path: 'hero', component: HeroComponent
    },
    {
         path: 'proyecto', component: ProyectosComponent

    },
    {
         path: 'sobremi', component: SobremiComponent

    },
    {
         path: 'tecno', component: TecnoComponent

    },
     {
         path: 'experencia', component: ExpereciaComponent

    },
    {
         path: 'contacto', component: ContactoComponent

    }
];
