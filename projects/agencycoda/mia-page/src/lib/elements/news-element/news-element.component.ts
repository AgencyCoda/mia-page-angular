import { MiaField, SwitchFieldComponent } from '@agencycoda/mia-form';
import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'mia-news-element',
  templateUrl: './news-element.component.html',
  styleUrls: ['./news-element.component.css']
})
export class NewsElementComponent extends MiaBaseElementComponent implements OnInit {

  @Input() hasImage = true;
  @Input() hasDescription = true;
  @Input() hasAuthor = true;
  @Input() hasDate = true;
  @Input() hasButton = true;
  @Input() isLoading = false;

  @Input() viewArticles = 6;

  news:any = [
    {
      title: 'Building Awareness: Creating a BodyTalk Matrix in Central Visayas and Mindanao, Philippines',
      description: 'Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...',
      url: '',
      image: 'https://images.unsplash.com/photo-1638913972706-91fc2cb57152?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      date: '8/10/2021',
      author: '[name_user]',
    },
    {
      title: 'Practical Action',
      description: 'Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...',
      url: '',
      image: '',
      date: '8/10/2021',
      author: 'Axel Camiletti',
    },
    {
      title: 'An Auspicious Time for BodyTalk Sessions',
      description: 'Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...',
      url: '',
      image: '',
      date: '8/10/2021',
      author: 'Matias Camiletti',
    },
    {
      title: 'Finding MindScape',
      description: 'Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...',
      url: '',
      image: '',
      date: '8/10/2021',
      author: 'Juan Bidondo',
    },
    {
      title: 'Deep Rest, Deep Sleep, Deep Release',
      description: 'Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...',
      url: '',
      image: '',
      date: '8/7/2022',
      author: 'Lean Perez',
    },
    {
      title: 'Practical Action',
      description: 'Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...',
      url: '',
      image: '',
      date: '11/12/2021',
      author: 'Aldana Taboada',
    },
    {
      title: 'Practical Action',
      description: 'Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...Increased awareness, in all its forms, can have a truly remarkable effect in healing and growth. This is true for the...',
      url: '',
      image: '',
      date: '11/12/2021',
      author: 'Aldana Taboada',
    },
  ]

  @ViewChild('actionsComp') actionsComp?: ElementRef;

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-news';
    return element;
  }

  public static getEditForm() {
    return [
      { key: 'tabs-one', type: MiaField.TYPE_TABS, extra: {
        tabs: [
          { title: 'Content', fields: [
            { key: 'switch', type: MiaField.TYPE_CUSTOM, label: 'Title', caption: '', extra: { component: SwitchFieldComponent } },
            { key: 'switch', type: MiaField.TYPE_CUSTOM, label: 'Thumbnail', caption: '', extra: { component: SwitchFieldComponent } },
            { key: 'switch', type: MiaField.TYPE_CUSTOM, label: 'Description', caption: '', extra: { component: SwitchFieldComponent } },
            { key: 'switch', type: MiaField.TYPE_CUSTOM, label: 'Button', caption: '', extra: { component: SwitchFieldComponent } },
            { key: 'switch', type: MiaField.TYPE_CUSTOM, label: 'Date', caption: '', extra: { component: SwitchFieldComponent } },
            { key: 'switch', type: MiaField.TYPE_CUSTOM, label: 'Author', caption: '', extra: { component: SwitchFieldComponent } },
          ] },
          { title: 'Design', fields: [
            { key: 'alignment', type: MiaField.TYPE_SELECT, label: 'ALIGNMENT', extra: {
              options: [
                { id: 0, title: 'Left' },
                { id: 1, title: 'Center' },
                { id: 2, title: 'Right' },
              ],
              can_add: false,
            }},
            { key: 'title', type: MiaField.TYPE_STRING, label: 'IMAGE BORDER RADIOUS' },
            { key: 'class', type: 'string', label: 'CSS CLASS' }
          ] },
        ]}
      }
    ];
  }

  onClickLoadMore(){
    this.viewArticles = 12;
  }
}
