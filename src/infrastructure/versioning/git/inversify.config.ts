import { Container } from 'inversify';

import { Loler, MyTest } from './test';
import TYPES, { IMyLOL, IMyTest } from './types';

var container = new Container();
container.bind<IMyTest>(TYPES.IMyTest).to(MyTest);
container.bind<IMyLOL>(TYPES.IMyLOL).to(Loler);

export default container;
