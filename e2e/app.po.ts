export class FlowMoneyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getMovementHeaderText() {
    return element(by.css('app-movement h1')).getText();
  }
}
