export class Product {
    public name: string;
    public price: string;
    public imagePath: string;

constructor(name: string, price: string, image: string) {
    this.name = name;
    this.price = price;
    this.imagePath = image;
  }
}