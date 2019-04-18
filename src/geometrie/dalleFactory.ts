import { Paintable } from "./paintable-interface";
import { Comparable } from "./comparable-interface";

export abstract class dalleFactory implements Paintable, Comparable<dalleFactory> {

    /**
     * @var string Libellé du type de dalle à produire
     */
    protected typeDalle: string;

    /**
     * Méthode abstraite : impose les concepteurs de dalles
     *  à définir dans leurs classes métiers la méthode dessiner()
     */
    public abstract dessiner(): void;

    public paint(color: string): void {
        console.log('Peinture de ' + this.typeDalle + ' en : ' + color);
    }

    public abstract compareTo(object: dalleFactory): number;

}