/**
 *  Vic Shóstak <vikkyshostak@gmail.com>
 *  Copyright (c) 2019 True web artisans https://truewebartisans.com
 *  http://opensource.org/licenses/MIT The MIT License (MIT)
 *
 *  goodshare.js
 *
 *  Google Plus (https://plus.google.com) provider.
 */

import { ProviderMixin } from "../utils/ProviderMixin";

export class GooglePlus extends ProviderMixin {
  constructor(url = document.location.href) {
    super();
    this.url = encodeURIComponent(url);
    this.createEvents = this.createEvents.bind(this);
  }

  getPreparedData(item) {
    const url = item.dataset.url
      ? encodeURIComponent(item.dataset.url)
      : this.url;
    const share_url = `https://plus.google.com/share?url=${url}`;

    return {
      callback: this.callback,
      share_url: share_url,
      windowTitle: "Share this",
      windowWidth: 640,
      windowHeight: 480
    };
  }

  // Share event
  shareWindow() {
    const share_elements = document.querySelectorAll(
      '[data-social="googleplus"]'
    );

    return this.createEvents(share_elements);
  }
}
