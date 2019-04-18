import * as $ from 'jquery';

export class ToHtml {
    private static readonly placeholder: string = 'myApp';

    public toPage(object: any, howTo: number = 1) {
        const htmlPlaceHolder: JQuery = $('[' + ToHtml.placeholder + ']');
        let content: string = htmlPlaceHolder.html();
        content += object.toString(howTo);
        htmlPlaceHolder.html(content);   
    }

    public appendToPage(object: JQuery): void {
        const placeholder: JQuery = $('[' + ToHtml.placeholder + ']');
        object.appendTo(placeholder);
    }

}