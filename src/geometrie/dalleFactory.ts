export abstract class dalleFactory {

    /**
     * @var string Libellé du type de dalle à produire
     */
    protected typeDalle: string;

    /**
     * Méthode abstraite : impose les concepteurs de dalles
     *  à définir dans leurs classes métiers la méthode dessiner()
     */
    public abstract dessiner(): void;

}