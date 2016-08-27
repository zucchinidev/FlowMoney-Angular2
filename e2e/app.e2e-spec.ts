import { FlowMoneyPage } from './app.po';

describe('flow-money App', function() {
  let page: FlowMoneyPage;

  beforeEach(() => {
    page = new FlowMoneyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
