import { browser, element, by } from 'protractor';

export class ServicesTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cmp-root h1')).getText();
  }
}
