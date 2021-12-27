import { ButtonViewComponent } from "../views/button-view/button-view.component";
import { ColumnOneTwoViewComponent } from "../views/column-one-two-view/column-one-two-view.component";
import { ColumnOneViewComponent } from "../views/column-one-view/column-one-view.component";
import { ColumnThreeViewComponent } from "../views/column-three-view/column-three-view.component";
import { ColumnTwoOneViewComponent } from "../views/column-two-one-view/column-two-one-view.component";
import { ColumnTwoViewComponent } from "../views/column-two-view/column-two-view.component";
import { ImageViewComponent } from "../views/image-view/image-view.component";
import { TextViewComponent } from "../views/text-view/text-view.component";

export class MiaViewerDefault {

    static configDefault() {
        return {
            elements: [
              { id: 'column-one', component: ColumnOneViewComponent },
              { id: 'column-one-two', component: ColumnOneTwoViewComponent },
              { id: 'column-two', component: ColumnTwoViewComponent },
              { id: 'column-two-one', component: ColumnTwoOneViewComponent },
              { id: 'column-three', component: ColumnThreeViewComponent },
              { id: 'element-text', component: TextViewComponent },
              { id: 'element-image', component: ImageViewComponent },
              { id: 'element-button', component: ButtonViewComponent }
            ]
        }
    };
}