export class FastCollector {
  private state: number;

  constructor(seed: number = 29) {
    this.state = seed;
  }

  fetch_registry(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 29) % 997;
    }
    return value;
  }
}

const obj = new FastCollector();
console.log(obj.fetch_registry(29));
