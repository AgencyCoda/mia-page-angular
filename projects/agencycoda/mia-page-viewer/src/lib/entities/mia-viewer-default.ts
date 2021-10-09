import { ColumnOneViewComponent } from "../views/column-one-view/column-one-view.component";
import { TextViewComponent } from "../views/text-view/text-view.component";

export class MiaViewerDefault {

    static configDefault() {
        return {
            elements: [
              { id: 'column-one', component: ColumnOneViewComponent },
              { id: 'element-text', component: TextViewComponent }
            ]
        }
    };
}