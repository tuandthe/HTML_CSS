export class Customer {
    constructor(
    public id: number,
    public name: string,
    public email: string
  ) {}
  greet() {
    console.log(`Hello ${this.name}, your email is ${this.email}`);
  }
  updateEmail(newEmail: string) {
    this.email = newEmail;
  }
}
export class VIPCustomer extends Customer {
  constructor(
    id: number,
    name: string,
    email: string,
    public level: "bronze" | "silver" | "gold" | "platinum",
    private discount: number = 0
  ) {
    super(id, name, email);
  } 
    getDiscount() {
    return this.discount;
    }
    override greet() {
    console.log(`VIP Customer ${this.name} - Level: ${this.level}`);
    }
    calculatePrice(originalPrice: number) {
    return originalPrice * (1 - this.discount);
    }

}