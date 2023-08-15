import {IStage, ITraining} from './training.model';

export interface ITrainingIterator <T> {
  first(): void;  
  next(): void;  
  end: boolean;  
  item: T;  
  index: number;
}

export class RunTraining<T> implements ITrainingIterator<T> {
  index = 0;
 
  constructor(public stages: T[]) { }  
  
  first(): void {    
    this.index = 0;  
  }  
  next(): void {
    this.index++;  
  }  
  get end(): boolean {    
    return this.index >= this.stages.length;  
  }  
  get item(): T {    
    return this.stages[this.index];
  }

}
