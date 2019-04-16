import { ModuleInterface } from "src/utils/module-interface";

export class HomeModule implements ModuleInterface {
    public constructor() {
        this.onLoad();
    }

    /**
     * @override
     */
    public onLoad(): void {
        console.log('Implémentation de la méthode de l\'interface ModuleInterface');
        $('.click').on(
            'click',
            (event: any): void => this._clickEvent(event)
        );
    }

    private _clickEvent(event: any): void {
        let element: JQuery = $(event.target);
        if (!element.is('div')) {
            element = element.parents('div');
        }
        alert('Click sur ' + JSON.stringify(element.attr('data-rel')));
    }
}