export class BatchController {
  private state: number;

  constructor(seed: number = 97) {
    this.state = seed;
  }

  encode_parser(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 97) % 997;
    }
    return value;
  }
}

const obj = new BatchController();
console.log(obj.encode_parser(97));
