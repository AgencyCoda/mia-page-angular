export class MiaEditorElement {
    static TYPE_SHOW_ICON = 0;
    static TYPE_SHOW_IMAGE = 1;

    title: string = '';
    type_show: number = 0;
    group?: string = '';
    icon?: string = '';
    image?: string = '';
    component?: any;
    extra?: any;
}