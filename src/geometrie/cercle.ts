import { dalleFactory } from "./dalleFactory";

export class Cercle extends dalleFactory {

    private diametre: number = 200;

    public constructor() {
        super();
        this.typeDalle = 'Circulaire';
    }

    public dessiner(): void {
        console.log('Je suis un ' + this.typeDalle);
        console.log('Et j\'ai un diamètre de : ' + this.diametre);
    }

    public setDiametre(diametre: number): void {
        this.diametre = diametre;
    }

    public compareTo(object: Cercle): number {
        return this.diametre === object.diametre ? 0 : -1;
    }
}