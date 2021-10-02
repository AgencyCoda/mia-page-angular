import { MiaPage } from "./mia-page";

export class MiaElement {
    type: string = '';
    classes?: string = '';
    data: any = { elements: new Array<MiaElement>() };
    isSelected = false;

    static createWithChildren(id: string): MiaElement {
        let element = new MiaElement();
        element.type = id;
        element.data = { elements: new Array<MiaElement>() };
        return element;
    }
}