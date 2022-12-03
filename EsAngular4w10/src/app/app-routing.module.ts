import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Route[] = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "post/attivi",
    component: PostAttiviComponent
  },
  {
    path: "post/inattivi",
    component: PostInattiviComponent
  },
  {
    path: "post/attivi/:id",
    component: PostDetailsComponent
  },
  {
    path: "post/inattivi/:id",
    component: PostDetailsComponent
  },
  {
    path: "post/users",
    component: UserComponent,
    children: [
      {
        path:":id",
        component: UserDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
