import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore'

import { Workshops } from './workshops'

@Injectable()
export class WorkshopsService {
  WorkshopsCollection: AngularFirestoreCollection<Workshops> 
  WorkshopsDoc: AngularFirestoreDocument<Workshops>; 

  constructor(private afs: AngularFirestore) {
    this.WorkshopsCollection = this.afs.collection('workshops', ref =>
      ref.orderBy('published', 'desc')
    )
  }
  
  getWorkshops() {
    return this.WorkshopsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Workshops
        const id = a.payload.doc.id
        return { id, ...data }
      })
    }))
  }
  

  getWorkshopsData(id: string) {
    this.WorkshopsDoc = this.afs.doc<Workshops>(`workshops/${id}`)
    return this.WorkshopsDoc.valueChanges()
  }

  getWorkshop(id: string) {
    return this.afs.doc<Workshops>(`workshops/${id}`)
  }

  create(data: Workshops) {
    this.WorkshopsCollection.add(data)
  }

 
  delete(id: string) {
    return this.getWorkshop(id).delete() 
  }

  update(id: string, formData) {
    return this.getWorkshop(id).update(formData)
  }

}
