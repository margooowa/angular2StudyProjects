import { ServicesTestPage } from './app.po';

describe('services-test App', function() {
  let page: ServicesTestPage;

  beforeEach(() => {
    page = new ServicesTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cmp works!');
  });
});
