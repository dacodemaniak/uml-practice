import { Controller } from "src/utils/controller-interface";

export class CompanyController implements Controller {

    public constructor() {
        this.loadView();
    }

    public loadView(): void {
        const app: JQuery = $('[myApp]');

        $.get(
            './src/modules/company/view/company-form.html',
            (data: any) => {
                const form: any = $.parseHTML(data), nodeNames = [];
                app.append(form);
            }
        );
    }
}