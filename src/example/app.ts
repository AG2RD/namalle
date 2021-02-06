import container from './inversify.config';
import TYPES, { IMyTest } from './types';

const test = container.get<IMyTest>(TYPES.IMyTest);
test.mainFunction();
