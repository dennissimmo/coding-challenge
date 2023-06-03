import { Component, Input } from '@angular/core';

export enum LOADER_TYPE {
  CIRCULAR,
  LINEAR
}

const INTERVAL_TIMEOUT = 500;

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  readonly defaultText = 'Loading';
  loaderType: LOADER_TYPE;
  loaderTypeEnum = LOADER_TYPE;
  loadingText: string;
  dotsCount: number;
  intervalId: number;

  @Input() isLoading = true;

  @Input()
  set type(loaderType: LOADER_TYPE) {
    this.handleLoaderType(loaderType);
  }

  constructor() {
    this.loadingText = this.defaultText;
  }

  handleLoaderType(loaderType: LOADER_TYPE): void {
    if (loaderType === LOADER_TYPE.CIRCULAR && this.intervalId) {
      clearInterval(this.intervalId);
    } else if (loaderType === LOADER_TYPE.LINEAR) {
      this.updatePeriods();
    }
    this.loaderType = loaderType;
  }

  updatePeriods(): void {
    setInterval(() => {
        if (this.dotsCount < 3) {
          this.dotsCount++;
          this.loadingText += '.';
        } else {
          this.dotsCount = 0;
          this.loadingText = this.defaultText;
        }

      },
      INTERVAL_TIMEOUT);
  }

}
