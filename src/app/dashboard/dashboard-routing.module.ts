import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) },
    { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
    { path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },
    {
      path: '',
      redirectTo: 'clients',
      pathMatch: 'full'
    },
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
