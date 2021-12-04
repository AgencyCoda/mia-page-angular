import { MiaElement } from "./mia-element";

export class MiaPage {
    id: number = 0;
    title: string = '';
    slug: string = '';
    data: any = { elements: new Array<MiaElement>() };
    seo_title: string = '';
    seo_keywords: string = '';
    seo_description: string = '';
    status: number = 0;
    visibility: number = 0;
    published_date?: string;
    is_archive: number = 0;
    last_updated_user: number = 0;
    type: number = 0;
    ord: number = 0;
    parent_id?: number;
    created_at: string = '';
    updated_at: string = '';

    nested_children?: Array<MiaPage>;

    static getStatus(page: MiaPage): string {
        if(page.status == 0) {
            return 'Draft';
        } else if (page.status == 1) {
            return 'Published';
        }
        return 'Undefined Status';
    }

    static getVisibility(page: MiaPage): string {
        if(page.visibility == 0) {
            return 'Not Public';
        } else if (page.visibility == 1) {
            return 'Public';
        }
        return 'Undefined Visibility';
    }
}