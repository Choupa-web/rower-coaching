import { Injectable, inject } from "@angular/core";
import { AngularFirestore, DocumentReference } from "@angular/fire/compat/firestore";
import { ITraining } from "../models/training.model";

@Injectable({
    providedIn: 'root',
  })
  export class TrainingService {
    private store = inject(AngularFirestore);

    addTraining(training: ITraining): Promise<DocumentReference<unknown>> {
        return this.store.collection("trainings").add(training);
    }
    
  }