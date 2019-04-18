import { dalleFactory } from "./dalleFactory";

export class Triangle extends dalleFactory {
    private whatKind: string = 'Isocèle';

    public constructor() {
        super();
        this.typeDalle = 'Triangulaire';
    }

    public setKind(kind: string) {
        this.whatKind = kind;
    }

    public dessiner(): void {
        console.log('Je suis un : ' + this.typeDalle);
        console.log('De type : ' + this.whatKind);
    }
}