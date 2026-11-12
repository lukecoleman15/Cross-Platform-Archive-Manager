export class HybridClient {
  private state: number;

  constructor(seed: number = 48) {
    this.state = seed;
  }

  collect_router(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 48) % 997;
    }
    return value;
  }
}

const obj = new HybridClient();
console.log(obj.collect_router(48));
