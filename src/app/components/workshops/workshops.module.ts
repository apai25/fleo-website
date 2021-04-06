import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common';

import { PostDashboardComponent } from '../post/post-dashboard/post-dashboard.component'
import { workshopDetailComponent } from './workshop-detail/workshop-detail.component'
import { workshopsListComponent } from './workshop-list/workshop-list.component'
import { WorkshopsService } from './workshops.service'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from 'app/core/auth-guard.service';

const routes: Routes = [
  { path: '', component: workshopsListComponent},
  { path: 'dashboard', component: PostDashboardComponent, canActivate:[AuthGuardService] },
  { path: ':id', component: workshopDetailComponent },
  
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),CommonModule, 
    MatCardModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule
  ],
  declarations: [
    workshopDetailComponent,
    workshopsListComponent
  ],
  providers: [WorkshopsService]
})
export class WorkshopsModule {}
