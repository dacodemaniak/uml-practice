import { Vehicule } from "./vehicule";
import { Voiture } from "./voiture";
import { VehiculeFactory } from "./vehicule-factory";

export class Catalog {
    private catalog: Array<Vehicule> = new Array<Vehicule>();

    public constructor() {
        this._mocker();
    }

    public add(vehicule: Vehicule): Catalog {
        this.catalog.push(vehicule);
        return this;
    }

    public catalogue(): string {
        let listing: string;

        this.catalog.forEach((vehicule) => {
            if (vehicule instanceof Voiture) {
                listing += 'Voiture ';
            } else {
                listing += 'Moto ';
            }
            listing += vehicule.getName() + ' Prix catalogue : ' + vehicule.getSalePrice() + '\n'; 
        });
        return listing;
    }

    public getMargeTotale(): number {
        let marge: number = 0;
        this.catalog.forEach((vehicule) => {
            marge = marge + vehicule.getMarge();
        });
        return marge;
    }

    private _mocker(): void {
        this
            .add(
                (VehiculeFactory.createVehicule('Voiture', '208'))
                .setSalePrice(15000)
                .setManufacturingPrice(5000)
            )
            .add(
            (VehiculeFactory.createVehicule('Voiture', '308'))
                .setSalePrice(23000)
                .setManufacturingPrice(5500)   
            )
            .add(
            (VehiculeFactory.createVehicule('Moto', 'Varadero'))
            .setSalePrice(5000)
            .setManufacturingPrice(1500)
            );
    }
}