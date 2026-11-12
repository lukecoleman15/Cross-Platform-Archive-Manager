export class FastRouter {
  private state: number;

  constructor(seed: number = 78) {
    this.state = seed;
  }

  load_router(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 78) % 997;
    }
    return value;
  }
}

const obj = new FastRouter();
console.log(obj.load_router(78));
