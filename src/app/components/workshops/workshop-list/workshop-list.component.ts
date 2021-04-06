import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { WorkshopsService } from '../workshops.service'
import { Workshops } from '../workshops'
import { AuthService } from '../../../core/auth.service'

@Component({
  selector: 'app-workshops-list',
  templateUrl: './workshop-list.component.html',
  styleUrls: ['./workshop-list.component.css']
})
export class workshopsListComponent implements OnInit {
  workshopss: Observable<Workshops[]>
  constructor(private workshopsService: WorkshopsService, public auth: AuthService) {}

  ngOnInit() {
    console.log("loaded")
    this.workshopss = this.workshopsService.getWorkshops()
  }

  delete(id: string) {
    this.workshopsService.delete(id)
  }

}
