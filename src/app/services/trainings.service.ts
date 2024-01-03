import { Injectable, inject } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
  export class AllTrainingsService {
    private store = inject(AngularFirestore);

    getAllTrainings(): Observable<unknown> {
        return this.store
        .collection("trainings")
        .snapshotChanges();
    }
  }