import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { WorkshopsService } from '../workshops.service'
import { Workshops } from '../workshops'
import { AuthService } from '../../../core/auth.service'

@Component({
  selector: 'app-workshop-detail',
  templateUrl: './workshop-detail.component.html',
  styleUrls: ['./workshop-detail.component.css']
})
export class workshopDetailComponent implements OnInit {
  Workshop: Workshops
  editing: boolean = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workshopService: WorkshopsService,
    public auth: AuthService
  ) {}

  ngOnInit() {
    console.log("detal loaded")
    this.getworkshop()
  }

  getworkshop(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.workshopService.getWorkshopsData(id).subscribe(workshop => (this.Workshop = workshop))
  }

  updateWorkshop() {
    const formData = {
      title: this.Workshop.title,
      content: this.Workshop.content
    }
    const id = this.route.snapshot.paramMap.get('id')
    this.workshopService.update(id, formData)
    this.editing = false
  }

  delete() {
    const id = this.route.snapshot.paramMap.get('id')
    this.workshopService.delete(id)
    this.router.navigate(['/workshops'])
  }
}
