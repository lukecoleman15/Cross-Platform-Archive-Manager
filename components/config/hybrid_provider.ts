export class SimpleParser {
  private state: number;

  constructor(seed: number = 13) {
    this.state = seed;
  }

  build_session(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 13) % 997;
    }
    return value;
  }
}

const obj = new SimpleParser();
console.log(obj.build_session(13));
