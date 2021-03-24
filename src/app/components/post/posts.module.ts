import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common';

import { PostDashboardComponent } from './post-dashboard/post-dashboard.component'
import { PostDetailComponent } from './post-detail/post-detail.component'
import { PostListComponent } from './post-list/post-list.component'
import { PostService } from './post.service'
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
  { path: '', component: PostListComponent},
  { path: 'dashboard', component: PostDashboardComponent, canActivate:[AuthGuardService] },
  { path: ':id', component: PostDetailComponent },
  
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
    PostDashboardComponent,
    PostDetailComponent,
    PostListComponent
  ],
  providers: [PostService]
})
export class PostsModule {}
