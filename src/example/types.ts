export interface IMyLOL {
  loling(): void;
}

export interface IMyTest {
  mainFunction(): void;
  greetings(): void;
}

let TYPES = {
  IMyLOL: Symbol('IMyLOL'),
  IMyTest: Symbol('IMyTest'),
};

export default TYPES;
