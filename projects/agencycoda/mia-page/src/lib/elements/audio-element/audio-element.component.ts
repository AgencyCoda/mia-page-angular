import { MiaField, TabsFieldComponent } from '@agencycoda/mia-form';
import { MiaElement } from '@agencycoda/mia-page-core';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSliderChange } from '@angular/material/slider';
import { MiaBaseElementComponent } from '../base-element.component';

@Component({
  selector: 'mia-audio-element',
  templateUrl: './audio-element.component.html',
  styleUrls: ['./audio-element.component.css']
})
export class AudioElementComponent extends MiaBaseElementComponent implements AfterViewInit {

  @ViewChild('audioPlayer') audioPlayer?: ElementRef;
  @ViewChild('actionsComp') actionsComp?: ElementRef;

  isPlaying = false;
  duration: number = 0;
  currentTime: number = 0;
  volume: number = 1.0;

  ngAfterViewInit(): void {
    this.onInitListener();
  }

  onInitListener() {
    this.audioPlayer?.nativeElement.addEventListener('playing', () => {
      this.isPlaying = true;
      this.duration = Math.floor(this.audioPlayer?.nativeElement.duration);
    });
    this.audioPlayer?.nativeElement.addEventListener('pause', () => {
        this.isPlaying = false;
    });
    this.audioPlayer?.nativeElement.addEventListener('timeupdate', () => {
        this.currentTime = Math.floor(this.audioPlayer?.nativeElement.currentTime);
    });
    this.audioPlayer?.nativeElement.addEventListener('loadedmetadata', () => {
        this.duration = Math.floor(this.audioPlayer?.nativeElement.duration);
    });
    this.audioPlayer?.nativeElement.addEventListener('ended', () => {
        //this.trackEnded.next('ended');
    });
    this.audioPlayer?.nativeElement.addEventListener('volume', () => {
        this.volume = Math.floor(this.audioPlayer?.nativeElement.volume);
    });
  }

  tooglePlay() {
    if(this.isPlaying){
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.isPlaying = true;
    setTimeout(() => {
      this.audioPlayer?.nativeElement.play();
    }, 50);
  }

  pause() {
    this.isPlaying = false;
    setTimeout(() => {
      this.audioPlayer?.nativeElement.pause();
    }, 50);
  }

  toggleVolume() {
    if (this.volume === 0) {
      this.setVolume(1.0);
    } else {
        this.setVolume(0);
    }
  }

  setVolume(vol: number) {
    this.volume = vol;
    this.audioPlayer!.nativeElement.volume = this.volume;
  }

  timeChange(event: MatSliderChange) {
    if(this.audioPlayer == undefined){
      this.currentTime = 0;
      return;
    }
    this.audioPlayer!.nativeElement.currentTime = event.value;
  }

  secondsToMinutes(time: number): string {
    const hours = ('0' + Math.floor(time / 3600)).slice(-2);
    const minutes = ('0' + Math.floor((time % 3600) / 60)).slice(-2);
    const seconds = ('0' + time % 60).slice(-2);
    if (hours !== '00') { return `${hours}:${minutes}:${seconds}`; }
    return `${minutes}:${seconds}`;
  }  

  public static createElement() {
    let element = new MiaElement();
    element.type = 'element-audio';
    element.data = { title: '', author: '', url: '' };
    element.editForm = AudioElementComponent.getEditForm();
    return element;
  }

  public static getEditForm() {
    return [
      { key: 'tabs-one', type: MiaField.TYPE_CUSTOM, extra: { component: TabsFieldComponent,
        tabs: [
          { title: 'Content', fields: [
            { key: 'title', type: MiaField.TYPE_STRING, label: 'Title', classes: 'label-custom' },
            { key: 'author', type: MiaField.TYPE_STRING, label: 'Author', classes: 'label-custom' },
            { key: 'url', type: MiaField.TYPE_STRING, label: 'URL audio', classes: 'label-custom' },
          ] }
        ]}
      }
    ];
  }
}
