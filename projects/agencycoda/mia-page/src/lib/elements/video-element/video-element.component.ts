import { MiaField, SwitchFieldComponent, TabsFieldComponent } from '@agencycoda/mia-form';
import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'mia-video-element',
  templateUrl: './video-element.component.html',
  styleUrls: ['./video-element.component.css']
})
export class VideoElementComponent extends MiaBaseElementComponent implements OnInit {

  cssVideoElement: any = {};

  onInitCss() { 
    super.onInitCss();

    this.cssVideoElement = {};

    if(this.element.data.width != undefined && this.element.data.width != ''){
      this.cssVideoElement['width'] = this.element.data.width + 'px';
    }else {
      this.cssVideoElement['width'] = '100%';
    }


    if(this.element.data.height != undefined && this.element.data.height != ''){
      this.cssVideoElement['height'] = this.element.data.height + 'px';
    }else {
      this.cssVideoElement['height'] = '400px';
    }
  }

  urlVideo() {
    if(this.element.data.video == undefined){
      return;
    }

    return this.element.data.video.url;
  }

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-video';
    element.data = { controls: 1, autoplay: 0, loop: 0 };
    element.editForm = VideoElementComponent.getEditForm();
    return element;
  }

  public static getEditForm() {
    return [
      { key: 'tabs-one', type: MiaField.TYPE_CUSTOM, extra: { component: TabsFieldComponent,
        tabs: [
          { title: 'Design', fields: [
            { key: 'width', type: MiaField.TYPE_STRING, label: 'Width', },
            { key: 'height', type: MiaField.TYPE_STRING, label: 'Height' },
          ] },
          { title: 'Content', fields: [
            { key: 'video', type: MiaField.TYPE_FILE_ONE, label: 'Video', classes: 'label-custom', extra: { button_text: 'Upload video file' } },
            { key: 'caption', type: MiaField.TYPE_TEXT, label: 'Caption' },
            { key: 'controls', type: MiaField.TYPE_CUSTOM, label: 'Show Video Controls', extra: { component: SwitchFieldComponent } },
            { key: 'loop', type: MiaField.TYPE_CUSTOM, label: 'Loop Video', extra: { component: SwitchFieldComponent } },
            { key: 'autoplay', type: MiaField.TYPE_CUSTOM, label: 'AutoPlay Video', extra: { component: SwitchFieldComponent } },
          ] }
        ]}
      }
    ];
  }
}