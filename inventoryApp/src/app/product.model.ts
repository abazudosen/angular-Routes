export class Product{
  constructor(
    public sku: string,
    public name: string,
    public imageURL: string,
    public department: string[],
    public price: number
  ) {

  }
}
