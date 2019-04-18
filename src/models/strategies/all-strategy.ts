import { OutputInterface } from "src/utils/output-interface";
import { CompanyModel } from "../company.model";

export class AllStrategy implements OutputInterface<CompanyModel> {
    
    public output(companyModel: CompanyModel): JQuery {
        const object: JQuery = ($('<div>')).addClass('col-12');
        
        const title: JQuery = $('<h2>');
        title.html(companyModel.getName());
        // Juste j'ajoute le titre à la div
        title.appendTo(object);

        // C'est parti pour l'adresse
        const address: JQuery = $('<address>');
        
        const postalAddress: JQuery = $('<p>');
        postalAddress.html(companyModel.getAddress());

        const zipcode: JQuery = $('<span>');
        zipcode.html(companyModel.getZipCode() + ' ');

        const city: JQuery = $('<span>');
        city.html(companyModel.getCity());
        
        const wrapper: JQuery = $('<p>');
        zipcode.appendTo(wrapper);
        city.appendTo(wrapper);

        postalAddress.appendTo(address);
        wrapper.appendTo(address);

        address.appendTo(object);

        return object;
    }
}