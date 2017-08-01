import {Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';
import { CategoryComponent } from './category/category.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AboutUsComponent } from './about-us/about-us.component';

const appRoutes: Routes=[
        {
        path:'',
        component:ProductComponent
        },
        {
        path:'product',
        component:ProductComponent
        },
        {
        path:'member',
        component:MemberComponent
        },
        {
        path:'category',
        component:CategoryComponent
        },
        {
        path:'about-us',
        component:AboutUsComponent
        },
         {
    	    path: 'admin',
    	    redirectTo: 'admin/dashboard',
    	    pathMatch: 'full',
    	  },
          {
            path: 'users',
            redirectTo: 'admin/users',
            pathMatch: 'full',
          },                                            
        {
		    path: 'admin',
		    component: LayoutsComponent,
		    children: [
		      {
		        path: 'dashboard',
		        loadChildren: './admin/dashboard/dashboard.module#DashboardModule'
		      },
              {
                path: 'users',
                loadChildren: './admin/users/users.module#UsersModule'
              },
		      ]
		    }

        
    ]

 export const routing = RouterModule.forRoot(appRoutes, {
      useHash: false
 });
