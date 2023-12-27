import { ITraining } from "./training.model";

export const looseWeightTraining : ITraining = {
    label: "Perte de poids",
    stages: [
      {
        duration: {minutes: 1, seconds: 30},
        cadence: 16,
        order: 1
      },
      {
        duration: {minutes: 0, seconds: 30},
        cadence: 38,
        order: 2
      }
    ]
}

export const abdosTraining: ITraining = {
    label: "Abdos",
    stages: [
      {
        duration: {minutes: 1, seconds: 30},
        cadence: 16,
        order: 1
      },
      {
        duration: {minutes: 0, seconds: 30},
        cadence: 38,
        order: 2
      }
    ]
}