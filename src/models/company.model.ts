/**
 * @name CompanyModel
 * @author Aélion
 * @version 1.0.0
 */

export class CompanyModel {
    private id: number;
    private name: string;
    private address: string;
    private zipcode: string;
    private city: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    /**
     * @param void
     * @return string L'adresse de l'entreprise
     */
    public getAddress(): string {
        return this.address;
    }

    /**
     * 
     * @param address Adresse à affecter à l'entreprise
     * @return void
     */
    public setAddress(address: string) {
        this.address = address;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setZipCode(zipcode: string) {
        this.zipcode = zipcode;
    }

    public getZipCode(): string {
        return this.zipcode;
    }

    public setCity(city: string) {
        this.city = city;
    }

    public getCity(): string {
        return this.city;
    }

    public toString(): string {
        let output: string = '<p><strong>' + this.name + '</strong><br>';
        output += this.address + '<br>';
        output += this.zipcode + ' <em>' + this.city + '</em></p>';

        return output;
    }
}