import { dalleFactory } from "./dalleFactory";

export class Triangle extends dalleFactory {
    private whatKind: string = 'Isocèle';

    public constructor() {
        super();
        this.typeDalle = 'Triangulaire';
    }

    public setKind(kind: string): void {
        this.whatKind = kind;
    }

    public dessiner(): void {
        console.log('Je suis un : ' + this.typeDalle);
        console.log('De type : ' + this.whatKind);
    }

    public compareTo(object: Triangle): number {
        if (this.whatKind === object.whatKind) {
            return 0;
        }
        return -1;
    }
}