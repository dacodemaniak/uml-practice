import { Vehicule } from "./vehicule";
import { Voiture } from "./voiture";
import { Moto } from "./moto";

export class VehiculeFactory {

    public static createVehicule(type: string, name: string): Vehicule {
        let vehicule: Vehicule;

        if ( type.toLowerCase() === 'voiture') {
            vehicule = new Voiture(name);
        } else {
            vehicule = new Moto(name);
        }

        return vehicule;
    }
}