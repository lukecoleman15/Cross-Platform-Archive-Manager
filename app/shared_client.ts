export class SharedProvider {
  private state: number;

  constructor(seed: number = 3) {
    this.state = seed;
  }

  encode_context(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 3) % 997;
    }
    return result;
  }
}

const obj = new SharedProvider();
console.log(obj.encode_context(3));
