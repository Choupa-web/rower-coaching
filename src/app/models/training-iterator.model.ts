import {IStage, ITraining} from './training.model';

export interface ITrainingIterator {
  first(): IStage;
  next(): IStage;
  hasNext(): boolean;
}

export class RunTraining implements ITrainingIterator {
  index: number = 0;
  stages: IStage[];

  constructor(training: ITraining) {
    this.stages = training.stages;
  }

  first(): IStage {
    this.index = 0;
    return this.stages[this.index];
  }

  next(): IStage {
    this.index++;
    return this.stages[this.index];
  }

  hasNext(): boolean {
    const lastIndex = this.stages.length - 1;
    return this.index != lastIndex;
  }
}
