import { FormControl } from "@angular/forms";
import { MiaEditorElement } from "./mia-editor-element";

export class MiaEditorTab {
    title: string = '';
    items: Array<MiaEditorElement> = [];
    has_search?: boolean = false;
    has_group?: boolean = false;
}