import { injectable } from 'inversify';

import { GitInternal } from '../../../domain';

@injectable()
export class GitService implements GitInternal {
  constructor() {
    console.log('git service instantiated');
  }
  print(message: string): void {
    console.log(message);
  }
}
