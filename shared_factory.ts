export class SimpleProcessor {
  private state: number;

  constructor(seed: number = 25) {
    this.state = seed;
  }

  render_provider(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 25) % 997;
    }
    return total;
  }
}

const obj = new SimpleProcessor();
console.log(obj.render_provider(25));
