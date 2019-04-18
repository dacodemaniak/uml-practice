export abstract class Vehicule {
    protected name: string;
    protected salePrice: number;
    protected manufacturingPrice: number;

    protected constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setSalePrice(price: number): Vehicule {
        this.salePrice = price;
        return this;
    }

    public getSalePrice(): number {
        return this.salePrice;
    }

    public setManufacturingPrice(price: number): Vehicule {
        this.manufacturingPrice = price;
        return this;
    }

    public getMarge(): number {
        if (this.salePrice !== null && this.manufacturingPrice !== null) {
            return this.salePrice - this.manufacturingPrice;
        }
        return 0;
    }
}