import { ColumnOneTwoComponent } from "../elements/column-one-two/column-one-two.component";
import { ColumnThreeComponent } from "../elements/column-three/column-three.component";
import { ColumnTwoOneComponent } from "../elements/column-two-one/column-two-one.component";
import { ColumnTwoComponent } from "../elements/column-two/column-two.component";
import { ColumnOneComponent } from "../elements/column-one/column-one.component";
import { TextElementComponent } from "../elements/text-element/text-element.component";
import { ImageElementComponent } from "../elements/image-element/image-element.component";

export class MiaPageDefault {
    static configDefault() {
      return {
        tabs: [
          { 
            title: 'Columns', 
            items: [
              { id: 'column-one', title: 'Column 1/1', type: 1, image: 'assets/mia_elements/element_column_one.png', component: ColumnOneComponent },
              { id: 'column-two', title: 'Column 1/2 - 1/2', type: 1, image: 'assets/mia_elements/element_column_two.png', component: ColumnTwoComponent },
              { id: 'column-three', title: 'Column 1/3 - 1/3 - 1/3', type: 1, image: 'assets/mia_elements/element_column_three.png', component: ColumnThreeComponent },
              { id: 'column-one-two', title: 'Column 1/3 - 2/3', type: 1, image: 'assets/mia_elements/element_column_one_two.png', component: ColumnOneTwoComponent },
              { id: 'column-two-one', title: 'Column 2/3 - 1/3', type: 1, image: 'assets/mia_elements/element_column_two_one.png', component: ColumnTwoOneComponent },
            ] 
          },
          { 
            title: 'Elements', 
            has_search: true,
            items: [
              { id: 'element-text', title: 'Text', type: 0, icon: 'format_size', component: TextElementComponent },
              { id: 'element-image', title: 'Image', type: 0, icon: 'format_size', component: ImageElementComponent },
            ]
          },
          { 
            title: 'Custom', 
            has_search: true,
            has_group: true,
            items: [
              { id: 'custom-headline', title: 'headline 1', type: 1, image: 'assets/mia_elements/element_column_one.png', group: 'Headlines' },
            ]
          },
        ]
      }
    };
  }