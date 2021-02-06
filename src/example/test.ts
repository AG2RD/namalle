import 'reflect-metadata';

import { inject, injectable } from 'inversify';

import TYPES, { IMyLOL, IMyTest } from './types';

@injectable()
export class Loler implements IMyLOL {
  loling(): void {
    console.log('im loler and im loling');
  }
}
@injectable()
export class MyTest implements IMyTest {
  constructor(@inject(TYPES.IMyLOL) private loler: IMyLOL) {}

  mainFunction(): void {
    this.loler.loling();
    this.greetings();
  }
  greetings(): void {
    console.log('Hello world');
  }
}
