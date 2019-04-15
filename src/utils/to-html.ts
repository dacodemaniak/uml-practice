export class ToHtml {
    private static readonly placeholder: string = 'myApp';

    public toPage(object: any) {
        const htmlPlaceHolder: any = document.querySelector('[' + ToHtml.placeholder + ']');
        let content: string = htmlPlaceHolder.innerHTML;
        content += object.toString();
        htmlPlaceHolder.innerHTML = content;   
    }

}