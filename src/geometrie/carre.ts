import { dalleFactory } from "./dalleFactory";

export class Carre extends dalleFactory {

    private sideLength: number = 200;

    public constructor() {
        super();
        this.typeDalle = 'Carré';
    }

    public dessiner(): void {
        console.log('Je suis un : ' + this.typeDalle);
        console.log('Et j\'ai un côté de ' + this.sideLength);
    }

    public setSideLength(side: number): void {
        this.sideLength = side;
    }

    public compareTo(object: Carre): number {
        return this.sideLength === object.sideLength ? 0 : -1;
    }
}