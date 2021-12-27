import { MiaElement } from "@agencycoda/mia-page-core";
import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'mia-base-element',
    template: ''
})
export class MiaBaseViewComponent implements OnInit {

  @Input() element!: MiaElement;

  cssStyleMain: any = {};

  constructor(
  ) {
        
  }

  ngOnInit(): void {
    this.onInitCss();
  }

  /** CSS Methods */
  addCssProperty(key: string, value: any) {
    this.cssStyleMain[key] = value;
  }

  onInitCss() {
    // Reset
    this.cssStyleMain = {};

    if(this.element.data.background_image != undefined && this.element.data.background_image != ''){
      this.addCssProperty('background-image', 'url("' + this.element.data.background_image.url + '")');
      this.addCssProperty('background-size', 'cover');
      this.addCssProperty('background-repeat', 'none');
    }

    if(this.element.data.margin != undefined){
      this.addCssProperty('margin-top', this.element.data.margin.top + 'px');
      this.addCssProperty('margin-bottom', this.element.data.margin.bottom + 'px');
      this.addCssProperty('margin-right', this.element.data.margin.right + 'px');
      this.addCssProperty('margin-left', this.element.data.margin.left + 'px');
    }

    if(this.element.data.padding != undefined){
      this.addCssProperty('padding-top', this.element.data.padding.top + 'px');
      this.addCssProperty('padding-bottom', this.element.data.padding.bottom + 'px');
      this.addCssProperty('padding-right', this.element.data.padding.right + 'px');
      this.addCssProperty('padding-left', this.element.data.padding.left + 'px');
    }

    if(this.element.data.min_height != undefined && this.element.data.min_height != ''){
      this.addCssProperty('min-height', this.element.data.min_height + 'px');
    }

    if(this.element.data.background_color != undefined && this.element.data.background_color != ''){
      this.addCssProperty('background-color', this.element.data.background_color);
    }

    if(this.element.data.color != undefined && this.element.data.color != ''){
      this.addCssProperty('color', this.element.data.color);
    }
  }
  /** End CSS Methods */
}
