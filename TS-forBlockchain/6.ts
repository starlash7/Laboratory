interface User2 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Player3 implements User2, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}
