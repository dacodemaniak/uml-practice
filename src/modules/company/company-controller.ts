import { ControllerInterface } from "src/utils/controller-interface";
import { Controller } from './../../utils/controller';

export class CompanyController extends Controller implements ControllerInterface {

    public constructor() {
        super();
        this.loadView();
        this.setListeners();
    }

    public loadView(): void {
        

        $.get(
            './src/modules/company/view/company-form.html',
            (data: any) => {
                const form: any = $.parseHTML(data), nodeNames = [];
                Controller.app.append(form);
            }
        );
    }

    public setListeners(): void {
        Controller.app.on(
            'keyup',
            '#company',
            (event: any): void => this._checkZipCode(event) 
        );
    }

    private _checkZipCode(event: any): void {
        
        const object: JQuery = $(event.target);
        console.log('Détection de touche ' + object.attr('id'));

        if (object.attr('id') == 'company-zipcode') {
            // Check if value has 5 digits
            if (object.val().toString().length === 5) {
                // Call the API...
            }
        }
    }
}