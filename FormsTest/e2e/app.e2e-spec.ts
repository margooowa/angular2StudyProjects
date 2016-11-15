import { FormsTestPage } from './app.po';

describe('forms-test App', function() {
  let page: FormsTestPage;

  beforeEach(() => {
    page = new FormsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('frm works!');
  });
});
