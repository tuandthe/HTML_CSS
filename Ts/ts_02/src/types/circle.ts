class Circle {
    static PI = 3.14159265359;

    constructor(public radius: number) {}

    getArea(): number {
    return Circle.PI * this.radius * this.radius;
  }
    getCircumference(): number {
    return 2 * Circle.PI * this.radius;
  }
  static areaFromRadius(radius: number): number {
    return this.PI * radius * radius;
  }

  static circumferenceFromRadius(radius: number): number {
    return 2 * this.PI * radius;
  }
}
export { Circle };