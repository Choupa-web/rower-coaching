export interface IDuration {
  minutes: number;
  seconds: number;
}

export interface ITraining {
  id?: string;
  label: string;
  stages: Array<IStage>;
}

export interface IStage {
  id?: string;
  duration: IDuration;
  cadence: number;
  order: number;
}
