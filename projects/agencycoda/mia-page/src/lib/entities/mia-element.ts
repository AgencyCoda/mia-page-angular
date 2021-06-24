import { MiaPage } from "./mia-page";

export class MiaElement {
    static TYPE_TITLE = 'title';
    static TYPE_ROW = 'row';

    type: string = '';
    classes?: string = '';
    data: any = {};

    static factory(type: string) {
        let element = new MiaElement();
        element.type = type;

        if(type == MiaElement.TYPE_ROW){
            element.data = { pages: new Array<MiaPage>() }
            element.data.pages.push(new MiaPage());
        }

        return element;
    }

    static getCreators() {
        return [
            { type: MiaElement.TYPE_TITLE, 'title': 'Field of title', 'icon': '' },
            { type: MiaElement.TYPE_ROW, 'title': 'Row', 'icon': '' }
        ];
    }
}