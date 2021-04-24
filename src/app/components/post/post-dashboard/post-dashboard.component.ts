import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { AngularFireStorage } from '@angular/fire/storage'

import { AuthService } from '../../../core/auth.service'
import { PostService } from '../post.service'
import { Router } from '@angular/router'
import { ReadVarExpr } from '@angular/compiler'
import { WorkshopsService } from 'app/components/workshops/workshops.service'

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  content: string
  image: string
  title: string
  author: string
  workauthor: string;
  like: 0;

  saving = 'Create Post'

  uploadPercent: Observable<number>
  downloadURL: Observable<string>

  constructor(
    private auth: AuthService,
    private postService: PostService,
    private storage: AngularFireStorage,
    private router: Router,
    private workshopService: WorkshopsService
  ) {}

  ngOnInit() {}

  createPost() {
    console.log(this.author)
    if (this.author == null) {
      var postData = {
        author: this.auth.authState.displayName || this.auth.authState.email,
        authorId: this.auth.currentUserId,
        content: this.content,
        image: this.image || null,
        published: new Date(),
        title: this.title,
        upLike: 0,
        downLike: 0
      }
    } else {
      postData = {
        author: this.author,
        authorId: this.auth.currentUserId,
        content: this.content,
        image: this.image || null,
        published: new Date(),
        title: this.title,
        upLike: 0,
        downLike: 0
      }
    }

    this.postService.create(postData)
    this.title = ''
    this.content = ''
    this.image = ''

    this.saving = 'Post Created!'
    setTimeout(() => (this.saving = 'Create Post'), 3000)
    this.router.navigateByUrl('blog')
    

  }

  async uploadImage(event) {
    const file = event.target.files[0]
    const path = `posts/${file.name}`
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files')
    } else {
      const task = this.storage.upload(path, file);
      const ref = this.storage.ref(path);
      this.uploadPercent = task.percentageChanges();
      // upload image, save url
      await task;
      console.log('Image uploaded!');
      this.image = await ref.getDownloadURL().toPromise();
    }
  }

  createWPost() {
    if (this.workauthor == null) {
      var postData = {
        author: this.auth.authState.displayName || this.auth.authState.email,
        authorId: this.auth.currentUserId,
        content: this.content,
        image: this.image || null,
        published: new Date(),
        title: this.title,
      }
    } else {
      postData = {
        author: this.workauthor,
        authorId: this.auth.currentUserId,
        content: this.content,
        image: this.image || null,
        published: new Date(),
        title: this.title,
      }
    }

    this.workshopService.create(postData)
    this.title = ''
    this.content = ''
    this.image = ''

    this.saving = 'Post Created!'
    setTimeout(() => (this.saving = 'Create Post'), 3000)
    this.router.navigateByUrl('workshops')
  }

  async uploadWImage(event) {
    const file = event.target.files[0]
    const path = `workshops/${file.name}`
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files')
    } else {
      const task = this.storage.upload(path, file);
      const ref = this.storage.ref(path);
      this.uploadPercent = task.percentageChanges();
      // upload image, save url
      await task;
      console.log('Image uploaded!');
      this.image = await ref.getDownloadURL().toPromise();
    }
  }
}
