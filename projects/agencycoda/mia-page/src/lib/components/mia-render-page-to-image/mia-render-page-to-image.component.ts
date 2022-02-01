import { GoogleStorageService } from '@agencycoda/mia-core';
import { MiaPage } from '@agencycoda/mia-page-core';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import html2canvas from 'html2canvas';

@Component({
  selector: 'lib-mia-render-page-to-image',
  templateUrl: './mia-render-page-to-image.component.html',
  styleUrls: ['./mia-render-page-to-image.component.css']
})
export class MiaRenderPageToImageComponent implements OnInit, AfterViewInit {

  @ViewChild('contentRenderComp') contentRenderComp!: ElementRef;

  isRendering = false;

  constructor(
    protected dialogRef: MatDialogRef<MiaRenderPageToImageComponent>,
    @Inject(MAT_DIALOG_DATA) public page: MiaPage,
    protected googleStorage: GoogleStorageService,
    protected elementDialogRef: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) public document: Document,
  ) { }

  ngOnInit(): void {
    // Clean class dialog
    let html = this.document.getElementsByTagName('html')[0];
    html.removeAttribute('class');
    // Add class for custom
    this.elementDialogRef.nativeElement.parentElement?.parentElement?.parentElement?.parentElement?.classList.add('modal-overlay-invisible');
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.initRender(), 3000);
  }

  initRender() {
    if(this.isRendering){
      return;
    }

    this.isRendering = true;

    html2canvas(this.contentRenderComp.nativeElement)
    .then(canvas => this.processCanvas(canvas));
  }

  processCanvas(canvas: HTMLCanvasElement) {
    let file = this.convertCanvasToFile(canvas);
    this.googleStorage.uploadDirect(file)
    .subscribe(res => this.dialogRef.close(res.response!.url));
  }

  convertCanvasToFile(canvas: HTMLCanvasElement) {
    var blobBin = atob(canvas.toDataURL().split(',')[1]);
    var array = [];
    for(var i = 0; i < blobBin.length; i++) {
        array.push(blobBin.charCodeAt(i));
    }
    var blob = new Blob([new Uint8Array(array)], {type: 'image/png'});
    return new File([blob], encodeURIComponent(this.page.title.replace(' ', '').toLocaleLowerCase()) + ".png");
  }
}
