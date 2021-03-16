export interface GitInternal {
  create?(): void;
  pull?(): void;
  push?(): void;
  commit?(): void;
  authenticate?(): void;
  switch?(): void;

  print(message: string): void;
}
