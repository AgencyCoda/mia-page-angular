import { MiaElement } from '@agencycoda/mia-page-core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'mia-audio-element',
  templateUrl: './audio-element.component.html',
  styleUrls: ['./audio-element.component.css']
})
export class AudioElementComponent extends MiaBaseElementComponent implements OnInit {

  isPlaying = false;
  isMuted = false;
  value = 50;

  @ViewChild('actionsComp') actionsComp?: ElementRef;

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-audio';
    return element;
  }
}
