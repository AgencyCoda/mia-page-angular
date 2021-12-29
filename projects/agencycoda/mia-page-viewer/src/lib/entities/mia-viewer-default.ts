import { ButtonViewComponent } from "../views/button-view/button-view.component";
import { ColumnOneViewComponent } from "../views/column-one-view/column-one-view.component";
import { ColumnTwoViewComponent } from "../views/column-two-view/column-two-view.component";
import { ImageViewComponent } from "../views/image-view/image-view.component";
import { TextViewComponent } from "../views/text-view/text-view.component";

export class MiaViewerDefault {

    static configDefault() {
        return {
            elements: [
              { id: 'column-one', component: ColumnOneViewComponent },
              { id: 'column-two', component: ColumnTwoViewComponent },
              { id: 'element-text', component: TextViewComponent },
              { id: 'element-image', component: ImageViewComponent },
              { id: 'element-button', component: ButtonViewComponent }
            ]
        }
    };
}