import { Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { LayoutComponent } from './layout/layout.component';

export const layoutRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path:"",
        component:HomePageComponent,
      }
    ]
  },
];

// export default layoutRoutes;
